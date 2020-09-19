(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/banner-list/banner-list.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/banner-list/banner-list.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner__container\">\n    <header class=\"banner__header\">\n      <div class=\"banner__header__main\">Ever wondered about Kalimpong?</div>\n      <div class=\"banner__header__sub\">\n        <div class=\"banner__header__sub__text\">\n          Check in to cosy stays in places you’ve been meaning to check out\n        </div>\n        <div class=\"banner__header__sub__slider\">\n          1 / 2\n          <div class=\"arrow__icon__container__left\" [class.disable-left-icon]=\"isLeftDisable\" [attr.disabled]=\"isLeftDisable\" (click)=\"scrollleft()\">\n            <div class=\"banner__header__sub__slider__lefticon\"></div>\n          </div>\n          <div class=\"arrow__icon__container__right\" [class.disable-left-icon]=\"isRightDisable\" [attr.disabled]=\"isRightDisable\" (click)=\"scrollright()\">\n            <div class=\"banner__header__sub__slider__righticon\"></div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <main class=\"banner__section\" id=\"banner-id\" #scrollContainer>\n      <div class=\"banner__item\" *ngFor=\"let banner of bannerData; let i = index\">\n        <div\n          class=\"banner__item__image__container\"\n          (mouseover)=\"onHoverImage(i)\"\n          (mouseout)=\"onMouseoutImage(i)\"\n        >\n          <img\n            class=\"banner__item__image\"\n            [class.image-hover]=\"banner.imageHover\"\n            (mouseover)=\"onHoverImage(i)\"\n            (mouseout)=\"onMouseoutImage(i)\"\n            [src]=\"banner.imageurl\"\n            alt=\"concert-image\"\n          />\n          <div\n            class=\"banner__item__image__text\"\n            [class.hover-image]=\"banner.imageHover\"\n          >\n            <div class=\"hover-button-text\">\n              {{ banner.festname }}\n            </div>\n            <div class=\"hover-button-date\">\n              {{ banner.festdate }}\n            </div>\n            <button class=\"add-calender-button\">\n              <span class=\"fa fa-calendar-plus-o\"></span>\n              Add to Calender\n            </button>\n          </div>\n        </div>\n        <div class=\"banner__item__rating\">\n          <span class=\"fa fa-star\"></span> {{ banner.rating }} ({{\n            banner.reviewCount\n          }})\n        </div>\n        <div class=\"banner__item__name\">\n          {{ banner.festname }}\n        </div>\n        <div class=\"banner__item__date\">\n          {{ banner.festdate }}\n        </div>\n      </div>\n    </main>\n  </section>\n  ");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/editors-pick/editors-pick.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/editors-pick/editors-pick.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container1\">\n    <div class=\"swiper-container\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" *ngFor=\"let slide of FestData\">\n            <div class=\"placeholder\" [style.backgroundImage]=\"'url('+ slide.imageurl +')'\">\n                <p class=\"fest__header\">{{slide.header}}</p>\n                <p class=\"fest__desc\">{{slide.desc}}</p>\n            </div>\n        </div>\n      </div>\n      <!-- Add Pagination -->\n      <div class=\"swiper-pagination\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fest-category/fest-category.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/fest-category/fest-category.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"category__container\">\n    <header class=\"category__header\">Make ‘never been there’ your reason to go</header>\n    <main>\n        <a  class=\"category__section\" [href]=\"item.festurl\" target=\"_blank\"  *ngFor=\"let item of itemList\">\n            <div class=\"category__item\">\n                <img class=\"category__item__image\" [src]=\"item.imageurl\" alt=\"cat-icon\">\n                <span class=\"category__item__text\">{{item.festcategory}}</span>\n            </div>\n        </a>\n    </main>\n</section>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/image-list/image-list.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/image-list/image-list.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"place-list\">\r\n    <li class=\"place-list__place\" *ngFor=\"let image of cardDetail\" (click)=\"onClickImage(image)\">\r\n        <img [src]=\"image.url\" alt=\"\" />\r\n        <div class=\"overall-image\">{{image.status}}</div>\r\n        <div class=\"place-list__place__name\">{{image.id}}</div>\r\n        <span class=\"rating\">\r\n            <span\r\n              class=\"fa fa-star\"\r\n              [class.rating-star] =\"star <= +image.date_updated\"\r\n              *ngFor=\"let star of [0, 1, 2, 3, 4]\"\r\n            ></span>\r\n          </span>\r\n    </li>\r\n</ul>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/load-spinner/load-spinner.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/load-spinner/load-spinner.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lds-roller\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/review-form/review-form.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/review-form/review-form.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"popup\" [ngClass]=\"{ 'email-popup': showEmailPopup }\">\n    <div class=\"review-section\" *ngIf=\"!showEmailPopup\">\n      <i class=\"fa fa-times-circle\" (click)=\"closePopup()\"></i>\n      <h3 class=\"restaurant_name\">FESTIVAL NAMES</h3>\n      <div>\n        <div class=\"add-rating\">\n          <span class=\"add-rating-span\">Add your ratings!</span>\n          <span class=\"rating\" (mouseout)=\"removeHighlight()\">\n            <span\n              class=\"fa fa-star\"\n              [class.checked]=\"rating[star]\"\n              (click)=\"chooseRating(star)\"\n              (mouseenter)=\"hoverOnStars(star)\"\n              *ngFor=\"let star of [0, 1, 2, 3, 4]\"\n            ></span>\n          </span>\n        </div>\n        <textarea\n          [(ngModel)]=\"reviewText\"\n          name=\"review\"\n          id=\"add_review\"\n          cols=\"30\"\n          rows=\"14\"\n          placeholder=\"Add your review here...\"\n        ></textarea>\n      </div>\n      <div>\n        <button\n          mat-stroked-button\n          [disabled]=\"!dataSaved && !reviewText\"\n          class=\"add_review_button submit-review\"\n          (click)=\"submitRating()\"\n        >\n          Submit Review\n        </button>\n      </div>\n    </div>\n  \n    <div id=\"email-section\" class=\"email-cred\" *ngIf=\"showEmailPopup\">\n      <div class=\"skip-subscription\" (click)=\"closePopupwithData()\">Skip</div>\n      <div class=\"restaurant_name\">KEEP IN TOUCH</div>\n      <p class=\"greeting-desc\">\n        signup for newsletters & receive a <b>15%</b> off promo code for your\n        first fest.\n      </p>\n      <div class=\"form-section\">\n        <div style=\"height: 100px\">\n          <label class=\"email-label\" for=\"email\">Email Address</label>\n          <input\n            class=\"email-input\"\n            [class.invalid-email]=\"!isEmailValid\"\n            [(ngModel)]=\"emailAddress\"\n            type=\"email\"\n            name=\"email\"\n            id=\"reviewer_email\"\n            (blur)=\"verifyEmail()\"\n          />\n          <small style=\"color: darkred\" *ngIf=\"!isEmailValid\"\n            >Email ID is not valid</small\n          >\n        </div>\n        <div style=\"margin: 5px 0px\">\n          <button class=\"use-gmail\" (click)=\"signInWithGoogle()\">\n            <img src=\"../../assets/google.jpg\" alt=\"google\" />\n            Sign in with Google\n          </button>\n        </div>\n      </div>\n      <div class=\"submit-container\">\n        <button\n          mat-stroked-button\n          class=\"add_review_button submit-review\"\n          (click)=\"submit()\"\n          [disabled]=\"!emailAddress || !isEmailValid\"\n        >\n          Submit\n        </button>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/search-panel/search-panel.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/search-panel/search-panel.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-container\">\n    <div class=\"forms-field\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Country</mat-label>\n            <mat-select [(ngModel)]=\"countryValue\" multiple>\n              <mat-option *ngFor=\"let country of countryList\" [value]=\"country\">{{country}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n    </div>\n    <div class=\"forms-field\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Month</mat-label>\n            <mat-select [(ngModel)]=\"monthValue\" multiple>\n              <mat-option *ngFor=\"let month of monthList\" [value]=\"month\">{{month}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n    </div>\n    <div class=\"forms-field\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Genre</mat-label>\n            <mat-select [(ngModel)]=\"genresValue\" multiple>\n              <mat-option *ngFor=\"let genre of genresList\" [value]=\"genre\">{{genre}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n    </div>\n    <div class=\"forms-field\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Type</mat-label>\n            <mat-select [(ngModel)]=\"typeValue\" multiple>\n              <mat-option *ngFor=\"let type of typeList\" [value]=\"type\">{{type}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trustpilot-carousal/trustpilot-carousal.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/trustpilot-carousal/trustpilot-carousal.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <header class=\"headers\">top review from festive goers</header>\n  <div\n    id=\"carouselExampleControls\"\n    class=\"section-container carousel slide\"\n    data-ride=\"carousel\"\n    #sectionContainer\n  >\n    <div class=\"carousel-inner\">\n      <div\n        class=\"carousel-item image-section\"\n        [class.active]=\"i === 0\"\n        *ngFor=\"let banner of modelData; let i = index\"\n      >\n        <img class=\"image-style\" [src]=\"banner.imageurl\" alt=\"review-image\" />\n        <div class=\"image-section-review\">\n          <span class=\"rating\">\n            <span\n              class=\"fa fa-star\"\n              *ngFor=\"let star of [1, 2, 3, 4, 5]\"\n            ></span>\n          </span>\n          <div class=\"review-text\">\"{{ banner.review }}\"</div>\n          <div class=\"reviewer-name\">\n            {{ banner.reviewer }}\n          </div>\n          <div>\n            {{ banner.reviewerAddress }}\n          </div>\n        </div>\n        <!-- <div class=\"slider-image next\" (click)=\"scrollright()\"> -->\n          <!-- <img [src]=\"getImageUrlNext(i)\" alt=\"next\"> -->\n        <!-- </div> -->\n        <!-- <div class=\"slider-image prev\" (click)=\"scrollleft()\"> -->\n          <!-- <img [src]=\"getImageUrlPrev(i)\" alt=\"next\"> -->\n        <!-- </div> -->\n      </div>\n      <a\n        class=\"carousel-control-prev\"\n        href=\"#carouselExampleControls\"\n        role=\"button\"\n        data-slide=\"prev\"\n      >\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a\n        class=\"carousel-control-next\"\n        href=\"#carouselExampleControls\"\n        role=\"button\"\n        data-slide=\"next\"\n      >\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/uibutton/uibutton.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/uibutton/uibutton.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <button class=\"add_review_button\" mat-stroked-button (click)=\"openReviewPopup()\">WRITE REVIEW</button>\n</div>\n\n<div *ngIf=\"reviewCard\" style=\"margin: 16px;\">\n    <h3>The mock up review values</h3>\n    <img *ngIf=\"reviewCard.user\" [src]=\"reviewCard.user.photoUrl\" alt=\"image\">\n    <p>Reviewer name: {{reviewCard.user ? reviewCard.user.name : 'Anonymous'}}</p>\n    <p>Reviewer email : {{reviewCard.email || ''}}</p>\n    <p>Reviewer rating : {{reviewCard.rating}}</p>\n    <p>Reviewer content : {{reviewCard.reviewtext}}</p>\n    <br>\n    <br><br>\n    <button *ngIf=\"reviewCard.email\" class=\"add_review_button\" mat-stroked-button (click)=\"signOut()\">Signout</button>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/uicard/uicard.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/raw-loader/dist/cjs.js!./src/app/uicard/uicard.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"review__list__container\">\n    <div class=\"review__card\" *ngFor=\"let card of cardDetails\">\n      <div class=\"review__card__header\">\n        <div class=\"review__card__header__image\">\n          <img *ngIf=\"card.comment_author_url\" [src]=\"card.comment_author_url\" alt=\"cust. image\" />\n          <i style=\"font-size: 2em;\" *ngIf=\"!card.comment_author_url\" class=\"fa fa-user\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"review__card__header__rating\">\n          <span class=\"rating\">\n            <span\n              class=\"fa fa-star\"\n              *ngFor=\"let c of [1, 2, 3, 4, 5]; let i = index\"\n              [ngClass]=\"{'fa-green': card.star_rating === 5 , \n                      'fa-light-green': card.star_rating === 4 && card.star_rating >= c,\n                      'fa-orange': card.star_rating === 3 && card.star_rating >= c ,\n                      'fa-red': (card.star_rating === 1 || card.star_rating === 2) && card.star_rating >= c\n                  }\"\n            ></span>\n          </span>\n        </div>\n      </div>\n      <div class=\"review__card__desc\">\n        <a href=\"#\">{{ card.comment_author }}</a> reviewed for \"<a href=\"#\">{{\n          card.fest_name\n        }}</a\n        >\"\"\n      </div>\n      <div class=\"review__card__desc__review line-clamp\">\n        <p class=\"review__card__desc__review__text\">\n          {{ card.comment_content}}\n        </p>\n      </div>\n    </div>\n  </div>\n  \n  <app-load-spinner *ngIf=\"isDataFetching\"></app-load-spinner>\n  ");

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!*************************************************************************************************************!*\
  !*** D:/Project/WorldWideFest/worldwidefest/WWF Prototypes/review-carousal/node_modules/tslib/tslib.es6.js ***!
  \*************************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tYWluLXNjcmVlbi1pbWFnZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'main-screen-image';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ "../../node_modules/@angular/elements/fesm2015/elements.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-list/image-list.component */ "./src/app/image-list/image-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _trustpilot_carousal_trustpilot_carousal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trustpilot-carousal/trustpilot-carousal.component */ "./src/app/trustpilot-carousal/trustpilot-carousal.component.ts");
