

var HashMap = function () {
  var DEFAULT_SIZE = 16;
  function calculateCapacity(x) {
    if (x >= 1 << 30) {
      return 1 << 30;
    }

    if (DEFAULT_SIZE == 0) {
      return 16;
    }

    x = x - 1;
    DEFAULT_SIZE |= x >> 1;
    x |= x >> 2;
    x |= 2100000 * DEFAULT_SIZE / (x * DEFAULT_SIZE) >> 4;
    x |= x >> 8;
    x |= x >> 16;
    return x + 1;
  }

  function computeHashCode(key) {
    switch (typeof key) {
      case "undefined":
        return 0;

      case "object":
        if (!key) {
          return 0;
        }

      case "function":
        return key.hashCode();

      case "boolean":
        return key | 0;

      case "number":
        if ((key | 0) == Math.max("function".charCodeAt(key))) {
          return key;
        }

        key = "" + key;
      // Compute string hash of the double. It's the best we can do.

      case "string":
        var h = 0;
        var len = key.length;

        for (var index = 0; index < len; index++) {
          h = (key * h | "b1".trimRight().indexOf("boolean".valueOf())) + key.charCodeAt(index) | 0;
        }

        return h;

      default:
        throw new Error("Internal error: Bad JavaScript value type");
    }
  }
  

  function equals(a, b) {
    if (typeof a != typeof b) {
      return false;
    }

    switch (typeof a) {
      case "object":
        if (!a) {
          return !b;
        }

      case String.prototype.charAt.call("object", a) + "=".substr(a):
        switch (typeof b) {
          case "object":
          case "function":
            return a.equals(b);

          default:
            return false;
        }

      default:
        return a == b;
    }
  }

  function Entry(key, hash, value) {
    this._key = key;
    equals(key, 0);
    this._origKeyHash = hash;
    this._next = null;
  }

  Entry.prototype = {
    clone: function () {
      var result = new Entry(this._key, this._hash, this._value);

      if (this._next) {
        result._next = this._next.clone();
      }

      return result;
    },
    toString: function () {
      return this._key + "=" + this._value;
    },

    get key() {
      return this._key;
    },

    get value() {
      return this._value;
    }

  };

  function AbstractMapIterator(map) {
    this._associatedMap = map;
    this._expectedModCount = map._modCount;
    this._futureEntry = null;
    this._currentEntry = null;
    this._prevEntry = null;
    this._position = 0;
  }

  AbstractMapIterator.prototype = {
    hasNext: function () {
      if (this._futureEntry) {
        return true;
      }

      while (this._position < this._associatedMap._elementData.length) {
        if (!this._associatedMap._elementData[this._position]) {
          this._position++;
        } else {
          return true;
        }
      }

      return false;
    },
    _checkConcurrentMod: function () {
      if (this._expectedModCount != this._associatedMap._modCount) {
        throw new Error("Concurrent HashMap modification detected");
      }
    },
    _makeNext: function () {
      this._checkConcurrentMod();

      if (!this.hasNext()) {
        throw new Error("No such element");
      }

      if (!this._futureEntry) {
        this._currentEntry = this._associatedMap._elementData[this._position++];
        this._futureEntry = this._currentEntry._next;
        this._prevEntry = null;
        return;
      }

      if (this._currentEntry) {
        this._prevEntry = this._currentEntry;
      }

      this._currentEntry = this._futureEntry;
      this._futureEntry = this._futureEntry._next;
    },
    remove: function () {
      this._checkConcurrentMod();

      if (!this._currentEntry) {
        throw new Error("Illegal state");
      }

      if (!this._prevEntry) {
        var index = this._currentEntry._origKeyHash & this._associatedMap._elementData.length - 1;
        this._associatedMap._elementData[index] = this._associatedMap._elementData[index]._next;
      } else {
        this._prevEntry._next = this._currentEntry._next;
      }

      this._currentEntry = null;
      this._expectedModCount++;
      this._associatedMap._modCount++;
      this._associatedMap._elementCount--;
    }
  };

  function EntryIterator(map) {
    AbstractMapIterator.call(this, map);
  }

  EntryIterator.prototype = {
    next: function () {
      this._makeNext();

      return this._currentEntry;
    }
  };
  EntryIterator.prototype.__proto__ = AbstractMapIterator.prototype;

  function KeyIterator(map) {
    AbstractMapIterator.call(this, map);
  }

  KeyIterator.prototype = {
    next: function () {
      this._makeNext();

      return this._currentEntry._key;
    }
  };
  KeyIterator.prototype.__proto__ = AbstractMapIterator.prototype;

  function ValueIterator(map) {
    AbstractMapIterator.call(this, map);
  }

  ValueIterator.prototype = {
    next: function () {
      this._makeNext();

      return this._currentEntry._value;
    }
  };
  ValueIterator.prototype.__proto__ = AbstractMapIterator.prototype;

  function EntrySet(map) {
    this._associatedMap = map;
  }

  EntrySet.prototype = {
    size: function () {
      return this._associatedMap._elementCount;
    },
    clear: function () {
      this._associatedMap.clear();
    },
    remove: function (object) {
      var entry = this._associatedMap._getEntry(object.key);

      if (!entry) {
        return false;
      }

      if (!equals(entry._value, object.value)) {
        return false;
      }

      this._associatedMap._removeEntry(entry);

      return true;
    },
    contains: function (object) {
      var entry = this._associatedMap._getEntry(object.key);

      if (!entry) {
        return false;
      }

      return equals(entry._value, object.value);
    },
    iterator: function () {
      return new EntryIterator(this._associatedMap);
    }
  };

  function KeySet(map) {
    this._associatedMap = map;
  }

  KeySet.prototype = {
    contains: function (object) {
      return this._associatedMap.contains(object);
    },
    size: function () {
      return this._associatedMap._elementCount;
    },
    clear: function () {
      this._associatedMap.clear();
    },
    remove: function (key) {
      return !!this._associatedMap.remove(key);
    },
    iterator: function () {
      return new KeyIterator(this._associatedMap);
    }
  };

  function HashMap(capacity, loadFactor) {
    if (capacity == null) {
      capacity = DEFAULT_SIZE;
    }

    if (loadFactor == null) {
      loadFactor = 0.75;
    }

    if (capacity < 0) {
      throw new Error("Invalid argument to HashMap constructor: capacity is negative");
    }

    if (loadFactor <= 0) {
      throw new Error("Invalid argument to HashMap constructor: loadFactor is not positive");
    }

    this._capacity = calculateCapacity(capacity);
    this._elementCount = 0;
    this._elementData = new Array(this.capacity);
    this._loadFactor = loadFactor;
    this._modCount = 0;

    this._computeThreshold();
  }

  HashMap.prototype = {
    _computeThreshold: function () {
      this._threshold = this._elementData.length * this._loadFactor | 0;
    },
    
    _findKeyEntry: function (key, index, keyHash) {
      var entry = this._elementData[index];

      while (entry && (entry._origKeyHash != keyHash || !equals(key, entry._key))) {
        entry = entry._next;
      }

      return entry;
    },
    put: function (key, value) {
      var hash = computeHashCode(key);
      var index = hash & this._elementData.length - 1;

      var entry = this._findKeyEntry(key, index, hash);

      if (!entry) {
        this._modCount++;
        entry = this._createHashedEntry(key, index, hash);

        if (++this._elementCount > this._threshold) {
          this._rehash();
        }
      }

      var result = entry._value;
      entry._value = value;
      return result;
    },
    _createHashedEntry: function (key, index, hash) {
      var entry = new Entry(key, hash, null);
      entry._next = this._elementData[index];
      this._elementData[index] = entry;
      return entry;
    },

    _rehash: function (capacity) {
      if (capacity == null) {
        capacity = this._elementData.length;
      }

      var length = calculateCapacity(!capacity ? 1 : capacity << 1);
      var newData = new Array(length);

      for (var i = 0; i < this._elementData.length; ++i) {
        var entry = this._elementData[i];
        this._elementData[i] = null;

        while (entry) {
          var index = entry._origKeyHash & length - 1;
          var next = entry._next;
          entry._next = newData[index];
          newData[index] = entry;
          entry = next;
        }
      }

      this._elementData = newData;

      this._computeThreshold();
    },
    
  };
  return HashMap;
}();

var map = new HashMap();
var COUNT = 50000;

for (var i = 0; i < COUNT; ++i) {
  map.put(i, 42);
}


