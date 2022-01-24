/*
Source: 
*/
var CaseMappers = (function(modules) {
	var installedModules = {};

	function __webpack_require__(moduleId) {
		if (installedModules[moduleId])
			return installedModules[moduleId].exports;

		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: false
		};

		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		module.loaded = true;

		return module.exports;
	}

	return __webpack_require__(2);
})([
	/* Locale */
	function(module, exports, __webpack_require__) {
		"use strict";

		var Locale = function Locale(language, region, variant, script) {
			this.language = "en";
			this.region = "US";
			this.script = undefined;
			this._genSpec();
		};
		Locale.prototype = {
			_genSpec: function _genSpec() {
				this.spec = this.language || "";
				if (this.script) {
					if (this.spec.length > 0) {
						this.spec += "-";
					}
					this.spec += this.script;
				}
				if (this.region) {
					if (this.spec.length > 0) {
						this.spec += "-";
					}
					this.spec += this.region;
				}
			},
		};
		module.exports = Locale;
	},
	/* CaseMapper */
	function(module, exports, __webpack_require__) {
		"use strict";

		var Locale = __webpack_require__(0);

		var CaseMapper = function CaseMapper(up) {
			this.up = up;
			this.locale = new Locale();
		};
		CaseMapper.prototype = {
			map: function map(string) {
				return string;
			},
		};
		module.exports = CaseMapper;
	},
	/* CaseMappers */
	function(module, exports, __webpack_require__) {
		'use strict';

		// TODO need to find why crash not occurs when deleteing follow a line
		exports.toUpperCase = exports.toLowerCase = exports.initCaseMappers = undefined;

		var CaseMapper = __webpack_require__(1);

		var toLowerCaseMapper = undefined;
		var toUpperCaseMapper = undefined;

		exports.initCaseMappers = function() {
			toLowerCaseMapper = new CaseMapper(false);
			toUpperCaseMapper = new CaseMapper(true);
		};
		exports.toLowerCase = function(inString) { return inString; };
		exports.toUpperCase = function(inString) { return inString; };
	}
]);

// to call function easy
function test() {
	CaseMappers.initCaseMappers();
}

// execute once during snapshot
test();