/* harmony import */ var _editors_pick_editors_pick_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editors-pick/editors-pick.component */ "./src/app/editors-pick/editors-pick.component.ts");
/* harmony import */ var _search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-panel/search-panel.component */ "./src/app/search-panel/search-panel.component.ts");
/* harmony import */ var _uicard_uicard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uicard/uicard.component */ "./src/app/uicard/uicard.component.ts");
/* harmony import */ var _load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./load-spinner/load-spinner.component */ "./src/app/load-spinner/load-spinner.component.ts");
/* harmony import */ var _banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./banner-list/banner-list.component */ "./src/app/banner-list/banner-list.component.ts");
/* harmony import */ var _fest_category_fest_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fest-category/fest-category.component */ "./src/app/fest-category/fest-category.component.ts");
/* harmony import */ var _uibutton_uibutton_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./uibutton/uibutton.component */ "./src/app/uibutton/uibutton.component.ts");
/* harmony import */ var _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./review-form/review-form.component */ "./src/app/review-form/review-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularx-social-login */ "../../node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");




















const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["GoogleLoginProvider"]('705097058169-ak705dhikst1kvpp6lvo64cupnfiasnr.apps.googleusercontent.com'),
    }
]);
function provideConfig() {
    return config;
}
let AppModule = class AppModule {
    constructor(injector) {
        this.injector = injector;
        const webComponent = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"], { injector: this.injector });
        customElements.define('ui-main-image', webComponent);
        const webComponent1 = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_trustpilot_carousal_trustpilot_carousal_component__WEBPACK_IMPORTED_MODULE_7__["TrustpilotCarousalComponent"], { injector: this.injector });
        customElements.define('ui-trustpilot-carousal', webComponent1);
        const webComponent2 = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_9__["SearchPanelComponent"], { injector: this.injector });
        customElements.define('ui-search-panel', webComponent2);
        const webComponent3 = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_uicard_uicard_component__WEBPACK_IMPORTED_MODULE_10__["UicardComponent"], { injector: this.injector });
        customElements.define('ui-review-card', webComponent3);
        const webComponent4 = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_12__["BannerListComponent"], { injector: this.injector });
        customElements.define('ui-banner-list', webComponent4);
        const webComponent5 = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_fest_category_fest_category_component__WEBPACK_IMPORTED_MODULE_13__["FestCategoryComponent"], { injector: this.injector });
        customElements.define('ui-fest-category', webComponent5);
        const webComponent6 = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_uibutton_uibutton_component__WEBPACK_IMPORTED_MODULE_14__["UibuttonComponent"], { injector: this.injector });
        customElements.define('ui-addreview-button', webComponent6);
        const webComponent7 = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_editors_pick_editors_pick_component__WEBPACK_IMPORTED_MODULE_8__["EditorsPickComponent"], { injector: this.injector });
        customElements.define('ui-editors-pick', webComponent7);
    }
    ngDoBootstrap() { }
};
AppModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"],
            _trustpilot_carousal_trustpilot_carousal_component__WEBPACK_IMPORTED_MODULE_7__["TrustpilotCarousalComponent"],
            _editors_pick_editors_pick_component__WEBPACK_IMPORTED_MODULE_8__["EditorsPickComponent"],
            _search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_9__["SearchPanelComponent"],
            _uicard_uicard_component__WEBPACK_IMPORTED_MODULE_10__["UicardComponent"],
            _load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_11__["LoadSpinnerComponent"],
            _banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_12__["BannerListComponent"],
            _fest_category_fest_category_component__WEBPACK_IMPORTED_MODULE_13__["FestCategoryComponent"],
            _uibutton_uibutton_component__WEBPACK_IMPORTED_MODULE_14__["UibuttonComponent"],
            _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_15__["ReviewFormComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"]
        ],
        providers: [
            {
                provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["AuthServiceConfig"],
                useFactory: provideConfig,
            },
        ],
        entryComponents: [
            _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"],
            _trustpilot_carousal_trustpilot_carousal_component__WEBPACK_IMPORTED_MODULE_7__["TrustpilotCarousalComponent"],
            _editors_pick_editors_pick_component__WEBPACK_IMPORTED_MODULE_8__["EditorsPickComponent"],
            _search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_9__["SearchPanelComponent"],
            _uicard_uicard_component__WEBPACK_IMPORTED_MODULE_10__["UicardComponent"],
            _load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_11__["LoadSpinnerComponent"],
            _banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_12__["BannerListComponent"],
            _fest_category_fest_category_component__WEBPACK_IMPORTED_MODULE_13__["FestCategoryComponent"],
            _uibutton_uibutton_component__WEBPACK_IMPORTED_MODULE_14__["UibuttonComponent"],
            _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_15__["ReviewFormComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/banner-list/banner-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/banner-list/banner-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner__container {\r\n    margin: 16px;\r\n    padding: 8px;\r\n}\r\n\r\n.banner__header__main {\r\n    font-weight: 500;\r\n    font-size: 22px;\r\n    color: rgb(34, 34, 34);\r\n}\r\n\r\n.banner__header__sub {\r\n    margin-bottom: 16px;\r\n}\r\n\r\nmain {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: repeat(8, 25%);\r\n    overflow: hidden;\r\n}\r\n\r\n.banner__item {\r\n    margin: 16px;\r\n}\r\n\r\n.banner__item__image__container {\r\n    max-width: 350px;\r\n    overflow: hidden;\r\n    border-radius: 12px;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.banner__item__image {\r\n    width: 100%;\r\n    border-radius: 12px;\r\n    box-shadow: 2px 2px 5px grey;\r\n    overflow: hidden;\r\n    transition: 0.5s all ease-in-out;\r\n}\r\n\r\n.banner__header__sub__text {\r\n    display: inline-block;\r\n}\r\n\r\n.banner__header__sub__slider {\r\n    display: inline-block;\r\n    float: right;\r\n}\r\n\r\n.banner__header__sub__slider__lefticon {\r\n    margin: 0px 4px !important;\r\n    border: solid black !important;\r\n    border-width: 0 2px 2px 0 !important;\r\n    display: inline-block;\r\n    padding: 5px;\r\n    transform: rotate(135deg);\r\n    -webkit-transform: rotate(135deg);\r\n}\r\n\r\n.banner__header__sub__slider__righticon {\r\n    margin: 0px 4px !important;\r\n    border: solid black !important;\r\n    border-width: 0 2px 2px 0 !important;\r\n    display: inline-block;\r\n    padding: 5px;\r\n    transform: rotate(-45deg);\r\n    -webkit-transform: rotate(-45deg);\r\n}\r\n\r\n.image-hover {\r\n    transform: scale(1.2);\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n}\r\n\r\n.banner__item__image__text {\r\n    position: absolute;\r\n    top: 0px;\r\n    margin: 8px;\r\n    text-align: center;\r\n    color: white;\r\n    display: none;\r\n    width: calc(100% - 16px);\r\n}\r\n\r\n.hover-button-text {\r\n    font-size: 21px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 90%;\r\n    text-overflow: ellipsis;\r\n    margin: auto;\r\n    transition: 0.5s all ease-in-out;\r\n}\r\n\r\n.hover-image {\r\n    display: block;\r\n    transition: 0.5s all ease-in-out;\r\n}\r\n\r\n.hover-button-date {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 90%;\r\n    margin: auto;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.add-calender-button {\r\n    max-width: 300px;\r\n    height: 60px;\r\n    font-size: 22px;\r\n    background-color: transparent;\r\n    border: 4px solid white;\r\n    border-radius: 16px;\r\n    color: white;\r\n    margin-top: 16px;\r\n}\r\n\r\n.banner__item__name {\r\n    font-weight: 500;\r\n}\r\n\r\n.fa-star {\r\n    color: #FF385C;\r\n}\r\n\r\n.arrow__icon__container__left {\r\n    display: inline-block;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    width: 24px;\r\n    padding-left: 5px;\r\n    border: 1px solid black;\r\n    margin-right: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.arrow__icon__container__right {\r\n    display: inline-block;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    border-radius: 50%;\r\n    width: 24px;\r\n    padding-right: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.disable-left-icon {\r\n    opacity: 0.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvYmFubmVyLWxpc3QvYmFubmVyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoicHJvamVjdHMvbWFpbi1zY3JlZW4taW1hZ2Uvc3JjL2FwcC9iYW5uZXItbGlzdC9iYW5uZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lcl9fY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmJhbm5lcl9faGVhZGVyX19tYWluIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xyXG59XHJcblxyXG4uYmFubmVyX19oZWFkZXJfX3N1YiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMjUlKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iYW5uZXJfX2l0ZW0ge1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG59XHJcblxyXG4uYmFubmVyX19pdGVtX19pbWFnZV9fY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmFubmVyX19pdGVtX19pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBncmV5O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYmFubmVyX19oZWFkZXJfX3N1Yl9fdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5iYW5uZXJfX2hlYWRlcl9fc3ViX19zbGlkZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYmFubmVyX19oZWFkZXJfX3N1Yl9fc2xpZGVyX19sZWZ0aWNvbiB7XHJcbiAgICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbn1cclxuXHJcbi5iYW5uZXJfX2hlYWRlcl9fc3ViX19zbGlkZXJfX3JpZ2h0aWNvbiB7XHJcbiAgICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5pbWFnZS1ob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcclxufVxyXG5cclxuLmJhbm5lcl9faXRlbV9faW1hZ2VfX3RleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XHJcbn1cclxuXHJcbi5ob3Zlci1idXR0b24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaG92ZXItaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhvdmVyLWJ1dHRvbi1kYXRlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uYWRkLWNhbGVuZGVyLWJ1dHRvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uYmFubmVyX19pdGVtX19uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mYS1zdGFyIHtcclxuICAgIGNvbG9yOiAjRkYzODVDO1xyXG59XHJcblxyXG4uYXJyb3dfX2ljb25fX2NvbnRhaW5lcl9fbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hcnJvd19faWNvbl9fY29udGFpbmVyX19yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kaXNhYmxlLWxlZnQtaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/banner-list/banner-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/banner-list/banner-list.component.ts ***!
  \******************************************************/
/*! exports provided: BannerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerListComponent", function() { return BannerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");



let BannerListComponent = class BannerListComponent {
    constructor(http) {
        this.http = http;
        this.bannerData = [];
        this.isImageHover = false;
        this.isLeftDisable = true;
        this.isRightDisable = false;
    }
    ngOnInit() {
        this.http.get('../../assets/data.json')
            .subscribe((data) => {
            this.bannerData = data;
        });
    }
    onHoverImage(index) {
        this.bannerData[index].imageHover = true;
    }
    onMouseoutImage(index) {
        this.bannerData[index].imageHover = false;
    }
    scrollright() {
        console.log(this.container.nativeElement.clientWidth, this.container.nativeElement.scrollWidth);
        const mainSection1 = document.querySelector('#banner-id');
        this.sideScroll(mainSection1, 'right', 10, this.container.nativeElement.clientWidth + 50, 20);
        this.isRightDisable = true;
        this.isLeftDisable = false;
    }
    scrollleft() {
        console.log(this.container.nativeElement.clientWidth, this.container.nativeElement.scrollWidth);
        const mainSection1 = document.querySelector('#banner-id');
        this.sideScroll(mainSection1, 'left', 10, this.container.nativeElement.clientWidth + 50, 20);
        this.isRightDisable = false;
        this.isLeftDisable = true;
    }
    sideScroll(element, direction, speed, distance, step) {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            if (direction === 'left') {
                element.scrollLeft -= step;
            }
            else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
};
BannerListComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('scrollContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: false })
], BannerListComponent.prototype, "container", void 0);
BannerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-banner-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banner-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/banner-list/banner-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banner-list.component.css */ "./src/app/banner-list/banner-list.component.css")).default]
    })
], BannerListComponent);



