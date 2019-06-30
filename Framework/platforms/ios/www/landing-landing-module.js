(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing.page */ "./src/app/landing/landing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_5__["LandingPage"]
    }
];
var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_5__["LandingPage"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.page.html":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"tutorial-page\" color=\"dark\">\n    <div padding-top text-end>\n      <ion-button fill=\"clear\" [routerLink]=\"'/login/'\" routerDirection=\"forward\" color=\"light\">Saltar<ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\n    </div>\n\n    <ion-button (click)=\"nfclick()\">NFC</ion-button>\n  \n    <ion-slides pager=\"true\">\n      <ion-slide>\n        <ion-grid>\n          <ion-row>\n              <ion-col>\n                  <br>\n                  <br>\n                  <br>\n                  <img src=\"../../assets/imgs/123.png\" alt=\"\">\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <h2>Bienvenido a un dos tres</h2>\n                  <p>La forma más fácil, rápida y segura de hacer tus pagos.</p>\n                  <br>\n                  <br>\n                  <br>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n  \n      <ion-slide>\n          <ion-grid>\n              <ion-row>\n                  <ion-col>\n                      <img src=\"../../assets/imgs/exchange.png\" alt=\"\">\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      <h2>RECARGA CELULAR</h2>\n                      <p>Recarga tu celular de cualquier compañía en segundos, con sólo 3 clicks y desde donde quieras.</p>\n                      <br>\n                      <br>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-slide>\n  \n      <ion-slide>\n          <ion-grid>\n              <ion-row>\n                  <ion-col>\n                    <div></div>\n                      <img src=\"../../assets/imgs/tickets.png\" alt=\"\">\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                          <h2>BOLETOS DE CINE</h2>\n                          <p>Compra tus boletos de Cinépolis y Cinemex y ve a la función que desees en el cine de tu preferencia.</p>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-slide>\n  \n        <ion-slide>\n                              <ion-grid>\n                                  <ion-row>\n                                      <ion-col>\n                                              <img src=\"../../assets/imgs/car.png\" alt=\"\">\n                                      </ion-col>\n                                  </ion-row>\n                                  <ion-row>\n                                      <ion-col>\n                                              <h2>RECARGA TAG</h2>\n                                              <p>Recarga tu TAG PASE, TeleVía y ViaPass en segundos, con sólo 3 clicks y desde donde quieras.</p>\n                                      </ion-col>\n                                  </ion-row>\n                              </ion-grid>\n                          </ion-slide>\n                          <ion-slide>\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col>\n                                          <div></div>\n                                            <img src=\"../../assets/imgs/house.png\" alt=\"\">\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row>\n                                        <ion-col>\n                                                <h2>PAGA TUS SERVICIOS</h2>\n                                                <p>Compra tus boletos de Cinépolis y Cinemex y ve a la función que desees en el cine de tu preferencia.</p>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-slide>\n                            <ion-slide>\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col>\n                                              <div></div>\n                                                <img src=\"../../assets/imgs/nfc.png\" alt=\"\">\n                                            </ion-col>\n                                        </ion-row>\n                                        <ion-row>\n                                            <ion-col>\n                                                    <h2>Pago NFC</h2>\n                                                    <p>Paga rapido y seguro con tu celular.</p>\n                                                    <br>\n                                                    <br>\n                                                    <br>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                            </ion-slide>\n  \n      <ion-slide>\n          <ion-grid>\n              <ion-row>\n                  <ion-col>\n                      <img src=\"../../assets/imgs/credit-card.png\" alt=\"\">\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      <h2>¿Estas listo para comprar?</h2>\n                      <ion-button expand=\"block\" fill=\"clear\" [routerLink]=\"'/login/'\" routerDirection=\"forward\">Comenzar</ion-button>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>"

/***/ }),

/***/ "./src/app/landing/landing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tutorial-page .toolbar-background {\n  background: #fff;\n  border-color: transparent; }\n\n.tutorial-page .slide-zoom {\n  height: 100%; }\n\n.tutorial-page .slide-title {\n  margin-top: 2.8rem; }\n\n.tutorial-page .slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 18px 0; }\n\n.tutorial-page b {\n  font-weight: 500; }\n\n.tutorial-page p {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646B; }\n\n.tutorial-page p b {\n    color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXVyaWNpby9pb25pYy9pb25pYy1tZWV0dXBzL0ZyYW1ld29yay9zcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHTSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBSi9CO0VBUU0sWUFBWSxFQUFBOztBQVJsQjtFQVlNLGtCQUFrQixFQUFBOztBQVp4QjtFQWdCTSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFsQnBCO0VBc0JNLGdCQUFnQixFQUFBOztBQXRCdEI7RUEwQk0sZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQTdCcEI7SUFnQ1EsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnR1dG9yaWFsLXBhZ2Uge1xuXG4gICAgLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIFxuICAgIC5zbGlkZS16b29tIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIFxuICAgIC5zbGlkZS10aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gICAgfVxuICBcbiAgICAuc2xpZGUtaW1hZ2Uge1xuICAgICAgbWF4LWhlaWdodDogNTAlO1xuICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICBtYXJnaW46IDE4cHggMDtcbiAgICB9XG4gIFxuICAgIGIge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIFxuICAgIHAge1xuICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGNvbG9yOiAjNjA2NDZCO1xuICBcbiAgICAgIGIge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/landing/landing.page.ts":
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/nfc/ngx */ "./node_modules/@ionic-native/nfc/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPage = /** @class */ (function () {
    function LandingPage(nfc, ndef) {
        this.nfc = nfc;
        this.ndef = ndef;
    }
    LandingPage.prototype.ngOnInit = function () {
    };
    LandingPage.prototype.nfclick = function () {
        var _this = this;
        this.nfc.beginSession().subscribe(function (res) {
            _this.nfc.addNdefListener(function () {
                alert('successfully attached ndef listener');
            }, function (err) {
                console.log('error attaching ndef listener', err);
                alert(('error attaching ndef listener' + err));
            }).subscribe(function (event) {
                console.log('received ndef message. the tag contains: ', event.tag);
                console.log('decoded tag id', _this.nfc.bytesToHexString(event.tag.id));
            });
        }, function (err) {
            console.log(err);
        });
    };
    LandingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.page.html */ "./src/app/landing/landing.page.html"),
            styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/landing/landing.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_1__["NFC"], _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_1__["Ndef"]])
    ], LandingPage);
    return LandingPage;
}());



/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map