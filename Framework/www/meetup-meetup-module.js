(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meetup-meetup-module"],{

/***/ "./src/app/meetup/meetup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/meetup/meetup.module.ts ***!
  \*****************************************/
/*! exports provided: MeetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetupPageModule", function() { return MeetupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _meetup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meetup.page */ "./src/app/meetup/meetup.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _meetup_page__WEBPACK_IMPORTED_MODULE_5__["MeetupPage"]
    }
];
var MeetupPageModule = /** @class */ (function () {
    function MeetupPageModule() {
    }
    MeetupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_meetup_page__WEBPACK_IMPORTED_MODULE_5__["MeetupPage"]]
        })
    ], MeetupPageModule);
    return MeetupPageModule;
}());



/***/ }),

/***/ "./src/app/meetup/meetup.page.html":
/*!*****************************************!*\
  !*** ./src/app/meetup/meetup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"['/new-task']\">\n              <ion-icon color=\"medium\" slot=\"icon-only\" name=\"cog\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button [routerLink]=\"['/new-task']\">\n          <ion-icon color=\"medium\" slot=\"icon-only\" name=\"chatbubbles\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title><img src=\"../../assets/icon/logo.png\" alt=\"\"></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-card>\n        <img src=\"../../assets/imgs/perfil.jpg\" alt=\"\">\n        <ion-card-header>\n          <ion-card-subtitle>Developer</ion-card-subtitle>\n          <ion-card-title>Selena Gomez, 24</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eius! Necessitatibus nesciunt.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n          <ion-fab-button>\n            <ion-icon name=\"heart\"></ion-icon>\n          </ion-fab-button>\n      </ion-fab>\n      <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n          <ion-fab-button color=\"secondary\">\n            <ion-icon name=\"flame\"></ion-icon>\n          </ion-fab-button>\n      </ion-fab>\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button color=\"success\">\n            <ion-icon name=\"hand\"></ion-icon>\n          </ion-fab-button>\n      </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/meetup/meetup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/meetup/meetup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZXR1cC9tZWV0dXAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/meetup/meetup.page.ts":
/*!***************************************!*\
  !*** ./src/app/meetup/meetup.page.ts ***!
  \***************************************/
/*! exports provided: MeetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetupPage", function() { return MeetupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeetupPage = /** @class */ (function () {
    function MeetupPage() {
    }
    MeetupPage.prototype.ngOnInit = function () {
    };
    MeetupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meetup',
            template: __webpack_require__(/*! ./meetup.page.html */ "./src/app/meetup/meetup.page.html"),
            styles: [__webpack_require__(/*! ./meetup.page.scss */ "./src/app/meetup/meetup.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MeetupPage);
    return MeetupPage;
}());



/***/ })

}]);
//# sourceMappingURL=meetup-meetup-module.js.map