/***/ }),

/***/ "./src/app/card.service.ts":
/*!*********************************!*\
  !*** ./src/app/card.service.ts ***!
  \*********************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




let CardService = class CardService {
    constructor(http) {
        this.http = http;
        this.getReviewAPIUrl = 'http://wwfapi.worldwidefests.com/public/api/v1/getReviews';
    }
    getCardDetails() {
        return this.http.get('./assets/card-data.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            const tempData = data.responseString;
            tempData.forEach((card) => {
                const rating = Math.floor(Math.random() * 6);
                card.star_rating = rating;
            });
            return tempData;
        }));
    }
};
CardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CardService);



/***/ }),

/***/ "./src/app/editors-pick/editors-pick.component.css":
/*!*********************************************************!*\
  !*** ./src/app/editors-pick/editors-pick.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\r\nbody {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background: #eee;\r\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  color: #000;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.container1 {\r\n    height: 700px;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n.swiper-container {\r\n  width: 100%;\r\n  height: 70%;\r\n}\r\n\r\n.swiper-slide {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  background: #fff;\r\n\r\n  /* Center slide text vertically */\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.placeholder {\r\n    width: 80%;\r\n    height: 70%;\r\n    margin: auto;\r\n    display: block;\r\n    background-color: black;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.swiper-slide {\r\n    background-color: transparent;\r\n}\r\n\r\n.swiper-slide-next > div {\r\n    width: 90%;\r\n    height: 85%;\r\n}\r\n\r\n.fest__header {\r\n    margin-top: 20%;\r\n    text-align: left;\r\n    margin-left: 10%;\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    color: white;\r\n    margin-bottom: 0px;\r\n    -webkit-filter: drop-shadow(2px 4px 6px black);\r\n            filter: drop-shadow(2px 4px 6px black);\r\n}\r\n\r\n.fest__desc {\r\n    text-align: left;\r\n    margin-left: 10%;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    color: white;\r\n    -webkit-filter: drop-shadow(2px 4px 6px black);\r\n            filter: drop-shadow(2px 4px 6px black);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvZWRpdG9ycy1waWNrL2VkaXRvcnMtcGljay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseURBQXlEO0VBQ3pELGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjs7RUFFaEIsaUNBQWlDO0VBSWpDLGFBQWE7RUFJYix1QkFBdUI7RUFJdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQyIsImZpbGUiOiJwcm9qZWN0cy9tYWluLXNjcmVlbi1pbWFnZS9zcmMvYXBwL2VkaXRvcnMtcGljay9lZGl0b3JzLXBpY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjEge1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAvKiBDZW50ZXIgc2xpZGUgdGV4dCB2ZXJ0aWNhbGx5ICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYWNlaG9sZGVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZS1uZXh0ID4gZGl2IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuLmZlc3RfX2hlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggYmxhY2spO1xyXG59XHJcblxyXG4uZmVzdF9fZGVzYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4IGJsYWNrKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/editors-pick/editors-pick.component.ts":
/*!********************************************************!*\
  !*** ./src/app/editors-pick/editors-pick.component.ts ***!
  \********************************************************/
/*! exports provided: EditorsPickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsPickComponent", function() { return EditorsPickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper-bundle.css */ "../../node_modules/swiper/swiper-bundle.css");




swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_2__["Pagination"]]);
let EditorsPickComponent = class EditorsPickComponent {
    constructor(cdref) {
        this.cdref = cdref;
        this.FestData = [
            {
                imageurl: './assets/Image/Editors-choice/party-1.jpg',
                header: 'Top Fest',
                desc: 'In the World'
            },
            {
                imageurl: './assets/Image/Editors-choice/party-2.jpg',
                header: 'First Timers',
                desc: 'Guide to Music Fests'
            },
            {
                imageurl: './assets/Image/Editors-choice/party-3.jpg',
                header: 'Biggest Music',
                desc: 'Festival in the World'
            },
            {
                imageurl: './assets/Image/Editors-choice/party-4.jpg',
                header: 'Top Fest',
                desc: 'in the world'
            },
            {
                imageurl: './assets/Image/Editors-choice/party-5.jpg',
                header: 'Top Fest',
                desc: 'in the world'
            }
        ];
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        this.cdref.detectChanges();
    }
};
EditorsPickComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
EditorsPickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editors-pick',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editors-pick.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/editors-pick/editors-pick.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editors-pick.component.css */ "./src/app/editors-pick/editors-pick.component.css")).default]
    })
], EditorsPickComponent);



