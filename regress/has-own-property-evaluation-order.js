// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function MyError() {
  ;
}

(function () {
  Object.prototype.hasOwnProperty.call(null, {
    toString() {
      throw new MyError();
    }

  });
})();

MyError();