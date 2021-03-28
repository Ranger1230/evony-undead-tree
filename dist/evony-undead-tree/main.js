(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chris\source\repos\Ranger1230\evony-undead-tree\src\main.ts */"zUnb");


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

/***/ "Iqh2":
/*!**********************************************!*\
  !*** ./src/app/services/monarchs.service.ts ***!
  \**********************************************/
/*! exports provided: MonarchsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonarchsService", function() { return MonarchsService; });
/* harmony import */ var _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/monarch */ "Kwl7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MonarchsService {
    constructor() {
        this.allMembers = [
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "devildog69", keepLevel: 35, keepPower: 2300000000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "akira", keepLevel: 35, keepPower: 846000000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "Ranger1230", keepLevel: 31, keepPower: 82000000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "Sherway", keepLevel: 32, keepPower: 158200000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "UhohWhatNow", keepLevel: 30, keepPower: 59200000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "angel'kos", keepLevel: 26, keepPower: 20200000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "Sagaelzu", keepLevel: 29, keepPower: 53000000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "Venezuela", keepLevel: 28, keepPower: 54700000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "ematuka", keepLevel: 0, keepPower: 117400000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "Sidea", keepLevel: 0, keepPower: 96200000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "Rampaige", keepLevel: 0, keepPower: 56500000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "Robo", keepLevel: 0, keepPower: 555800000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "ghosty69", keepLevel: 0, keepPower: 30400000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "Chiao", keepLevel: 0, keepPower: 62300000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "Maxi_Miguel", keepLevel: 0, keepPower: 100200000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "shadow071", keepLevel: 0, keepPower: 463900000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "DOOMSDAY01", keepLevel: 0, keepPower: 128100000 }),
            new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_0__["Monarch"]({ name: "PURGEkids", keepLevel: 0, keepPower: 81900000 }),
        ] //.sort((x, y) => x.name.toLowerCase() > y.name.toLowerCase() ? 1 : x.name.toLowerCase() === y.name.toLowerCase() ? 0 : -1);
            .sort((y, x) => x.keepLevel > y.keepLevel ? 1 : x.keepLevel === y.keepLevel ? (x.keepPower > y.keepPower ? 1 : 0) : -1);
    }
    getAllMonarchs() {
        return this.allMembers;
    }
}
MonarchsService.ɵfac = function MonarchsService_Factory(t) { return new (t || MonarchsService)(); };
MonarchsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MonarchsService, factory: MonarchsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Kwl7":
/*!******************************************!*\
  !*** ./src/app/shared/models/monarch.ts ***!
  \******************************************/
/*! exports provided: Monarch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monarch", function() { return Monarch; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

class Monarch {
    constructor(options) {
        var _a, _b;
        this.name = options.name;
        this.keepLevel = (_a = options.keepLevel) !== null && _a !== void 0 ? _a : 0;
        this.keepPower = (_b = options.keepPower) !== null && _b !== void 0 ? _b : 0;
        this.uId = uuid__WEBPACK_IMPORTED_MODULE_0__["v4"]();
        this.reinforcing = options.children || [];
    }
    get reinforcedBy() {
        return this._reinforcedBy;
    }
    set reinforcedBy(val) {
        if (this._reinforcedBy === val) {
            return;
        }
        if (this._reinforcedBy) {
            this._reinforcedBy.reinforcing = this._reinforcedBy.reinforcing.filter(x => x !== this);
        }
        val.reinforcing.push(this);
        this._reinforcedBy = val;
    }
    addReinforcing(val) {
        val.reinforcedBy = this;
    }
}


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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _shared_models_monarch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/models/monarch */ "Kwl7");
/* harmony import */ var _azure_cosmos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/cosmos */ "d2HH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_monarchs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/monarchs.service */ "Iqh2");
/* harmony import */ var _tree_tree_tree_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree/tree/tree.component */ "W2Hz");






