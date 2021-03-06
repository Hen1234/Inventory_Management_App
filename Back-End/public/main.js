(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lidam\Desktop\projects\Automation\Inventory_Management_App\Front-End\src\main.ts */"zUnb");


/***/ }),

/***/ "8CkT":
/*!*****************************************************************!*\
  !*** ./src/app/components/primary-btn/primary-btn.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrimaryButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButtonComponent", function() { return PrimaryButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrimaryButtonComponent {
    constructor() {
        this.text = '';
        this.clickButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick(event) {
        this.clickButton.emit(event);
    }
}
PrimaryButtonComponent.ɵfac = function PrimaryButtonComponent_Factory(t) { return new (t || PrimaryButtonComponent)(); };
PrimaryButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrimaryButtonComponent, selectors: [["app-primary-btn"]], inputs: { text: "text" }, outputs: { clickButton: "clickButton" }, decls: 2, vars: 1, consts: [[1, "btn", "btn-primary", "primary-button", 3, "click"]], template: function PrimaryButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrimaryButtonComponent_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: [".primary-button[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 32px;\n  font-size: 18px;\n  cursor: pointer;\n  align-items: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWJ0bi9wcmltYXJ5LWJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpbWFyeS1idG4vcHJpbWFyeS1idG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimaryButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-primary-btn',
                templateUrl: './primary-btn.component.html',
                styleUrls: ['./primary-btn.component.scss']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "S1y7":
/*!**********************************!*\
  !*** ./src/app/items-service.ts ***!
  \**********************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ItemsService {
    constructor(http) {
        this.http = http;
    }
    getItemsRequest() {
        return this.http.get('http://localhost:3000/items/getItems');
    }
    addItemRequest(newItem) {
        return this.http.post('http://localhost:3000/items/addItem', newItem);
    }
    updateItemRequest(updateData) {
        return this.http.put('http://localhost:3000/items/updateItem', updateData);
    }
    getItemRequest() {
        return this.http.get('http://localhost:3000/items/getItemByID/1');
    }
    removeItemRequest(itemID) {
        return this.http.delete('http://localhost:3000/items/removeItem/' + itemID);
    }
    withdrawItemRequest(withdrawAmount) {
        return this.http.put('http://localhost:3000/items/withdrawItem', withdrawAmount);
    }
    depositItemRequest(depositAmount) {
        return this.http.put('http://localhost:3000/items/depositItem', depositAmount);
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_items_page_items_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/items-page/items-page.component */ "rkRN");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, consts: [[1, "items-page"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-items-page", 0);
    } }, directives: [_components_items_page_items_page_component__WEBPACK_IMPORTED_MODULE_1__["ItemsPageComponent"]], styles: [".items-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1zLXBhZ2V7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/primary-btn/primary-btn.component */ "8CkT");
/* harmony import */ var _components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/items-list/items-list.component */ "foPR");
/* harmony import */ var _components_items_list_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/items-list/item/item.component */ "q1LO");
/* harmony import */ var _components_items_page_items_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/items-page/items-page.component */ "rkRN");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_6__["PrimaryButtonComponent"],
        _components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_7__["ItemsListComponent"],
        _components_items_list_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"],
        _components_items_page_items_page_component__WEBPACK_IMPORTED_MODULE_9__["ItemsPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_6__["PrimaryButtonComponent"],
                    _components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_7__["ItemsListComponent"],
                    _components_items_list_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"],
                    _components_items_page_items_page_component__WEBPACK_IMPORTED_MODULE_9__["ItemsPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "foPR":
/*!***************************************************************!*\
  !*** ./src/app/components/items-list/items-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsListComponent", function() { return ItemsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item/item.component */ "q1LO");




function ItemsListComponent_app_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function ItemsListComponent_app_item_12_Template_app_item_update_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.updateClick($event); })("remove", function ItemsListComponent_app_item_12_Template_app_item_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeClick($event); })("withdraw", function ItemsListComponent_app_item_12_Template_app_item_withdraw_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.withdrawClick($event); })("deposit", function ItemsListComponent_app_item_12_Template_app_item_deposit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.depositClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
} }
class ItemsListComponent {
    constructor() {
        this.updateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.withdrawItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.depositItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    updateClick(item) {
        this.updateItem.emit(item);
    }
    removeClick(item) {
        this.removeItem.emit(item);
    }
    withdrawClick(item) {
        this.withdrawItem.emit(item);
    }
    depositClick(item) {
        this.depositItem.emit(item);
    }
}
ItemsListComponent.ɵfac = function ItemsListComponent_Factory(t) { return new (t || ItemsListComponent)(); };
ItemsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsListComponent, selectors: [["app-items-list"]], inputs: { itemsArray: "itemsArray" }, outputs: { updateItem: "updateItem", removeItem: "removeItem", withdrawItem: "withdrawItem", depositItem: "depositItem" }, decls: 13, vars: 1, consts: [[1, "items-list"], [1, "headers"], [1, "column-1"], [1, "column-2"], [1, "column-3"], [1, "column-4"], [1, "column-5"], [3, "item", "update", "remove", "withdraw", "deposit", 4, "ngFor", "ngForOf"], [3, "item", "update", "remove", "withdraw", "deposit"]], template: function ItemsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Item ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ItemsListComponent_app_item_12_Template, 1, 1, "app-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_2__["ItemComponent"]], styles: [".headers[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #7c7c7c;\n  height: 50px;\n  width: 100%;\n  align-items: center;\n  font-weight: bold;\n}\n.headers[_ngcontent-%COMP%]   .column-1[_ngcontent-%COMP%] {\n  width: 150px;\n  padding-left: 20px;\n}\n.headers[_ngcontent-%COMP%]   .column-2[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.headers[_ngcontent-%COMP%]   .column-3[_ngcontent-%COMP%] {\n  width: 500px;\n}\n.headers[_ngcontent-%COMP%]   .column-4[_ngcontent-%COMP%] {\n  width: 220px;\n}\n.headers[_ngcontent-%COMP%]   .column-first[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L2l0ZW1zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBRFo7QUFHUTtFQUNJLFlBQUE7QUFEWjtBQUdRO0VBQ0ksWUFBQTtBQURaO0FBR1E7RUFDSSxZQUFBO0FBRFo7QUFRSTtFQUNJLGtCQUFBO0FBTlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2l0ZW1zLWxpc3QvaXRlbXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJze1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdjN2M3YztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIC5jb2x1bW57XHJcbiAgICAgICAgJi0xe1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLTJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi0ze1xyXG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtNHtcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi1maXJzdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-items-list',
                templateUrl: './items-list.component.html',
                styleUrls: ['./items-list.component.scss']
            }]
    }], function () { return []; }, { itemsArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], withdrawItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], depositItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "q1LO":
