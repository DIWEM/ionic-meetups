(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-task-new-task-module"],{

/***/ "./src/app/new-task/new-task.module.ts":
/*!*********************************************!*\
  !*** ./src/app/new-task/new-task.module.ts ***!
  \*********************************************/
/*! exports provided: NewTaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskPageModule", function() { return NewTaskPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_task_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-task.page */ "./src/app/new-task/new-task.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _new_task_page__WEBPACK_IMPORTED_MODULE_5__["NewTaskPage"]
    }
];
var NewTaskPageModule = /** @class */ (function () {
    function NewTaskPageModule() {
    }
    NewTaskPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]],
            declarations: [_new_task_page__WEBPACK_IMPORTED_MODULE_5__["NewTaskPage"]]
        })
    ], NewTaskPageModule);
    return NewTaskPageModule;
}());



/***/ }),

/***/ "./src/app/new-task/new-task.page.html":
/*!*********************************************!*\
  !*** ./src/app/new-task/new-task.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nueva Comida</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <ion-row no-padding>\n      <ion-col size=\"6\" offset=\"3\">\n        <img [src]=\"image\" alt=\"this is the image\" width = \"128\" height = \"128\"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col size=\"6\" offset=\"3\">\n        <ion-button fill=\"clear\" expand=\"block\" size=\"small\" (click)=\"openImagePicker()\">Elegir Foto</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n    <ion-item>\n      <ion-label>Nombre:</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Estado:</ion-label>\n      <ion-input type=\"text\" formControlName=\"estado\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sodio:</ion-label>\n      <ion-input type=\"text\" formControlName=\"sodio\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Azucar:</ion-label>\n      <ion-input type=\"text\" formControlName=\"azucar\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Grasa Saturada:</ion-label>\n      <ion-input type=\"text\" formControlName=\"grasa\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-textarea formControlName=\"description\" placeholder=\"Enter more information here...\"></ion-textarea>\n    </ion-item>\n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\">Agregar</ion-button>\n  </form>\n\n  <!-- <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmitInfo(validations_form.value)\">\n    <ion-item>\n      <ion-label>Nombre:</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Apellido:</ion-label>\n      <ion-input type=\"text\" formControlName=\"last\"></ion-input>\n    </ion-item>\n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\">Guardar</ion-button>\n  </form> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/new-task/new-task.page.scss":
/*!*********************************************!*\
  !*** ./src/app/new-task/new-task.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submit-btn {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXVyaWNpby9pb25pYy9pb25pYy1tZWV0dXBzL0ZyYW1ld29yay9zcmMvYXBwL25ldy10YXNrL25ldy10YXNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3LXRhc2svbmV3LXRhc2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/new-task/new-task.page.ts":
/*!*******************************************!*\
  !*** ./src/app/new-task/new-task.page.ts ***!
  \*******************************************/
/*! exports provided: NewTaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskPage", function() { return NewTaskPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};







var NewTaskPage = /** @class */ (function () {
    function NewTaskPage(imagePicker, toastCtrl, loadingCtrl, router, formBuilder, firebaseService, webview) {
        this.imagePicker = imagePicker;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.webview = webview;
    }
    NewTaskPage.prototype.ngOnInit = function () {
        this.resetFields();
    };
    NewTaskPage.prototype.resetFields = function () {
        this.image = "./assets/imgs/diet.png";
        this.validations_form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sodio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            azucar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            grasa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    NewTaskPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            estado: value.estado,
            sodio: value.sodio,
            azucar: value.azucar,
            description: value.description,
            image: this.image
        };
        this.firebaseService.createTask(data)
            .then(function (res) {
            _this.router.navigate(["/home/user/app/tab1"]);
        });
    };
    NewTaskPage.prototype.onSubmitInfo = function (value) {
        var _this = this;
        var dataInfo = {
            name: value.name,
            last: value.last,
        };
        this.firebaseService.createUserInfo(dataInfo)
            .then(function (res) {
            _this.router.navigate(["/home/user/app/tab1"]);
        });
    };
    NewTaskPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewTaskPage.prototype.uploadImageToFirebase = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, toast, image_src, randomId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Image was updated successfully',
                                duration: 3000
                            })];
                    case 2:
                        toast = _a.sent();
                        this.presentLoading(loading);
                        image_src = this.webview.convertFileSrc(image);
                        randomId = Math.random().toString(36).substr(2, 5);
                        //uploads img to firebase storage
                        this.firebaseService.uploadImage(image_src, randomId)
                            .then(function (photoURL) {
                            _this.image = photoURL;
                            loading.dismiss();
                            toast.present();
                        }, function (err) {
                            console.log(err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewTaskPage.prototype.presentLoading = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NewTaskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! ./new-task.page.html */ "./src/app/new-task/new-task.page.html"),
            styles: [__webpack_require__(/*! ./new-task.page.scss */ "./src/app/new-task/new-task.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"]])
    ], NewTaskPage);
    return NewTaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-task-new-task-module.js.map