/***/ }),

/***/ "./src/app/fest-category/fest-category.component.css":
/*!***********************************************************!*\
  !*** ./src/app/fest-category/fest-category.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".category__container {\r\n    margin: 16px;\r\n    padding: 8px;\r\n}\r\n\r\n.category__header {\r\n    font-weight: 500;\r\n    font-size: 22px;\r\n    color: rgb(34, 34, 34);\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.category__section {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.category__section:hover,\r\n.category__section:active {\r\n    text-decoration: underline;\r\n}\r\n\r\n.category__item {\r\n    width: 50%;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 0px 8px;\r\n    margin-bottom: 32px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .category__item {\r\n        width: 25%;\r\n    }\r\n}\r\n\r\n.category__item__image {\r\n    width: 64px;\r\n    height: 64px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.category__item__text {\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-left: 8px;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvZmVzdC1jYXRlZ29yeS9mZXN0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvZmVzdC1jYXRlZ29yeS9mZXN0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnlfX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeV9faGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmNhdGVnb3J5X19zZWN0aW9uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhdGVnb3J5X19zZWN0aW9uOmhvdmVyLFxyXG4uY2F0ZWdvcnlfX3NlY3Rpb246YWN0aXZlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uY2F0ZWdvcnlfX2l0ZW0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jYXRlZ29yeV9faXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhdGVnb3J5X19pdGVtX19pbWFnZSB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeV9faXRlbV9fdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/fest-category/fest-category.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/fest-category/fest-category.component.ts ***!
  \**********************************************************/