/*!**************************************************************!*\
  !*** ./src/app/components/items-list/item/item.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class ItemComponent {
    constructor() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.withdraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deposit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    updateClick(event) {
        this.update.emit(this.item);
    }
    removeClick(event) {
        this.remove.emit(this.item);
    }
    withdrawClick(event) {
        this.withdraw.emit(this.item);
    }
    depositClick(event) {
        this.deposit.emit(this.item);
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(); };
ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], inputs: { item: "item" }, outputs: { update: "update", remove: "remove", withdraw: "withdraw", deposit: "deposit" }, decls: 26, vars: 4, consts: [[1, "item-container"], [1, "item-properties"], [1, "property-1"], [1, "property-2"], [1, "property-3"], [1, "property-4"], [1, "actions-buttons"], ["ngbTooltip", "Update item", "tooltipClass", "tooltip-class", 1, "action", "update-button", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "#5684e8", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-pencil"], ["fill-rule", "evenodd", "d", "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"], ["ngbTooltip", "Withdraw item", "tooltipClass", "tooltip-class", 1, "action", "withdraw-button", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "#5684e8", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-dash-circle"], ["fill-rule", "evenodd", "d", "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["fill-rule", "evenodd", "d", "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"], ["ngbTooltip", "Deposit item", "tooltipClass", "tooltip-class", 1, "action", "deposit-button", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "#5684e8", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-plus-circle"], ["fill-rule", "evenodd", "d", "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"], ["ngbTooltip", "Remove item", "tooltipClass", "tooltip-class", 1, "action", "remove-button", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "#5684e8", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-trash"], ["d", "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"], ["fill-rule", "evenodd", "d", "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_div_click_11_listener($event) { return ctx.updateClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_div_click_14_listener($event) { return ctx.withdrawClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_div_click_18_listener($event) { return ctx.depositClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_div_click_22_listener($event) { return ctx.removeClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.count);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]], styles: [".item-properties[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #f6f4f4;\n  min-height: 50px;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  width: 100%;\n  align-items: center;\n  padding: 7px 0;\n}\n.item-properties[_ngcontent-%COMP%]   .property-1[_ngcontent-%COMP%] {\n  width: 150px;\n  min-width: 150px;\n  padding-left: 20px;\n}\n.item-properties[_ngcontent-%COMP%]   .property-2[_ngcontent-%COMP%] {\n  width: 180px;\n  min-width: 180px;\n  flex-wrap: wrap;\n  display: flex;\n  padding-right: 30px;\n}\n.item-properties[_ngcontent-%COMP%]   .property-3[_ngcontent-%COMP%] {\n  width: 500px;\n  min-width: 500px;\n  flex-wrap: wrap;\n  display: flex;\n  padding-right: 30px;\n}\n.item-properties[_ngcontent-%COMP%]   .property-4[_ngcontent-%COMP%] {\n  width: 220px;\n  min-width: 220px;\n}\n.actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  float: right;\n  align-self: flex-end;\n}\n.action[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  background-color: #edf1fd;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURaO0FBR1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRFo7QUFHUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRFo7QUFPQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQU9BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbXMtbGlzdC9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1wcm9wZXJ0aWVze1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y2ZjRmNDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDdweCAwO1xyXG4gICAgXHJcbiAgICAucHJvcGVydHl7XHJcbiAgICAgICAgJi0xe1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLTJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi0ze1xyXG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtNHtcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbnMtYnV0dG9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7ICBcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyBcclxufVxyXG5cclxuLmFjdGlvbntcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmZDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXIgO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyAgXHJcbn1cclxuXHJcblxyXG5cclxuIFxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], withdraw: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deposit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "rkRN":
/*!***************************************************************!*\
  !*** ./src/app/components/items-page/items-page.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageComponent", function() { return ItemsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _items_page_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-page.config */ "ze7d");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../items-service */ "S1y7");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primary-btn/primary-btn.component */ "8CkT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../items-list/items-list.component */ "foPR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function ItemsPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-items-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateItem", function ItemsPageComponent_div_10_Template_app_items_list_updateItem_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx_r5.updateItem($event, _r3); })("removeItem", function ItemsPageComponent_div_10_Template_app_items_list_removeItem_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeItem($event); })("withdrawItem", function ItemsPageComponent_div_10_Template_app_items_list_withdrawItem_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx_r8.withdrawItem($event, _r3); })("depositItem", function ItemsPageComponent_div_10_Template_app_items_list_depositItem_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx_r9.depositItem($event, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsArray", ctx_r0.itemsArray);
} }
function ItemsPageComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No Items Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemsPageComponent_ng_template_13_div_7_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.noteMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.errorMessage);
} }
const _c0 = function (a0, a1) { return { "amount-class": a0, "amount-error-class": a1 }; };
function ItemsPageComponent_ng_template_13_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Item Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsPageComponent_ng_template_13_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.addNameValue = $event; })("ngModelChange", function ItemsPageComponent_ng_template_13_div_7_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.changeAddItemValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Item Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsPageComponent_ng_template_13_div_7_Template_textarea_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.addDescriptionValue = $event; })("ngModelChange", function ItemsPageComponent_ng_template_13_div_7_Template_textarea_ngModelChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.changeAddItemValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Item Count:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsPageComponent_ng_template_13_div_7_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.addCountValue = $event; })("ngModelChange", function ItemsPageComponent_ng_template_13_div_7_Template_input_ngModelChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.changeAddItemValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ItemsPageComponent_ng_template_13_div_7_div_14_Template, 5, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.addNameValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.addDescriptionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !ctx_r11.errorMessage, ctx_r11.errorMessage))("ngModel", ctx_r11.addCountValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.noteMessage || ctx_r11.errorMessage);
} }
function ItemsPageComponent_ng_template_13_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.noteMessage, " ");
} }
function ItemsPageComponent_ng_template_13_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsPageComponent_ng_template_13_div_8_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.updateNameValue = $event; })("ngModelChange", function ItemsPageComponent_ng_template_13_div_8_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.changeUpdateItemValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsPageComponent_ng_template_13_div_8_Template_textarea_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.updateDescriptionValue = $event; })("ngModelChange", function ItemsPageComponent_ng_template_13_div_8_Template_textarea_ngModelChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.changeUpdateItemValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ItemsPageComponent_ng_template_13_div_8_div_10_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.updateNameValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.updateDescriptionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.noteMessage);
} }
function ItemsPageComponent_ng_template_13_div_9_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.errorMessage, " ");
} }
function ItemsPageComponent_ng_template_13_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Withdraw Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsPageComponent_ng_template_13_div_9_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.withdrawAmountValue = $event; })("ngModelChange", function ItemsPageComponent_ng_template_13_div_9_Template_input_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.changeWithdrawItemValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemsPageComponent_ng_template_13_div_9_div_8_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Item Count: ", ctx_r13.modalItem.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !ctx_r13.errorMessage, ctx_r13.errorMessage))("max", ctx_r13.modalItem.count)("ngModel", ctx_r13.withdrawAmountValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.errorMessage);
} }
function ItemsPageComponent_ng_template_13_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.errorMessage, " ");
} }
function ItemsPageComponent_ng_template_13_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deposit Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsPageComponent_ng_template_13_div_10_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.depositAmountValue = $event; })("ngModelChange", function ItemsPageComponent_ng_template_13_div_10_Template_input_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.changeDepositItemValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemsPageComponent_ng_template_13_div_10_div_8_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Item Count: ", ctx_r14.modalItem.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, !ctx_r14.errorMessage, ctx_r14.errorMessage))("ngModel", ctx_r14.depositAmountValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.errorMessage);
} }
const _c1 = function (a0, a1) { return { "btn-outline-primary": a0, "disable-save": a1 }; };
function ItemsPageComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsPageComponent_ng_template_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.resetChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ItemsPageComponent_ng_template_13_div_7_Template, 15, 8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemsPageComponent_ng_template_13_div_8_Template, 11, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ItemsPageComponent_ng_template_13_div_9_Template, 9, 8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ItemsPageComponent_ng_template_13_div_10_Template, 9, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsPageComponent_ng_template_13_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.resetChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsPageComponent_ng_template_13_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.modalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modalStatus === ctx_r4.ModalStatus.AddItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modalStatus === ctx_r4.ModalStatus.UpdateItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modalStatus === ctx_r4.ModalStatus.WithdrawItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modalStatus === ctx_r4.ModalStatus.DepositItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, !ctx_r4.errorMessage && !ctx_r4.noteMessage && !ctx_r4.emptyValuesWithdrawOrDeposit, ctx_r4.errorMessage || ctx_r4.noteMessage || ctx_r4.emptyValuesWithdrawOrDeposit))("disabled", ctx_r4.errorMessage || ctx_r4.noteMessage || ctx_r4.emptyValuesWithdrawOrDeposit);
} }
class ItemsPageComponent {
    constructor(itemService, modalService) {
        this.itemService = itemService;
        this.modalService = modalService;
        this.itemsArray = [];
        //For the html to know ModalStaus enum
        this.ModalStatus = _items_page_config__WEBPACK_IMPORTED_MODULE_1__["ModalStatus"];
    }
    ngOnInit() {
        this.itemService.getItemsRequest().subscribe(responseData => {
            this.convertItemsObjectToArray(responseData);
        });
    }
    convertItemsObjectToArray(itemsObject) {
        this.itemsArray = Object.keys(itemsObject).map(key => {
            const currentItem = itemsObject[key];
            return { id: key, name: currentItem.name, description: currentItem.description, count: currentItem.count };
        });
    }
    addItem(content) {
        this.modalStatus = _items_page_config__WEBPACK_IMPORTED_MODULE_1__["ModalStatus"].AddItem;
        this.modalTitle = "Add Item";
        this.modalRef = this.modalService.open(content);
        this.noteMessage = "Note: Empty fields are invalid";
    }
    changeAddItemValue() {
        this.errorMessage = this.addCountValue < 0 ? "The value is invalid" : "";
        this.noteMessage = !this.addNameValue || !this.addDescriptionValue ||
            (this.addCountValue !== 0 && !this.addCountValue) ? "Note: Empty fields are invalid" : "";
    }
    updateItem(item, content) {
        this.modalItem = item;
        this.updateNameValue = this.modalItem.name;
        this.updateDescriptionValue = this.modalItem.description;
        this.modalStatus = _items_page_config__WEBPACK_IMPORTED_MODULE_1__["ModalStatus"].UpdateItem;
        this.modalTitle = "Update Item";
        this.modalRef = this.modalService.open(content);
    }
    changeUpdateItemValue() {
        this.noteMessage = !this.updateNameValue || !this.updateDescriptionValue ?
            "Note: Empty fields are invalid" : "";
    }
    removeItem(item) {
        this.itemService.removeItemRequest(item.id).subscribe(responseData => {
            this.itemsArray = this.itemsArray.filter(element => element.id !== responseData);
        });
    }
    withdrawItem(item, content) {
        this.modalItem = item;
        this.modalStatus = _items_page_config__WEBPACK_IMPORTED_MODULE_1__["ModalStatus"].WithdrawItem;
        this.modalTitle = "Withdraw Item";
        this.modalRef = this.modalService.open(content);
        this.emptyValuesWithdrawOrDeposit = true;
    }
    changeWithdrawItemValue() {
        this.errorMessage = this.modalItem.count < this.withdrawAmountValue || this.withdrawAmountValue < 0
            ? "The value is invalid" : "";
        this.emptyValuesWithdrawOrDeposit = !this.withdrawAmountValue;
    }
    depositItem(item, content) {
        this.modalItem = item;
        this.modalStatus = _items_page_config__WEBPACK_IMPORTED_MODULE_1__["ModalStatus"].DepositItem;
        this.modalTitle = "Deposit Item";
        this.modalRef = this.modalService.open(content);
        this.emptyValuesWithdrawOrDeposit = true;
    }
    changeDepositItemValue() {
        this.errorMessage = this.depositAmountValue < 0 ? "The value is invalid" : "";
        this.emptyValuesWithdrawOrDeposit = !this.depositAmountValue;
    }
    saveChanges() {
        switch (this.modalStatus) {
            case _items_page_config__WEBPACK_IMPORTED_MODULE_1__["ModalStatus"].AddItem:
                let newItem = { name: this.addNameValue, description: this.addDescriptionValue, count: this.addCountValue };
                this.itemService.addItemRequest(newItem).subscribe((responseData) => {
                    this.itemsArray.push(responseData);
                });
                this.addNameValue = "";
                this.addDescriptionValue = "";
                this.addCountValue = "";
                break;
            case _items_page_config__WEBPACK_IMPORTED_MODULE_1__["ModalStatus"].WithdrawItem:
                let withdrawAmount = { id: this.modalItem.id, amount: this.withdrawAmountValue };
                this.itemService.withdrawItemRequest(withdrawAmount).subscribe((responseData) => {
                    this.itemsArray = this.itemsArray.map(item => item.id === this.modalItem.id ? responseData : item);
                });
                this.withdrawAmountValue = "";
                break;
            case _items_page_config__WEBPACK_IMPORTED_MODULE_1__["ModalStatus"].UpdateItem:
                let updateName = this.updateNameValue || this.modalItem.name;
                let updateDescription = this.updateDescriptionValue || this.modalItem.description;
                let update = { id: this.modalItem.id, name: updateName, description: updateDescription };
                this.itemService.updateItemRequest(update).subscribe((responseData) => {
                    this.itemsArray = this.itemsArray.map(item => item.id === this.modalItem.id ? responseData : item);
                });
                this.updateNameValue = "";
                this.updateDescriptionValue = "";
                break;
            case _items_page_config__WEBPACK_IMPORTED_MODULE_1__["ModalStatus"].DepositItem:
                let depositAmount = { id: this.modalItem.id, amount: this.depositAmountValue };
                this.itemService.depositItemRequest(depositAmount).subscribe((responseData) => {
                    this.itemsArray = this.itemsArray.map(item => item.id === this.modalItem.id ? responseData : item);
                });
                this.depositAmountValue = 0;
                break;
        }
        this.resetChanges();
    }
    resetChanges() {
        this.withdrawAmountValue = "";
        this.depositAmountValue = "";
        this.addNameValue = "";
        this.addDescriptionValue = "";
        this.addCountValue = "";
        this.updateNameValue = "";
        this.updateDescriptionValue = "";
        this.errorMessage = "";
        this.noteMessage = "";
        this.emptyValuesWithdrawOrDeposit = false;
        this.modalRef.close();
    }
}
ItemsPageComponent.ɵfac = function ItemsPageComponent_Factory(t) { return new (t || ItemsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
ItemsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsPageComponent, selectors: [["app-items-page"]], decls: 15, vars: 4, consts: [[1, "page-container"], [1, "title"], [1, "button-line"], [1, "items-num"], ["id", "badge-number", 1, "badge", "badge-light"], [1, "add-item-btn", 3, "text", "clickButton"], ["class", "items-list", 4, "ngIf", "ngIfElse"], ["emptyState", ""], ["content", ""], [1, "items-list"], [3, "itemsArray", "updateItem", "removeItem", "withdrawItem", "depositItem"], [1, "empty-state-container"], ["src", "../../assets/empty_state_copy.webp", 1, "empty-image"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "add-content", 4, "ngIf"], ["class", "update-content", 4, "ngIf"], ["class", "withdraw-content", 4, "ngIf"], ["class", "deposit-content", 4, "ngIf"], [1, "modal-footer"], ["id", "cancel-button", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "save-button", "type", "button", 1, "btn", "btn-outline-primary", 3, "ngClass", "disabled", "click"], [1, "add-content"], [1, "input-line"], [1, "label-class"], ["id", "add-input-name", "placeholder", "Enter a name", "type", "text", 1, "input-class", 3, "ngModel", "ngModelChange"], ["id", "add-input-description", "placeholder", "Enter a description", 1, "input-class", 3, "ngModel", "ngModelChange"], ["id", "add-input-amount", "placeholder", "Enter an amount", "type", "number", "min", "0", 3, "ngClass", "ngModel", "ngModelChange"], [1, "messages"], [4, "ngIf"], [1, "note-message"], [1, "error-message"], [1, "update-content"], ["id", "update-input-name", "placeholder", "Enter a new name", "type", "text", 1, "input-class", 3, "ngModel", "ngModelChange"], ["id", "update-input-description", "placeholder", "Enter a new description", "rows", "3", 1, "input-class", 3, "ngModel", "ngModelChange"], ["class", "note-message", 4, "ngIf"], [1, "withdraw-content"], [1, "label-class", "input-line"], ["id", "withdraw-input", "placeholder", "Enter an amount", "type", "number", "min", "0", 3, "ngClass", "max", "ngModel", "ngModelChange"], ["class", "error-message", 4, "ngIf"], [1, "deposit-content"], ["id", "deposit-input", "placeholder", "Enter an amount", "type", "number", "min", "0", 3, "ngClass", "ngModel", "ngModelChange"]], template: function ItemsPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Inventory Management Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Number of Items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-primary-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickButton", function ItemsPageComponent_Template_app_primary_btn_clickButton_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.addItem(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ItemsPageComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ItemsPageComponent_ng_template_11_Template, 4, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ItemsPageComponent_ng_template_13_Template, 16, 10, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemsArray.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemsArray.length > 0)("ngIfElse", _r1);
    } }, directives: [_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_4__["PrimaryButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_6__["ItemsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"]], styles: [".page-container[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  min-width: 1250px;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 15px;\n  align-items: center;\n  padding-left: 15px;\n  margin-bottom: 15px;\n  width: 100%;\n  font-size: 30px;\n  background-color: #edf1fd;\n  height: 100px;\n  border-radius: 6px;\n  color: #5684e8;\n}\n\n.items-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.button-line[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.items-num[_ngcontent-%COMP%] {\n  height: 32px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 0.25rem;\n  padding: 0 8px;\n  font-size: 18px;\n  display: flex;\n  background-color: #007bff;\n  color: white;\n  align-items: center;\n  justify-content: center;\n}\n\n.items-num[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-left: 5px;\n}\n\n.input-line[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n}\n\n.label-class[_ngcontent-%COMP%] {\n  width: 150px;\n  font-weight: bold;\n}\n\n.input-class[_ngcontent-%COMP%] {\n  width: 300px;\n  border-radius: 4px;\n  border: 1px solid #7c7c7c;\n}\n\n.amount-class[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 4px;\n  border: 1px solid #7c7c7c;\n}\n\n.amount-error-class[_ngcontent-%COMP%] {\n  width: 150px;\n  border: 2px solid red;\n  border-radius: 4px;\n}\n\n.amount-error-class[_ngcontent-%COMP%]:focus {\n  outline: 0px;\n}\n\n#add-input-description[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  width: 500px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  background-color: #edf1fd;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  background-color: #edf1fd;\n}\n\n.close[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.note-message[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.messages[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.empty-state-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-weight: bold;\n}\n\n.empty-state-container[_ngcontent-%COMP%]   .empty-image[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1wYWdlL2l0ZW1zLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFNQTtFQUNJLFlBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFJSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUZSOztBQU9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFNUTtFQUNJLFlBQUE7QUFKWjs7QUFVQTtFQUNJLGFBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLHlCQUFBO0FBUEo7O0FBVUE7RUFDSSx5QkFBQTtBQVBKOztBQVVBO0VBQ0ksYUFBQTtBQVBKOztBQVVBO0VBQ0ksa0JBQUE7QUFQSjs7QUFVQTtFQUNJLFVBQUE7QUFQSjs7QUFVQTtFQUVJLFlBQUE7QUFSSjs7QUFXQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFSUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbXMtcGFnZS9pdGVtcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVye1xyXG4gICAgcGFkZGluZzowIDE1cHg7XHJcbiAgICBtaW4td2lkdGg6IDEyNTBweDtcclxuXHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWRmMWZkO1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgY29sb3I6IzU2ODRlODtcclxufVxyXG5cclxuXHJcbi5pdGVtcy1saXN0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuXHJcbi5idXR0b24tbGluZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLml0ZW1zLW51bXtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmJhZGdle1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmlucHV0LWxpbmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxhYmVsLWNsYXNze1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbnB1dC1jbGFzc3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICAjN2M3YzdjO1xyXG59XHJcblxyXG4uYW1vdW50LWNsYXNze1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgICM3YzdjN2M7XHJcbn1cclxuXHJcbi5hbW91bnQtZXJyb3ItY2xhc3N7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDBweDsgICBcclxuICAgICAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuI2FkZC1pbnB1dC1kZXNjcmlwdGlvbntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5e1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmZDtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZmQ7XHJcbn1cclxuXHJcbi5jbG9zZXtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5ub3RlLW1lc3NhZ2V7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdle1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm1lc3NhZ2Vze1xyXG5cclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgLmVtcHR5LWltYWdle1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-items-page',
                templateUrl: './items-page.component.html',
                styleUrls: ['./items-page.component.scss']
            }]
    }], function () { return [{ type: _items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ze7d":
/*!************************************************************!*\
  !*** ./src/app/components/items-page/items-page.config.ts ***!
  \************************************************************/
/*! exports provided: ModalStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalStatus", function() { return ModalStatus; });
var ModalStatus;
(function (ModalStatus) {
    ModalStatus[ModalStatus["AddItem"] = 0] = "AddItem";
    ModalStatus[ModalStatus["UpdateItem"] = 1] = "UpdateItem";
    ModalStatus[ModalStatus["WithdrawItem"] = 2] = "WithdrawItem";
    ModalStatus[ModalStatus["DepositItem"] = 3] = "DepositItem";
})(ModalStatus || (ModalStatus = {}));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map