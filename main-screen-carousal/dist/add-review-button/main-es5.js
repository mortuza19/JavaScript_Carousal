function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/add-review-form/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/review-form/review-form.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/add-review-form/node_modules/raw-loader/dist/cjs.js!./src/app/review-form/review-form.component.html ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReviewFormReviewFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"popup\" [ngClass]=\"{ 'email-popup': showEmailPopup }\">\n    <div class=\"review-section\" *ngIf=\"!showEmailPopup\">\n        <i class=\"fa fa-times-circle\" (click)=\"closePopup()\"></i>\n        <h3 class=\"restaurant_name\">FESTIVAL NAMES</h3>\n        <div>\n            <div class=\"add-rating\">\n                <span class=\"add-rating-span\">Add your ratings!</span>\n                <span class=\"rating\" (mouseout)=\"removeHighlight()\">\n                    <span class=\"fa fa-star\" [class.checked]=\"rating[star]\" (click)=\"chooseRating(star)\"\n                        (mouseenter)=\"hoverOnStars(star)\" *ngFor=\"let star of [0, 1, 2, 3, 4]\"></span>\n                </span>\n            </div>\n            <textarea [(ngModel)]=\"reviewText\" name=\"review\" id=\"add_review\" cols=\"30\" rows=\"14\"\n                placeholder=\"Add your review here...\"></textarea>\n        </div>\n        <div>\n            <button mat-stroked-button [disabled]=\"!dataSaved && !reviewText\" class=\"add_review_button submit-review\"\n                (click)=\"submitRating()\">\n                Submit Review\n            </button>\n        </div>\n    </div>\n\n    <div id=\"email-section\" class=\"email-cred\" *ngIf=\"showEmailPopup\">\n        <div class=\"skip-subscription\" (click)=\"closePopup()\">Skip</div>\n        <div class=\"restaurant_name\">KEEP IN TOUCH</div>\n        <p class=\"greeting-desc\">\n            signup for newsletters & receive a <b>15%</b> off promo code for your\n            first fest.\n        </p>\n        <div class=\"form-section\">\n            <div style=\"height: 100px;\">\n                <label class=\"email-label\" for=\"email\">Email Address</label>\n                <input class=\"email-input\" [class.invalid-email]=\"!isEmailValid\" [(ngModel)]=\"emailAddress\" type=\"email\" name=\"email\" id=\"reviewer_email\" (blur)=\"verifyEmail()\" />\n                <small style=\"color: darkred;\" *ngIf=\"!isEmailValid\">Email ID is not valid</small>\n            </div>\n            <div style=\"margin:5px 0px;\">\n                <button class=\"use-gmail\">Use Gmail</button>\n            </div>\n        </div>\n        <div class=\"submit-container\">\n            <button mat-stroked-button class=\"add_review_button submit-review\" (click)=\"submit()\" [disabled]=\"!emailAddress || !isEmailValid\">\n                Submit\n            </button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/uibutton/uibutton.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/add-review-form/node_modules/raw-loader/dist/cjs.js!./src/app/uibutton/uibutton.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUibuttonUibuttonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <button class=\"add_review_button\" mat-stroked-button (click)=\"openReviewPopup()\">WRITE REVIEW</button>\n</div>\n\n";
    /***/
  },

  /***/
  "../../node_modules/tslib/tslib.es6.js":
  /*!*************************************************************************************************************!*\
    !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/add-review-form/node_modules/tslib/tslib.es6.js ***!
    \*************************************************************************************************************/

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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZGQtcmV2aWV3LWJ1dHRvbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'add-review-button';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
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
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/elements */
    "../../node_modules/@angular/elements/fesm2015/elements.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _uibutton_uibutton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./uibutton/uibutton.component */
    "./src/app/uibutton/uibutton.component.ts");
    /* harmony import */


    var _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./review-form/review-form.component */
    "./src/app/review-form/review-form.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = /*#__PURE__*/function () {
      function AppModule(injector) {
        _classCallCheck(this, AppModule);

        this.injector = injector;
        var webComponent = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_4__["createCustomElement"])(_uibutton_uibutton_component__WEBPACK_IMPORTED_MODULE_6__["UIbuttonComponent"], {
          injector: injector
        });
        customElements.define('ui-button', webComponent);
      }

      _createClass(AppModule, [{
        key: "ngDoBootstrap",
        value: function ngDoBootstrap() {}
      }]);

      return AppModule;
    }();

    AppModule.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }];
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _uibutton_uibutton_component__WEBPACK_IMPORTED_MODULE_6__["UIbuttonComponent"], _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_7__["ReviewFormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]],
      providers: [],
      entryComponents: [_uibutton_uibutton_component__WEBPACK_IMPORTED_MODULE_6__["UIbuttonComponent"], _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_7__["ReviewFormComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/review-form/review-form.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/review-form/review-form.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReviewFormReviewFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-dialog-container {\r\n  background-color: #cdcdcd;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.popup {\r\n  max-width: 500px;\r\n  min-width: 300px;\r\n  height: 500px;\r\n  background-color: white;\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .popup {\r\n    width: 500px;\r\n    height: 500px;\r\n  }\r\n}\r\n\r\n.review-section {\r\n    position: relative;\r\n}\r\n\r\n.email-popup {\r\n  min-width: 250px;\r\n  max-width: 400px;\r\n  height: 400px;\r\n  border-radius: 0px;\r\n}\r\n\r\n.fa-times-circle {\r\n    font-size: 2em;\r\n    position: absolute;\r\n    right: 2px;\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n\r\n.restaurant_name {\r\n\r\n  font-size: 1.5em;\r\n  color: white;\r\n  height: 60px;\r\n  margin-bottom: 0px;\r\n  margin-top: 8px;\r\n  background-color: #5182f9;\r\n  font-weight: 400;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\ntextarea {\r\n  width: 90%;\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  border: 1px solid #cdcdcd;\r\n  font-family: Helvetica, sans-serif;\r\n  padding: 16px;\r\n  resize: initial;\r\n  margin: 0px 5%;\r\n  font-size: 1.1em;\r\n  outline: none;\r\n}\r\n\r\n.submit-review {\r\n  margin-top: 12px;\r\n  width: 100%;\r\n  height: 48px;\r\n  background-color: #5182f9;\r\n  color: white;\r\n  letter-spacing: 2px;\r\n  font-weight: 400;\r\n  border-radius: 0px;\r\n  font-size: 1.2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit-review:disabled {\r\n    opacity: 0.7;\r\n}\r\n\r\n.add-rating {\r\n  padding: 5px;\r\n  height: 45px;\r\n\r\n  color: #adadad;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.add-rating-span {\r\n  display: inline-block;\r\n  margin-right: 16px;\r\n}\r\n\r\n.fa {\r\n    padding: 5px;\r\n}\r\n\r\n.checked {\r\n  color: #ebee51;\r\n}\r\n\r\n.saved {\r\n  color: #ebee51;\r\n}\r\n\r\n.email-cred {\r\n  position: relative;\r\n}\r\n\r\n.skip-subscription {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  color: white;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n.greeting-header {\r\n\r\n  font-weight: 800;\r\n  font-size: 18px;\r\n  text-decoration: underline;\r\n  text-align: center;\r\n}\r\n\r\n.greeting-desc {\r\n  margin: auto;\r\n\r\n  font-size: 1.2em;\r\n  width: 90%;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  color: #5182f9;\r\n  padding: 16px;\r\n}\r\n\r\n.form-section {\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n\r\n.email-label {\r\n  display: block;\r\n\r\n  width: 100%;\r\n  padding-bottom: 8px;\r\n  font-size: 1.1em;\r\n  color: #adadad;\r\n}\r\n\r\n.email-input {\r\n  padding: 2px 5px;\r\n  width: 100%;\r\n  height: 45px;\r\n  border-radius: 2px;\r\n  border: 1px solid #cdcdcd;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.use-gmail {\r\n  width: 100%;\r\n  height: 45px;\r\n  border: 1px solid lightgray;\r\n  background-color: white;\r\n  box-shadow: 3px 5px 5px -1px #cdcdcd;\r\n  font-size: 1.1em;\r\n  color: #adadad;\r\n}\r\n\r\n.add-email {\r\n  float: right;\r\n  width: 40%;\r\n  height: 32px;\r\n  margin-top: 8px;\r\n  background-color: #003e87;\r\n  border: 1px solid white;\r\n  color: white;\r\n}\r\n\r\n.invalid-email {\r\n    border: 2px solid #c70202;\r\n}\r\n\r\n.submit-container {\r\n  margin-top: 15px;\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .submit-container {\r\n    margin-top: 45px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZC1yZXZpZXctYnV0dG9uL3NyYy9hcHAvcmV2aWV3LWZvcm0vcmV2aWV3LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7O0VBRVosY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZOztFQUVaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjOztFQUVkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InByb2plY3RzL2FkZC1yZXZpZXctYnV0dG9uL3NyYy9hcHAvcmV2aWV3LWZvcm0vcmV2aWV3LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkY2RjZDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucG9wdXAge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC5wb3B1cCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy1zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmVtYWlsLXBvcHVwIHtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5mYS10aW1lcy1jaXJjbGUge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmVzdGF1cmFudF9uYW1lIHtcclxuXHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxODJmOTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgcmVzaXplOiBpbml0aWFsO1xyXG4gIG1hcmdpbjogMHB4IDUlO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnN1Ym1pdC1yZXZpZXcge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTgyZjk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdWJtaXQtcmV2aWV3OmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmFkZC1yYXRpbmcge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcblxyXG4gIGNvbG9yOiAjYWRhZGFkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcblxyXG4uYWRkLXJhdGluZy1zcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uZmEge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uY2hlY2tlZCB7XHJcbiAgY29sb3I6ICNlYmVlNTE7XHJcbn1cclxuXHJcbi5zYXZlZCB7XHJcbiAgY29sb3I6ICNlYmVlNTE7XHJcbn1cclxuXHJcbi5lbWFpbC1jcmVkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5za2lwLXN1YnNjcmlwdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ncmVldGluZy1oZWFkZXIge1xyXG5cclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmVldGluZy1kZXNjIHtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzUxODJmOTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZm9ybS1zZWN0aW9uIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmVtYWlsLWxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGNvbG9yOiAjYWRhZGFkO1xyXG59XHJcblxyXG4uZW1haWwtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi51c2UtZ21haWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogM3B4IDVweCA1cHggLTFweCAjY2RjZGNkO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgY29sb3I6ICNhZGFkYWQ7XHJcbn1cclxuXHJcbi5hZGQtZW1haWwge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2U4NztcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWVtYWlsIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNzAyMDI7XHJcbn1cclxuXHJcbi5zdWJtaXQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gIC5zdWJtaXQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/review-form/review-form.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/review-form/review-form.component.ts ***!
    \******************************************************/

  /*! exports provided: ReviewFormComponent */

  /***/
  function srcAppReviewFormReviewFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewFormComponent", function () {
      return ReviewFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");

    var ReviewFormComponent = /*#__PURE__*/function () {
      function ReviewFormComponent(dialogRef) {
        _classCallCheck(this, ReviewFormComponent);

        this.dialogRef = dialogRef;
        this.showEmailPopup = false;
        this.rating = Array(5).fill(false);
        this.dataSaved = false;
        this.reviewText = '';
        this.emailAddress = '';
        this.isEmailValid = true;
        this.addedrating = 0;
      }

      _createClass(ReviewFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "hoverOnStars",
        value: function hoverOnStars(index) {
          var i = 0;

          while (index >= i) {
            this.rating[i] = true;
            i++;
          }
        }
      }, {
        key: "chooseRating",
        value: function chooseRating(star) {
          if (this.rating[star]) {
            var i = this.rating.length;

            while (i > star) {
              this.rating[i] = false;
              i--;
            }
          } else {
            this.rating.fill(false);
            var _i = 0;

            while (_i <= star) {
              this.rating[_i] = true;
              _i++;
            }
          }

          this.addedrating = star;
          this.dataSaved = true;
        }
      }, {
        key: "removeHighlight",
        value: function removeHighlight() {
          if (!this.dataSaved) {
            this.rating.fill(false);
          }
        }
      }, {
        key: "submitRating",
        value: function submitRating() {
          this.showEmailPopup = true;
          this.requestBody = {
            rating: this.addedrating,
            reviewtext: this.reviewText,
            email: this.emailAddress
          };
        }
      }, {
        key: "verifyEmail",
        value: function verifyEmail() {
          var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

          if (reg.test(this.emailAddress) === false && this.emailAddress) {
            this.isEmailValid = false;
          } else {
            this.isEmailValid = true;
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          this.submitRating();
          console.log(this.requestBody);
          this.dialogRef.close();
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          this.submit();
        }
      }]);

      return ReviewFormComponent;
    }();

    ReviewFormComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    ReviewFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-review-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-form.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/review-form/review-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-form.component.css */
      "./src/app/review-form/review-form.component.css"))["default"]]
    })], ReviewFormComponent);
    /***/
  },

  /***/
  "./src/app/uibutton/uibutton.component.css":
  /*!*************************************************!*\
    !*** ./src/app/uibutton/uibutton.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUibuttonUibuttonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-dialog-container{\r\n    background-color: #cdcdcd;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.add_review_button {\r\n    color: white;\r\n    background-color: transparent;\r\n    height: 40px;\r\n    width: 200px;\r\n    border: 2px solid white;\r\n    border-radius: 0px;\r\n    box-sizing: border-box;\r\n    margin: 16px;\r\n    font-weight: 600;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.add_review_button:hover,\r\n.add_review_button:active {\r\n    background-color: white;\r\n    outline: none;\r\n    color: #5182f9;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZC1yZXZpZXctYnV0dG9uL3NyYy9hcHAvdWlidXR0b24vdWlidXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6InByb2plY3RzL2FkZC1yZXZpZXctYnV0dG9uL3NyYy9hcHAvdWlidXR0b24vdWlidXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGNkY2Q7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYWRkX3Jldmlld19idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLmFkZF9yZXZpZXdfYnV0dG9uOmhvdmVyLFxyXG4uYWRkX3Jldmlld19idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjNTE4MmY5O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/uibutton/uibutton.component.ts":
  /*!************************************************!*\
    !*** ./src/app/uibutton/uibutton.component.ts ***!
    \************************************************/

  /*! exports provided: UIbuttonComponent */

  /***/
  function srcAppUibuttonUibuttonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIbuttonComponent", function () {
      return UIbuttonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../review-form/review-form.component */
    "./src/app/review-form/review-form.component.ts");

    var UIbuttonComponent = /*#__PURE__*/function () {
      function UIbuttonComponent(dialog) {
        _classCallCheck(this, UIbuttonComponent);

        this.dialog = dialog;
      }

      _createClass(UIbuttonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openReviewPopup",
        value: function openReviewPopup() {
          var dialogRef = this.dialog.open(_review_form_review_form_component__WEBPACK_IMPORTED_MODULE_3__["ReviewFormComponent"], {
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }]);

      return UIbuttonComponent;
    }();

    UIbuttonComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    UIbuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-uibutton',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./uibutton.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/uibutton/uibutton.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./uibutton.component.css */
      "./src/app/uibutton/uibutton.component.css"))["default"]]
    })], UIbuttonComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

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
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "../../node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! D:\Project\WorldWideFest\worldwidefest\WWF Prototypes\add-review-form\projects\add-review-button\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map