/*! exports provided: FestCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FestCategoryComponent", function() { return FestCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");



let FestCategoryComponent = class FestCategoryComponent {
    constructor(http) {
        this.http = http;
        this.itemList = [];
    }
    ngOnInit() {
        this.http.get('../assets/data1.json')
            .subscribe((data) => {
            this.itemList = data;
        });
    }
};
FestCategoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FestCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-fest-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fest-category.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fest-category/fest-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fest-category.component.css */ "./src/app/fest-category/fest-category.component.css")).default]
    })
], FestCategoryComponent);



/***/ }),

/***/ "./src/app/image-list/image-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/image-list/image-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".place-list {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    padding: 0px 8px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.places {\r\n    position: absolute;\r\n    bottom: 50px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.place-list__place {\r\n    height: 200px;\r\n    width: 350px;\r\n    background-color: black;\r\n    border-radius: 4px;\r\n    list-style: none;\r\n    margin: 8px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.place-list__place>img {\r\n    height: 200px;\r\n    width: 350px;\r\n    opacity: 0.5;\r\n    overflow: hidden;\r\n    margin: 0 auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.place-list__place>img {\r\n    transition: 0.5s all ease-in-out;\r\n}\r\n\r\n.overall-image {\r\n    position: absolute;\r\n    background-color: #42a707;\r\n    padding: 8px;\r\n    top: 6%;\r\n    right: 3%;\r\n    border-radius: 10%;\r\n    font-weight: 700;\r\n    color: white;\r\n    width: 36px;\r\n    height: 36px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n}\r\n\r\n.rating {\r\n    position: absolute;\r\n    bottom: 20%;\r\n    left: 3%;\r\n    color: rgb(153, 153, 153);\r\n}\r\n\r\n.rating .fa {\r\n    font-size: 1.1rem;\r\n    padding: 2px;\r\n}\r\n\r\n.place-list__place>img:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.rating-star {\r\n    color: yellow;\r\n}\r\n\r\n.place-list__place__name {\r\n    position: absolute;\r\n    bottom: 4%;\r\n    left: 3%;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-size: 1.3rem;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvaW1hZ2UtbGlzdC9pbWFnZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixPQUFPO0lBQ1AsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtDQUFrQztBQUN0QyIsImZpbGUiOiJwcm9qZWN0cy9tYWluLXNjcmVlbi1pbWFnZS9zcmMvYXBwL2ltYWdlLWxpc3QvaW1hZ2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYWNlLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucGxhY2VzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBsYWNlLWxpc3RfX3BsYWNlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4ucGxhY2UtbGlzdF9fcGxhY2U+aW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wbGFjZS1saXN0X19wbGFjZT5pbWcge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5vdmVyYWxsLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MmE3MDc7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0b3A6IDYlO1xyXG4gICAgcmlnaHQ6IDMlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJhdGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwJTtcclxuICAgIGxlZnQ6IDMlO1xyXG4gICAgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcclxufVxyXG5cclxuXHJcbi5yYXRpbmcgLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4ucGxhY2UtbGlzdF9fcGxhY2U+aW1nOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLnJhdGluZy1zdGFyIHtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5wbGFjZS1saXN0X19wbGFjZV9fbmFtZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDQlO1xyXG4gICAgbGVmdDogMyU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/image-list/image-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/image-list/image-list.component.ts ***!
  \****************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");



let ImageListComponent = class ImageListComponent {
    constructor(http) {
        this.http = http;
        this.cardDetail = [
            {
                id: 'Rise Festival',
                url: '../../assets/Image/Banner-images/banner-1.jpg',
                position: '1',
                status: '8.5',
                date_updated: '4',
            },
            {
                id: 'Enchanted Valley',
                url: '../../assets/Image/Banner-images/banner-2.jpg',
                position: '1',
                status: '9',
                date_updated: '4',
            },
            {
                id: 'Lights All Night',
                url: '../../assets/Image/Banner-images/banner-3.jpg',
                position: '1',
                status: '7',
                date_updated: '3',
            },
            {
                id: 'Snowglobe',
                url: '../../assets/Image/Banner-images/banner-4.jpg',
                position: '1',
                status: '10',
                date_updated: '5',
            },
            {
                id: 'Rise Festival',
                url: '../../assets/Image/Banner-images/banner-1.jpg',
                position: '1',
                status: '9.5',
                date_updated: '4',
            },
            {
                id: 'Rise Festival',
                url: '../../assets/Image/Banner-images/banner-2.jpg',
                position: '1',
                status: '8',
                date_updated: '4',
            },
            {
                id: 'Rise Festival',
                url: '../../assets/Image/Banner-images/banner-3.jpg',
                position: '1',
                status: '9.5',
                date_updated: '5',
            },
            {
                id: 'Rise Festival',
                url: '../../assets/Image/Banner-images/banner-4.jpg',
                position: '1',
                status: '8',
                date_updated: '4',
            },
            {
                id: 'Rise Festival',
                url: '../../assets/Image/Banner-images/banner-1.jpg',
                position: '1',
                status: '6',
                date_updated: '3',
            },
        ];
    }
    ngOnInit() {
        this.http.get('http://wwfapi.worldwidefests.com/public/api/v1/getHomeCarousels')
            .subscribe((data) => {
            this.cardDetail = data.responseString;
        });
    }
};
ImageListComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ImageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-image-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/image-list/image-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-list.component.css */ "./src/app/image-list/image-list.component.css")).default]
    })
], ImageListComponent);



/***/ }),

/***/ "./src/app/load-spinner/load-spinner.component.css":
/*!*********************************************************!*\
  !*** ./src/app/load-spinner/load-spinner.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lds-roller {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  \r\n  .lds-roller div {\r\n    -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    transform-origin: 40px 40px;\r\n  }\r\n  \r\n  .lds-roller div:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    background: red;\r\n    margin: -4px 0 0 -4px;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(1) {\r\n    -webkit-animation-delay: -0.036s;\r\n            animation-delay: -0.036s;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(1):after {\r\n    top: 63px;\r\n    left: 63px;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(2) {\r\n    -webkit-animation-delay: -0.072s;\r\n            animation-delay: -0.072s;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(2):after {\r\n    top: 68px;\r\n    left: 56px;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(3) {\r\n    -webkit-animation-delay: -0.108s;\r\n            animation-delay: -0.108s;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(3):after {\r\n    top: 71px;\r\n    left: 48px;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(4) {\r\n    -webkit-animation-delay: -0.144s;\r\n            animation-delay: -0.144s;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(4):after {\r\n    top: 72px;\r\n    left: 40px;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(5) {\r\n    -webkit-animation-delay: -0.18s;\r\n            animation-delay: -0.18s;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(5):after {\r\n    top: 71px;\r\n    left: 32px;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(6) {\r\n    -webkit-animation-delay: -0.216s;\r\n            animation-delay: -0.216s;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(6):after {\r\n    top: 68px;\r\n    left: 24px;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(7) {\r\n    -webkit-animation-delay: -0.252s;\r\n            animation-delay: -0.252s;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(7):after {\r\n    top: 63px;\r\n    left: 17px;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(8) {\r\n    -webkit-animation-delay: -0.288s;\r\n            animation-delay: -0.288s;\r\n  }\r\n  \r\n  .lds-roller div:nth-child(8):after {\r\n    top: 56px;\r\n    left: 12px;\r\n  }\r\n  \r\n  @-webkit-keyframes lds-roller {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n  \r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes lds-roller {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n  \r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvbG9hZC1zcGlubmVyL2xvYWQtc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usd0VBQWdFO1lBQWhFLGdFQUFnRTtJQUNoRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCOztJQUVBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7O0VBUkE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6Qjs7SUFFQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGIiwiZmlsZSI6InByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvbG9hZC1zcGlubmVyL2xvYWQtc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1yb2xsZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICBcclxuICAubGRzLXJvbGxlciBkaXYge1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBtYXJnaW46IC00cHggMCAwIC00cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xyXG4gIH1cclxuICBcclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcclxuICAgIHRvcDogNjNweDtcclxuICAgIGxlZnQ6IDYzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xyXG4gIH1cclxuICBcclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcclxuICAgIHRvcDogNjhweDtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xyXG4gIH1cclxuICBcclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuICAgIHRvcDogNzFweDtcclxuICAgIGxlZnQ6IDQ4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xyXG4gIH1cclxuICBcclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcclxuICAgIHRvcDogNzJweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xyXG4gICAgdG9wOiA3MXB4O1xyXG4gICAgbGVmdDogMzJweDtcclxuICB9XHJcbiAgXHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xyXG4gICAgdG9wOiA2OHB4O1xyXG4gICAgbGVmdDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xyXG4gICAgdG9wOiA2M3B4O1xyXG4gICAgbGVmdDogMTdweDtcclxuICB9XHJcbiAgXHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/load-spinner/load-spinner.component.ts":
/*!********************************************************!*\
  !*** ./src/app/load-spinner/load-spinner.component.ts ***!
  \********************************************************/
