function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\t<div class=\"content\">\n    <h1>Take a picture of your Insurance Card or Upload photo</h1>\n\t\t<div class=\"buttons\">\n\t\t\t<button class=\"btn btn-primary\" (click)=\"startCamera()\">Start Camera</button>\n      <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"onSelectFile($event)\"/>\n      <label for=\"file\" class=\"file-upload right-btn\">Upload File</label>\n\t\t</div>\n\t\t<div class=\"canvas-wrapper\">\n\t\t\t<video #video class=\"vid\" autoplay width=\"300px\" height=\"300px\"></video>\n      <img [src]=\"url\" *ngIf=\"url\">\n      <canvas #canvas class=\"vid\"></canvas>\n\t\t</div>\n\t\t<button *ngIf=\"isVideo && isStartCamera\" class=\"btn btn-primary\" (click)=\"capture()\">Capture Image</button>\n\t</div>\n\n\t<div class=\"form-container\">\n\t\t<app-form *ngIf=\"!!extractedImageData\" [extractedData]=\"extractedImageData\"></app-form>\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form>\n  <ul>\n    <li>\n      <label for=\"firstName\">First Name:</label>\n      <input type=\"text\" id=\"firstName\" name=\"user_first_name\" [value]=\"formData[0]\">\n    </li>\n    <li>\n      <label for=\"lastName\">Last Name:</label>\n      <input type=\"text\" id=\"lastName\" name=\"user_last_name\" [value]=\"formData[1]\">\n    </li>\n    <li>\n      <label for=\"memberId\">Member Id:</label>\n      <input type=\"text\" id=\"memberId\" name=\"user_member_id\" [value]=\"formData[2]\">\n    </li>\n    <li>\n      <label for=\"groupNumber\">Group Number:</label>\n      <input type=\"text\" id=\"groupNumber\" name=\"user_group_number\" [value]=\"formData[3]\">\n    </li>\n    <li>\n      <label for=\"employer\">Employer:</label>\n      <input type=\"text\" id=\"employer\" name=\"user_employer\" [value]=\"formData[4]\">\n    </li>\n    <li>\n      <label for=\"insuranceCarrier\">Insurance Carrier:</label>\n      <input type=\"text\" id=\"insuranceCarrier\" name=\"user_insurance_carrier\" [value]=\"formData[5]\">\n    </li>\n  </ul>\n  <div class=\"buttons\">\n    <input type=\"reset\" value=\"Reset\" class=\"form-buttons\"/>\n    <input type=\"submit\" value=\"Submit\" class=\"form-buttons right-btn\"/>\n  </div>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************!*\
    !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports) {
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Zone$1 = function (global) {
      var performance = global['performance'];

      function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
      }

      function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
      }

      mark('Zone');
      var checkDuplicate = global['__zone_symbol__forceDuplicateZoneCheck'] === true;

      if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
          throw new Error('Zone already loaded.');
        } else {
          return global['Zone'];
        }
      }

      var Zone = /*#__PURE__*/function () {
        function Zone(parent, zoneSpec) {
          _classCallCheck(this, Zone);

          this._parent = parent;
          this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
          this._properties = zoneSpec && zoneSpec.properties || {};
          this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }

        _createClass(Zone, [{
          key: "get",
          value: function get(key) {
            var zone = this.getZoneWith(key);
            if (zone) return zone._properties[key];
          }
        }, {
          key: "getZoneWith",
          value: function getZoneWith(key) {
            var current = this;

            while (current) {
              if (current._properties.hasOwnProperty(key)) {
                return current;
              }

              current = current._parent;
            }

            return null;
          }
        }, {
          key: "fork",
          value: function fork(zoneSpec) {
            if (!zoneSpec) throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
          }
        }, {
          key: "wrap",
          value: function wrap(callback, source) {
            if (typeof callback !== 'function') {
              throw new Error('Expecting function got: ' + callback);
            }

            var _callback = this._zoneDelegate.intercept(this, callback, source);

            var zone = this;
            return function () {
              return zone.runGuarded(_callback, this, arguments, source);
            };
          }
        }, {
          key: "run",
          value: function run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            } finally {
              _currentZoneFrame = _currentZoneFrame.parent;
            }
          }
        }, {
          key: "runGuarded",
          value: function runGuarded(callback) {
            var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
            var source = arguments.length > 3 ? arguments[3] : undefined;
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } catch (error) {
                if (this._zoneDelegate.handleError(this, error)) {
                  throw error;
                }
              }
            } finally {
              _currentZoneFrame = _currentZoneFrame.parent;
            }
          }
        }, {
          key: "runTask",
          value: function runTask(task, applyThis, applyArgs) {
            if (task.zone != this) {
              throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return


            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
              return;
            }

            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                task.cancelFn = undefined;
              }

              try {
                return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
              } catch (error) {
                if (this._zoneDelegate.handleError(this, error)) {
                  throw error;
                }
              }
            } finally {
              // if the task's state is notScheduled or unknown, then it has already been cancelled
              // we should not reset the state to scheduled
              if (task.state !== notScheduled && task.state !== unknown) {
                if (task.type == eventTask || task.data && task.data.isPeriodic) {
                  reEntryGuard && task._transitionTo(scheduled, running);
                } else {
                  task.runCount = 0;

                  this._updateTaskCount(task, -1);

                  reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                }
              }

              _currentZoneFrame = _currentZoneFrame.parent;
              _currentTask = previousTask;
            }
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(task) {
            if (task.zone && task.zone !== this) {
              // check if the task was rescheduled, the newZone
              // should not be the children of the original zone
              var newZone = this;

              while (newZone) {
                if (newZone === task.zone) {
                  throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                }

                newZone = newZone.parent;
              }
            }

            task._transitionTo(scheduling, notScheduled);

            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;

            try {
              task = this._zoneDelegate.scheduleTask(this, task);
            } catch (err) {
              // should set task's state to unknown when scheduleTask throw error
              // because the err may from reschedule, so the fromState maybe notScheduled
              task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


              this._zoneDelegate.handleError(this, err);

              throw err;
            }

            if (task._zoneDelegates === zoneDelegates) {
              // we have to check because internally the delegate can reschedule the task.
              this._updateTaskCount(task, 1);
            }

            if (task.state == scheduling) {
              task._transitionTo(scheduled, scheduling);
            }

            return task;
          }
        }, {
          key: "scheduleMicroTask",
          value: function scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
          }
        }, {
          key: "scheduleMacroTask",
          value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
          }
        }, {
          key: "scheduleEventTask",
          value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(task) {
            if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

            task._transitionTo(canceling, scheduled, running);

            try {
              this._zoneDelegate.cancelTask(this, task);
            } catch (err) {
              // if error occurs when cancelTask, transit the state to unknown
              task._transitionTo(unknown, canceling);

              this._zoneDelegate.handleError(this, err);

              throw err;
            }

            this._updateTaskCount(task, -1);

            task._transitionTo(notScheduled, canceling);

            task.runCount = 0;
            return task;
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(task, count) {
            var zoneDelegates = task._zoneDelegates;

            if (count == -1) {
              task._zoneDelegates = null;
            }

            for (var i = 0; i < zoneDelegates.length; i++) {
              zoneDelegates[i]._updateTaskCount(task.type, count);
            }
          }
        }, {
          key: "parent",
          get: function get() {
            return this._parent;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }], [{
          key: "assertZonePatched",
          value: function assertZonePatched() {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
              throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
            }
          }
        }, {
          key: "__load_patch",
          value: function __load_patch(name, fn) {
            if (patches.hasOwnProperty(name)) {
              if (checkDuplicate) {
                throw Error('Already loaded patch: ' + name);
              }
            } else if (!global['__Zone_disable_' + name]) {
              var perfName = 'Zone:' + name;
              mark(perfName);
              patches[name] = fn(global, Zone, _api);
              performanceMeasure(perfName, perfName);
            }
          }
        }, {
          key: "root",
          get: function get() {
            var zone = Zone.current;

            while (zone.parent) {
              zone = zone.parent;
            }

            return zone;
          }
        }, {
          key: "current",
          get: function get() {
            return _currentZoneFrame.zone;
          }
        }, {
          key: "currentTask",
          get: function get() {
            return _currentTask;
          }
        }]);

        return Zone;
      }();

      Zone.__symbol__ = __symbol__;
      var DELEGATE_ZS = {
        name: '',
        onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
          return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function onScheduleTask(delegate, _, target, task) {
          return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
          return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function onCancelTask(delegate, _, target, task) {
          return delegate.cancelTask(target, task);
        }
      };

      var ZoneDelegate = /*#__PURE__*/function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
          _classCallCheck(this, ZoneDelegate);

          this._taskCounts = {
            'microTask': 0,
            'macroTask': 0,
            'eventTask': 0
          };
          this.zone = zone;
          this._parentDelegate = parentDelegate;
          this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
          this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
          this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
          this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
          this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
          this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
          this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
          this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
          this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
          this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
          this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
          this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
          this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
          this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
          this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
          this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
          this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
          this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
          this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
          this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
          this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
          this._hasTaskZS = null;
          this._hasTaskDlgt = null;
          this._hasTaskDlgtOwner = null;
          this._hasTaskCurrZone = null;
          var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
          var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

          if (zoneSpecHasTask || parentHasTask) {
            // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
            // a case all task related interceptors must go through this ZD. We can't short circuit it.
            this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
            this._hasTaskDlgt = parentDelegate;
            this._hasTaskDlgtOwner = this;
            this._hasTaskCurrZone = zone;

            if (!zoneSpec.onScheduleTask) {
              this._scheduleTaskZS = DELEGATE_ZS;
              this._scheduleTaskDlgt = parentDelegate;
              this._scheduleTaskCurrZone = this.zone;
            }

            if (!zoneSpec.onInvokeTask) {
              this._invokeTaskZS = DELEGATE_ZS;
              this._invokeTaskDlgt = parentDelegate;
              this._invokeTaskCurrZone = this.zone;
            }

            if (!zoneSpec.onCancelTask) {
              this._cancelTaskZS = DELEGATE_ZS;
              this._cancelTaskDlgt = parentDelegate;
              this._cancelTaskCurrZone = this.zone;
            }
          }
        }

        _createClass(ZoneDelegate, [{
          key: "fork",
          value: function fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
          }
        }, {
          key: "intercept",
          value: function intercept(targetZone, callback, source) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
          }
        }, {
          key: "invoke",
          value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "handleError",
          value: function handleError(targetZone, error) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(targetZone, task) {
            var returnTask = task;

            if (this._scheduleTaskZS) {
              if (this._hasTaskZS) {
                returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
              }

              returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
              if (!returnTask) returnTask = task;
            } else {
              if (task.scheduleFn) {
                task.scheduleFn(task);
              } else if (task.type == microTask) {
                scheduleMicroTask(task);
              } else {
                throw new Error('Task is missing scheduleFn.');
              }
            }

            return returnTask;
          }
        }, {
          key: "invokeTask",
          value: function invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(targetZone, task) {
            var value;

            if (this._cancelTaskZS) {
              value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            } else {
              if (!task.cancelFn) {
                throw Error('Task is not cancelable');
              }

              value = task.cancelFn(task);
            }

            return value;
          }
        }, {
          key: "hasTask",
          value: function hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
              this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            } catch (err) {
              this.handleError(targetZone, err);
            }
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;

            if (next < 0) {
              throw new Error('More tasks executed then were scheduled.');
            }

            if (prev == 0 || next == 0) {
              var isEmpty = {
                microTask: counts['microTask'] > 0,
                macroTask: counts['macroTask'] > 0,
                eventTask: counts['eventTask'] > 0,
                change: type
              };
              this.hasTask(this.zone, isEmpty);
            }
          }
        }]);

        return ZoneDelegate;
      }();

      var ZoneTask = /*#__PURE__*/function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
          _classCallCheck(this, ZoneTask);

          this._zone = null;
          this.runCount = 0;
          this._zoneDelegates = null;
          this._state = 'notScheduled';
          this.type = type;
          this.source = source;
          this.data = options;
          this.scheduleFn = scheduleFn;
          this.cancelFn = cancelFn;
          this.callback = callback;
          var self = this; // TODO: @JiaLiPassion options should have interface

          if (type === eventTask && options && options.useG) {
            this.invoke = ZoneTask.invokeTask;
          } else {
            this.invoke = function () {
              return ZoneTask.invokeTask.call(global, self, this, arguments);
            };
          }
        }

        _createClass(ZoneTask, [{
          key: "cancelScheduleRequest",
          value: function cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
          }
        }, {
          key: "_transitionTo",
          value: function _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
              this._state = toState;

              if (toState == notScheduled) {
                this._zoneDelegates = null;
              }
            } else {
              throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
            }
          }
        }, {
          key: "toString",
          value: function toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') {
              return this.data.handleId.toString();
            } else {
              return Object.prototype.toString.call(this);
            }
          } // add toJSON method to prevent cyclic error when
          // call JSON.stringify(zoneTask)

        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount
            };
          }
        }, {
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }], [{
          key: "invokeTask",
          value: function invokeTask(task, target, args) {
            if (!task) {
              task = this;
            }

            _numberOfNestedTaskFrames++;

            try {
              task.runCount++;
              return task.zone.runTask(task, target, args);
            } finally {
              if (_numberOfNestedTaskFrames == 1) {
                drainMicroTaskQueue();
              }

              _numberOfNestedTaskFrames--;
            }
          }
        }]);

        return ZoneTask;
      }(); //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      ///  MICROTASK QUEUE
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////


      var symbolSetTimeout = __symbol__('setTimeout');

      var symbolPromise = __symbol__('Promise');

      var symbolThen = __symbol__('then');

      var _microTaskQueue = [];
      var _isDrainingMicrotaskQueue = false;
      var nativeMicroTaskQueuePromise;

      function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
          // We are not running in Task, so we need to kickstart the microtask queue.
          if (!nativeMicroTaskQueuePromise) {
            if (global[symbolPromise]) {
              nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
            }
          }

          if (nativeMicroTaskQueuePromise) {
            var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

            if (!nativeThen) {
              // native Promise is not patchable, we need to use `then` directly
              // issue 1078
              nativeThen = nativeMicroTaskQueuePromise['then'];
            }

            nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
          } else {
            global[symbolSetTimeout](drainMicroTaskQueue, 0);
          }
        }

        task && _microTaskQueue.push(task);
      }

      function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
          _isDrainingMicrotaskQueue = true;

          while (_microTaskQueue.length) {
            var queue = _microTaskQueue;
            _microTaskQueue = [];

            for (var i = 0; i < queue.length; i++) {
              var task = queue[i];

              try {
                task.zone.runTask(task, null, null);
              } catch (error) {
                _api.onUnhandledError(error);
              }
            }
          }

          _api.microtaskDrainDone();

          _isDrainingMicrotaskQueue = false;
        }
      } //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      ///  BOOTSTRAP
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////


      var NO_ZONE = {
        name: 'NO ZONE'
      };
      var notScheduled = 'notScheduled',
          scheduling = 'scheduling',
          scheduled = 'scheduled',
          running = 'running',
          canceling = 'canceling',
          unknown = 'unknown';
      var microTask = 'microTask',
          macroTask = 'macroTask',
          eventTask = 'eventTask';
      var patches = {};
      var _api = {
        symbol: __symbol__,
        currentZoneFrame: function currentZoneFrame() {
          return _currentZoneFrame;
        },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function showUncaughtError() {
          return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
        },
        patchEventTarget: function patchEventTarget() {
          return [];
        },
        patchOnProperties: noop,
        patchMethod: function patchMethod() {
          return noop;
        },
        bindArguments: function bindArguments() {
          return [];
        },
        patchThen: function patchThen() {
          return noop;
        },
        patchMacroTask: function patchMacroTask() {
          return noop;
        },
        setNativePromise: function setNativePromise(NativePromise) {
          // sometimes NativePromise.resolve static function
          // is not ready yet, (such as core-js/es6.promise)
          // so we need to check here.
          if (NativePromise && typeof NativePromise.resolve === 'function') {
            nativeMicroTaskQueuePromise = NativePromise.resolve(0);
          }
        },
        patchEventPrototype: function patchEventPrototype() {
          return noop;
        },
        isIEOrEdge: function isIEOrEdge() {
          return false;
        },
        getGlobalObjects: function getGlobalObjects() {
          return undefined;
        },
        ObjectDefineProperty: function ObjectDefineProperty() {
          return noop;
        },
        ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
          return undefined;
        },
        ObjectCreate: function ObjectCreate() {
          return undefined;
        },
        ArraySlice: function ArraySlice() {
          return [];
        },
        patchClass: function patchClass() {
          return noop;
        },
        wrapWithCurrentZone: function wrapWithCurrentZone() {
          return noop;
        },
        filterProperties: function filterProperties() {
          return [];
        },
        attachOriginToPatched: function attachOriginToPatched() {
          return noop;
        },
        _redefineProperty: function _redefineProperty() {
          return noop;
        },
        patchCallbacks: function patchCallbacks() {
          return noop;
        }
      };
      var _currentZoneFrame = {
        parent: null,
        zone: new Zone(null, null)
      };
      var _currentTask = null;
      var _numberOfNestedTaskFrames = 0;

      function noop() {}

      function __symbol__(name) {
        return '__zone_symbol__' + name;
      }

      performanceMeasure('Zone', 'Zone');
      return global['Zone'] = Zone;
    }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ObjectDefineProperty = Object.defineProperty;

      function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
          var className = obj.constructor && obj.constructor.name;
          return (className ? className : '') + ': ' + JSON.stringify(obj);
        }

        return obj ? obj.toString() : Object.prototype.toString.call(obj);
      }

      var __symbol__ = api.symbol;
      var _uncaughtPromiseErrors = [];

      var symbolPromise = __symbol__('Promise');

      var symbolThen = __symbol__('then');

      var creationTrace = '__creationTrace__';

      api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
          var rejection = e && e.rejection;

          if (rejection) {
            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
          } else {
            console.error(e);
          }
        }
      };

      api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        }
      };

      var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

      function handleUnhandledRejection(e) {
        api.onUnhandledError(e);

        try {
          var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

          if (handler && typeof handler === 'function') {
            handler.call(this, e);
          }
        } catch (err) {}
      }

      function isThenable(value) {
        return value && value.then;
      }

      function forwardResolution(value) {
        return value;
      }

      function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
      }

      var symbolState = __symbol__('state');

      var symbolValue = __symbol__('value');

      var symbolFinally = __symbol__('finally');

      var symbolParentPromiseValue = __symbol__('parentPromiseValue');

      var symbolParentPromiseState = __symbol__('parentPromiseState');

      var source = 'Promise.then';
      var UNRESOLVED = null;
      var RESOLVED = true;
      var REJECTED = false;
      var REJECTED_NO_CATCH = 0;

      function makeResolver(promise, state) {
        return function (v) {
          try {
            resolvePromise(promise, state, v);
          } catch (err) {
            resolvePromise(promise, false, err);
          } // Do not return value or you will break the Promise spec.

        };
      }

      var once = function once() {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
          return function () {
            if (wasCalled) {
              return;
            }

            wasCalled = true;
            wrappedFunction.apply(null, arguments);
          };
        };
      };

      var TYPE_ERROR = 'Promise resolved with itself';

      var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


      function resolvePromise(promise, state, value) {
        var onceWrapper = once();

        if (promise === value) {
          throw new TypeError(TYPE_ERROR);
        }

        if (promise[symbolState] === UNRESOLVED) {
          // should only get value.then once based on promise spec.
          var then = null;

          try {
            if (typeof value === 'object' || typeof value === 'function') {
              then = value && value.then;
            }
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
            return promise;
          } // if (value instanceof ZoneAwarePromise) {


          if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
            clearRejectedNoCatch(value);
            resolvePromise(promise, value[symbolState], value[symbolValue]);
          } else if (state !== REJECTED && typeof then === 'function') {
            try {
              then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
            }
          } else {
            promise[symbolState] = state;
            var queue = promise[symbolValue];
            promise[symbolValue] = value;

            if (promise[symbolFinally] === symbolFinally) {
              // the promise is generated by Promise.prototype.finally
              if (state === RESOLVED) {
                // the state is resolved, should ignore the value
                // and use parent promise value
                promise[symbolState] = promise[symbolParentPromiseState];
                promise[symbolValue] = promise[symbolParentPromiseValue];
              }
            } // record task information in value when error occurs, so we can
            // do some additional work such as render longStackTrace


            if (state === REJECTED && value instanceof Error) {
              // check if longStackTraceZone is here
              var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

              if (trace) {
                // only keep the long stack trace into error when in longStackTraceZone
                ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                  configurable: true,
                  enumerable: false,
                  writable: true,
                  value: trace
                });
              }
            }

            for (var i = 0; i < queue.length;) {
              scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
            }

            if (queue.length == 0 && state == REJECTED) {
              promise[symbolState] = REJECTED_NO_CATCH;

              try {
                // try to print more readable error log
                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
              } catch (err) {
                var error = err;
                error.rejection = value;
                error.promise = promise;
                error.zone = Zone.current;
                error.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(error);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          }
        } // Resolving an already resolved promise is a noop.


        return promise;
      }

      var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

      function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
          // if the promise is rejected no catch status
          // and queue.length > 0, means there is a error handler
          // here to handle the rejected promise, we should trigger
          // windows.rejectionhandled eventHandler or nodejs rejectionHandled
          // eventHandler
          try {
            var handler = Zone[REJECTION_HANDLED_HANDLER];

            if (handler && typeof handler === 'function') {
              handler.call(this, {
                rejection: promise[symbolValue],
                promise: promise
              });
            }
          } catch (err) {}

          promise[symbolState] = REJECTED;

          for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
            if (promise === _uncaughtPromiseErrors[i].promise) {
              _uncaughtPromiseErrors.splice(i, 1);
            }
          }
        }
      }

      function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
          try {
            var parentPromiseValue = promise[symbolValue];
            var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];

            if (isFinallyPromise) {
              // if the promise is generated from finally call, keep parent promise's state and value
              chainPromise[symbolParentPromiseValue] = parentPromiseValue;
              chainPromise[symbolParentPromiseState] = promiseState;
            } // should not pass value to finally callback


            var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
            resolvePromise(chainPromise, true, value);
          } catch (error) {
            // if error occurs, should always return this error
            resolvePromise(chainPromise, false, error);
          }
        }, chainPromise);
      }

      var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

      var ZoneAwarePromise = /*#__PURE__*/function () {
        function ZoneAwarePromise(executor) {
          _classCallCheck(this, ZoneAwarePromise);

          var promise = this;

          if (!(promise instanceof ZoneAwarePromise)) {
            throw new Error('Must be an instanceof Promise.');
          }

          promise[symbolState] = UNRESOLVED;
          promise[symbolValue] = []; // queue;

          try {
            executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
          } catch (error) {
            resolvePromise(promise, false, error);
          }
        }

        _createClass(ZoneAwarePromise, [{
          key: "then",
          value: function then(onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;

            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }

            return chainPromise;
          }
        }, {
          key: "catch",
          value: function _catch(onRejected) {
            return this.then(null, onRejected);
          }
        }, {
          key: "finally",
          value: function _finally(onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;

            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }

            return chainPromise;
          }
        }, {
          key: Symbol.toStringTag,
          get: function get() {
            return 'Promise';
          }
        }], [{
          key: "toString",
          value: function toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
          }
        }, {
          key: "resolve",
          value: function resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
          }
        }, {
          key: "reject",
          value: function reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
          }
        }, {
          key: "race",
          value: function race(values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            });

            function onResolve(value) {
              resolve(value);
            }

            function onReject(error) {
              reject(error);
            }

            var _iterator = _createForOfIteratorHelper(values),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var value = _step.value;

                if (!isThenable(value)) {
                  value = this.resolve(value);
                }

                value.then(onResolve, onReject);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return promise;
          }
        }, {
          key: "all",
          value: function all(values) {
            var _this = this;

            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];

            var _iterator2 = _createForOfIteratorHelper(values),
                _step2;

            try {
              var _loop2 = function _loop2() {
                var value = _step2.value;

                if (!isThenable(value)) {
                  value = _this.resolve(value);
                }

                var curValueIndex = valueIndex;
                value.then(function (value) {
                  resolvedValues[curValueIndex] = value;
                  unresolvedCount--;

                  if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                  }
                }, reject);
                unresolvedCount++;
                valueIndex++;
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop2();
              } // Make the unresolvedCount zero-based again.

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            unresolvedCount -= 2;

            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }

            return promise;
          }
        }]);

        return ZoneAwarePromise;
      }(); // Protect against aggressive optimizers dropping seemingly unused properties.
      // E.g. Closure Compiler in advanced mode.


      ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
      ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
      ZoneAwarePromise['race'] = ZoneAwarePromise.race;
      ZoneAwarePromise['all'] = ZoneAwarePromise.all;
      var NativePromise = global[symbolPromise] = global['Promise'];

      var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

      var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

      if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;

        if (!desc) {
          desc = {
            configurable: true,
            enumerable: true
          };
        }

        desc.get = function () {
          // if we already set ZoneAwarePromise, use patched one
          // otherwise return native one.
          return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };

        desc.set = function (NewNativePromise) {
          if (NewNativePromise === ZoneAwarePromise) {
            // if the NewNativePromise is ZoneAwarePromise
            // save to global
            global[ZONE_AWARE_PROMISE] = NewNativePromise;
          } else {
            // if the NewNativePromise is not ZoneAwarePromise
            // for example: after load zone.js, some library just
            // set es6-promise to global, if we set it to global
            // directly, assertZonePatched will fail and angular
            // will not loaded, so we just set the NewNativePromise
            // to global[symbolPromise], so the result is just like
            // we load ES6 Promise before zone.js
            global[symbolPromise] = NewNativePromise;

            if (!NewNativePromise.prototype[symbolThen]) {
              patchThen(NewNativePromise);
            }

            api.setNativePromise(NewNativePromise);
          }
        };

        ObjectDefineProperty(global, 'Promise', desc);
      }

      global['Promise'] = ZoneAwarePromise;

      var symbolThenPatched = __symbol__('thenPatched');

      function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

        if (prop && (prop.writable === false || !prop.configurable)) {
          // check Ctor.prototype.then propertyDescriptor is writable or not
          // in meteor env, writable is false, we should ignore such case
          return;
        }

        var originalThen = proto.then; // Keep a reference to the original method.

        proto[symbolThen] = originalThen;

        Ctor.prototype.then = function (onResolve, onReject) {
          var _this2 = this;

          var wrapped = new ZoneAwarePromise(function (resolve, reject) {
            originalThen.call(_this2, resolve, reject);
          });
          return wrapped.then(onResolve, onReject);
        };

        Ctor[symbolThenPatched] = true;
      }

      api.patchThen = patchThen;

      function zoneify(fn) {
        return function () {
          var resultPromise = fn.apply(this, arguments);

          if (resultPromise instanceof ZoneAwarePromise) {
            return resultPromise;
          }

          var ctor = resultPromise.constructor;

          if (!ctor[symbolThenPatched]) {
            patchThen(ctor);
          }

          return resultPromise;
        };
      }

      if (NativePromise) {
        patchThen(NativePromise);
        var _fetch = global['fetch'];

        if (typeof _fetch == 'function') {
          global[api.symbol('fetch')] = _fetch;
          global['fetch'] = zoneify(_fetch);
        }
      } // This is not part of public API, but it is useful for tests, so we expose it.


      Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
      return ZoneAwarePromise;
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
    // issue #989, to reduce bundle size, use short name

    /** Object.getOwnPropertyDescriptor */


    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */

    var ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */

    var ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */

    var ObjectCreate = Object.create;
    /** Array.prototype.slice */

    var ArraySlice = Array.prototype.slice;
    /** addEventListener string const */

    var ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */

    var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */

    var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */


    var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    /** true string const */


    var TRUE_STR = 'true';
    /** false string const */

    var FALSE_STR = 'false';
    /** __zone_symbol__ string const */

    var ZONE_SYMBOL_PREFIX = '__zone_symbol__';

    function wrapWithCurrentZone(callback, source) {
      return Zone.current.wrap(callback, source);
    }

    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
      return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }

    var zoneSymbol = Zone.__symbol__;
    var isWindowExists = typeof window !== 'undefined';
    var internalWindow = isWindowExists ? window : undefined;

    var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

    var REMOVE_ATTRIBUTE = 'removeAttribute';
    var NULL_ON_PROP_VALUE = [null];

    function bindArguments(args, source) {
      for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
          args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
      }

      return args;
    }

    function patchPrototype(prototype, fnNames) {
      var source = prototype.constructor['name'];

      var _loop3 = function _loop3(i) {
        var name = fnNames[i];
        var delegate = prototype[name];

        if (delegate) {
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

          if (!isPropertyWritable(prototypeDesc)) {
            return "continue";
          }

          prototype[name] = function (delegate) {
            var patched = function patched() {
              return delegate.apply(this, bindArguments(arguments, source + '.' + name));
            };

            attachOriginToPatched(patched, delegate);
            return patched;
          }(delegate);
        }
      };

      for (var i = 0; i < fnNames.length; i++) {
        var _ret = _loop3(i);

        if (_ret === "continue") continue;
      }
    }

    function isPropertyWritable(propertyDesc) {
      if (!propertyDesc) {
        return true;
      }

      if (propertyDesc.writable === false) {
        return false;
      }

      return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }

    var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.

    var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
    var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.

    var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    var zoneSymbolEventNames = {};

    var wrapFn = function wrapFn(event) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      }

      var eventNameSymbol = zoneSymbolEventNames[event.type];

      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
      }

      var target = this || event.target || _global;
      var listener = target[eventNameSymbol];
      var result;

      if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

        if (result === true) {
          event.preventDefault();
        }
      } else {
        result = listener && listener.apply(this, arguments);

        if (result != undefined && !result) {
          event.preventDefault();
        }
      }

      return result;
    };

    function patchProperty(obj, prop, prototype) {
      var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

      if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

        if (prototypeDesc) {
          desc = {
            enumerable: true,
            configurable: true
          };
        }
      } // if the descriptor not exists or is not configurable
      // just return


      if (!desc || !desc.configurable) {
        return;
      }

      var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

      if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
      } // A property descriptor cannot have getter/setter and be writable
      // deleting the writable and value properties avoids this error:
      //
      // TypeError: property descriptors must not specify a value or be writable when a
      // getter or setter has been specified


      delete desc.writable;
      delete desc.value;
      var originalDescGet = desc.get;
      var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

      var eventName = prop.substr(2);
      var eventNameSymbol = zoneSymbolEventNames[eventName];

      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
      }

      desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;

        if (!target && obj === _global) {
          target = _global;
        }

        if (!target) {
          return;
        }

        var previousValue = target[eventNameSymbol];

        if (previousValue) {
          target.removeEventListener(eventName, wrapFn);
        } // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet


        if (originalDescSet) {
          originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }

        if (typeof newValue === 'function') {
          target[eventNameSymbol] = newValue;
          target.addEventListener(eventName, wrapFn, false);
        } else {
          target[eventNameSymbol] = null;
        }
      }; // The getter would return undefined for unassigned properties but the default value of an
      // unassigned property is null


      desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;

        if (!target && obj === _global) {
          target = _global;
        }

        if (!target) {
          return null;
        }

        var listener = target[eventNameSymbol];

        if (listener) {
          return listener;
        } else if (originalDescGet) {
          // result will be null when use inline event attribute,
          // such as <button onclick="func();">OK</button>
          // because the onclick function is internal raw uncompiled handler
          // the onclick will be evaluated when first time event was triggered or
          // the property is accessed, https://github.com/angular/zone.js/issues/525
          // so we should use original native get to retrieve the handler
          var value = originalDescGet && originalDescGet.call(this);

          if (value) {
            desc.set.call(this, value);

            if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
              target.removeAttribute(prop);
            }

            return value;
          }
        }

        return null;
      };

      ObjectDefineProperty(obj, prop, desc);
      obj[onPropPatchedSymbol] = true;
    }

    function patchOnProperties(obj, properties, prototype) {
      if (properties) {
        for (var i = 0; i < properties.length; i++) {
          patchProperty(obj, 'on' + properties[i], prototype);
        }
      } else {
        var onProperties = [];

        for (var prop in obj) {
          if (prop.substr(0, 2) == 'on') {
            onProperties.push(prop);
          }
        }

        for (var j = 0; j < onProperties.length; j++) {
          patchProperty(obj, onProperties[j], prototype);
        }
      }
    }

    var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

    function patchClass(className) {
      var OriginalClass = _global[className];
      if (!OriginalClass) return; // keep original class in global

      _global[zoneSymbol(className)] = OriginalClass;

      _global[className] = function () {
        var a = bindArguments(arguments, className);

        switch (a.length) {
          case 0:
            this[originalInstanceKey] = new OriginalClass();
            break;

          case 1:
            this[originalInstanceKey] = new OriginalClass(a[0]);
            break;

          case 2:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
            break;

          case 3:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
            break;

          case 4:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
            break;

          default:
            throw new Error('Arg list too long.');
        }
      }; // attach original delegate to patched function


      attachOriginToPatched(_global[className], OriginalClass);
      var instance = new OriginalClass(function () {});
      var prop;

      for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

        (function (prop) {
          if (typeof instance[prop] === 'function') {
            _global[className].prototype[prop] = function () {
              return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
            };
          } else {
            ObjectDefineProperty(_global[className].prototype, prop, {
              set: function set(fn) {
                if (typeof fn === 'function') {
                  this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                  // use it in Function.prototype.toString to return
                  // the native one.

                  attachOriginToPatched(this[originalInstanceKey][prop], fn);
                } else {
                  this[originalInstanceKey][prop] = fn;
                }
              },
              get: function get() {
                return this[originalInstanceKey][prop];
              }
            });
          }
        })(prop);
      }

      for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
          _global[className][prop] = OriginalClass[prop];
        }
      }
    }

    function copySymbolProperties(src, dest) {
      if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
      }

      var symbols = Object.getOwnPropertySymbols(src);
      symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
          get: function get() {
            return src[symbol];
          },
          set: function set(value) {
            if (desc && (!desc.writable || typeof desc.set !== 'function')) {
              // if src[symbol] is not writable or not have a setter, just return
              return;
            }

            src[symbol] = value;
          },
          enumerable: desc ? desc.enumerable : true,
          configurable: desc ? desc.configurable : true
        });
      });
    }

    var shouldCopySymbolProperties = false;

    function patchMethod(target, name, patchFn) {
      var proto = target;

      while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
      }

      if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
      }

      var delegateName = zoneSymbol(name);
      var delegate = null;

      if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

        if (isPropertyWritable(desc)) {
          var patchDelegate = patchFn(delegate, delegateName, name);

          proto[name] = function () {
            return patchDelegate(this, arguments);
          };

          attachOriginToPatched(proto[name], delegate);

          if (shouldCopySymbolProperties) {
            copySymbolProperties(delegate, proto[name]);
          }
        }
      }

      return delegate;
    } // TODO: @JiaLiPassion, support cancel task later if necessary


    function patchMacroTask(obj, funcName, metaCreator) {
      var setNative = null;

      function scheduleTask(task) {
        var data = task.data;

        data.args[data.cbIdx] = function () {
          task.invoke.apply(this, arguments);
        };

        setNative.apply(data.target, data.args);
        return task;
      }

      setNative = patchMethod(obj, funcName, function (delegate) {
        return function (self, args) {
          var meta = metaCreator(self, args);

          if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
          } else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
          }
        };
      });
    }

    function attachOriginToPatched(patched, original) {
      patched[zoneSymbol('OriginalDelegate')] = original;
    }

    var isDetectedIEOrEdge = false;
    var ieOrEdge = false;

    function isIE() {
      try {
        var ua = internalWindow.navigator.userAgent;

        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
          return true;
        }
      } catch (error) {}

      return false;
    }

    function isIEOrEdge() {
      if (isDetectedIEOrEdge) {
        return ieOrEdge;
      }

      isDetectedIEOrEdge = true;

      try {
        var ua = internalWindow.navigator.userAgent;

        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
          ieOrEdge = true;
        }
      } catch (error) {}

      return ieOrEdge;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function


    Zone.__load_patch('toString', function (global) {
      // patch Func.prototype.toString to let them look like native
      var originalFunctionToString = Function.prototype.toString;
      var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
      var PROMISE_SYMBOL = zoneSymbol('Promise');
      var ERROR_SYMBOL = zoneSymbol('Error');

      var newFunctionToString = function toString() {
        if (typeof this === 'function') {
          var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

          if (originalDelegate) {
            if (typeof originalDelegate === 'function') {
              return originalFunctionToString.call(originalDelegate);
            } else {
              return Object.prototype.toString.call(originalDelegate);
            }
          }

          if (this === Promise) {
            var nativePromise = global[PROMISE_SYMBOL];

            if (nativePromise) {
              return originalFunctionToString.call(nativePromise);
            }
          }

          if (this === Error) {
            var nativeError = global[ERROR_SYMBOL];

            if (nativeError) {
              return originalFunctionToString.call(nativeError);
            }
          }
        }

        return originalFunctionToString.call(this);
      };

      newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
      Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

      var originalObjectToString = Object.prototype.toString;
      var PROMISE_OBJECT_TO_STRING = '[object Promise]';

      Object.prototype.toString = function () {
        if (this instanceof Promise) {
          return PROMISE_OBJECT_TO_STRING;
        }

        return originalObjectToString.call(this);
      };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    var passiveSupported = false;

    if (typeof window !== 'undefined') {
      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
      } catch (err) {
        passiveSupported = false;
      }
    } // an identifier to tell ZoneTask do not create a new invoke closure


    var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
      useG: true
    };
    var zoneSymbolEventNames$1 = {};
    var globalSources = {};
    var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
    var IMMEDIATE_PROPAGATION_SYMBOL = '__zone_symbol__propagationStopped';

    function patchEventTarget(_global, apis, patchOptions) {
      var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
      var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
      var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
      var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
      var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
      var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
      var PREPEND_EVENT_LISTENER = 'prependListener';
      var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

      var invokeTask = function invokeTask(task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
          return;
        }

        var delegate = task.callback;

        if (typeof delegate === 'object' && delegate.handleEvent) {
          // create the bind version of handleEvent when invoke
          task.callback = function (event) {
            return delegate.handleEvent(event);
          };

          task.originalDelegate = delegate;
        } // invoke static task.invoke


        task.invoke(task, target, [event]);
        var options = task.options;

        if (options && typeof options === 'object' && options.once) {
          // if options.once is true, after invoke once remove listener here
          // only browser need to do this, nodejs eventEmitter will cal removeListener
          // inside EventEmitter.once
          var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

          target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
        }
      }; // global shared zoneAwareCallback to handle all event callback with capture = false


      var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        } // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190


        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

        if (tasks) {
          // invoke all tasks which attached to current target with given event.type and capture = false
          // for performance concern, if task.length === 1, just invoke
          if (tasks.length === 1) {
            invokeTask(tasks[0], target, event);
          } else {
            // https://github.com/angular/zone.js/issues/836
            // copy the tasks array before invoke, to avoid
            // the callback will remove itself or other listener
            var copyTasks = tasks.slice();

            for (var i = 0; i < copyTasks.length; i++) {
              if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                break;
              }

              invokeTask(copyTasks[i], target, event);
            }
          }
        }
      }; // global shared zoneAwareCallback to handle all event callback with capture = true


      var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        } // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190


        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

        if (tasks) {
          // invoke all tasks which attached to current target with given event.type and capture = false
          // for performance concern, if task.length === 1, just invoke
          if (tasks.length === 1) {
            invokeTask(tasks[0], target, event);
          } else {
            // https://github.com/angular/zone.js/issues/836
            // copy the tasks array before invoke, to avoid
            // the callback will remove itself or other listener
            var copyTasks = tasks.slice();

            for (var i = 0; i < copyTasks.length; i++) {
              if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                break;
              }

              invokeTask(copyTasks[i], target, event);
            }
          }
        }
      };

      function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
          return false;
        }

        var useGlobalCallback = true;

        if (patchOptions && patchOptions.useG !== undefined) {
          useGlobalCallback = patchOptions.useG;
        }

        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;

        if (patchOptions && patchOptions.chkDup !== undefined) {
          checkDuplicate = patchOptions.chkDup;
        }

        var returnTarget = false;

        if (patchOptions && patchOptions.rt !== undefined) {
          returnTarget = patchOptions.rt;
        }

        var proto = obj;

        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && obj[ADD_EVENT_LISTENER]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = obj;
        }

        if (!proto) {
          return false;
        }

        if (proto[zoneSymbolAddEventListener]) {
          return false;
        }

        var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data

        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;

        if (patchOptions && patchOptions.prepend) {
          nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
        }

        function checkIsPassive(task) {
          if (!passiveSupported && typeof taskData.options !== 'boolean' && typeof taskData.options !== 'undefined' && taskData.options !== null) {
            // options is a non-null non-undefined object
            // passive is not supported
            // don't pass options as object
            // just pass capture as a boolean
            task.options = !!taskData.options.capture;
            taskData.options = task.options;
          }
        }

        var customScheduleGlobal = function customScheduleGlobal(task) {
          // if there is already a task for the eventName + capture,
          // just return, because we use the shared globalZoneAwareCallback here.
          if (taskData.isExisting) {
            return;
          }

          checkIsPassive(task);
          return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };

        var customCancelGlobal = function customCancelGlobal(task) {
          // if task is not marked as isRemoved, this call is directly
          // from Zone.prototype.cancelTask, we should remove the task
          // from tasksList of target first
          if (!task.isRemoved) {
            var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && task.target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (existingTask === task) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  task.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    task.allRemoved = true;
                    task.target[symbolEventName] = null;
                  }

                  break;
                }
              }
            }
          } // if all tasks for the eventName + capture have gone,
          // we will really remove the global event callback,
          // if not, return


          if (!task.allRemoved) {
            return;
          }

          return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };

        var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
          checkIsPassive(task);
          return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };

        var customSchedulePrepend = function customSchedulePrepend(task) {
          return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };

        var customCancelNonGlobal = function customCancelNonGlobal(task) {
          return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };

        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

        var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
          var typeOfDelegate = typeof delegate;
          return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
        };

        var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;

        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];

        var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
          var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          return function () {
            var target = this || _global;
            var eventName = arguments[0];
            var delegate = arguments[1];

            if (!delegate) {
              return nativeListener.apply(this, arguments);
            }

            if (isNode && eventName === 'uncaughtException') {
              // don't patch uncaughtException of nodejs to prevent endless loop
              return nativeListener.apply(this, arguments);
            } // don't create the bind delegate function for handleEvent
            // case here to improve addEventListener performance
            // we will create the bind delegate when invoke


            var isHandleEvent = false;

            if (typeof delegate !== 'function') {
              if (!delegate.handleEvent) {
                return nativeListener.apply(this, arguments);
              }

              isHandleEvent = true;
            }

            if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
              return;
            }

            var options = arguments[2];

            if (blackListedEvents) {
              // check black list
              for (var i = 0; i < blackListedEvents.length; i++) {
                if (eventName === blackListedEvents[i]) {
                  return nativeListener.apply(this, arguments);
                }
              }
            }

            var capture;
            var once = false;

            if (options === undefined) {
              capture = false;
            } else if (options === true) {
              capture = true;
            } else if (options === false) {
              capture = false;
            } else {
              capture = options ? !!options.capture : false;
              once = options ? !!options.once : false;
            }

            var zone = Zone.current;
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (!symbolEventNames) {
              // the code is duplicate, but I just want to get some better performance
              var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
              var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
              var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
              var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
              zoneSymbolEventNames$1[eventName] = {};
              zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
              zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
              symbolEventName = capture ? symbolCapture : symbol;
            } else {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = target[symbolEventName];
            var isExisting = false;

            if (existingTasks) {
              // already have task registered
              isExisting = true;

              if (checkDuplicate) {
                for (var _i = 0; _i < existingTasks.length; _i++) {
                  if (compare(existingTasks[_i], delegate)) {
                    // same callback, same capture, same event name, just return
                    return;
                  }
                }
              }
            } else {
              existingTasks = target[symbolEventName] = [];
            }

            var source;
            var constructorName = target.constructor['name'];
            var targetSource = globalSources[constructorName];

            if (targetSource) {
              source = targetSource[eventName];
            }

            if (!source) {
              source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
            } // do not create a new object as task.data to pass those things
            // just use the global shared one


            taskData.options = options;

            if (once) {
              // if addEventListener with once options, we don't pass it to
              // native addEventListener, instead we keep the once setting
              // and handle ourselves.
              taskData.options.once = false;
            }

            taskData.target = target;
            taskData.capture = capture;
            taskData.eventName = eventName;
            taskData.isExisting = isExisting;
            var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

            if (data) {
              data.taskData = taskData;
            }

            var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
            // issue, https://github.com/angular/angular/issues/20442

            taskData.target = null; // need to clear up taskData because it is a global object

            if (data) {
              data.taskData = null;
            } // have to save those information to task in case
            // application may call task.zone.cancelTask() directly


            if (once) {
              options.once = true;
            }

            if (!(!passiveSupported && typeof task.options === 'boolean')) {
              // if not support passive, and we pass an option object
              // to addEventListener, we should save the options to task
              task.options = options;
            }

            task.target = target;
            task.capture = capture;
            task.eventName = eventName;

            if (isHandleEvent) {
              // save original delegate for compare to check duplicate
              task.originalDelegate = delegate;
            }

            if (!prepend) {
              existingTasks.push(task);
            } else {
              existingTasks.unshift(task);
            }

            if (returnTarget) {
              return target;
            }
          };
        };

        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

        if (nativePrependEventListener) {
          proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }

        proto[REMOVE_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          var options = arguments[2];
          var capture;

          if (options === undefined) {
            capture = false;
          } else if (options === true) {
            capture = true;
          } else if (options === false) {
            capture = false;
          } else {
            capture = options ? !!options.capture : false;
          }

          var delegate = arguments[1];

          if (!delegate) {
            return nativeRemoveEventListener.apply(this, arguments);
          }

          if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
            return;
          }

          var symbolEventNames = zoneSymbolEventNames$1[eventName];
          var symbolEventName;

          if (symbolEventNames) {
            symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          }

          var existingTasks = symbolEventName && target[symbolEventName];

          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];

              if (compare(existingTask, delegate)) {
                existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                existingTask.isRemoved = true;

                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  existingTask.allRemoved = true;
                  target[symbolEventName] = null;
                }

                existingTask.zone.cancelTask(existingTask);

                if (returnTarget) {
                  return target;
                }

                return;
              }
            }
          } // issue 930, didn't find the event name or callback
          // from zone kept existingTasks, the callback maybe
          // added outside of zone, we need to call native removeEventListener
          // to try to remove it.


          return nativeRemoveEventListener.apply(this, arguments);
        };

        proto[LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          var listeners = [];
          var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

          for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            listeners.push(delegate);
          }

          return listeners;
        };

        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];

          if (!eventName) {
            var keys = Object.keys(target);

            for (var i = 0; i < keys.length; i++) {
              var prop = keys[i];
              var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
              var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
              // used for monitoring the removeListener call,
              // so just keep removeListener eventListener until
              // all other eventListeners are removed

              if (evtName && evtName !== 'removeListener') {
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
              }
            } // remove removeListener listener finally


            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
          } else {
            var symbolEventNames = zoneSymbolEventNames$1[eventName];

            if (symbolEventNames) {
              var symbolEventName = symbolEventNames[FALSE_STR];
              var symbolCaptureEventName = symbolEventNames[TRUE_STR];
              var tasks = target[symbolEventName];
              var captureTasks = target[symbolCaptureEventName];

              if (tasks) {
                var removeTasks = tasks.slice();

                for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                  var task = removeTasks[_i2];
                  var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                  this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                }
              }

              if (captureTasks) {
                var _removeTasks = captureTasks.slice();

                for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                  var _task = _removeTasks[_i3];

                  var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                  this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                }
              }
            }
          }

          if (returnTarget) {
            return this;
          }
        }; // for native toString patch


        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

        if (nativeRemoveAllListeners) {
          attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }

        if (nativeListeners) {
          attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }

        return true;
      }

      var results = [];

      for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
      }

      return results;
    }

    function findEventTasks(target, eventName) {
      var foundTasks = [];

      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];

        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];

          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }

      return foundTasks;
    }

    function patchEventPrototype(global, api) {
      var Event = global['Event'];

      if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
          return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not

            delegate && delegate.apply(self, args);
          };
        });
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function patchCallbacks(api, target, targetName, method, callbacks) {
      var symbol = Zone.__symbol__(method);

      if (target[symbol]) {
        return;
      }

      var nativeDelegate = target[symbol] = target[method];

      target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
          callbacks.forEach(function (callback) {
            var source = "".concat(targetName, ".").concat(method, "::") + callback;
            var prototype = opts.prototype;

            if (prototype.hasOwnProperty(callback)) {
              var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

              if (descriptor && descriptor.value) {
                descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                api._redefineProperty(opts.prototype, callback, descriptor);
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          });
        }

        return nativeDelegate.call(target, name, opts, options);
      };

      api.attachOriginToPatched(target[method], nativeDelegate);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /*
     * This is necessary for Chrome and Chrome mobile, to enable
     * things like redefining `createdCallback` on an element.
     */


    var zoneSymbol$1 = Zone.__symbol__;

    var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;

    var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;

    var _create = Object.create;
    var unconfigurablesKey = zoneSymbol$1('unconfigurables');

    function propertyPatch() {
      Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
          throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }

        var originalConfigurableFlag = desc.configurable;

        if (prop !== 'prototype') {
          desc = rewriteDescriptor(obj, prop, desc);
        }

        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
      };

      Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
          Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
      };

      Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
          Object.keys(proto).forEach(function (prop) {
            proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
          });
        }

        return _create(obj, proto);
      };

      Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);

        if (desc && isUnconfigurable(obj, prop)) {
          desc.configurable = false;
        }

        return desc;
      };
    }

    function _redefineProperty(obj, prop, desc) {
      var originalConfigurableFlag = desc.configurable;
      desc = rewriteDescriptor(obj, prop, desc);
      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    }

    function isUnconfigurable(obj, prop) {
      return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
    }

    function rewriteDescriptor(obj, prop, desc) {
      // issue-927, if the desc is frozen, don't try to change the desc
      if (!Object.isFrozen(desc)) {
        desc.configurable = true;
      }

      if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
          _defineProperty(obj, unconfigurablesKey, {
            writable: true,
            value: {}
          });
        }

        if (obj[unconfigurablesKey]) {
          obj[unconfigurablesKey][prop] = true;
        }
      }

      return desc;
    }

    function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
      try {
        return _defineProperty(obj, prop, desc);
      } catch (error) {
        if (desc.configurable) {
          // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
          // retry with the original flag value
          if (typeof originalConfigurableFlag == 'undefined') {
            delete desc.configurable;
          } else {
            desc.configurable = originalConfigurableFlag;
          }

          try {
            return _defineProperty(obj, prop, desc);
          } catch (error) {
            var descJson = null;

            try {
              descJson = JSON.stringify(desc);
            } catch (error) {
              descJson = desc.toString();
            }

            console.log("Attempting to configure '".concat(prop, "' with descriptor '").concat(descJson, "' on object '").concat(obj, "' and got error, giving up: ").concat(error));
          }
        } else {
          throw error;
        }
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {globalThis}
     */


    var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
    var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
    var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplyconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
    var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
    var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
    var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    var formEventNames = ['autocomplete', 'autocompleteerror'];
    var detailEventNames = ['toggle'];
    var frameEventNames = ['load'];
    var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    var marqueeEventNames = ['bounce', 'finish', 'start'];
    var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
    var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    var websocketEventNames = ['close', 'error', 'open', 'message'];
    var workerEventNames = ['error', 'message'];
    var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

    function filterProperties(target, onProperties, ignoreProperties) {
      if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
      }

      var tip = ignoreProperties.filter(function (ip) {
        return ip.target === target;
      });

      if (!tip || tip.length === 0) {
        return onProperties;
      }

      var targetIgnoreProperties = tip[0].ignoreProperties;
      return onProperties.filter(function (op) {
        return targetIgnoreProperties.indexOf(op) === -1;
      });
    }

    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
      // check whether target is available, sometimes target will be undefined
      // because different browser or some 3rd party plugin.
      if (!target) {
        return;
      }

      var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
      patchOnProperties(target, filteredProperties, prototype);
    }

    function propertyDescriptorPatch(api, _global) {
      if (isNode && !isMix) {
        return;
      }

      if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
      }

      var supportsWebSocket = typeof WebSocket !== 'undefined';
      var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

      if (isBrowser) {
        var _internalWindow = window;
        var ignoreErrorProperties = isIE ? [{
          target: _internalWindow,
          ignoreProperties: ['error']
        }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not

        patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

        if (typeof _internalWindow['SVGElement'] !== 'undefined') {
          patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }

        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

        if (HTMLMarqueeElement) {
          patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
        }

        var Worker = _internalWindow['Worker'];

        if (Worker) {
          patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
        }
      }

      var XMLHttpRequest = _global['XMLHttpRequest'];

      if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
      }

      var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
      }

      if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
      }

      if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    Zone.__load_patch('util', function (global, Zone, api) {
      api.patchOnProperties = patchOnProperties;
      api.patchMethod = patchMethod;
      api.bindArguments = bindArguments;
      api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
      // define which events will not be patched by `Zone.js`.
      // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
      // the name consistent with angular repo.
      // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
      // backwards compatibility.

      var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

      var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

      if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
      }

      if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
      }

      api.patchEventPrototype = patchEventPrototype;
      api.patchEventTarget = patchEventTarget;
      api.isIEOrEdge = isIEOrEdge;
      api.ObjectDefineProperty = ObjectDefineProperty;
      api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
      api.ObjectCreate = ObjectCreate;
      api.ArraySlice = ArraySlice;
      api.patchClass = patchClass;
      api.wrapWithCurrentZone = wrapWithCurrentZone;
      api.filterProperties = filterProperties;
      api.attachOriginToPatched = attachOriginToPatched;
      api._redefineProperty = _redefineProperty;
      api.patchCallbacks = patchCallbacks;

      api.getGlobalObjects = function () {
        return {
          globalSources: globalSources,
          zoneSymbolEventNames: zoneSymbolEventNames$1,
          eventNames: eventNames,
          isBrowser: isBrowser,
          isMix: isMix,
          isNode: isNode,
          TRUE_STR: TRUE_STR,
          FALSE_STR: FALSE_STR,
          ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
          ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
          REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
        };
      };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    var taskSymbol = zoneSymbol('zoneTask');

    function patchTimer(window, setName, cancelName, nameSuffix) {
      var setNative = null;
      var clearNative = null;
      setName += nameSuffix;
      cancelName += nameSuffix;
      var tasksByHandleId = {};

      function scheduleTask(task) {
        var data = task.data;

        function timer() {
          try {
            task.invoke.apply(this, arguments);
          } finally {
            // issue-934, task will be cancelled
            // even it is a periodic task such as
            // setInterval
            if (!(task.data && task.data.isPeriodic)) {
              if (typeof data.handleId === 'number') {
                // in non-nodejs env, we remove timerId
                // from local cache
                delete tasksByHandleId[data.handleId];
              } else if (data.handleId) {
                // Node returns complex objects as handleIds
                // we remove task reference from timer object
                data.handleId[taskSymbol] = null;
              }
            }
          }
        }

        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
      }

      function clearTask(task) {
        return clearNative(task.data.handleId);
      }

      setNative = patchMethod(window, setName, function (delegate) {
        return function (self, args) {
          if (typeof args[0] === 'function') {
            var _options = {
              isPeriodic: nameSuffix === 'Interval',
              delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
              args: args
            };
            var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

            if (!task) {
              return task;
            } // Node.js must additionally support the ref and unref functions.


            var handle = task.data.handleId;

            if (typeof handle === 'number') {
              // for non nodejs env, we save handleId: task
              // mapping in local cache for clearTimeout
              tasksByHandleId[handle] = task;
            } else if (handle) {
              // for nodejs env, we save task
              // reference in timerId Object for clearTimeout
              handle[taskSymbol] = task;
            } // check whether handle is null, because some polyfill or browser
            // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


            if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
              task.ref = handle.ref.bind(handle);
              task.unref = handle.unref.bind(handle);
            }

            if (typeof handle === 'number' || handle) {
              return handle;
            }

            return task;
          } else {
            // cause an error by calling it directly.
            return delegate.apply(window, args);
          }
        };
      });
      clearNative = patchMethod(window, cancelName, function (delegate) {
        return function (self, args) {
          var id = args[0];
          var task;

          if (typeof id === 'number') {
            // non nodejs env.
            task = tasksByHandleId[id];
          } else {
            // nodejs env.
            task = id && id[taskSymbol]; // other environments.

            if (!task) {
              task = id;
            }
          }

          if (task && typeof task.type === 'string') {
            if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
              if (typeof id === 'number') {
                delete tasksByHandleId[id];
              } else if (id) {
                id[taskSymbol] = null;
              } // Do not cancel already canceled functions


              task.zone.cancelTask(task);
            }
          } else {
            // cause an error by calling it directly.
            delegate.apply(window, args);
          }
        };
      });
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function patchCustomElements(_global, api) {
      var _api$getGlobalObjects = api.getGlobalObjects(),
          isBrowser = _api$getGlobalObjects.isBrowser,
          isMix = _api$getGlobalObjects.isMix;

      if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
        return;
      }

      var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
      api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function eventTargetPatch(_global, api) {
      if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
      }

      var _api$getGlobalObjects2 = api.getGlobalObjects(),
          eventNames = _api$getGlobalObjects2.eventNames,
          zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
          TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
          FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
          ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


      for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
      }

      var EVENT_TARGET = _global['EventTarget'];

      if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
      }

      api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
      return true;
    }

    function patchEvent(global, api) {
      api.patchEventPrototype(global, api);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    Zone.__load_patch('legacy', function (global) {
      var legacyPatch = global[Zone.__symbol__('legacyPatch')];

      if (legacyPatch) {
        legacyPatch();
      }
    });

    Zone.__load_patch('timers', function (global) {
      var set = 'set';
      var clear = 'clear';
      patchTimer(global, set, clear, 'Timeout');
      patchTimer(global, set, clear, 'Interval');
      patchTimer(global, set, clear, 'Immediate');
    });

    Zone.__load_patch('requestAnimationFrame', function (global) {
      patchTimer(global, 'request', 'cancel', 'AnimationFrame');
      patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
      patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });

    Zone.__load_patch('blocking', function (global, Zone) {
      var blockingMethods = ['alert', 'prompt', 'confirm'];

      for (var i = 0; i < blockingMethods.length; i++) {
        var name = blockingMethods[i];
        patchMethod(global, name, function (delegate, symbol, name) {
          return function (s, args) {
            return Zone.current.run(delegate, global, args, name);
          };
        });
      }
    });

    Zone.__load_patch('EventTarget', function (global, Zone, api) {
      patchEvent(global, api);
      eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

      var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
      }

      patchClass('MutationObserver');
      patchClass('WebKitMutationObserver');
      patchClass('IntersectionObserver');
      patchClass('FileReader');
    });

    Zone.__load_patch('on_property', function (global, Zone, api) {
      propertyDescriptorPatch(api, global);
      propertyPatch();
    });

    Zone.__load_patch('customElements', function (global, Zone, api) {
      patchCustomElements(global, api);
    });

    Zone.__load_patch('XHR', function (global, Zone) {
      // Treat XMLHttpRequest as a macrotask.
      patchXHR(global);
      var XHR_TASK = zoneSymbol('xhrTask');
      var XHR_SYNC = zoneSymbol('xhrSync');
      var XHR_LISTENER = zoneSymbol('xhrListener');
      var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
      var XHR_URL = zoneSymbol('xhrURL');
      var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

      function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];

        if (!XMLHttpRequest) {
          // XMLHttpRequest is not available in service worker
          return;
        }

        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

        function findPendingTask(target) {
          return target[XHR_TASK];
        }

        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

        if (!oriAddListener) {
          var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

          if (XMLHttpRequestEventTarget) {
            var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }
        }

        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';

        function scheduleTask(task) {
          var data = task.data;
          var target = data.target;
          target[XHR_SCHEDULED] = false;
          target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

          var listener = target[XHR_LISTENER];

          if (!oriAddListener) {
            oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }

          if (listener) {
            oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
          }

          var newListener = target[XHR_LISTENER] = function () {
            if (target.readyState === target.DONE) {
              // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
              // readyState=4 multiple times, so we need to check task state here
              if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                // check whether the xhr has registered onload listener
                // if that is the case, the task should invoke after all
                // onload listeners finish.
                var loadTasks = target['__zone_symbol__loadfalse'];

                if (loadTasks && loadTasks.length > 0) {
                  var oriInvoke = task.invoke;

                  task.invoke = function () {
                    // need to load the tasks again, because in other
                    // load listener, they may remove themselves
                    var loadTasks = target['__zone_symbol__loadfalse'];

                    for (var i = 0; i < loadTasks.length; i++) {
                      if (loadTasks[i] === task) {
                        loadTasks.splice(i, 1);
                      }
                    }

                    if (!data.aborted && task.state === SCHEDULED) {
                      oriInvoke.call(task);
                    }
                  };

                  loadTasks.push(task);
                } else {
                  task.invoke();
                }
              } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                // error occurs when xhr.send()
                target[XHR_ERROR_BEFORE_SCHEDULED] = true;
              }
            }
          };

          oriAddListener.call(target, READY_STATE_CHANGE, newListener);
          var storedTask = target[XHR_TASK];

          if (!storedTask) {
            target[XHR_TASK] = task;
          }

          sendNative.apply(target, data.args);
          target[XHR_SCHEDULED] = true;
          return task;
        }

        function placeholderCallback() {}

        function clearTask(task) {
          var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
          // to prevent it from firing. So instead, we store info for the event listener.

          data.aborted = true;
          return abortNative.apply(data.target, data.args);
        }

        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
          return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
          };
        });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
          return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
              // a fetch is scheduling, so we are using xhr to polyfill fetch
              // and because we already schedule macroTask for fetch, we should
              // not schedule a macroTask for xhr again
              return sendNative.apply(self, args);
            }

            if (self[XHR_SYNC]) {
              // if the XHR is sync there is no task to schedule, just execute the code.
              return sendNative.apply(self, args);
            } else {
              var _options2 = {
                target: self,
                url: self[XHR_URL],
                isPeriodic: false,
                args: args,
                aborted: false
              };
              var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

              if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                // xhr request throw error when send
                // we should invoke task instead of leaving a scheduled
                // pending macroTask
                task.invoke();
              }
            }
          };
        });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
          return function (self, args) {
            var task = findPendingTask(self);

            if (task && typeof task.type == 'string') {
              // If the XHR has already completed, do nothing.
              // If the XHR has already been aborted, do nothing.
              // Fix #569, call abort multiple times before done will cause
              // macroTask task count be negative number
              if (task.cancelFn == null || task.data && task.data.aborted) {
                return;
              }

              task.zone.cancelTask(task);
            } else if (Zone.current[fetchTaskAborting] === true) {
              // the abort is called from fetch polyfill, we need to call native abort of XHR.
              return abortNative.apply(self, args);
            } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.

          };
        });
      }
    });

    Zone.__load_patch('geolocation', function (global) {
      /// GEO_LOCATION
      if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
      }
    });

    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
      // handle unhandled promise rejection
      function findPromiseRejectionHandler(evtName) {
        return function (e) {
          var eventTasks = findEventTasks(global, evtName);
          eventTasks.forEach(function (eventTask) {
            // windows has added unhandledrejection event listener
            // trigger the event listener
            var PromiseRejectionEvent = global['PromiseRejectionEvent'];

            if (PromiseRejectionEvent) {
              var evt = new PromiseRejectionEvent(evtName, {
                promise: e.promise,
                reason: e.rejection
              });
              eventTask.invoke(evt);
            }
          });
        };
      }

      if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
      }
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n    font-family: Lato;\n}\n\nvideo {\n    width: 600px;\n    height: auto;\n}\n\n.buttons {\n    display: flex;\n}\n\nbutton, .file-upload, .form-buttons {\n    align-items: center;\n    background: #F26C32;\n    border-radius: 4px;\n    border: 1px solid #F26C32;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    padding: .65em 1.5em;\n    text-align: center;\n    text-decoration: none;\n    transition: all .2s;\n    color: #fff;\n    margin: 20px;\n}\n\n.right-btn {\n  margin-left: 5px;\n}\n\n.container {\n    max-width: 980px;\n    margin: auto;\n}\n\n.canvas-wrapper canvas {\n    width: 600px;\n    height: auto;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.inputfile {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n\n.form-container {\n    margin-top: 20px;\n}\n\nimg {\n  width: 600px;\n  height: auto;\n  max-width: 100%;\n}\n\nh1 {\n  font-weight: 500;\n  font-size: 2.281rem;\n  line-height: 1.125em;\n  color: #4a4a4a;\n  margin: 0 0 12px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbn1cblxudmlkZW8ge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5idXR0b24sIC5maWxlLXVwbG9hZCwgLmZvcm0tYnV0dG9ucyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRjI2QzMyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjI2QzMyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IC42NWVtIDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5yaWdodC1idG4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhbnZhcy13cmFwcGVyIGNhbnZhcyB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRmaWxlIHtcbiAgICB3aWR0aDogMC4xcHg7XG4gICAgaGVpZ2h0OiAwLjFweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyLjI4MXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1ZW07XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBtYXJnaW46IDAgMCAxMnB4IDA7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./upload.service */
    "./src/app/upload.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(renderer, http, uploadService) {
        _classCallCheck(this, AppComponent);

        this.renderer = renderer;
        this.http = http;
        this.uploadService = uploadService;
        this.isVideo = false;
        this.isStartCamera = false;
        this.showForm = false;
        this.videoWidth = 0;
        this.videoHeight = 0;
        this.constraints = {
          video: {
            facingMode: 'environment',
            width: {
              ideal: 4096
            },
            height: {
              ideal: 2160
            }
          }
        };
      }

      _createClass(AppComponent, [{
        key: "startCamera",
        value: function startCamera() {
          var _this3 = this;

          if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            navigator.mediaDevices.getUserMedia(this.constraints).then(function (ms) {
              return _this3.attachVideo(ms);
            });
            this.isStartCamera = true;
          } else {
            alert('Sorry, camera not available.');
          }
        }
      }, {
        key: "attachVideo",
        value: function attachVideo(stream) {
          var _this4 = this;

          this.mediaStream = stream;
          this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
          this.renderer.listen(this.videoElement.nativeElement, 'play', function (event) {
            _this4.videoHeight = _this4.videoElement.nativeElement.videoHeight;
            _this4.videoWidth = _this4.videoElement.nativeElement.videoWidth;
          });
          this.canvas.nativeElement.style.display = 'none';
          this.videoElement.nativeElement.style.display = 'block';
          this.isVideo = true;
        }
      }, {
        key: "capture",
        value: function capture() {
          this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
          this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
          this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
          this.canvas.nativeElement.style.display = 'block';
          this.videoElement.nativeElement.style.display = 'none';
          this.postRequest();
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log('Error: ', error);
          return [];
        }
      }, {
        key: "postRequest",
        value: function postRequest() {
          this.onStop();
          var img = document.createElement('img');
          img.src = this.canvas.nativeElement.toDataURL('image/jpeg');
          this.dataURIToBlob(img.src);
        }
      }, {
        key: "dataURIToBlob",
        value: function dataURIToBlob(dataURI) {
          var _this5 = this;

          fetch(dataURI).then(function (res) {
            return res.blob();
          }).then(function (blob) {
            var file = new File([blob], 'File name', {
              type: 'image/png'
            });

            _this5.uploadFile(file);
          }); // return new Blob([ia], { type: mimeString });
        }
      }, {
        key: "onStop",
        value: function onStop() {
          this.videoElement.nativeElement.pause();
          this.videoElement.nativeElement.srcObject.getVideoTracks()[0].stop();
          this.videoElement.nativeElement.srcObject = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.videoElement.nativeElement.srcObject.getVideoTracks()[0].stop();
        }
      }, {
        key: "populateForm",
        value: function populateForm(extractedData) {
          this.extractedImageData = extractedData;
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          var _this6 = this;

          this.showForm = false;
          this.isStartCamera = false;

          if (this.videoElement.nativeElement || this.canvas.nativeElement) {
            this.canvas.nativeElement.style.display = 'none';
            this.videoElement.nativeElement.style.display = 'none';
          }

          var reader = new FileReader();
          var file = event.target.files[0];
          this.uploadFile(file);

          if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(file);

            reader.onload = function () {
              _this6.url = reader.result;
            };
          }
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(file) {
          var _this7 = this;

          var formData = new FormData();
          formData.append('file', file);
          file.inProgress = true;
          this.uploadService.upload(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            _this7.showForm = true;
            var data = res;

            _this7.populateForm(data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            file.inProgress = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])("upload failed.");
          })).subscribe(function (event) {
            if (typeof event === 'object') {}
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('video', {
      "static": true
    })], AppComponent.prototype, "videoElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', {
      "static": true
    })], AppComponent.prototype, "canvas", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/form/form.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/form/form.component.css":
  /*!*****************************************!*\
    !*** ./src/app/form/form.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n    /* Center the form on the page */\n    margin: 0 auto;\n    width: 400px;\n    /* Form outline */\n    padding: 1em;\n    border: 1px solid #CCC;\n    border-radius: 1em;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\nform li + li {\n    margin-top: 1em;\n}\n\nlabel {\n    /* Uniform size & alignment */\n    display: inline-block;\n    width: 120px;\n    text-align: right;\n    padding-right: 5px;\n}\n\ninput,\ntextarea {\n    /* To make sure that all text fields have the same font settings\n       By default, textareas have a monospace font */\n    font: 1em sans-serif;\n\n    /* Uniform text field size */\n    width: 250px;\n    box-sizing: border-box;\n\n    /* Match form field borders */\n    border: 1px solid #999;\n}\n\ninput:focus,\ntextarea:focus {\n    /* Additional highlight for focused elements */\n    border-color: #000;\n}\n\ntextarea {\n    /* Align multiline text fields with their labels */\n    vertical-align: top;\n\n    /* Provide space to type some text */\n    height: 5em;\n}\n\n.button {\n    /* Align buttons with the text fields */\n    padding-left: 90px; /* same size as the label elements */\n}\n\nbutton {\n    /* This extra margin represent roughly the same space as the space\n       between the labels and their text fields */\n    margin-left: .5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJO29EQUNnRDtJQUNoRCxvQkFBb0I7O0lBRXBCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osc0JBQXNCOztJQUV0Qiw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLDhDQUE4QztJQUM5QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsbUJBQW1COztJQUVuQixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGtCQUFrQixFQUFFLG9DQUFvQztBQUM1RDs7QUFFQTtJQUNJO2lEQUM2QztJQUM3QyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIC8qIENlbnRlciB0aGUgZm9ybSBvbiB0aGUgcGFnZSAqL1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICAvKiBGb3JtIG91dGxpbmUgKi9cbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5mb3JtIGxpICsgbGkge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxubGFiZWwge1xuICAgIC8qIFVuaWZvcm0gc2l6ZSAmIGFsaWdubWVudCAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICAvKiBUbyBtYWtlIHN1cmUgdGhhdCBhbGwgdGV4dCBmaWVsZHMgaGF2ZSB0aGUgc2FtZSBmb250IHNldHRpbmdzXG4gICAgICAgQnkgZGVmYXVsdCwgdGV4dGFyZWFzIGhhdmUgYSBtb25vc3BhY2UgZm9udCAqL1xuICAgIGZvbnQ6IDFlbSBzYW5zLXNlcmlmO1xuXG4gICAgLyogVW5pZm9ybSB0ZXh0IGZpZWxkIHNpemUgKi9cbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC8qIE1hdGNoIGZvcm0gZmllbGQgYm9yZGVycyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICAgIC8qIEFkZGl0aW9uYWwgaGlnaGxpZ2h0IGZvciBmb2N1c2VkIGVsZW1lbnRzICovXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgLyogQWxpZ24gbXVsdGlsaW5lIHRleHQgZmllbGRzIHdpdGggdGhlaXIgbGFiZWxzICovXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcblxuICAgIC8qIFByb3ZpZGUgc3BhY2UgdG8gdHlwZSBzb21lIHRleHQgKi9cbiAgICBoZWlnaHQ6IDVlbTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgLyogQWxpZ24gYnV0dG9ucyB3aXRoIHRoZSB0ZXh0IGZpZWxkcyAqL1xuICAgIHBhZGRpbmctbGVmdDogOTBweDsgLyogc2FtZSBzaXplIGFzIHRoZSBsYWJlbCBlbGVtZW50cyAqL1xufVxuXG5idXR0b24ge1xuICAgIC8qIFRoaXMgZXh0cmEgbWFyZ2luIHJlcHJlc2VudCByb3VnaGx5IHRoZSBzYW1lIHNwYWNlIGFzIHRoZSBzcGFjZVxuICAgICAgIGJldHdlZW4gdGhlIGxhYmVscyBhbmQgdGhlaXIgdGV4dCBmaWVsZHMgKi9cbiAgICBtYXJnaW4tbGVmdDogLjVlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/form/form.component.ts":
  /*!****************************************!*\
    !*** ./src/app/form/form.component.ts ***!
    \****************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FormComponent = /*#__PURE__*/function () {
      function FormComponent() {
        _classCallCheck(this, FormComponent);
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.initFormData();
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(Object.values(this.extractedData).length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (i) {
            return [i, Object.values(_this8.extractedData)[i]];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                i = _ref2[0],
                val = _ref2[1];

            return _this8.formData[i] = val;
          })).subscribe();
        }
      }, {
        key: "initFormData",
        value: function initFormData() {
          this.formData = {
            0: null,
            1: null,
            2: null,
            3: null,
            4: null,
            5: null
          };
        }
      }]);

      return FormComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormComponent.prototype, "extractedData", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../app.component.css */
      "./src/app/app.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.css */
      "./src/app/form/form.component.css"))["default"]]
    })], FormComponent);
    /***/
  },

  /***/
  "./src/app/upload.service.ts":
  /*!***********************************!*\
    !*** ./src/app/upload.service.ts ***!
    \***********************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UploadService = /*#__PURE__*/function () {
      function UploadService(httpClient) {
        _classCallCheck(this, UploadService);

        this.httpClient = httpClient;
        this.SERVER_URL = 'http://localhost:9000/extract';
      }

      _createClass(UploadService, [{
        key: "upload",
        value: function upload(formData) {
          return this.httpClient.post(this.SERVER_URL, formData, {
            observe: 'events',
            reportProgress: true
          });
        }
      }]);

      return UploadService;
    }();

    UploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UploadService);
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./polyfills */
    "./src/polyfills.ts");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(function (ref) {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }

      window['ngRef'] = ref; // Otherwise, log the boot error
    })["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
    /**
     * This file includes polyfills needed by Angular and is loaded before the app.
     * You can add your own extra polyfills to this file.
     *
     * This file is divided into 2 sections:
     *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
     *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
     *      file.
     *
     * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
     * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
     * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
     *
     * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
     */

    /***************************************************************************************************
     * BROWSER POLYFILLS
     */

    /** IE9, IE10 and IE11 requires all of the following polyfills. **/
    // import 'core-js/es6/symbol';
    // import 'core-js/es6/object';
    // import 'core-js/es6/function';
    // import 'core-js/es6/parse-int';
    // import 'core-js/es6/parse-float';
    // import 'core-js/es6/number';
    // import 'core-js/es6/math';
    // import 'core-js/es6/string';
    // import 'core-js/es6/date';
    // import 'core-js/es6/array';
    // import 'core-js/es6/regexp';
    // import 'core-js/es6/map';
    // import 'core-js/es6/set';

    /** IE10 and IE11 requires the following for NgClass support on SVG elements */
    // import 'classlist.js';  // Run `npm install --save classlist.js`.

    /** IE10 and IE11 requires the following to support `@angular/animation`. */
    // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

    /** Evergreen browsers require these. **/
    // import 'core-js/es6/reflect';
    // import 'core-js/es7/reflect';

    /**
     * Web Animations `@angular/platform-browser/animations`
     * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
     * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
     */
    // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

    /***************************************************************************************************
     * Zone JS is required by Angular itself.
     */
    // Included with Angular CLI.

    /***************************************************************************************************
     * APPLICATION IMPORTS
     */

    /**
     * Date, currency, decimal and percent pipes.
     * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
     */
    // import 'intl';  // Run `npm install --save intl`.

    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/smita.trivedi/code/big5-extract-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map