class AppComponent {
    constructor(monarchsService) {
        this.monarchsService = monarchsService;
        console.log(this.allMembers);
        this.allMembers = monarchsService.getAllMonarchs();
        this.parentItem = new _shared_models_monarch__WEBPACK_IMPORTED_MODULE_1__["Monarch"]({ name: '' });
    }
    get connectedDropListsIds() {
        // We reverse ids here to respect items nesting hierarchy
        return this.getIdsRecursive(this.parentItem).reverse();
    }
    ngOnInit() {
        const cosmosClient = new _azure_cosmos__WEBPACK_IMPORTED_MODULE_2__["CosmosClient"]("mongodb://evony-undead-tree:Zenmnj18dIAER0DWYcbtEJYJRwA4ZESh81eP0vuNaontfUTVZ45233aL85MLk9w0yclbtRBramiEh0cpiMu7zw==@evony-undead-tree.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@evony-undead-tree@");
        let database = cosmosClient.database('undead-tree');
        let container = database.container('undeadTree');
        let resources = (container.items.query('SELECT c.name,c.keepLevel,c.keepPower FROM c').fetchAll());
        resources.then(x => console.log(x));
        if (window.localStorage.undeadTree) {
            this.parentItem = JSON.parse(window.localStorage.undeadTree);
            return;
        }
    }
    onDragDrop(event) {
        event.container.element.nativeElement.classList.remove('active');
        if (this.canBeDropped(event)) {
            const movingItem = event.item.data;
            event.container.data.reinforcing.push(movingItem);
            event.previousContainer.data.reinforcing = event.previousContainer.data.reinforcing.filter((child) => child.uId !== movingItem.uId);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data.reinforcing, event.previousIndex, event.currentIndex);
        }
        console.log(JSON.stringify(this.parentItem));
    }
    save() {
        const keys = Object.keys(this.parentItem).filter(x => x !== "reinforcedBy");
        window.localStorage.setItem("undeadTree", JSON.stringify(this.parentItem, keys));
    }
    treeChanged() {
        const keys = Object.keys(this.parentItem).filter(x => x !== "reinforcedBy");
        console.log(JSON.stringify(this.parentItem, keys));
    }
    getIdsRecursive(item) {
        let ids = [item.uId];
        item.reinforcing.forEach((childItem) => { ids = ids.concat(this.getIdsRecursive(childItem)); });
        return ids;
    }
    canBeDropped(event) {
        const movingItem = event.item.data;
        return event.previousContainer.id !== event.container.id
            && this.isNotSelfDrop(event)
            && !this.hasChild(movingItem, event.container.data);
    }
    isNotSelfDrop(event) {
        return event.container.data.uId !== event.item.data.uId;
    }
    hasChild(parentItem, childItem) {
        const hasChild = parentItem.reinforcing.some((item) => item.uId === childItem.uId);
        return hasChild ? true : parentItem.reinforcing.some((item) => this.hasChild(item, childItem));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_monarchs_service__WEBPACK_IMPORTED_MODULE_4__["MonarchsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 1, consts: [[1, "tree"], [3, "monarch", "onLeafChanged"], [1, "save", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-tree", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onLeafChanged", function AppComponent_Template_app_tree_onLeafChanged_4_listener() { return ctx.treeChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("monarch", ctx.parentItem);
    } }, directives: [_tree_tree_tree_component__WEBPACK_IMPORTED_MODULE_5__["TreeComponent"]], styles: [".save[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n}\n\ndiv[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAycmVtO1xyXG4gIHJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "W2Hz":
/*!*********************************************!*\
  !*** ./src/app/tree/tree/tree.component.ts ***!
  \*********************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_monarchs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/monarchs.service */ "Iqh2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TreeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3._leafSelected(ctx_r3.monarch); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r0.monarch.name, ", K", ctx_r0.monarch.keepLevel, ", ", ctx_r0.powerDisplay(ctx_r0.monarch.keepPower), "");
} }
function TreeComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-tree", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLeafSelected", function TreeComponent_li_2_Template_app_tree_onLeafSelected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6._leafSelected($event); })("onLeafChanged", function TreeComponent_li_2_Template_app_tree_onLeafChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8._leafChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reinforcing_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("monarch", reinforcing_r5);
} }
function TreeComponent_div_6_button_3_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeComponent_div_6_button_3_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "assistant_direction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeComponent_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_6_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const member_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.addReinforced(member_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeComponent_div_6_button_3_i_2_Template, 2, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeComponent_div_6_button_3_i_3_Template, 2, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("already-reinforced", ctx_r9.isAlreadyReinforcing(member_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.isAlreadyReinforcing(member_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", member_r10.name, ", K", member_r10.keepLevel, ", ", ctx_r9.powerDisplay(member_r10.keepPower), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r10.reinforcedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r10.reinforcing.length > 0);
} }
function TreeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_6_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.cancelAddReinforcing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeComponent_div_6_button_3_Template, 4, 8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.allMembers);
} }
class TreeComponent {
    constructor(monarchsService) {
        this.monarchsService = monarchsService;
        this.onLeafSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLeafChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addingReinforcing = false;
        this.allMembers = [];
    }
    ngOnInit() {
    }
    _leafSelected(_leaf) {
        this.onLeafSelected.emit(_leaf);
    }
    _leafChanged() {
        this.onLeafChanged.emit(this.monarch);
    }
    powerDisplay(power) {
        if (power >= 1000000000) {
            return (power / 1000000000).toFixed(1) + "B";
        }
        if (power >= 1000000) {
            return (power / 1000000).toFixed(1) + "M";
        }
        if (power >= 1000) {
            return (power / 1000).toFixed(1) + "K";
        }
        return power.toString();
    }
    addReinforcing() {
        this.addingReinforcing = true;
        this.allMembers = this.monarchsService.getAllMonarchs();
    }
    isAlreadyReinforcing(member) {
        return this.monarch.reinforcing.some(x => x === member);
    }
    cancelAddReinforcing() {
        this.addingReinforcing = false;
    }
    addReinforced(member) {
        member.reinforcedBy = this.monarch;
        this.addingReinforcing = false;
        this.onLeafChanged.emit(this.monarch);
    }
}
TreeComponent.ɵfac = function TreeComponent_Factory(t) { return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_monarchs_service__WEBPACK_IMPORTED_MODULE_1__["MonarchsService"])); };
TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeComponent, selectors: [["app-tree"]], inputs: { monarch: "monarch" }, outputs: { onLeafSelected: "onLeafSelected", onLeafChanged: "onLeafChanged" }, decls: 7, vars: 7, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "material-icons", "add-icon", 3, "click"], ["class", "add-reinforcing", 4, "ngIf"], [1, "node", 3, "click"], [3, "monarch", "onLeafSelected", "onLeafChanged"], [1, "add-reinforcing"], [1, "material-icons", "cancel", 3, "click"], [3, "already-reinforced", "disabled", "click", 4, "ngFor", "ngForOf"], [3, "disabled", "click"], ["class", "material-icons", 4, "ngIf"], [1, "material-icons"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeComponent_div_0_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeComponent_li_2_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_Template_i_click_4_listener() { return ctx.addReinforcing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " add_circle_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeComponent_div_6_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.monarch.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("root", !ctx.monarch.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.monarch.reinforcing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("leaf", ctx.monarch.reinforcing.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addingReinforcing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], TreeComponent], styles: [".add-reinforcing[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  overflow: auto;\n  max-height: 100vh;\n  top: 0;\n  background-color: #FFF;\n}\n.add-reinforcing[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1em;\n  min-height: 45px;\n  cursor: pointer;\n  padding: 0 1em;\n}\n.add-reinforcing[_ngcontent-%COMP%]   button.already-reinforced[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.leaf[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.add-icon[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\ni.cancel[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDUjtBQUNRO0VBQ0ksZUFBQTtBQUNaO0FBSUk7RUFDSSxjQUFBO0FBRFI7QUFJQTtFQUNJLGlCQUFBO0FBREo7QUFJQTtFQUNJLGVBQUE7QUFESiIsImZpbGUiOiJ0cmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1yZWluZm9yY2luZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMCAxZW07XHJcblxyXG4gICAgICAgICYuYWxyZWFkeS1yZWluZm9yY2VkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubGVhZiB7XHJcbiAgICAuYWRkLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcbi5hZGQtaWNvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuaS5jYW5jZWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _tree_tree_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree/tree.module */ "nW25");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _tree_tree_module__WEBPACK_IMPORTED_MODULE_12__["TreeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _tree_tree_module__WEBPACK_IMPORTED_MODULE_12__["TreeModule"]] }); })();


/***/ }),

/***/ "nW25":
/*!*************************************!*\
  !*** ./src/app/tree/tree.module.ts ***!
  \*************************************/
/*! exports provided: TreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return TreeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree/tree.component */ "W2Hz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TreeModule {
}
TreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TreeModule });
TreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function TreeModule_Factory(t) { return new (t || TreeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TreeModule, { declarations: [_tree_tree_component__WEBPACK_IMPORTED_MODULE_1__["TreeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]], exports: [_tree_tree_component__WEBPACK_IMPORTED_MODULE_1__["TreeComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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