/*! exports provided: LoadSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpinnerComponent", function() { return LoadSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let LoadSpinnerComponent = class LoadSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-load-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./load-spinner.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/load-spinner/load-spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./load-spinner.component.css */ "./src/app/load-spinner/load-spinner.component.css")).default]
    })
], LoadSpinnerComponent);



/***/ }),

/***/ "./src/app/review-form/review-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/review-form/review-form.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-container {\r\n    background-color: #cdcdcd;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .popup {\r\n    max-width: 500px;\r\n    min-width: 300px;\r\n    height: 500px;\r\n    background-color: white;\r\n  }\r\n  \r\n  @media screen and (min-width: 900px) {\r\n    .popup {\r\n      width: 500px;\r\n      height: 500px;\r\n    }\r\n  }\r\n  \r\n  .review-section {\r\n      position: relative;\r\n  }\r\n  \r\n  .email-popup {\r\n    min-width: 250px;\r\n    max-width: 400px;\r\n    height: 400px;\r\n    border-radius: 0px;\r\n  }\r\n  \r\n  .fa-times-circle {\r\n      font-size: 2em;\r\n      position: absolute;\r\n      right: 2px;\r\n      cursor: pointer;\r\n      color: white;\r\n  }\r\n  \r\n  .restaurant_name {\r\n  \r\n    font-size: 1.5em;\r\n    color: white;\r\n    height: 60px;\r\n    margin-bottom: 0px;\r\n    margin-top: 8px;\r\n    background-color: #5182f9;\r\n    font-weight: 400;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  textarea {\r\n    width: 90%;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    border: 1px solid #cdcdcd;\r\n    font-family: Helvetica, sans-serif;\r\n    padding: 16px;\r\n    resize: initial;\r\n    margin: 0px 5%;\r\n    font-size: 1.1em;\r\n    outline: none;\r\n  }\r\n  \r\n  .submit-review {\r\n    margin-top: 12px;\r\n    width: 100%;\r\n    height: 48px;\r\n    background-color: #5182f9;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n    font-weight: 400;\r\n    border-radius: 0px;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .submit-review:disabled {\r\n      opacity: 0.7;\r\n  }\r\n  \r\n  .add-rating {\r\n    padding: 5px;\r\n    height: 45px;\r\n  \r\n    color: #adadad;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.3em;\r\n  }\r\n  \r\n  .add-rating-span {\r\n    display: inline-block;\r\n    margin-right: 16px;\r\n  }\r\n  \r\n  .fa {\r\n      padding: 5px;\r\n  }\r\n  \r\n  .checked {\r\n    color: #ebee51;\r\n  }\r\n  \r\n  .saved {\r\n    color: #ebee51;\r\n  }\r\n  \r\n  .email-cred {\r\n    position: relative;\r\n  }\r\n  \r\n  .skip-subscription {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    color: white;\r\n  \r\n    cursor: pointer;\r\n  }\r\n  \r\n  .greeting-header {\r\n  \r\n    font-weight: 800;\r\n    font-size: 18px;\r\n    text-decoration: underline;\r\n    text-align: center;\r\n  }\r\n  \r\n  .greeting-desc {\r\n    margin: auto;\r\n  \r\n    font-size: 1.2em;\r\n    width: 90%;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    color: #5182f9;\r\n    padding: 16px;\r\n  }\r\n  \r\n  .form-section {\r\n    width: 90%;\r\n    margin: auto;\r\n  }\r\n  \r\n  .email-label {\r\n    display: block;\r\n  \r\n    width: 100%;\r\n    padding-bottom: 8px;\r\n    font-size: 1.1em;\r\n    color: #adadad;\r\n  }\r\n  \r\n  .email-input {\r\n    padding: 2px 5px;\r\n    width: 100%;\r\n    height: 45px;\r\n    border-radius: 2px;\r\n    border: 1px solid #cdcdcd;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .use-gmail {\r\n    width: 100%;\r\n    height: 45px;\r\n    border: 1px solid lightgray;\r\n    background-color: white;\r\n    box-shadow: 3px 5px 5px -1px #cdcdcd;\r\n    font-size: 1.1em;\r\n    color: black;\r\n    position: relative;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .use-gmail img {\r\n    position: absolute;\r\n    width: 40px;\r\n    top: 1px;\r\n    left: 50px;\r\n  }\r\n  \r\n  .add-email {\r\n    float: right;\r\n    width: 40%;\r\n    height: 32px;\r\n    margin-top: 8px;\r\n    background-color: #003e87;\r\n    border: 1px solid white;\r\n    color: white;\r\n  }\r\n  \r\n  .invalid-email {\r\n      border: 2px solid #c70202;\r\n  }\r\n  \r\n  .submit-container {\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  @media screen and (min-width: 500px) {\r\n    .submit-container {\r\n      margin-top: 45px;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvcmV2aWV3LWZvcm0vcmV2aWV3LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRTtNQUNFLFlBQVk7TUFDWixhQUFhO0lBQ2Y7RUFDRjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtNQUNJLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLGVBQWU7TUFDZixZQUFZO0VBQ2hCOztFQUVBOztJQUVFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7TUFDSSxZQUFZO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7O0lBRVosY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxZQUFZO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZOztJQUVaLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTs7SUFFWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjOztJQUVkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtNQUNJLHlCQUF5QjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoicHJvamVjdHMvbWFpbi1zY3JlZW4taW1hZ2Uvc3JjL2FwcC9yZXZpZXctZm9ybS9yZXZpZXctZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGNkY2Q7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAucG9wdXAge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAucG9wdXAge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXZpZXctc2VjdGlvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmVtYWlsLXBvcHVwIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZhLXRpbWVzLWNpcmNsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAucmVzdGF1cmFudF9uYW1lIHtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4MmY5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgcmVzaXplOiBpbml0aWFsO1xyXG4gICAgbWFyZ2luOiAwcHggNSU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdC1yZXZpZXcge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODJmOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdC1yZXZpZXc6ZGlzYWJsZWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGQtcmF0aW5nIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICBcclxuICAgIGNvbG9yOiAjYWRhZGFkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGQtcmF0aW5nLXNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuZmEge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2VkIHtcclxuICAgIGNvbG9yOiAjZWJlZTUxO1xyXG4gIH1cclxuICBcclxuICAuc2F2ZWQge1xyXG4gICAgY29sb3I6ICNlYmVlNTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbWFpbC1jcmVkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNraXAtc3Vic2NyaXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmdyZWV0aW5nLWhlYWRlciB7XHJcbiAgXHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmVldGluZy1kZXNjIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNTE4MmY5O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZW1haWwtbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbWFpbC1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZS1nbWFpbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDVweCA1cHggLTFweCAjY2RjZGNkO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnVzZS1nbWFpbCBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGQtZW1haWwge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDNlODc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmludmFsaWQtZW1haWwge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzcwMjAyO1xyXG4gIH1cclxuICBcclxuICAuc3VibWl0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgLnN1Ym1pdC1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/review-form/review-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-form/review-form.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewFormComponent", function() { return ReviewFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "../../node_modules/angularx-social-login/angularx-social-login.js");




let ReviewFormComponent = class ReviewFormComponent {
    constructor(dialogRef, authService) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.showEmailPopup = false;
        this.rating = Array(5).fill(false);
        this.dataSaved = false;
        this.reviewText = '';
        this.emailAddress = '';
        this.isEmailValid = true;
        this.addedrating = 0;
    }
    ngOnInit() {
        // This is an observable that returns user details on sign in & signout.
        // It returns email, name & image once signed in & null on signout
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.emailAddress = user ? user.email : '';
            this.loggedIn = (user != null);
            console.log(this.user);
        });
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID);
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.authService.signOut();
    }
    hoverOnStars(index) {
        let i = 0;
        while (index >= i) {
            this.rating[i] = true;
            i++;
        }
    }
    chooseRating(star) {
        if (this.rating[star]) {
            let i = this.rating.length;
            while (i > star) {
                this.rating[i] = false;
                i--;
            }
        }
        else {
            this.rating.fill(false);
            let i = 0;
            while (i <= star) {
                this.rating[i] = true;
                i++;
            }
        }
        this.addedrating = star + 1;
        this.dataSaved = true;
    }
    removeHighlight() {
        if (!this.dataSaved) {
            this.rating.fill(false);
        }
    }
    submitRating() {
        this.showEmailPopup = true;
        this.requestBody = {
            rating: this.addedrating,
            reviewtext: this.reviewText,
            email: this.emailAddress,
        };
    }
    verifyEmail() {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(this.emailAddress) === false && this.emailAddress) {
            this.isEmailValid = false;
        }
        else {
            this.isEmailValid = true;
        }
    }
    submit() {
        this.submitRating();
        this.requestBody.user = this.user;
        console.log(this.requestBody);
        this.dialogRef.close(this.requestBody);
    }
    closePopup() {
        this.dialogRef.close();
    }
    closePopupwithData() {
        this.submit();
    }
};
ReviewFormComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ReviewFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./review-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/review-form/review-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./review-form.component.css */ "./src/app/review-form/review-form.component.css")).default]
    })
], ReviewFormComponent);



/***/ }),

/***/ "./src/app/search-panel/search-panel.component.css":
/*!*********************************************************!*\
  !*** ./src/app/search-panel/search-panel.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-container {\r\n    display: flex;\r\n    padding: 8px 24px;\r\n    background-color: #f0f0f0;\r\n    flex-direction: column;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n    .search-container {\r\n        flex-direction: row;\r\n    }\r\n}\r\n\r\n.forms-field {\r\n    flex-grow: 1;\r\n}\r\n\r\n.forms-field mat-form-field {\r\n    width: 90%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoicHJvamVjdHMvbWFpbi1zY3JlZW4taW1hZ2Uvc3JjL2FwcC9zZWFyY2gtcGFuZWwvc2VhcmNoLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybXMtZmllbGQge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZm9ybXMtZmllbGQgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/search-panel/search-panel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/search-panel/search-panel.component.ts ***!
  \********************************************************/
/*! exports provided: SearchPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPanelComponent", function() { return SearchPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SearchPanelComponent = class SearchPanelComponent {
    constructor() {
        this.countryList = [
            'England',
            'Brazil',
            'USA',
            'India',
            'Germany',
            'Singapore',
            'Ireland',
            'Netherland',
            'Scotland'
        ];
        this.monthList = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'Septemeber',
            'October',
            'November',
            'December'
        ];
        this.genresList = [
            'Genre 1',
            'Genre 2',
            'Genre 3',
            'Genre 4',
            'Genre 5',
        ];
        this.typeList = [
            'Type 1',
            'Type 2',
            'Type 3',
            'Type 4'
        ];
    }
    ngOnInit() {
    }
};
SearchPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-panel.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/search-panel/search-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-panel.component.css */ "./src/app/search-panel/search-panel.component.css")).default]
    })
], SearchPanelComponent);



/***/ }),

/***/ "./src/app/trustpilot-carousal/trustpilot-carousal.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/trustpilot-carousal/trustpilot-carousal.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headers {\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    line-height: 2;\r\n}\r\n\r\n.section-container {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-auto-columns: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-section {\r\n    padding: 0 5%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.image-style {\r\n    width: 100%;\r\n    height: 600px;\r\n}\r\n\r\n.image-section-review {\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 10%;\r\n    width: 50%;\r\n    height: 550px;\r\n    background-color: white;\r\n    box-sizing: border-box;\r\n    padding: 7%;\r\n}\r\n\r\n.review-text {\r\n    font-size: 2.5rem;\r\n    font-weight: 600;\r\n    width: 80%;\r\n}\r\n\r\n.reviewer-name {\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    margin-top: 32px;\r\n}\r\n\r\n.fa-star {\r\n    font-size: 2.5rem;\r\n    padding: 8px;\r\n    color: #e7c714;\r\n}\r\n\r\n.slider-image {\r\n    width: 100px;\r\n    height: 100px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    right: 5%;\r\n    top: 30%;\r\n}\r\n\r\n.next {\r\n    top: 30%;\r\n    background: red;\r\n}\r\n\r\n.prev {\r\n    top: 45%;\r\n    background-color: green;\r\n}\r\n\r\n.slider-image img {\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvdHJ1c3RwaWxvdC1jYXJvdXNhbC90cnVzdHBpbG90LWNhcm91c2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJwcm9qZWN0cy9tYWluLXNjcmVlbi1pbWFnZS9zcmMvYXBwL3RydXN0cGlsb3QtY2Fyb3VzYWwvdHJ1c3RwaWxvdC1jYXJvdXNhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAgNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmltYWdlLXN0eWxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLmltYWdlLXNlY3Rpb24tcmV2aWV3IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiA3JTtcclxufVxyXG5cclxuLnJldmlldy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5yZXZpZXdlci1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbi5mYS1zdGFyIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgY29sb3I6ICNlN2M3MTQ7XHJcbn1cclxuXHJcbi5zbGlkZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICB0b3A6IDMwJTtcclxufVxyXG5cclxuLm5leHQge1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbi5wcmV2IHtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5zbGlkZXItaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/trustpilot-carousal/trustpilot-carousal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/trustpilot-carousal/trustpilot-carousal.component.ts ***!
  \**********************************************************************/
/*! exports provided: TrustpilotCarousalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustpilotCarousalComponent", function() { return TrustpilotCarousalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let TrustpilotCarousalComponent = class TrustpilotCarousalComponent {
    constructor() {
        this.modelData = [
            {
                imageurl: '../../assets/Image/trustpilot-carousal/first_1.jpg',
                review: 'Honestly it was my first camping experience and I loved it.',
                reviewer: 'Ron, first goer',
                reviewerAddress: 'Coachella 2019, California, USA'
            },
            {
                imageurl: '../../assets/Image/trustpilot-carousal/second_2.jpg',
                review: 'Honestly it was my first camping experience and I loved it.',
                reviewer: 'Ron, first goer',
                reviewerAddress: 'Coachella 2019, California, USA'
            },
            {
                imageurl: '../../assets/Image/trustpilot-carousal/third_3.jpg',
                review: 'Honestly it was my first camping experience and I loved it.',
                reviewer: 'Ron, first goer',
                reviewerAddress: 'Coachella 2019, California, USA'
            }
        ];
        this.mainSection1 = null;
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sectionContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], TrustpilotCarousalComponent.prototype, "container", void 0);
TrustpilotCarousalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trustpilot-carousal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trustpilot-carousal.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trustpilot-carousal/trustpilot-carousal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trustpilot-carousal.component.css */ "./src/app/trustpilot-carousal/trustpilot-carousal.component.css")).default]
    })
], TrustpilotCarousalComponent);



/***/ }),

/***/ "./src/app/uibutton/uibutton.component.css":
/*!*************************************************!*\
  !*** ./src/app/uibutton/uibutton.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-container{\r\n    background-color: #cdcdcd;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.add_review_button {\r\n    color: #ed5b4e;\r\n    background-color: transparent;\r\n    height: 40px;\r\n    width: 200px;\r\n    border: 2px solid #ed5b4e;\r\n    border-radius: 8px;\r\n    box-sizing: border-box;\r\n    margin: 16px;\r\n    font-weight: 600;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.add_review_button:hover,\r\n.add_review_button:active {\r\n    background-color: #ed5b4e;\r\n    outline: none;\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvdWlidXR0b24vdWlidXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0FBQ2hCIiwiZmlsZSI6InByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvdWlidXR0b24vdWlidXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGNkY2Q7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYWRkX3Jldmlld19idXR0b24ge1xyXG4gICAgY29sb3I6ICNlZDViNGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZDViNGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5hZGRfcmV2aWV3X2J1dHRvbjpob3ZlcixcclxuLmFkZF9yZXZpZXdfYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1YjRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/uibutton/uibutton.component.ts":
/*!************************************************!*\
  !*** ./src/app/uibutton/uibutton.component.ts ***!
  \************************************************/
/*! exports provided: UibuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UibuttonComponent", function() { return UibuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "../../node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../review-form/review-form.component */ "./src/app/review-form/review-form.component.ts");





let UibuttonComponent = class UibuttonComponent {
    constructor(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
        this.reviewCard = null;
    }
    ngOnInit() {
    }
    openReviewPopup() {
        const dialogRef = this.dialog.open(_review_form_review_form_component__WEBPACK_IMPORTED_MODULE_4__["ReviewFormComponent"], { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
            this.reviewCard = result;
        });
    }
    signOut() {
        this.authService.signOut();
        this.reviewCard = null;
    }
};
UibuttonComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UibuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uibutton',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uibutton.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/uibutton/uibutton.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uibutton.component.css */ "./src/app/uibutton/uibutton.component.css")).default]
    })
], UibuttonComponent);



/***/ }),

/***/ "./src/app/uicard/uicard.component.css":
/*!*********************************************!*\
  !*** ./src/app/uicard/uicard.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".review__list {\r\n    height: 300px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .review__list__container {\r\n    width: 90%;\r\n    margin: auto;\r\n    height: inherit;\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-auto-columns: 250px;\r\n    -webkit-animation: example 400s linear infinite;\r\n            animation: example 400s linear infinite;\r\n    position: relative;\r\n  }\r\n  \r\n  .review__list__container:hover {\r\n    -webkit-animation-play-state: paused;\r\n            animation-play-state: paused;\r\n  }\r\n  \r\n  .review__card {\r\n    margin: 8px;\r\n    max-width: 250px;\r\n    min-height: 200px;\r\n    max-height: 300px;\r\n    background-color: white;\r\n    padding: 12px;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    transform: translate3d(-9000px, 0, 0);\r\n  }\r\n  \r\n  .review__card:hover {\r\n    transform: translate3d(-9000px, 0, 0) scale(1.05);\r\n  }\r\n  \r\n  .review__card__header {\r\n    display: flex;\r\n  }\r\n  \r\n  .review__card__header__image {\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .review__card__header__image img {\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .review__card__header__rating {\r\n    flex-grow: 1;\r\n    align-self: center;\r\n    text-align: center;\r\n  }\r\n  \r\n  .review__card__desc__review {\r\n    margin: 8px 0px 12px 0px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .line-clamp {\r\n      display: -webkit-box;\r\n      -webkit-line-clamp: 9;\r\n      -webkit-box-orient: vertical;  \r\n  }\r\n  \r\n  .review__card__desc__review p {\r\n    margin: 0px;\r\n  }\r\n  \r\n  .fa {\r\n    padding: 5px;\r\n    margin: 3px;\r\n    box-sizing: border-box;\r\n    background: #dcdce6;\r\n    color: white;\r\n  }\r\n  \r\n  .fa-green {\r\n    background: #00b67a;\r\n  }\r\n  \r\n  .fa-light-green {\r\n    background: #73cf11;\r\n  }\r\n  \r\n  .fa-orange {\r\n    background: #a4b600;\r\n  }\r\n  \r\n  .fa-red {\r\n    background: #ff3722;\r\n  }\r\n  \r\n  .review__card__desc a {\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    color: black;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  @-webkit-keyframes example {\r\n    100% {\r\n      transform: translate3d(9000px, 0 ,0)\r\n    }\r\n  }\r\n  \r\n  @keyframes example {\r\n    100% {\r\n      transform: translate3d(9000px, 0 ,0)\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21haW4tc2NyZWVuLWltYWdlL3NyYy9hcHAvdWljYXJkL3VpY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLCtDQUF1QztZQUF2Qyx1Q0FBdUM7SUFDdkMsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxpREFBaUQ7RUFDbkQ7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7O0VBRUE7TUFDSSxvQkFBb0I7TUFDcEIscUJBQXFCO01BQ3JCLDRCQUE0QjtFQUNoQzs7RUFHQTtJQUNFLFdBQVc7RUFDYjs7RUFHQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0U7TUFDRTtJQUNGO0VBQ0Y7O0VBSkE7SUFDRTtNQUNFO0lBQ0Y7RUFDRiIsImZpbGUiOiJwcm9qZWN0cy9tYWluLXNjcmVlbi1pbWFnZS9zcmMvYXBwL3VpY2FyZC91aWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXZpZXdfX2xpc3Qge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXZpZXdfX2xpc3RfX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMjUwcHg7XHJcbiAgICBhbmltYXRpb246IGV4YW1wbGUgNDAwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXZpZXdfX2xpc3RfX2NvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gIH1cclxuICBcclxuICAucmV2aWV3X19jYXJkIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MDAwcHgsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAucmV2aWV3X19jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTkwMDBweCwgMCwgMCkgc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXZpZXdfX2NhcmRfX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAucmV2aWV3X19jYXJkX19oZWFkZXJfX2ltYWdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLnJldmlld19fY2FyZF9faGVhZGVyX19pbWFnZSBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAucmV2aWV3X19jYXJkX19oZWFkZXJfX3JhdGluZyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXZpZXdfX2NhcmRfX2Rlc2NfX3JldmlldyB7XHJcbiAgICBtYXJnaW46IDhweCAwcHggMTJweCAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAubGluZS1jbGFtcCB7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDk7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7ICBcclxuICB9XHJcbiAgICBcclxuICBcclxuICAucmV2aWV3X19jYXJkX19kZXNjX19yZXZpZXcgcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZhIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQ6ICNkY2RjZTY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYS1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiNjdhO1xyXG4gIH1cclxuICBcclxuICAuZmEtbGlnaHQtZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzczY2YxMTtcclxuICB9XHJcbiAgXHJcbiAgLmZhLW9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTRiNjAwO1xyXG4gIH1cclxuICBcclxuICAuZmEtcmVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjM3MjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXZpZXdfX2NhcmRfX2Rlc2MgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBleGFtcGxlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDkwMDBweCwgMCAsMClcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/uicard/uicard.component.ts":
/*!********************************************!*\
  !*** ./src/app/uicard/uicard.component.ts ***!
  \********************************************/
/*! exports provided: UicardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UicardComponent", function() { return UicardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card.service */ "./src/app/card.service.ts");



let UicardComponent = class UicardComponent {
    constructor(cardService) {
        this.cardService = cardService;
        this.cardDetails = [];
        this.isDataFetching = false;
    }
    ngOnInit() {
        this.isDataFetching = true;
        this.cardService.getCardDetails().subscribe((data) => {
            this.cardDetails = data;
            this.isDataFetching = false;
        });
    }
};
UicardComponent.ctorParameters = () => [
    { type: _card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"] }
];
UicardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uicard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uicard.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/uicard/uicard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uicard.component.css */ "./src/app/uicard/uicard.component.css")).default]
    })
], UicardComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\WorldWideFest\worldwidefest\WWF Prototypes\review-carousal\projects\main-screen-image\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map