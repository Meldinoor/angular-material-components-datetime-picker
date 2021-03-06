(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/portal'), require('@angular/core'), require('@angular/material/datepicker'), require('rxjs'), require('@angular/material/core'), require('@angular/cdk/keycodes'), require('@angular/cdk/bidi'), require('rxjs/operators'), require('@angular/cdk/coercion'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/material/dialog'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/cdk/platform')) :
    typeof define === 'function' && define.amd ? define('@angular-material-components/datetime-picker', ['exports', '@angular/cdk/portal', '@angular/core', '@angular/material/datepicker', 'rxjs', '@angular/material/core', '@angular/cdk/keycodes', '@angular/cdk/bidi', 'rxjs/operators', '@angular/cdk/coercion', '@angular/cdk/overlay', '@angular/common', '@angular/material/dialog', '@angular/forms', '@angular/material/form-field', '@angular/material/input', '@angular/material/button', '@angular/material/icon', '@angular/cdk/platform'], factory) :
    (global = global || self, factory((global['angular-material-components'] = global['angular-material-components'] || {}, global['angular-material-components']['datetime-picker'] = {}), global.ng.cdk.portal, global.ng.core, global.ng.material.datepicker, global.rxjs, global.ng.material.core, global.ng.cdk.keycodes, global.ng.cdk.bidi, global.rxjs.operators, global.ng.cdk.coercion, global.ng.cdk.overlay, global.ng.common, global.ng.material.dialog, global.ng.forms, global.ng.material.formField, global.ng.material.input, global.ng.material.button, global.ng.material.icon, global.ng.cdk.platform));
}(this, (function (exports, portal, core, datepicker, rxjs, core$1, keycodes, bidi, operators, coercion, overlay, common, dialog, forms, formField, input, button, icon, platform) { 'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
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
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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

    /**
     * @abstract
     * @template D
     */
    var NgxMatDateAdapter = /** @class */ (function (_super) {
        __extends(NgxMatDateAdapter, _super);
        function NgxMatDateAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Check if two date have same time
         * @param {?} a Date 1
         * @param {?} b Date 2
         * @return {?}
         */
        NgxMatDateAdapter.prototype.isSameTime = function (a, b) {
            if (a == null || b == null)
                return true;
            return this.getHour(a) === this.getHour(b)
                && this.getMinute(a) === this.getMinute(b)
                && this.getSecond(a) === this.getSecond(b);
        };
        /**
         * Copy time from a date to a another date
         * @param {?} toDate
         * @param {?} fromDate
         * @return {?}
         */
        NgxMatDateAdapter.prototype.copyTime = function (toDate, fromDate) {
            this.setHour(toDate, this.getHour(fromDate));
            this.setMinute(toDate, this.getMinute(fromDate));
            this.setSecond(toDate, this.getSecond(fromDate));
        };
        /**
         * Compares two dates.
         * @param {?} first The first date to compare.
         * @param {?} second The second date to compare.
         * @param {?=} showSeconds
         * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
         *     a number greater than 0 if the first date is later.
         */
        NgxMatDateAdapter.prototype.compareDateWithTime = function (first, second, showSeconds) {
            /** @type {?} */
            var res = _super.prototype.compareDate.call(this, first, second) ||
                this.getHour(first) - this.getHour(second) ||
                this.getMinute(first) - this.getMinute(second);
            if (showSeconds) {
                res = res || this.getSecond(first) - this.getSecond(second);
            }
            return res;
        };
        /**
         * Set time by using default values
         * @param {?} date
         * @param {?} defaultTime List default values [hour, minute, second]
         * @return {?}
         */
        NgxMatDateAdapter.prototype.setTimeByDefaultValues = function (date, defaultTime) {
            if (!Array.isArray(defaultTime)) {
                throw Error('@Input DefaultTime should be an array');
            }
            this.setHour(date, defaultTime[0] || 0);
            this.setMinute(date, defaultTime[1] || 0);
            this.setSecond(date, defaultTime[2] || 0);
        };
        return NgxMatDateAdapter;
    }(core$1.DateAdapter));
    if (false) {
        /**
         * Gets the hour component of the given date.
         * @abstract
         * @param {?} date The date to extract the month from.
         * @return {?} The hour component.
         */
        NgxMatDateAdapter.prototype.getHour = function (date) { };
        /**
         * Gets the minute component of the given date.
         * @abstract
         * @param {?} date The date to extract the month from.
         * @return {?} The minute component.
         */
        NgxMatDateAdapter.prototype.getMinute = function (date) { };
        /**
         * Gets the second component of the given date.
         * @abstract
         * @param {?} date The date to extract the month from.
         * @return {?} The second component.
         */
        NgxMatDateAdapter.prototype.getSecond = function (date) { };
        /**
         * Set the hour component of the given date.
         * @abstract
         * @param {?} date The date to extract the month from.
         * @param {?} value The value to set.
         * @return {?}
         */
        NgxMatDateAdapter.prototype.setHour = function (date, value) { };
        /**
         * Set the second component of the given date.
         * @abstract
         * @param {?} date The date to extract the month from.
         * @param {?} value The value to set.
         * @return {?}
         */
        NgxMatDateAdapter.prototype.setMinute = function (date, value) { };
        /**
         * Set the second component of the given date.
         * @abstract
         * @param {?} date The date to extract the month from.
         * @param {?} value The value to set.
         * @return {?}
         */
        NgxMatDateAdapter.prototype.setSecond = function (date, value) { };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/date-formats.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGX_MAT_DATE_FORMATS = new core.InjectionToken('ngx-mat-date-formats');

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/calendar-body.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An internal class that represents the data corresponding to a single calendar cell.
     * \@docs-private
     * @template D
     */
    var NgxMatCalendarCell = /** @class */ (function () {
        /**
         * @param {?} value
         * @param {?} displayValue
         * @param {?} ariaLabel
         * @param {?} enabled
         * @param {?=} cssClasses
         * @param {?=} compareValue
         * @param {?=} rawValue
         */
        function NgxMatCalendarCell(value, displayValue, ariaLabel, enabled, cssClasses, compareValue, rawValue) {
            if (cssClasses === void 0) { cssClasses = {}; }
            if (compareValue === void 0) { compareValue = value; }
            this.value = value;
            this.displayValue = displayValue;
            this.ariaLabel = ariaLabel;
            this.enabled = enabled;
            this.cssClasses = cssClasses;
            this.compareValue = compareValue;
            this.rawValue = rawValue;
        }
        return NgxMatCalendarCell;
    }());
    if (false) {
        /** @type {?} */
        NgxMatCalendarCell.prototype.value;
        /** @type {?} */
        NgxMatCalendarCell.prototype.displayValue;
        /** @type {?} */
        NgxMatCalendarCell.prototype.ariaLabel;
        /** @type {?} */
        NgxMatCalendarCell.prototype.enabled;
        /** @type {?} */
        NgxMatCalendarCell.prototype.cssClasses;
        /** @type {?} */
        NgxMatCalendarCell.prototype.compareValue;
        /** @type {?} */
        NgxMatCalendarCell.prototype.rawValue;
    }
    /**
     * Event emitted when a date inside the calendar is triggered as a result of a user action.
     * @record
     * @template D
     */
    function NgxMatCalendarUserEvent() { }
    if (false) {
        /** @type {?} */
        NgxMatCalendarUserEvent.prototype.value;
        /** @type {?} */
        NgxMatCalendarUserEvent.prototype.event;
    }
    /**
     * An internal component used to display calendar data in a table.
     * \@docs-private
     */
    var NgxMatCalendarBody = /** @class */ (function () {
        /**
         * @param {?} _elementRef
         * @param {?} _ngZone
         */
        function NgxMatCalendarBody(_elementRef, _ngZone) {
            var _this = this;
            this._elementRef = _elementRef;
            this._ngZone = _ngZone;
            /**
             * The number of columns in the table.
             */
            this.numCols = 7;
            /**
             * The cell number of the active cell in the table.
             */
            this.activeCell = 0;
            /**
             * Whether a range is being selected.
             */
            this.isRange = false;
            /**
             * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
             * maintained even as the table resizes.
             */
            this.cellAspectRatio = 1;
            /**
             * Start of the preview range.
             */
            this.previewStart = null;
            /**
             * End of the preview range.
             */
            this.previewEnd = null;
            /**
             * Emits when a new value is selected.
             */
            this.selectedValueChange = new core.EventEmitter();
            /**
             * Emits when the preview has changed as a result of a user action.
             */
            this.previewChange = new core.EventEmitter();
            /**
             * Event handler for when the user enters an element
             * inside the calendar body (e.g. by hovering in or focus).
             */
            this._enterHandler = ( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                if (_this._skipNextFocus && event.type === 'focus') {
                    _this._skipNextFocus = false;
                    return;
                }
                // We only need to hit the zone when we're selecting a range.
                if (event.target && _this.isRange) {
                    /** @type {?} */
                    var cell_1 = _this._getCellFromElement(( /** @type {?} */(event.target)));
                    if (cell_1) {
                        _this._ngZone.run(( /**
                         * @return {?}
                         */function () { return _this.previewChange.emit({ value: cell_1.enabled ? cell_1 : null, event: event }); }));
                    }
                }
            });
            /**
             * Event handler for when the user's pointer leaves an element
             * inside the calendar body (e.g. by hovering out or blurring).
             */
            this._leaveHandler = ( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                // We only need to hit the zone when we're selecting a range.
                if (_this.previewEnd !== null && _this.isRange) {
                    // Only reset the preview end value when leaving cells. This looks better, because
                    // we have a gap between the cells and the rows and we don't want to remove the
                    // range just for it to show up again when the user moves a few pixels to the side.
                    if (event.target && isTableCell(( /** @type {?} */(event.target)))) {
                        _this._ngZone.run(( /**
                         * @return {?}
                         */function () { return _this.previewChange.emit({ value: null, event: event }); }));
                    }
                }
            });
            _ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var element = _elementRef.nativeElement;
                element.addEventListener('mouseenter', _this._enterHandler, true);
                element.addEventListener('focus', _this._enterHandler, true);
                element.addEventListener('mouseleave', _this._leaveHandler, true);
                element.addEventListener('blur', _this._leaveHandler, true);
            }));
        }
        /**
         * Called when a cell is clicked.
         * @param {?} cell
         * @param {?} event
         * @return {?}
         */
        NgxMatCalendarBody.prototype._cellClicked = function (cell, event) {
            if (cell.enabled) {
                this.selectedValueChange.emit({ value: cell.value, event: event });
            }
        };
        /**
         * Returns whether a cell should be marked as selected.
         * @param {?} cell
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isSelected = function (cell) {
            return this.startValue === cell.compareValue || this.endValue === cell.compareValue;
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxMatCalendarBody.prototype.ngOnChanges = function (changes) {
            /** @type {?} */
            var columnChanges = changes['numCols'];
            var _a = this, rows = _a.rows, numCols = _a.numCols;
            if (changes['rows'] || columnChanges) {
                this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
            }
            if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
                this._cellPadding = 50 * this.cellAspectRatio / numCols + "%";
            }
            if (columnChanges || !this._cellWidth) {
                this._cellWidth = 100 / numCols + "%";
            }
        };
        /**
         * @return {?}
         */
        NgxMatCalendarBody.prototype.ngOnDestroy = function () {
            /** @type {?} */
            var element = this._elementRef.nativeElement;
            element.removeEventListener('mouseenter', this._enterHandler, true);
            element.removeEventListener('focus', this._enterHandler, true);
            element.removeEventListener('mouseleave', this._leaveHandler, true);
            element.removeEventListener('blur', this._leaveHandler, true);
        };
        /**
         * Returns whether a cell is active.
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isActiveCell = function (rowIndex, colIndex) {
            /** @type {?} */
            var cellNumber = rowIndex * this.numCols + colIndex;
            // Account for the fact that the first row may not have as many cells.
            if (rowIndex) {
                cellNumber -= this._firstRowOffset;
            }
            return cellNumber == this.activeCell;
        };
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @param {?=} movePreview
         * @return {?}
         */
        NgxMatCalendarBody.prototype._focusActiveCell = function (movePreview) {
            var _this = this;
            if (movePreview === void 0) { movePreview = true; }
            this._ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                _this._ngZone.onStable.asObservable().pipe(operators.take(1)).subscribe(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var activeCell = _this._elementRef.nativeElement.querySelector('.ngx-mat-calendar-body-active');
                    if (activeCell) {
                        if (!movePreview) {
                            _this._skipNextFocus = true;
                        }
                        activeCell.focus();
                    }
                }));
            }));
        };
        /**
         * Gets whether a value is the start of the main range.
         * @param {?} value
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isRangeStart = function (value) {
            return isStart(value, this.startValue, this.endValue);
        };
        /**
         * Gets whether a value is the end of the main range.
         * @param {?} value
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isRangeEnd = function (value) {
            return isEnd(value, this.startValue, this.endValue);
        };
        /**
         * Gets whether a value is within the currently-selected range.
         * @param {?} value
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isInRange = function (value) {
            return isInRange(value, this.startValue, this.endValue, this.isRange);
        };
        /**
         * Gets whether a value is the start of the comparison range.
         * @param {?} value
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isComparisonStart = function (value) {
            return isStart(value, this.comparisonStart, this.comparisonEnd);
        };
        /**
         * Whether the cell is a start bridge cell between the main and comparison ranges.
         * @param {?} value
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isComparisonBridgeStart = function (value, rowIndex, colIndex) {
            if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
                return false;
            }
            /** @type {?} */
            var previousCell = this.rows[rowIndex][colIndex - 1];
            if (!previousCell) {
                /** @type {?} */
                var previousRow = this.rows[rowIndex - 1];
                previousCell = previousRow && previousRow[previousRow.length - 1];
            }
            return previousCell && !this._isRangeEnd(previousCell.compareValue);
        };
        /**
         * Whether the cell is an end bridge cell between the main and comparison ranges.
         * @param {?} value
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isComparisonBridgeEnd = function (value, rowIndex, colIndex) {
            if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
                return false;
            }
            /** @type {?} */
            var nextCell = this.rows[rowIndex][colIndex + 1];
            if (!nextCell) {
                /** @type {?} */
                var nextRow = this.rows[rowIndex + 1];
                nextCell = nextRow && nextRow[0];
            }
            return nextCell && !this._isRangeStart(nextCell.compareValue);
        };
        /**
         * Gets whether a value is the end of the comparison range.
         * @param {?} value
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isComparisonEnd = function (value) {
            return isEnd(value, this.comparisonStart, this.comparisonEnd);
        };
        /**
         * Gets whether a value is within the current comparison range.
         * @param {?} value
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isInComparisonRange = function (value) {
            return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
        };
        /**
         * Gets whether a value is the start of the preview range.
         * @param {?} value
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isPreviewStart = function (value) {
            return isStart(value, this.previewStart, this.previewEnd);
        };
        /**
         * Gets whether a value is the end of the preview range.
         * @param {?} value
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isPreviewEnd = function (value) {
            return isEnd(value, this.previewStart, this.previewEnd);
        };
        /**
         * Gets whether a value is inside the preview range.
         * @param {?} value
         * @return {?}
         */
        NgxMatCalendarBody.prototype._isInPreview = function (value) {
            return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
        };
        /**
         * Finds the NgxMatCalendarCell that corresponds to a DOM node.
         * @private
         * @param {?} element
         * @return {?}
         */
        NgxMatCalendarBody.prototype._getCellFromElement = function (element) {
            /** @type {?} */
            var cell;
            if (isTableCell(element)) {
                cell = element;
            }
            else if (isTableCell(( /** @type {?} */(element.parentNode)))) {
                cell = ( /** @type {?} */(element.parentNode));
            }
            if (cell) {
                /** @type {?} */
                var row = cell.getAttribute('data-ngx-mat-row');
                /** @type {?} */
                var col = cell.getAttribute('data-ngx-mat-col');
                if (row && col) {
                    return this.rows[parseInt(row)][parseInt(col)];
                }
            }
            return null;
        };
        return NgxMatCalendarBody;
    }());
    NgxMatCalendarBody.decorators = [
        { type: core.Component, args: [{
                    selector: '[ngx-mat-calendar-body]',
                    template: "<!--\r\n  If there's not enough space in the first row, create a separate label row. We mark this row as\r\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\r\n-->\r\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\r\n  <td class=\"mat-calendar-body-label\"\r\n      [attr.colspan]=\"numCols\"\r\n      [style.paddingTop]=\"_cellPadding\"\r\n      [style.paddingBottom]=\"_cellPadding\">\r\n    {{label}}\r\n  </td>\r\n</tr>\r\n\r\n<!-- Create the first row separately so we can include a special spacer cell. -->\r\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\r\n  <!--\r\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\r\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\r\n    percentage of the width (a variant of the trick described here:\r\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\r\n  -->\r\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\r\n      aria-hidden=\"true\"\r\n      class=\"mat-calendar-body-label\"\r\n      [attr.colspan]=\"_firstRowOffset\"\r\n      [style.paddingTop]=\"_cellPadding\"\r\n      [style.paddingBottom]=\"_cellPadding\">\r\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\r\n  </td>\r\n  <td *ngFor=\"let item of row; let colIndex = index\"\r\n      role=\"gridcell\"\r\n      class=\"mat-calendar-body-cell\"\r\n      [ngClass]=\"item.cssClasses\"\r\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\r\n      [attr.data-mat-row]=\"rowIndex\"\r\n      [attr.data-mat-col]=\"colIndex\"\r\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\r\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\r\n      [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\r\n      [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\r\n      [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\r\n      [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\r\n      [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\r\n      [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\r\n      [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\r\n      [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\r\n      [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\r\n      [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\r\n      [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\r\n      [attr.aria-label]=\"item.ariaLabel\"\r\n      [attr.aria-disabled]=\"!item.enabled || null\"\r\n      [attr.aria-selected]=\"_isSelected(item)\"\r\n      (click)=\"_cellClicked(item, $event)\"\r\n      [style.width]=\"_cellWidth\"\r\n      [style.paddingTop]=\"_cellPadding\"\r\n      [style.paddingBottom]=\"_cellPadding\">\r\n      <div class=\"mat-calendar-body-cell-content mat-focus-indicator\"\r\n        [class.mat-calendar-body-selected]=\"_isSelected(item)\"\r\n        [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\r\n        {{item.displayValue}}\r\n      </div>\r\n      <div class=\"mat-calendar-body-cell-preview\"></div>\r\n  </td>\r\n</tr>\r\n",
                    host: {
                        'class': 'ngx-mat-calendar-body',
                        'role': 'grid',
                        'aria-readonly': 'true'
                    },
                    exportAs: 'NgxMatCalendarBody',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;padding-left:4.7142857143%;padding-right:4.7142857143%;text-align:left}.mat-calendar-body-cell{cursor:pointer;height:0;line-height:0;outline:none;position:relative;text-align:center}.mat-calendar-body-cell-preview,.mat-calendar-body-cell:after,.mat-calendar-body-cell:before{box-sizing:border-box;content:\"\";height:90%;left:0;position:absolute;top:5%;width:100%;z-index:0}.mat-calendar-body-comparison-start:after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview,.mat-calendar-body-range-start:after,.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before{border-bottom-left-radius:999px;border-top-left-radius:999px;left:5%;width:95%}[dir=rtl] .mat-calendar-body-comparison-start:after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview,[dir=rtl] .mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before{border-bottom-right-radius:999px;border-radius:0;border-top-right-radius:999px;left:0}.mat-calendar-body-comparison-end:after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview,.mat-calendar-body-range-end:after,.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before{border-bottom-right-radius:999px;border-top-right-radius:999px;width:95%}[dir=rtl] .mat-calendar-body-comparison-end:after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview,[dir=rtl] .mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before{border-bottom-left-radius:999px;border-radius:0;border-top-left-radius:999px;left:5%}[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end:after{border-bottom-right-radius:999px;border-top-right-radius:999px;width:95%}.mat-calendar-body-comparison-end.mat-calendar-body-range-start:after,.mat-calendar-body-comparison-start.mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end:after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-bottom:1px dashed;border-top:1px dashed}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:1px dashed}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:1px dashed}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:1px dashed}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-left:1px dashed;border-right:0}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{align-items:center;border-radius:999px;border-style:solid;border-width:1px;box-sizing:border-box;display:flex;height:90%;justify-content:center;left:5%;line-height:1;top:5%;width:90%;z-index:1}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-calendar-body-selected,.cdk-high-contrast-active .mat-datepicker-popup:not(:empty){outline:1px solid}.cdk-high-contrast-active .mat-calendar-body-today{outline:1px dotted}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:2px dotted}[dir=rtl] .mat-calendar-body-label{text-align:right}@media (hover:none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}"]
                }] }
    ];
    /** @nocollapse */
    NgxMatCalendarBody.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    NgxMatCalendarBody.propDecorators = {
        label: [{ type: core.Input }],
        rows: [{ type: core.Input }],
        todayValue: [{ type: core.Input }],
        startValue: [{ type: core.Input }],
        endValue: [{ type: core.Input }],
        labelMinRequiredCells: [{ type: core.Input }],
        numCols: [{ type: core.Input }],
        activeCell: [{ type: core.Input }],
        isRange: [{ type: core.Input }],
        cellAspectRatio: [{ type: core.Input }],
        comparisonStart: [{ type: core.Input }],
        comparisonEnd: [{ type: core.Input }],
        previewStart: [{ type: core.Input }],
        previewEnd: [{ type: core.Input }],
        selectedValueChange: [{ type: core.Output }],
        previewChange: [{ type: core.Output }]
    };
    if (false) {
        /**
         * Used to skip the next focus event when rendering the preview range.
         * We need a flag like this, because some browsers fire focus events asynchronously.
         * @type {?}
         * @private
         */
        NgxMatCalendarBody.prototype._skipNextFocus;
        /**
         * The label for the table. (e.g. "Jan 2017").
         * @type {?}
         */
        NgxMatCalendarBody.prototype.label;
        /**
         * The cells to display in the table.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.rows;
        /**
         * The value in the table that corresponds to today.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.todayValue;
        /**
         * Start value of the selected date range.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.startValue;
        /**
         * End value of the selected date range.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.endValue;
        /**
         * The minimum number of free cells needed to fit the label in the first row.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.labelMinRequiredCells;
        /**
         * The number of columns in the table.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.numCols;
        /**
         * The cell number of the active cell in the table.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.activeCell;
        /**
         * Whether a range is being selected.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.isRange;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.cellAspectRatio;
        /**
         * Start of the comparison range.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.comparisonStart;
        /**
         * End of the comparison range.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.comparisonEnd;
        /**
         * Start of the preview range.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.previewStart;
        /**
         * End of the preview range.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.previewEnd;
        /**
         * Emits when a new value is selected.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.selectedValueChange;
        /**
         * Emits when the preview has changed as a result of a user action.
         * @type {?}
         */
        NgxMatCalendarBody.prototype.previewChange;
        /**
         * The number of blank cells to put at the beginning for the first row.
         * @type {?}
         */
        NgxMatCalendarBody.prototype._firstRowOffset;
        /**
         * Padding for the individual date cells.
         * @type {?}
         */
        NgxMatCalendarBody.prototype._cellPadding;
        /**
         * Width of an individual cell.
         * @type {?}
         */
        NgxMatCalendarBody.prototype._cellWidth;
        /**
         * Event handler for when the user enters an element
         * inside the calendar body (e.g. by hovering in or focus).
         * @type {?}
         * @private
         */
        NgxMatCalendarBody.prototype._enterHandler;
        /**
         * Event handler for when the user's pointer leaves an element
         * inside the calendar body (e.g. by hovering out or blurring).
         * @type {?}
         * @private
         */
        NgxMatCalendarBody.prototype._leaveHandler;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendarBody.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendarBody.prototype._ngZone;
    }
    /**
     * Checks whether a node is a table cell element.
     * @param {?} node
     * @return {?}
     */
    function isTableCell(node) {
        return node.nodeName === 'TD';
    }
    /**
     * Checks whether a value is the start of a range.
     * @param {?} value
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function isStart(value, start, end) {
        return end !== null && start !== end && value < end && value === start;
    }
    /**
     * Checks whether a value is the end of a range.
     * @param {?} value
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function isEnd(value, start, end) {
        return start !== null && start !== end && value >= start && value === end;
    }
    /**
     * Checks whether a value is inside of a range.
     * @param {?} value
     * @param {?} start
     * @param {?} end
     * @param {?} rangeEnabled
     * @return {?}
     */
    function isInRange(value, start, end, rangeEnabled) {
        return rangeEnabled && start !== null && end !== null && start !== end &&
            value >= start && value <= end;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/date-range-selection-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Injection token used to customize the date range selection behavior.
     * @type {?}
     */
    var NGX_MAT_DATE_RANGE_SELECTION_STRATEGY = new core.InjectionToken('NGX_MAT_DATE_RANGE_SELECTION_STRATEGY');
    /**
     * Object that can be provided in order to customize the date range selection behavior.
     * @record
     * @template D
     */
    function NgxMatDateRangeSelectionStrategy() { }
    if (false) {
        /**
         * Called when the user has finished selecting a value.
         * @param {?} date Date that was selected. Will be null if the user cleared the selection.
         * @param {?} currentRange Range that is currently show in the calendar.
         * @param {?} event DOM event that triggered the selection. Currently only corresponds to a `click`
         *    event, but it may get expanded in the future.
         * @return {?}
         */
        NgxMatDateRangeSelectionStrategy.prototype.selectionFinished = function (date, currentRange, event) { };
        /**
         * Called when the user has activated a new date (e.g. by hovering over
         * it or moving focus) and the calendar tries to display a date range.
         *
         * @param {?} activeDate Date that the user has activated. Will be null if the user moved
         *    focus to an element that's no a calendar cell.
         * @param {?} currentRange Range that is currently shown in the calendar.
         * @param {?} event DOM event that caused the preview to be changed. Will be either a
         *    `mouseenter`/`mouseleave` or `focus`/`blur` depending on how the user is navigating.
         * @return {?}
         */
        NgxMatDateRangeSelectionStrategy.prototype.createPreview = function (activeDate, currentRange, event) { };
    }
    /**
     * Provides the default date range selection behavior.
     * @template D
     */
    var DefaultNgxMatCalendarRangeStrategy = /** @class */ (function () {
        /**
         * @param {?} _dateAdapter
         */
        function DefaultNgxMatCalendarRangeStrategy(_dateAdapter) {
            this._dateAdapter = _dateAdapter;
        }
        /**
         * @param {?} date
         * @param {?} currentRange
         * @return {?}
         */
        DefaultNgxMatCalendarRangeStrategy.prototype.selectionFinished = function (date, currentRange) {
            var start = currentRange.start, end = currentRange.end;
            if (start == null) {
                start = date;
            }
            else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
                end = date;
            }
            else {
                start = date;
                end = null;
            }
            return new datepicker.DateRange(start, end);
        };
        /**
         * @param {?} activeDate
         * @param {?} currentRange
         * @return {?}
         */
        DefaultNgxMatCalendarRangeStrategy.prototype.createPreview = function (activeDate, currentRange) {
            /** @type {?} */
            var start = null;
            /** @type {?} */
            var end = null;
            if (currentRange.start && !currentRange.end && activeDate) {
                start = currentRange.start;
                end = activeDate;
            }
            return new datepicker.DateRange(start, end);
        };
        return DefaultNgxMatCalendarRangeStrategy;
    }());
    DefaultNgxMatCalendarRangeStrategy.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    DefaultNgxMatCalendarRangeStrategy.ctorParameters = function () { return [
        { type: NgxMatDateAdapter }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DefaultNgxMatCalendarRangeStrategy.prototype._dateAdapter;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils/date-utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LIMIT_TIMES = {
        minHour: 0,
        maxHour: 24,
        minMinute: 0,
        maxMinute: 60,
        minSecond: 0,
        maxSecond: 60,
        meridian: 12
    };
    /** @type {?} */
    var MERIDIANS = {
        AM: 'AM',
        PM: 'PM'
    };
    /** @type {?} */
    var DEFAULT_STEP = 1;
    /** @type {?} */
    var NUMERIC_REGEX = /[^0-9]/g;
    /** @type {?} */
    var PATTERN_INPUT_HOUR = /^(2[0-3]|[0-1][0-9]|[0-9])$/;
    /** @type {?} */
    var PATTERN_INPUT_MINUTE = /^([0-5][0-9]|[0-9])$/;
    /** @type {?} */
    var PATTERN_INPUT_SECOND = /^([0-5][0-9]|[0-9])$/;
    /**
     * @param {?} val
     * @return {?}
     */
    function formatTwoDigitTimeValue(val) {
        /** @type {?} */
        var txt = val.toString();
        return txt.length > 1 ? txt : "0" + txt;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    function createMissingDateImplError(provider) {
        return Error("NgxMatDatepicker: No provider found for " + provider + ". You must import one of the following " +
            "modules at your application root: NgxMatNativeDateModule, NgxMatMomentModule, or provide a " +
            "custom implementation.");
    }
    /**
     * Formats a range of years.
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function formatYearRange(start, end) {
        return start + " \u2013 " + end;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/month-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DAYS_PER_WEEK = 7;
    /**
     * An internal component used to display a single month in the datepicker.
     * \@docs-private
     * @template D
     */
    var NgxMatMonthView = /** @class */ (function () {
        /**
         * @param {?} _changeDetectorRef
         * @param {?} _dateFormats
         * @param {?} _dateAdapter
         * @param {?=} _dir
         * @param {?=} _rangeStrategy
         */
        function NgxMatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
            this._changeDetectorRef = _changeDetectorRef;
            this._dateFormats = _dateFormats;
            this._dateAdapter = _dateAdapter;
            this._dir = _dir;
            this._rangeStrategy = _rangeStrategy;
            this._rerenderSubscription = rxjs.Subscription.EMPTY;
            /**
             * Emits when a new date is selected.
             */
            this.selectedChange = new core.EventEmitter();
            /**
             * Emits when any date is selected.
             */
            this._userSelection = new core.EventEmitter();
            /**
             * Emits when any date is activated.
             */
            this.activeDateChange = new core.EventEmitter();
            if (!this._dateAdapter) {
                throw createMissingDateImplError('NgxMatDateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('NGX_MAT_DATE_FORMATS');
            }
            this._activeDate = this._dateAdapter.today();
        }
        Object.defineProperty(NgxMatMonthView.prototype, "activeDate", {
            /**
             * The date to display in this month view (everything other than the month and year is ignored).
             * @return {?}
             */
            get: function () { return this._activeDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                /** @type {?} */
                var oldActiveDate = this._activeDate;
                /** @type {?} */
                var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
                this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
                if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
                    this._init();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatMonthView.prototype, "selected", {
            /**
             * The currently selected date.
             * @return {?}
             */
            get: function () { return this._selected; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if (value instanceof datepicker.DateRange) {
                    this._selected = value;
                }
                else {
                    this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                }
                this._setRanges(this._selected);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatMonthView.prototype, "minDate", {
            /**
             * The minimum selectable date.
             * @return {?}
             */
            get: function () { return this._minDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatMonthView.prototype, "maxDate", {
            /**
             * The maximum selectable date.
             * @return {?}
             */
            get: function () { return this._maxDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxMatMonthView.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._rerenderSubscription = this._dateAdapter.localeChanges
                .pipe(operators.startWith(null))
                .subscribe(( /**
         * @return {?}
         */function () { return _this._init(); }));
        };
        /**
         * @return {?}
         */
        NgxMatMonthView.prototype.ngOnDestroy = function () {
            this._rerenderSubscription.unsubscribe();
        };
        /**
         * Handles when a new date is selected.
         * @param {?} event
         * @return {?}
         */
        NgxMatMonthView.prototype._dateSelected = function (event) {
            /** @type {?} */
            var date = event.value;
            /** @type {?} */
            var selectedYear = this._dateAdapter.getYear(this.activeDate);
            /** @type {?} */
            var selectedMonth = this._dateAdapter.getMonth(this.activeDate);
            /** @type {?} */
            var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
            /** @type {?} */
            var rangeStartDate;
            /** @type {?} */
            var rangeEndDate;
            if (this._selected instanceof datepicker.DateRange) {
                rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
                rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
            }
            else {
                rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
            }
            if (rangeStartDate !== date || rangeEndDate !== date) {
                this.selectedChange.emit(selectedDate);
            }
            this._userSelection.emit({ value: selectedDate, event: event.event });
        };
        /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */
        NgxMatMonthView.prototype._handleCalendarBodyKeydown = function (event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            /** @type {?} */
            var isRtl = this._isRtl();
            switch (event.keyCode) {
                case keycodes.LEFT_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                    break;
                case keycodes.RIGHT_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                    break;
                case keycodes.UP_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                    break;
                case keycodes.DOWN_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                    break;
                case keycodes.HOME:
                    this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                    break;
                case keycodes.END:
                    this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                        this._dateAdapter.getDate(this._activeDate)));
                    break;
                case keycodes.PAGE_UP:
                    this.activeDate = event.altKey ?
                        this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                        this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                    break;
                case keycodes.PAGE_DOWN:
                    this.activeDate = event.altKey ?
                        this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                        this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                    break;
                case keycodes.ENTER:
                case keycodes.SPACE:
                    if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                        this._dateSelected({ value: this._dateAdapter.getDate(this._activeDate), event: event });
                        // Prevent unexpected default actions such as form submission.
                        event.preventDefault();
                    }
                    return;
                case keycodes.ESCAPE:
                    // Abort the current range selection if the user presses escape mid-selection.
                    if (this._previewEnd != null) {
                        this._previewStart = this._previewEnd = null;
                        this.selectedChange.emit(null);
                        this._userSelection.emit({ value: null, event: event });
                        event.preventDefault();
                        event.stopPropagation(); // Prevents the overlay from closing.
                    }
                    return;
                default:
                    // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                    return;
            }
            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
                this.activeDateChange.emit(this.activeDate);
            }
            this._focusActiveCell();
            // Prevent unexpected default actions such as form submission.
            event.preventDefault();
        };
        /**
         * Initializes this month view.
         * @return {?}
         */
        NgxMatMonthView.prototype._init = function () {
            this._setRanges(this.selected);
            this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
            this._monthLabel =
                this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                    .toLocaleUpperCase();
            /** @type {?} */
            var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
            this._firstWeekOffset =
                (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                    this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
            this._initWeekdays();
            this._createWeekCells();
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @param {?=} movePreview
         * @return {?}
         */
        NgxMatMonthView.prototype._focusActiveCell = function (movePreview) {
            this._matCalendarBody._focusActiveCell(movePreview);
        };
        /**
         * Called when the user has activated a new cell and the preview needs to be updated.
         * @param {?} __0
         * @return {?}
         */
        NgxMatMonthView.prototype._previewChanged = function (_a) {
            var event = _a.event, cell = _a.value;
            if (this._rangeStrategy) {
                // We can assume that this will be a range, because preview
                // events aren't fired for single date selections.
                /** @type {?} */
                var value = cell ? ( /** @type {?} */(cell.rawValue)) : null;
                /** @type {?} */
                var previewRange = this._rangeStrategy.createPreview(value, ( /** @type {?} */(this.selected)), event);
                this._previewStart = this._getCellCompareValue(previewRange.start);
                this._previewEnd = this._getCellCompareValue(previewRange.end);
                // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
                // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
                // when navigating one month back using the keyboard which will cause this handler
                // to throw a "changed after checked" error when updating the preview state.
                this._changeDetectorRef.detectChanges();
            }
        };
        /**
         * Initializes the weekdays.
         * @private
         * @return {?}
         */
        NgxMatMonthView.prototype._initWeekdays = function () {
            /** @type {?} */
            var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
            /** @type {?} */
            var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
            /** @type {?} */
            var longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
            // Rotate the labels for days of the week based on the configured first day of the week.
            /** @type {?} */
            var weekdays = longWeekdays.map(( /**
             * @param {?} long
             * @param {?} i
             * @return {?}
             */function (long, i) {
                return { long: long, narrow: narrowWeekdays[i] };
            }));
            this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        };
        /**
         * Creates MatCalendarCells for the dates in this month.
         * @private
         * @return {?}
         */
        NgxMatMonthView.prototype._createWeekCells = function () {
            /** @type {?} */
            var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
            /** @type {?} */
            var dateNames = this._dateAdapter.getDateNames();
            this._weeks = [[]];
            for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
                if (cell == DAYS_PER_WEEK) {
                    this._weeks.push([]);
                    cell = 0;
                }
                /** @type {?} */
                var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
                /** @type {?} */
                var enabled = this._shouldEnableDate(date);
                /** @type {?} */
                var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
                /** @type {?} */
                var cellClasses = this.dateClass ? this.dateClass(date) : undefined;
                this._weeks[this._weeks.length - 1].push(new NgxMatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, ( /** @type {?} */(this._getCellCompareValue(date))), date));
            }
        };
        /**
         * Date filter for the month
         * @private
         * @param {?} date
         * @return {?}
         */
        NgxMatMonthView.prototype._shouldEnableDate = function (date) {
            return !!date &&
                (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
                (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) &&
                (!this.dateFilter || this.dateFilter(date));
        };
        /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         * @private
         * @param {?} date
         * @return {?}
         */
        NgxMatMonthView.prototype._getDateInCurrentMonth = function (date) {
            return date && this._hasSameMonthAndYear(date, this.activeDate) ?
                this._dateAdapter.getDate(date) : null;
        };
        /**
         * Checks whether the 2 dates are non-null and fall within the same month of the same year.
         * @private
         * @param {?} d1
         * @param {?} d2
         * @return {?}
         */
        NgxMatMonthView.prototype._hasSameMonthAndYear = function (d1, d2) {
            return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
                this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
        };
        /**
         * Gets the value that will be used to one cell to another.
         * @private
         * @param {?} date
         * @return {?}
         */
        NgxMatMonthView.prototype._getCellCompareValue = function (date) {
            if (date) {
                // We use the time since the Unix epoch to compare dates in this view, rather than the
                // cell values, because we need to support ranges that span across multiple months/years.
                /** @type {?} */
                var year = this._dateAdapter.getYear(date);
                /** @type {?} */
                var month = this._dateAdapter.getMonth(date);
                /** @type {?} */
                var day = this._dateAdapter.getDate(date);
                return new Date(year, month, day).getTime();
            }
            return null;
        };
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */
        NgxMatMonthView.prototype._getValidDateOrNull = function (obj) {
            return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
        };
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */
        NgxMatMonthView.prototype._isRtl = function () {
            return this._dir && this._dir.value === 'rtl';
        };
        /**
         * Sets the current range based on a model value.
         * @private
         * @param {?} selectedValue
         * @return {?}
         */
        NgxMatMonthView.prototype._setRanges = function (selectedValue) {
            if (selectedValue instanceof datepicker.DateRange) {
                this._rangeStart = this._getCellCompareValue(selectedValue.start);
                this._rangeEnd = this._getCellCompareValue(selectedValue.end);
                this._isRange = true;
            }
            else {
                this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
                this._isRange = false;
            }
            this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
            this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
        };
        return NgxMatMonthView;
    }());
    NgxMatMonthView.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-mat-month-view',
                    template: "<table class=\"mat-calendar-table\" role=\"presentation\">\r\n  <thead class=\"mat-calendar-table-header\">\r\n    <tr>\r\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\r\n    </tr>\r\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\r\n  </thead>\r\n  <tbody ngx-mat-calendar-body\r\n         [label]=\"_monthLabel\"\r\n         [rows]=\"_weeks\"\r\n         [todayValue]=\"_todayDate!\"\r\n         [startValue]=\"_rangeStart!\"\r\n         [endValue]=\"_rangeEnd!\"\r\n         [comparisonStart]=\"_comparisonRangeStart\"\r\n         [comparisonEnd]=\"_comparisonRangeEnd\"\r\n         [previewStart]=\"_previewStart\"\r\n         [previewEnd]=\"_previewEnd\"\r\n         [isRange]=\"_isRange\"\r\n         [labelMinRequiredCells]=\"3\"\r\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\r\n         (selectedValueChange)=\"_dateSelected($event)\"\r\n         (previewChange)=\"_previewChanged($event)\"\r\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\r\n  </tbody>\r\n</table>\r\n",
                    exportAs: 'ngxMatMonthView',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NgxMatMonthView.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
        { type: NgxMatDateAdapter, decorators: [{ type: core.Optional }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: undefined, decorators: [{ type: core.Inject, args: [NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,] }, { type: core.Optional }] }
    ]; };
    NgxMatMonthView.propDecorators = {
        activeDate: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        minDate: [{ type: core.Input }],
        maxDate: [{ type: core.Input }],
        dateFilter: [{ type: core.Input }],
        dateClass: [{ type: core.Input }],
        comparisonStart: [{ type: core.Input }],
        comparisonEnd: [{ type: core.Input }],
        selectedChange: [{ type: core.Output }],
        _userSelection: [{ type: core.Output }],
        activeDateChange: [{ type: core.Output }],
        _matCalendarBody: [{ type: core.ViewChild, args: [NgxMatCalendarBody,] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxMatMonthView.prototype._rerenderSubscription;
        /**
         * @type {?}
         * @private
         */
        NgxMatMonthView.prototype._activeDate;
        /**
         * @type {?}
         * @private
         */
        NgxMatMonthView.prototype._selected;
        /**
         * @type {?}
         * @private
         */
        NgxMatMonthView.prototype._minDate;
        /**
         * @type {?}
         * @private
         */
        NgxMatMonthView.prototype._maxDate;
        /**
         * Function used to filter which dates are selectable.
         * @type {?}
         */
        NgxMatMonthView.prototype.dateFilter;
        /**
         * Function that can be used to add custom CSS classes to dates.
         * @type {?}
         */
        NgxMatMonthView.prototype.dateClass;
        /**
         * Start of the comparison range.
         * @type {?}
         */
        NgxMatMonthView.prototype.comparisonStart;
        /**
         * End of the comparison range.
         * @type {?}
         */
        NgxMatMonthView.prototype.comparisonEnd;
        /**
         * Emits when a new date is selected.
         * @type {?}
         */
        NgxMatMonthView.prototype.selectedChange;
        /**
         * Emits when any date is selected.
         * @type {?}
         */
        NgxMatMonthView.prototype._userSelection;
        /**
         * Emits when any date is activated.
         * @type {?}
         */
        NgxMatMonthView.prototype.activeDateChange;
        /**
         * The body of calendar table
         * @type {?}
         */
        NgxMatMonthView.prototype._matCalendarBody;
        /**
         * The label for this month (e.g. "January 2017").
         * @type {?}
         */
        NgxMatMonthView.prototype._monthLabel;
        /**
         * Grid of calendar cells representing the dates of the month.
         * @type {?}
         */
        NgxMatMonthView.prototype._weeks;
        /**
         * The number of blank cells in the first row before the 1st of the month.
         * @type {?}
         */
        NgxMatMonthView.prototype._firstWeekOffset;
        /**
         * Start value of the currently-shown date range.
         * @type {?}
         */
        NgxMatMonthView.prototype._rangeStart;
        /**
         * End value of the currently-shown date range.
         * @type {?}
         */
        NgxMatMonthView.prototype._rangeEnd;
        /**
         * Start value of the currently-shown comparison date range.
         * @type {?}
         */
        NgxMatMonthView.prototype._comparisonRangeStart;
        /**
         * End value of the currently-shown comparison date range.
         * @type {?}
         */
        NgxMatMonthView.prototype._comparisonRangeEnd;
        /**
         * Start of the preview range.
         * @type {?}
         */
        NgxMatMonthView.prototype._previewStart;
        /**
         * End of the preview range.
         * @type {?}
         */
        NgxMatMonthView.prototype._previewEnd;
        /**
         * Whether the user is currently selecting a range of dates.
         * @type {?}
         */
        NgxMatMonthView.prototype._isRange;
        /**
         * The date of the month that today falls on. Null if today is in another month.
         * @type {?}
         */
        NgxMatMonthView.prototype._todayDate;
        /**
         * The names of the weekdays.
         * @type {?}
         */
        NgxMatMonthView.prototype._weekdays;
        /**
         * @type {?}
         * @private
         */
        NgxMatMonthView.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        NgxMatMonthView.prototype._dateFormats;
        /** @type {?} */
        NgxMatMonthView.prototype._dateAdapter;
        /**
         * @type {?}
         * @private
         */
        NgxMatMonthView.prototype._dir;
        /**
         * @type {?}
         * @private
         */
        NgxMatMonthView.prototype._rangeStrategy;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/multi-year-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var yearsPerPage = 24;
    /** @type {?} */
    var yearsPerRow = 4;
    /**
     * An internal component used to display a year selector in the datepicker.
     * \@docs-private
     * @template D
     */
    var NgxMatMultiYearView = /** @class */ (function () {
        /**
         * @param {?} _changeDetectorRef
         * @param {?} _dateAdapter
         * @param {?=} _dir
         */
        function NgxMatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
            this._changeDetectorRef = _changeDetectorRef;
            this._dateAdapter = _dateAdapter;
            this._dir = _dir;
            this._rerenderSubscription = rxjs.Subscription.EMPTY;
            /**
             * Emits when a new year is selected.
             */
            this.selectedChange = new core.EventEmitter();
            /**
             * Emits the selected year. This doesn't imply a change on the selected date
             */
            this.yearSelected = new core.EventEmitter();
            /**
             * Emits when any date is activated.
             */
            this.activeDateChange = new core.EventEmitter();
            if (!this._dateAdapter) {
                throw createMissingDateImplError('NgxMatDateAdapter');
            }
            this._activeDate = this._dateAdapter.today();
        }
        Object.defineProperty(NgxMatMultiYearView.prototype, "activeDate", {
            /**
             * The date to display in this multi-year view (everything other than the year is ignored).
             * @return {?}
             */
            get: function () { return this._activeDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                /** @type {?} */
                var oldActiveDate = this._activeDate;
                /** @type {?} */
                var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
                this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
                if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
                    this._init();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatMultiYearView.prototype, "selected", {
            /**
             * The currently selected date.
             * @return {?}
             */
            get: function () { return this._selected; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if (value instanceof datepicker.DateRange) {
                    this._selected = value;
                }
                else {
                    this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                }
                this._setSelectedYear(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatMultiYearView.prototype, "minDate", {
            /**
             * The minimum selectable date.
             * @return {?}
             */
            get: function () { return this._minDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatMultiYearView.prototype, "maxDate", {
            /**
             * The maximum selectable date.
             * @return {?}
             */
            get: function () { return this._maxDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxMatMultiYearView.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._rerenderSubscription = this._dateAdapter.localeChanges
                .pipe(operators.startWith(null))
                .subscribe(( /**
         * @return {?}
         */function () { return _this._init(); }));
        };
        /**
         * @return {?}
         */
        NgxMatMultiYearView.prototype.ngOnDestroy = function () {
            this._rerenderSubscription.unsubscribe();
        };
        /**
         * Initializes this multi-year view.
         * @return {?}
         */
        NgxMatMultiYearView.prototype._init = function () {
            var _this = this;
            this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
            // We want a range years such that we maximize the number of
            // enabled dates visible at once. This prevents issues where the minimum year
            // is the last item of a page OR the maximum year is the first item of a page.
            // The offset from the active year to the "slot" for the starting year is the
            // *actual* first rendered year in the multi-year view.
            /** @type {?} */
            var activeYear = this._dateAdapter.getYear(this._activeDate);
            /** @type {?} */
            var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
            this._years = [];
            for (var i = 0, row = []; i < yearsPerPage; i++) {
                row.push(minYearOfPage + i);
                if (row.length == yearsPerRow) {
                    this._years.push(row.map(( /**
                     * @param {?} year
                     * @return {?}
                     */function (/**
                     * @param {?} year
                     * @return {?}
                     */ year) { return _this._createCellForYear(year); })));
                    row = [];
                }
            }
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Handles when a new year is selected.
         * @param {?} event
         * @return {?}
         */
        NgxMatMultiYearView.prototype._yearSelected = function (event) {
            /** @type {?} */
            var year = event.value;
            this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
            /** @type {?} */
            var month = this._dateAdapter.getMonth(this.activeDate);
            /** @type {?} */
            var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
            this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
        };
        /**
         * Handles keydown events on the calendar body when calendar is in multi-year view.
         * @param {?} event
         * @return {?}
         */
        NgxMatMultiYearView.prototype._handleCalendarBodyKeydown = function (event) {
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            /** @type {?} */
            var isRtl = this._isRtl();
            switch (event.keyCode) {
                case keycodes.LEFT_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                    break;
                case keycodes.RIGHT_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                    break;
                case keycodes.UP_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                    break;
                case keycodes.DOWN_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                    break;
                case keycodes.HOME:
                    this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                    break;
                case keycodes.END:
                    this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                    break;
                case keycodes.PAGE_UP:
                    this.activeDate =
                        this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                    break;
                case keycodes.PAGE_DOWN:
                    this.activeDate =
                        this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                    break;
                case keycodes.ENTER:
                case keycodes.SPACE:
                    this._yearSelected({ value: this._dateAdapter.getYear(this._activeDate), event: event });
                    break;
                default:
                    // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                    return;
            }
            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
                this.activeDateChange.emit(this.activeDate);
            }
            this._focusActiveCell();
            // Prevent unexpected default actions such as form submission.
            event.preventDefault();
        };
        /**
         * @return {?}
         */
        NgxMatMultiYearView.prototype._getActiveCell = function () {
            return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        };
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */
        NgxMatMultiYearView.prototype._focusActiveCell = function () {
            this._matCalendarBody._focusActiveCell();
        };
        /**
         * Creates an MatCalendarCell for the given year.
         * @private
         * @param {?} year
         * @return {?}
         */
        NgxMatMultiYearView.prototype._createCellForYear = function (year) {
            /** @type {?} */
            var yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));
            return new NgxMatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
        };
        /**
         * Whether the given year is enabled.
         * @private
         * @param {?} year
         * @return {?}
         */
        NgxMatMultiYearView.prototype._shouldEnableYear = function (year) {
            // disable if the year is greater than maxDate lower than minDate
            if (year === undefined || year === null ||
                (this.maxDate && year > this._dateAdapter.getYear(this.maxDate)) ||
                (this.minDate && year < this._dateAdapter.getYear(this.minDate))) {
                return false;
            }
            // enable if it reaches here and there's no filter defined
            if (!this.dateFilter) {
                return true;
            }
            /** @type {?} */
            var firstOfYear = this._dateAdapter.createDate(year, 0, 1);
            // If any date in the year is enabled count the year as enabled.
            for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
                if (this.dateFilter(date)) {
                    return true;
                }
            }
            return false;
        };
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */
        NgxMatMultiYearView.prototype._getValidDateOrNull = function (obj) {
            return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
        };
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */
        NgxMatMultiYearView.prototype._isRtl = function () {
            return this._dir && this._dir.value === 'rtl';
        };
        /**
         * Sets the currently-highlighted year based on a model value.
         * @private
         * @param {?} value
         * @return {?}
         */
        NgxMatMultiYearView.prototype._setSelectedYear = function (value) {
            this._selectedYear = null;
            if (value instanceof datepicker.DateRange) {
                /** @type {?} */
                var displayValue = value.start || value.end;
                if (displayValue) {
                    this._selectedYear = this._dateAdapter.getYear(displayValue);
                }
            }
            else if (value) {
                this._selectedYear = this._dateAdapter.getYear(value);
            }
        };
        return NgxMatMultiYearView;
    }());
    NgxMatMultiYearView.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-mat-multi-year-view',
                    template: "<table class=\"mat-calendar-table\" role=\"presentation\">\r\n  <thead class=\"mat-calendar-table-header\">\r\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\r\n  </thead>\r\n  <tbody ngx-mat-calendar-body\r\n         [rows]=\"_years\"\r\n         [todayValue]=\"_todayYear\"\r\n         [startValue]=\"_selectedYear!\"\r\n         [endValue]=\"_selectedYear!\"\r\n         [numCols]=\"4\"\r\n         [cellAspectRatio]=\"4 / 7\"\r\n         [activeCell]=\"_getActiveCell()\"\r\n         (selectedValueChange)=\"_yearSelected($event)\"\r\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\r\n  </tbody>\r\n</table>\r\n\r\n",
                    exportAs: 'ngxMatMultiYearView',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NgxMatMultiYearView.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: NgxMatDateAdapter, decorators: [{ type: core.Optional }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    NgxMatMultiYearView.propDecorators = {
        activeDate: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        minDate: [{ type: core.Input }],
        maxDate: [{ type: core.Input }],
        dateFilter: [{ type: core.Input }],
        selectedChange: [{ type: core.Output }],
        yearSelected: [{ type: core.Output }],
        activeDateChange: [{ type: core.Output }],
        _matCalendarBody: [{ type: core.ViewChild, args: [NgxMatCalendarBody,] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxMatMultiYearView.prototype._rerenderSubscription;
        /**
         * @type {?}
         * @private
         */
        NgxMatMultiYearView.prototype._activeDate;
        /**
         * @type {?}
         * @private
         */
        NgxMatMultiYearView.prototype._selected;
        /**
         * @type {?}
         * @private
         */
        NgxMatMultiYearView.prototype._minDate;
        /**
         * @type {?}
         * @private
         */
        NgxMatMultiYearView.prototype._maxDate;
        /**
         * A function used to filter which dates are selectable.
         * @type {?}
         */
        NgxMatMultiYearView.prototype.dateFilter;
        /**
         * Emits when a new year is selected.
         * @type {?}
         */
        NgxMatMultiYearView.prototype.selectedChange;
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         * @type {?}
         */
        NgxMatMultiYearView.prototype.yearSelected;
        /**
         * Emits when any date is activated.
         * @type {?}
         */
        NgxMatMultiYearView.prototype.activeDateChange;
        /**
         * The body of calendar table
         * @type {?}
         */
        NgxMatMultiYearView.prototype._matCalendarBody;
        /**
         * Grid of calendar cells representing the currently displayed years.
         * @type {?}
         */
        NgxMatMultiYearView.prototype._years;
        /**
         * The year that today falls on.
         * @type {?}
         */
        NgxMatMultiYearView.prototype._todayYear;
        /**
         * The year of the selected date. Null if the selected date is null.
         * @type {?}
         */
        NgxMatMultiYearView.prototype._selectedYear;
        /**
         * @type {?}
         * @private
         */
        NgxMatMultiYearView.prototype._changeDetectorRef;
        /** @type {?} */
        NgxMatMultiYearView.prototype._dateAdapter;
        /**
         * @type {?}
         * @private
         */
        NgxMatMultiYearView.prototype._dir;
    }
    /**
     * @template D
     * @param {?} dateAdapter
     * @param {?} date1
     * @param {?} date2
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
        /** @type {?} */
        var year1 = dateAdapter.getYear(date1);
        /** @type {?} */
        var year2 = dateAdapter.getYear(date2);
        /** @type {?} */
        var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
        return Math.floor((year1 - startingYear) / yearsPerPage) ===
            Math.floor((year2 - startingYear) / yearsPerPage);
    }
    /**
     * When the multi-year view is first opened, the active year will be in view.
     * So we compute how many years are between the active year and the *slot* where our
     * "startingYear" will render when paged into view.
     * @template D
     * @param {?} dateAdapter
     * @param {?} activeDate
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
        /** @type {?} */
        var activeYear = dateAdapter.getYear(activeDate);
        return euclideanModulo((activeYear - getStartingYear(dateAdapter, minDate, maxDate)), yearsPerPage);
    }
    /**
     * We pick a "starting" year such that either the maximum year would be at the end
     * or the minimum year would be at the beginning of a page.
     * @template D
     * @param {?} dateAdapter
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function getStartingYear(dateAdapter, minDate, maxDate) {
        /** @type {?} */
        var startingYear = 0;
        if (maxDate) {
            /** @type {?} */
            var maxYear = dateAdapter.getYear(maxDate);
            startingYear = maxYear - yearsPerPage + 1;
        }
        else if (minDate) {
            startingYear = dateAdapter.getYear(minDate);
        }
        return startingYear;
    }
    /**
     * Gets remainder that is non-negative, even if first number is negative
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function euclideanModulo(a, b) {
        return (a % b + b) % b;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/year-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An internal component used to display a single year in the datepicker.
     * \@docs-private
     * @template D
     */
    var NgxMatYearView = /** @class */ (function () {
        /**
         * @param {?} _changeDetectorRef
         * @param {?} _dateFormats
         * @param {?} _dateAdapter
         * @param {?=} _dir
         */
        function NgxMatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
            this._changeDetectorRef = _changeDetectorRef;
            this._dateFormats = _dateFormats;
            this._dateAdapter = _dateAdapter;
            this._dir = _dir;
            this._rerenderSubscription = rxjs.Subscription.EMPTY;
            /**
             * Emits when a new month is selected.
             */
            this.selectedChange = new core.EventEmitter();
            /**
             * Emits the selected month. This doesn't imply a change on the selected date
             */
            this.monthSelected = new core.EventEmitter();
            /**
             * Emits when any date is activated.
             */
            this.activeDateChange = new core.EventEmitter();
            if (!this._dateAdapter) {
                throw createMissingDateImplError('NgxMatDateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('NGX_MAT_DATE_FORMATS');
            }
            this._activeDate = this._dateAdapter.today();
        }
        Object.defineProperty(NgxMatYearView.prototype, "activeDate", {
            /**
             * The date to display in this year view (everything other than the year is ignored).
             * @return {?}
             */
            get: function () { return this._activeDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                /** @type {?} */
                var oldActiveDate = this._activeDate;
                /** @type {?} */
                var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
                this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
                if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
                    this._init();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatYearView.prototype, "selected", {
            /**
             * The currently selected date.
             * @return {?}
             */
            get: function () { return this._selected; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if (value instanceof datepicker.DateRange) {
                    this._selected = value;
                }
                else {
                    this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                }
                this._setSelectedMonth(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatYearView.prototype, "minDate", {
            /**
             * The minimum selectable date.
             * @return {?}
             */
            get: function () { return this._minDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatYearView.prototype, "maxDate", {
            /**
             * The maximum selectable date.
             * @return {?}
             */
            get: function () { return this._maxDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxMatYearView.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._rerenderSubscription = this._dateAdapter.localeChanges
                .pipe(operators.startWith(null))
                .subscribe(( /**
         * @return {?}
         */function () { return _this._init(); }));
        };
        /**
         * @return {?}
         */
        NgxMatYearView.prototype.ngOnDestroy = function () {
            this._rerenderSubscription.unsubscribe();
        };
        /**
         * Handles when a new month is selected.
         * @param {?} event
         * @return {?}
         */
        NgxMatYearView.prototype._monthSelected = function (event) {
            /** @type {?} */
            var month = event.value;
            /** @type {?} */
            var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
            this.monthSelected.emit(normalizedDate);
            /** @type {?} */
            var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
            this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
        };
        /**
         * Handles keydown events on the calendar body when calendar is in year view.
         * @param {?} event
         * @return {?}
         */
        NgxMatYearView.prototype._handleCalendarBodyKeydown = function (event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            /** @type {?} */
            var isRtl = this._isRtl();
            switch (event.keyCode) {
                case keycodes.LEFT_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                    break;
                case keycodes.RIGHT_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                    break;
                case keycodes.UP_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                    break;
                case keycodes.DOWN_ARROW:
                    this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                    break;
                case keycodes.HOME:
                    this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                    break;
                case keycodes.END:
                    this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                    break;
                case keycodes.PAGE_UP:
                    this.activeDate =
                        this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                    break;
                case keycodes.PAGE_DOWN:
                    this.activeDate =
                        this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                    break;
                case keycodes.ENTER:
                case keycodes.SPACE:
                    this._monthSelected({ value: this._dateAdapter.getMonth(this._activeDate), event: event });
                    break;
                default:
                    // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                    return;
            }
            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
                this.activeDateChange.emit(this.activeDate);
            }
            this._focusActiveCell();
            // Prevent unexpected default actions such as form submission.
            event.preventDefault();
        };
        /**
         * Initializes this year view.
         * @return {?}
         */
        NgxMatYearView.prototype._init = function () {
            var _this = this;
            this._setSelectedMonth(this.selected);
            this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
            this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
            /** @type {?} */
            var monthNames = this._dateAdapter.getMonthNames('short');
            // First row of months only contains 5 elements so we can fit the year label on the same row.
            this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(( /**
             * @param {?} row
             * @return {?}
             */function (/**
             * @param {?} row
             * @return {?}
             */ row) { return row.map(( /**
             * @param {?} month
             * @return {?}
             */function (/**
             * @param {?} month
             * @return {?}
             */ month) { return _this._createCellForMonth(month, monthNames[month]); })); }));
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */
        NgxMatYearView.prototype._focusActiveCell = function () {
            this._matCalendarBody._focusActiveCell();
        };
        /**
         * Gets the month in this year that the given Date falls on.
         * Returns null if the given Date is in another year.
         * @private
         * @param {?} date
         * @return {?}
         */
        NgxMatYearView.prototype._getMonthInCurrentYear = function (date) {
            return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
                this._dateAdapter.getMonth(date) : null;
        };
        /**
         * Creates an MatCalendarCell for the given month.
         * @private
         * @param {?} month
         * @param {?} monthName
         * @return {?}
         */
        NgxMatYearView.prototype._createCellForMonth = function (month, monthName) {
            /** @type {?} */
            var ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);
            return new NgxMatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
        };
        /**
         * Whether the given month is enabled.
         * @private
         * @param {?} month
         * @return {?}
         */
        NgxMatYearView.prototype._shouldEnableMonth = function (month) {
            /** @type {?} */
            var activeYear = this._dateAdapter.getYear(this.activeDate);
            if (month === undefined || month === null ||
                this._isYearAndMonthAfterMaxDate(activeYear, month) ||
                this._isYearAndMonthBeforeMinDate(activeYear, month)) {
                return false;
            }
            if (!this.dateFilter) {
                return true;
            }
            /** @type {?} */
            var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
            // If any date in the month is enabled count the month as enabled.
            for (var date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
                if (this.dateFilter(date)) {
                    return true;
                }
            }
            return false;
        };
        /**
         * Tests whether the combination month/year is after this.maxDate, considering
         * just the month and year of this.maxDate
         * @private
         * @param {?} year
         * @param {?} month
         * @return {?}
         */
        NgxMatYearView.prototype._isYearAndMonthAfterMaxDate = function (year, month) {
            if (this.maxDate) {
                /** @type {?} */
                var maxYear = this._dateAdapter.getYear(this.maxDate);
                /** @type {?} */
                var maxMonth = this._dateAdapter.getMonth(this.maxDate);
                return year > maxYear || (year === maxYear && month > maxMonth);
            }
            return false;
        };
        /**
         * Tests whether the combination month/year is before this.minDate, considering
         * just the month and year of this.minDate
         * @private
         * @param {?} year
         * @param {?} month
         * @return {?}
         */
        NgxMatYearView.prototype._isYearAndMonthBeforeMinDate = function (year, month) {
            if (this.minDate) {
                /** @type {?} */
                var minYear = this._dateAdapter.getYear(this.minDate);
                /** @type {?} */
                var minMonth = this._dateAdapter.getMonth(this.minDate);
                return year < minYear || (year === minYear && month < minMonth);
            }
            return false;
        };
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */
        NgxMatYearView.prototype._getValidDateOrNull = function (obj) {
            return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
        };
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */
        NgxMatYearView.prototype._isRtl = function () {
            return this._dir && this._dir.value === 'rtl';
        };
        /**
         * Sets the currently-selected month based on a model value.
         * @private
         * @param {?} value
         * @return {?}
         */
        NgxMatYearView.prototype._setSelectedMonth = function (value) {
            if (value instanceof datepicker.DateRange) {
                this._selectedMonth = this._getMonthInCurrentYear(value.start) ||
                    this._getMonthInCurrentYear(value.end);
            }
            else {
                this._selectedMonth = this._getMonthInCurrentYear(value);
            }
        };
        return NgxMatYearView;
    }());
    NgxMatYearView.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-mat-year-view',
                    template: "<table class=\"mat-calendar-table\" role=\"presentation\">\r\n  <thead class=\"mat-calendar-table-header\">\r\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\r\n  </thead>\r\n  <tbody ngx-mat-calendar-body\r\n         [label]=\"_yearLabel\"\r\n         [rows]=\"_months\"\r\n         [todayValue]=\"_todayMonth!\"\r\n         [startValue]=\"_selectedMonth!\"\r\n         [endValue]=\"_selectedMonth!\"\r\n         [labelMinRequiredCells]=\"2\"\r\n         [numCols]=\"4\"\r\n         [cellAspectRatio]=\"4 / 7\"\r\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\r\n         (selectedValueChange)=\"_monthSelected($event)\"\r\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\r\n  </tbody>\r\n</table>\r\n",
                    exportAs: 'ngxMatYearView',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NgxMatYearView.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
        { type: NgxMatDateAdapter, decorators: [{ type: core.Optional }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    NgxMatYearView.propDecorators = {
        activeDate: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        minDate: [{ type: core.Input }],
        maxDate: [{ type: core.Input }],
        dateFilter: [{ type: core.Input }],
        selectedChange: [{ type: core.Output }],
        monthSelected: [{ type: core.Output }],
        activeDateChange: [{ type: core.Output }],
        _matCalendarBody: [{ type: core.ViewChild, args: [NgxMatCalendarBody,] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxMatYearView.prototype._rerenderSubscription;
        /**
         * @type {?}
         * @private
         */
        NgxMatYearView.prototype._activeDate;
        /**
         * @type {?}
         * @private
         */
        NgxMatYearView.prototype._selected;
        /**
         * @type {?}
         * @private
         */
        NgxMatYearView.prototype._minDate;
        /**
         * @type {?}
         * @private
         */
        NgxMatYearView.prototype._maxDate;
        /**
         * A function used to filter which dates are selectable.
         * @type {?}
         */
        NgxMatYearView.prototype.dateFilter;
        /**
         * Emits when a new month is selected.
         * @type {?}
         */
        NgxMatYearView.prototype.selectedChange;
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         * @type {?}
         */
        NgxMatYearView.prototype.monthSelected;
        /**
         * Emits when any date is activated.
         * @type {?}
         */
        NgxMatYearView.prototype.activeDateChange;
        /**
         * The body of calendar table
         * @type {?}
         */
        NgxMatYearView.prototype._matCalendarBody;
        /**
         * Grid of calendar cells representing the months of the year.
         * @type {?}
         */
        NgxMatYearView.prototype._months;
        /**
         * The label for this year (e.g. "2017").
         * @type {?}
         */
        NgxMatYearView.prototype._yearLabel;
        /**
         * The month in this year that today falls on. Null if today is in a different year.
         * @type {?}
         */
        NgxMatYearView.prototype._todayMonth;
        /**
         * The month in this year that the selected Date falls on.
         * Null if the selected Date is in a different year.
         * @type {?}
         */
        NgxMatYearView.prototype._selectedMonth;
        /**
         * @type {?}
         * @private
         */
        NgxMatYearView.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        NgxMatYearView.prototype._dateFormats;
        /** @type {?} */
        NgxMatYearView.prototype._dateAdapter;
        /**
         * @type {?}
         * @private
         */
        NgxMatYearView.prototype._dir;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/calendar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Default header for NgxMatCalendar
     * @template D
     */
    var NgxMatCalendarHeader = /** @class */ (function () {
        /**
         * @param {?} _intl
         * @param {?} calendar
         * @param {?} _dateAdapter
         * @param {?} _dateFormats
         * @param {?} changeDetectorRef
         */
        function NgxMatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
            this._intl = _intl;
            this.calendar = calendar;
            this._dateAdapter = _dateAdapter;
            this._dateFormats = _dateFormats;
            this.calendar.stateChanges.subscribe(( /**
             * @return {?}
             */function () { return changeDetectorRef.markForCheck(); }));
        }
        Object.defineProperty(NgxMatCalendarHeader.prototype, "periodButtonText", {
            /**
             * The label for the current calendar view.
             * @return {?}
             */
            get: function () {
                if (this.calendar.currentView == 'month') {
                    return this._dateAdapter
                        .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                        .toLocaleUpperCase();
                }
                if (this.calendar.currentView == 'year') {
                    return this._dateAdapter.getYearName(this.calendar.activeDate);
                }
                // The offset from the active year to the "slot" for the starting year is the
                // *actual* first rendered year in the multi-year view, and the last year is
                // just yearsPerPage - 1 away.
                /** @type {?} */
                var activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
                /** @type {?} */
                var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
                /** @type {?} */
                var maxYearOfPage = minYearOfPage + yearsPerPage - 1;
                /** @type {?} */
                var minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
                /** @type {?} */
                var maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
                return formatYearRange(minYearName, maxYearName);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatCalendarHeader.prototype, "periodButtonLabel", {
            /**
             * @return {?}
             */
            get: function () {
                return this.calendar.currentView == 'month' ?
                    this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatCalendarHeader.prototype, "prevButtonLabel", {
            /**
             * The label for the previous button.
             * @return {?}
             */
            get: function () {
                return {
                    'month': this._intl.prevMonthLabel,
                    'year': this._intl.prevYearLabel,
                    'multi-year': this._intl.prevMultiYearLabel
                }[this.calendar.currentView];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatCalendarHeader.prototype, "nextButtonLabel", {
            /**
             * The label for the next button.
             * @return {?}
             */
            get: function () {
                return {
                    'month': this._intl.nextMonthLabel,
                    'year': this._intl.nextYearLabel,
                    'multi-year': this._intl.nextMultiYearLabel
                }[this.calendar.currentView];
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Handles user clicks on the period label.
         * @return {?}
         */
        NgxMatCalendarHeader.prototype.currentPeriodClicked = function () {
            this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
        };
        /**
         * Handles user clicks on the previous button.
         * @return {?}
         */
        NgxMatCalendarHeader.prototype.previousClicked = function () {
            this.calendar.activeDate = this.calendar.currentView == 'month' ?
                this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
                this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
        };
        /**
         * Handles user clicks on the next button.
         * @return {?}
         */
        NgxMatCalendarHeader.prototype.nextClicked = function () {
            this.calendar.activeDate = this.calendar.currentView == 'month' ?
                this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
                this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
        };
        /**
         * Whether the previous period button is enabled.
         * @return {?}
         */
        NgxMatCalendarHeader.prototype.previousEnabled = function () {
            if (!this.calendar.minDate) {
                return true;
            }
            return !this.calendar.minDate ||
                !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
        };
        /**
         * Whether the next period button is enabled.
         * @return {?}
         */
        NgxMatCalendarHeader.prototype.nextEnabled = function () {
            return !this.calendar.maxDate ||
                !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
        };
        /**
         * Whether the two dates represent the same view in the current view mode (month or year).
         * @private
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        NgxMatCalendarHeader.prototype._isSameView = function (date1, date2) {
            if (this.calendar.currentView == 'month') {
                return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                    this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
            }
            if (this.calendar.currentView == 'year') {
                return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
            }
            // Otherwise we are in 'multi-year' view.
            return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
        };
        return NgxMatCalendarHeader;
    }());
    NgxMatCalendarHeader.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-mat-calendar-header',
                    template: "<div class=\"mat-calendar-header\">\r\n  <div class=\"mat-calendar-controls\">\r\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\r\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\r\n            cdkAriaLive=\"polite\">\r\n      {{periodButtonText}}\r\n      <div class=\"mat-calendar-arrow\"\r\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\r\n    </button>\r\n\r\n    <div class=\"mat-calendar-spacer\"></div>\r\n\r\n    <ng-content></ng-content>\r\n\r\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\r\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\r\n            [attr.aria-label]=\"prevButtonLabel\">\r\n    </button>\r\n\r\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\r\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\r\n            [attr.aria-label]=\"nextButtonLabel\">\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                    exportAs: 'ngxMatCalendarHeader',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NgxMatCalendarHeader.ctorParameters = function () { return [
        { type: datepicker.MatDatepickerIntl },
        { type: NgxMatCalendar, decorators: [{ type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return NgxMatCalendar; })),] }] },
        { type: NgxMatDateAdapter, decorators: [{ type: core.Optional }] },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
        { type: core.ChangeDetectorRef }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendarHeader.prototype._intl;
        /** @type {?} */
        NgxMatCalendarHeader.prototype.calendar;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendarHeader.prototype._dateAdapter;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendarHeader.prototype._dateFormats;
    }
    /**
     * A calendar that is used as part of the datepicker.
     * \@docs-private
     * @template D
     */
    var NgxMatCalendar = /** @class */ (function () {
        /**
         * @param {?} _intl
         * @param {?} _dateAdapter
         * @param {?} _dateFormats
         * @param {?} _changeDetectorRef
         */
        function NgxMatCalendar(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
            var _this = this;
            this._dateAdapter = _dateAdapter;
            this._dateFormats = _dateFormats;
            this._changeDetectorRef = _changeDetectorRef;
            /**
             * Used for scheduling that focus should be moved to the active cell on the next tick.
             * We need to schedule it, rather than do it immediately, because we have to wait
             * for Angular to re-evaluate the view children.
             */
            this._moveFocusOnNextTick = false;
            /**
             * Whether the calendar should be started in month or year view.
             */
            this.startView = 'month';
            /**
             * Emits when the currently selected date changes.
             */
            this.selectedChange = new core.EventEmitter();
            /**
             * Emits the year chosen in multiyear view.
             * This doesn't imply a change on the selected date.
             */
            this.yearSelected = new core.EventEmitter();
            /**
             * Emits the month chosen in year view.
             * This doesn't imply a change on the selected date.
             */
            this.monthSelected = new core.EventEmitter();
            /**
             * Emits when any date is selected.
             */
            this._userSelection = new core.EventEmitter();
            /**
             * Emits whenever there is a state change that the header may need to respond to.
             */
            this.stateChanges = new rxjs.Subject();
            if (!this._dateAdapter) {
                throw createMissingDateImplError('NgxDateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('NGX_MAT_DATE_FORMATS');
            }
            this._intlChanges = _intl.changes.subscribe(( /**
             * @return {?}
             */function () {
                _changeDetectorRef.markForCheck();
                _this.stateChanges.next();
            }));
        }
        Object.defineProperty(NgxMatCalendar.prototype, "startAt", {
            /**
             * A date representing the period (month or year) to start the calendar in.
             * @return {?}
             */
            get: function () { return this._startAt; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatCalendar.prototype, "selected", {
            /**
             * The currently selected date.
             * @return {?}
             */
            get: function () { return this._selected; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatCalendar.prototype, "minDate", {
            /**
             * The minimum selectable date.
             * @return {?}
             */
            get: function () { return this._minDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatCalendar.prototype, "maxDate", {
            /**
             * The maximum selectable date.
             * @return {?}
             */
            get: function () { return this._maxDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatCalendar.prototype, "activeDate", {
            /**
             * The current active date. This determines which time period is shown and which date is
             * highlighted when using keyboard navigation.
             * @return {?}
             */
            get: function () { return this._clampedActiveDate; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
                this.stateChanges.next();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatCalendar.prototype, "currentView", {
            /**
             * Whether the calendar is in month view.
             * @return {?}
             */
            get: function () { return this._currentView; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._currentView = value;
                this._moveFocusOnNextTick = true;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxMatCalendar.prototype.ngAfterContentInit = function () {
            this._calendarHeaderPortal = new portal.ComponentPortal(this.headerComponent || NgxMatCalendarHeader);
            this.activeDate = this.startAt || this._dateAdapter.today();
            // Assign to the private property since we don't want to move focus on init.
            this._currentView = this.startView;
        };
        /**
         * @return {?}
         */
        NgxMatCalendar.prototype.ngAfterViewChecked = function () {
            if (this._moveFocusOnNextTick) {
                this._moveFocusOnNextTick = false;
                this.focusActiveCell();
            }
        };
        /**
         * @return {?}
         */
        NgxMatCalendar.prototype.ngOnDestroy = function () {
            this._intlChanges.unsubscribe();
            this.stateChanges.complete();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxMatCalendar.prototype.ngOnChanges = function (changes) {
            /** @type {?} */
            var change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];
            if (change && !change.firstChange) {
                /** @type {?} */
                var view = this._getCurrentViewComponent();
                if (view) {
                    // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                    // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                    this._changeDetectorRef.detectChanges();
                    view._init();
                }
            }
            this.stateChanges.next();
        };
        /**
         * @return {?}
         */
        NgxMatCalendar.prototype.focusActiveCell = function () {
            this._getCurrentViewComponent()._focusActiveCell();
        };
        /**
         * Updates today's date after an update of the active date
         * @return {?}
         */
        NgxMatCalendar.prototype.updateTodaysDate = function () {
            /** @type {?} */
            var view = this.currentView == 'month' ? this.monthView :
                (this.currentView == 'year' ? this.yearView : this.multiYearView);
            view.ngAfterContentInit();
        };
        /**
         * Handles date selection in the month view.
         * @param {?} date
         * @return {?}
         */
        NgxMatCalendar.prototype._dateSelected = function (date) {
            if (date && !this._dateAdapter.sameDate(date, this.selected)) {
                this.selectedChange.emit(date);
            }
        };
        /**
         * Handles year selection in the multiyear view.
         * @param {?} normalizedYear
         * @return {?}
         */
        NgxMatCalendar.prototype._yearSelectedInMultiYearView = function (normalizedYear) {
            this.yearSelected.emit(normalizedYear);
        };
        /**
         * Handles month selection in the year view.
         * @param {?} normalizedMonth
         * @return {?}
         */
        NgxMatCalendar.prototype._monthSelectedInYearView = function (normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
        };
        /**
         * @return {?}
         */
        NgxMatCalendar.prototype._userSelected = function () {
            this._userSelection.emit();
        };
        /**
         * Handles year/month selection in the multi-year/year views.
         * @param {?} date
         * @param {?} view
         * @return {?}
         */
        NgxMatCalendar.prototype._goToDateInView = function (date, view) {
            this.activeDate = date;
            this.currentView = view;
        };
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */
        NgxMatCalendar.prototype._getValidDateOrNull = function (obj) {
            return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
        };
        /**
         * Returns the component instance that corresponds to the current calendar view.
         * @private
         * @return {?}
         */
        NgxMatCalendar.prototype._getCurrentViewComponent = function () {
            return this.monthView || this.yearView || this.multiYearView;
        };
        return NgxMatCalendar;
    }());
    NgxMatCalendar.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-mat-calendar',
                    template: "\r\n<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\r\n\r\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\r\n  <ngx-mat-month-view\r\n      *ngSwitchCase=\"'month'\"\r\n      [(activeDate)]=\"activeDate\"\r\n      [selected]=\"selected\"\r\n      [dateFilter]=\"dateFilter\"\r\n      [maxDate]=\"maxDate\"\r\n      [minDate]=\"minDate\"\r\n      [dateClass]=\"dateClass\"\r\n      (selectedChange)=\"_dateSelected($event)\"\r\n      (_userSelection)=\"_userSelected()\">\r\n  </ngx-mat-month-view>\r\n\r\n  <ngx-mat-year-view\r\n      *ngSwitchCase=\"'year'\"\r\n      [(activeDate)]=\"activeDate\"\r\n      [selected]=\"selected\"\r\n      [dateFilter]=\"dateFilter\"\r\n      [maxDate]=\"maxDate\"\r\n      [minDate]=\"minDate\"\r\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\r\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\r\n  </ngx-mat-year-view>\r\n\r\n  <ngx-mat-multi-year-view\r\n      *ngSwitchCase=\"'multi-year'\"\r\n      [(activeDate)]=\"activeDate\"\r\n      [selected]=\"selected\"\r\n      [dateFilter]=\"dateFilter\"\r\n      [maxDate]=\"maxDate\"\r\n      [minDate]=\"minDate\"\r\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\r\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\r\n  </ngx-mat-multi-year-view>\r\n</div>\r\n",
                    host: {
                        'class': 'mat-calendar',
                    },
                    exportAs: 'ngxMatCalendar',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0}.mat-calendar-content{outline:none;padding:0 8px 8px}.mat-calendar-controls{display:flex;margin:5% calc(4.71429% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-top-style:solid;border-top-width:5px;display:inline-block;height:0;margin:0 0 0 5px;vertical-align:middle;width:0}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button:after,.mat-calendar-previous-button:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;margin:15.5px;position:absolute;right:0;top:0}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button:after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button:after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-collapse:collapse;border-spacing:0;width:100%}.mat-calendar-table-header th{padding:0 0 8px;text-align:center}.mat-calendar-table-header-divider{height:1px;position:relative}.mat-calendar-table-header-divider:after{content:\"\";height:1px;left:-8px;position:absolute;right:-8px;top:0}"]
                }] }
    ];
    /** @nocollapse */
    NgxMatCalendar.ctorParameters = function () { return [
        { type: datepicker.MatDatepickerIntl },
        { type: NgxMatDateAdapter, decorators: [{ type: core.Optional }] },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
        { type: core.ChangeDetectorRef }
    ]; };
    NgxMatCalendar.propDecorators = {
        headerComponent: [{ type: core.Input }],
        startAt: [{ type: core.Input }],
        startView: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        minDate: [{ type: core.Input }],
        maxDate: [{ type: core.Input }],
        dateFilter: [{ type: core.Input }],
        dateClass: [{ type: core.Input }],
        selectedChange: [{ type: core.Output }],
        yearSelected: [{ type: core.Output }],
        monthSelected: [{ type: core.Output }],
        _userSelection: [{ type: core.Output }],
        monthView: [{ type: core.ViewChild, args: [NgxMatMonthView,] }],
        yearView: [{ type: core.ViewChild, args: [NgxMatYearView,] }],
        multiYearView: [{ type: core.ViewChild, args: [NgxMatMultiYearView,] }]
    };
    if (false) {
        /**
         * An input indicating the type of the header component, if set.
         * @type {?}
         */
        NgxMatCalendar.prototype.headerComponent;
        /**
         * A portal containing the header component type for this calendar.
         * @type {?}
         */
        NgxMatCalendar.prototype._calendarHeaderPortal;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._intlChanges;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._moveFocusOnNextTick;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._startAt;
        /**
         * Whether the calendar should be started in month or year view.
         * @type {?}
         */
        NgxMatCalendar.prototype.startView;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._selected;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._minDate;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._maxDate;
        /**
         * Function used to filter which dates are selectable.
         * @type {?}
         */
        NgxMatCalendar.prototype.dateFilter;
        /**
         * Function that can be used to add custom CSS classes to dates.
         * @type {?}
         */
        NgxMatCalendar.prototype.dateClass;
        /**
         * Emits when the currently selected date changes.
         * @type {?}
         */
        NgxMatCalendar.prototype.selectedChange;
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         * @type {?}
         */
        NgxMatCalendar.prototype.yearSelected;
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         * @type {?}
         */
        NgxMatCalendar.prototype.monthSelected;
        /**
         * Emits when any date is selected.
         * @type {?}
         */
        NgxMatCalendar.prototype._userSelection;
        /**
         * Reference to the current month view component.
         * @type {?}
         */
        NgxMatCalendar.prototype.monthView;
        /**
         * Reference to the current year view component.
         * @type {?}
         */
        NgxMatCalendar.prototype.yearView;
        /**
         * Reference to the current multi-year view component.
         * @type {?}
         */
        NgxMatCalendar.prototype.multiYearView;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._clampedActiveDate;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._currentView;
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         * @type {?}
         */
        NgxMatCalendar.prototype.stateChanges;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._dateAdapter;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._dateFormats;
        /**
         * @type {?}
         * @private
         */
        NgxMatCalendar.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/timepicker.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template D
     */
    var NgxMatTimepickerComponent = /** @class */ (function () {
        /**
         * @param {?} _dateAdapter
         * @param {?} cd
         * @param {?} formBuilder
         */
        function NgxMatTimepickerComponent(_dateAdapter, cd, formBuilder) {
            this._dateAdapter = _dateAdapter;
            this.cd = cd;
            this.formBuilder = formBuilder;
            this.disabled = false;
            this.showSpinners = true;
            this.stepHour = DEFAULT_STEP;
            this.stepMinute = DEFAULT_STEP;
            this.stepSecond = DEFAULT_STEP;
            this.showSeconds = false;
            this.disableMinute = false;
            this.enableMeridian = false;
            this.color = 'primary';
            this.meridian = MERIDIANS.AM;
            this._onChange = ( /**
             * @return {?}
             */function () { });
            this._onTouched = ( /**
             * @return {?}
             */function () { });
            this._destroyed = new rxjs.Subject();
            this.pattern = PATTERN_INPUT_HOUR;
            if (!this._dateAdapter) {
                throw createMissingDateImplError('NgxMatDateAdapter');
            }
            this.form = this.formBuilder.group({
                hour: [{ value: null, disabled: this.disabled }, [forms.Validators.required, forms.Validators.pattern(PATTERN_INPUT_HOUR)]],
                minute: [{ value: null, disabled: this.disabled }, [forms.Validators.required, forms.Validators.pattern(PATTERN_INPUT_MINUTE)]],
                second: [{ value: null, disabled: this.disabled }, [forms.Validators.required, forms.Validators.pattern(PATTERN_INPUT_SECOND)]]
            });
        }
        Object.defineProperty(NgxMatTimepickerComponent.prototype, "hour", {
            /**
             * Hour
             * @private
             * @return {?}
             */
            get: function () {
                /** @type {?} */
                var val = Number(this.form.controls['hour'].value);
                return isNaN(val) ? 0 : val;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(NgxMatTimepickerComponent.prototype, "minute", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                /** @type {?} */
                var val = Number(this.form.controls['minute'].value);
                return isNaN(val) ? 0 : val;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(NgxMatTimepickerComponent.prototype, "second", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                /** @type {?} */
                var val = Number(this.form.controls['second'].value);
                return isNaN(val) ? 0 : val;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(NgxMatTimepickerComponent.prototype, "valid", {
            /**
             * Whether or not the form is valid
             * @return {?}
             */
            get: function () {
                return this.form.valid;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.form.valueChanges.pipe(operators.takeUntil(this._destroyed), operators.debounceTime(400)).subscribe(( /**
             * @param {?} val
             * @return {?}
             */function (/**
             * @param {?} val
             * @return {?}
             */ val) {
                _this._updateModel();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.disabled && !changes.disabled.firstChange) {
                this.disabled ? this.form.disable() : this.form.enable();
            }
            this.disableMinute ? this.form.get('minute').disable() : this.form.get('minute').enable();
        };
        /**
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
        /**
         * Writes a new value to the element.
         * @param {?} val
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.writeValue = function (val) {
            if (val != null) {
                this._model = val;
            }
            else {
                this._model = this._dateAdapter.today();
                if (this.defaultTime != null) {
                    this._dateAdapter.setTimeByDefaultValues(this._model, this.defaultTime);
                }
            }
            this._updateHourMinuteSecond();
        };
        /**
         * Registers a callback function that is called when the control's value changes in the UI.
         * @param {?} fn
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        /**
         * Set the function to be called when the control receives a touch event.
         * @param {?} fn
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        /**
         * Enables or disables the appropriate DOM element
         * @param {?} isDisabled
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.setDisabledState = function (isDisabled) {
            this._disabled = isDisabled;
            this.cd.markForCheck();
        };
        /**
         * Format input
         * @param {?} input
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.formatInput = function (input) {
            input.value = input.value.replace(NUMERIC_REGEX, '');
        };
        /**
         * Toggle meridian
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.toggleMeridian = function () {
            this.meridian = (this.meridian === MERIDIANS.AM) ? MERIDIANS.PM : MERIDIANS.AM;
            this.change('hour');
        };
        /**
         * Change property of time
         * @param {?} prop
         * @param {?=} up
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype.change = function (prop, up) {
            /** @type {?} */
            var next = this._getNextValueByProp(prop, up);
            this.form.controls[prop].setValue(formatTwoDigitTimeValue(next), { onlySelf: false, emitEvent: false });
            this._updateModel();
        };
        /**
         * Update controls of form by model
         * @private
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype._updateHourMinuteSecond = function () {
            /** @type {?} */
            var _hour = this._dateAdapter.getHour(this._model);
            /** @type {?} */
            var _minute = this._dateAdapter.getMinute(this._model);
            /** @type {?} */
            var _second = this._dateAdapter.getSecond(this._model);
            if (this.enableMeridian) {
                if (_hour > LIMIT_TIMES.meridian) {
                    _hour = _hour - LIMIT_TIMES.meridian;
                    this.meridian = MERIDIANS.PM;
                }
                else {
                    this.meridian = MERIDIANS.AM;
                }
            }
            this.form.controls['hour'].setValue(formatTwoDigitTimeValue(_hour));
            this.form.controls['minute'].setValue(formatTwoDigitTimeValue(_minute));
            this.form.controls['second'].setValue(formatTwoDigitTimeValue(_second));
        };
        /**
         * Update model
         * @private
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype._updateModel = function () {
            /** @type {?} */
            var _hour = this.hour;
            if (this.enableMeridian && this.meridian === MERIDIANS.PM && _hour !== LIMIT_TIMES.meridian) {
                _hour = _hour + LIMIT_TIMES.meridian;
            }
            this._dateAdapter.setHour(this._model, _hour);
            this._dateAdapter.setMinute(this._model, this.minute);
            this._dateAdapter.setSecond(this._model, this.second);
            this._onChange(this._model);
        };
        /**
         * Get next value by property
         * @private
         * @param {?} prop
         * @param {?=} up
         * @return {?}
         */
        NgxMatTimepickerComponent.prototype._getNextValueByProp = function (prop, up) {
            /** @type {?} */
            var keyProp = prop[0].toUpperCase() + prop.slice(1);
            /** @type {?} */
            var min = LIMIT_TIMES["min" + keyProp];
            /** @type {?} */
            var max = LIMIT_TIMES["max" + keyProp];
            if (prop === 'hour' && this.enableMeridian) {
                max = LIMIT_TIMES.meridian;
            }
            /** @type {?} */
            var next;
            if (up == null) {
                next = this[prop] % (max);
            }
            else {
                next = up ? this[prop] + this["step" + keyProp] : this[prop] - this["step" + keyProp];
                if (prop === 'hour' && this.enableMeridian) {
                    next = next % (max + 1);
                    if (next === 0)
                        next = up ? 1 : max;
                }
                else {
                    next = next % max;
                }
                if (up) {
                    next = next > max ? (next - max + min) : next;
                }
                else {
                    next = next < min ? (next - min + max) : next;
                }
            }
            return next;
        };
        return NgxMatTimepickerComponent;
    }());
    NgxMatTimepickerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-mat-timepicker',
                    template: "<form [formGroup]=\"form\">\r\n  <table class=\"ngx-mat-timepicker-table\">\r\n    <tbody class=\"ngx-mat-timepicker-tbody\">\r\n      <tr *ngIf=\"showSpinners\">\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('hour', true)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td></td>\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('minute', true)\"\r\n            [disabled]=\"disabled || disableMinute\">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button> </td>\r\n        <td></td>\r\n        <td *ngIf=\"showSeconds\">\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('second', true)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-spacer\"></td>\r\n        <td *ngIf=\"enableMeridian\"></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\" formControlName=\"hour\"\r\n              (keydown.ArrowUp)=\"change('hour', true); $event.preventDefault()\"\r\n              (keydown.ArrowDown)=\"change('hour', false); $event.preventDefault()\" (blur)=\"change('hour')\">\r\n          </mat-form-field>\r\n        </td>\r\n        <td class=\"ngx-mat-timepicker-spacer\">&#58;</td>\r\n        <td>\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\"\r\n              formControlName=\"minute\" (keydown.ArrowUp)=\"change('minute', true); $event.preventDefault()\"\r\n              (keydown.ArrowDown)=\"change('minute', false); $event.preventDefault()\" (blur)=\"change('minute')\">\r\n          </mat-form-field>\r\n        </td>\r\n        <td *ngIf=\"showSeconds\" class=\"ngx-mat-timepicker-spacer\">&#58;</td>\r\n        <td *ngIf=\"showSeconds\">\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\"\r\n              formControlName=\"second\" (keydown.ArrowUp)=\"change('second', true); $event.preventDefault()\"\r\n              (keydown.ArrowDown)=\"change('second', false); $event.preventDefault()\" (blur)=\"change('second')\">\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-spacer\"></td>\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-meridian\">\r\n          <button mat-button (click)=\"toggleMeridian()\" mat-stroked-button [color]=\"color\" [disabled]=\"disabled\">\r\n            {{meridian}}\r\n          </button>\r\n        </td>\r\n      </tr>\r\n\r\n      <tr *ngIf=\"showSpinners\">\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('hour', false)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button> </td>\r\n        <td></td>\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('minute', false)\"\r\n            [disabled]=\"disabled || disableMinute\">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button> </td>\r\n        <td *ngIf=\"showSeconds\"></td>\r\n        <td *ngIf=\"showSeconds\">\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('second', false)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-spacer\"></td>\r\n        <td *ngIf=\"enableMeridian\"></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</form>",
                    host: {
                        'class': 'ngx-mat-timepicker'
                    },
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(( /**
                             * @return {?}
                             */function () { return NgxMatTimepickerComponent; })),
                            multi: true
                        }
                    ],
                    exportAs: 'ngxMatTimepicker',
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [".ngx-mat-timepicker{font-size:13px}.ngx-mat-timepicker form{min-width:90px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td{text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer{font-weight:700}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mat-button{border-radius:4px;border-radius:50%;flex-shrink:0;height:36px;line-height:36px;min-width:64px;min-width:0;padding:0;width:36px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-icon-button{height:24px;line-height:24px;width:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-form-field{max-width:20px;text-align:center;width:20px}"]
                }] }
    ];
    /** @nocollapse */
    NgxMatTimepickerComponent.ctorParameters = function () { return [
        { type: NgxMatDateAdapter, decorators: [{ type: core.Optional }] },
        { type: core.ChangeDetectorRef },
        { type: forms.FormBuilder }
    ]; };
    NgxMatTimepickerComponent.propDecorators = {
        disabled: [{ type: core.Input }],
        showSpinners: [{ type: core.Input }],
        stepHour: [{ type: core.Input }],
        stepMinute: [{ type: core.Input }],
        stepSecond: [{ type: core.Input }],
        showSeconds: [{ type: core.Input }],
        disableMinute: [{ type: core.Input }],
        enableMeridian: [{ type: core.Input }],
        defaultTime: [{ type: core.Input }],
        color: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.form;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.disabled;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.showSpinners;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.stepHour;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.stepMinute;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.stepSecond;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.showSeconds;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.disableMinute;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.enableMeridian;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.defaultTime;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.color;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.meridian;
        /**
         * @type {?}
         * @private
         */
        NgxMatTimepickerComponent.prototype._onChange;
        /**
         * @type {?}
         * @private
         */
        NgxMatTimepickerComponent.prototype._onTouched;
        /**
         * @type {?}
         * @private
         */
        NgxMatTimepickerComponent.prototype._disabled;
        /**
         * @type {?}
         * @private
         */
        NgxMatTimepickerComponent.prototype._model;
        /**
         * @type {?}
         * @private
         */
        NgxMatTimepickerComponent.prototype._destroyed;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype.pattern;
        /** @type {?} */
        NgxMatTimepickerComponent.prototype._dateAdapter;
        /**
         * @type {?}
         * @private
         */
        NgxMatTimepickerComponent.prototype.cd;
        /**
         * @type {?}
         * @private
         */
        NgxMatTimepickerComponent.prototype.formBuilder;
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
    }

    /**
     * Used to generate a unique ID for each datepicker instance.
     * @type {?}
     */
    var datepickerUid = 0;
    // Boilerplate for applying mixins to MatDatepickerContent.
    /**
     * \@docs-private
     */
    var MatDatepickerContentBase = /** @class */ (function () {
        /**
         * @param {?} _elementRef
         */
        function MatDatepickerContentBase(_elementRef) {
            this._elementRef = _elementRef;
        }
        return MatDatepickerContentBase;
    }());
    if (false) {
        /** @type {?} */
        MatDatepickerContentBase.prototype._elementRef;
    }
    /** @type {?} */
    var _MatDatepickerContentMixinBase = core$1.mixinColor(MatDatepickerContentBase);
    /**
     * Component used as the content for the datepicker dialog and popup. We use this instead of using
     * NgxMatCalendar directly as the content so we can control the initial focus. This also gives us a
     * place to put additional features of the popup that are not part of the calendar itself in the
     * future. (e.g. confirmation buttons).
     * \@docs-private
     * @template D
     */
    var NgxMatDatetimeContent = /** @class */ (function (_super) {
        __extends(NgxMatDatetimeContent, _super);
        /**
         * @param {?} elementRef
         */
        function NgxMatDatetimeContent(elementRef) {
            return _super.call(this, elementRef) || this;
        }
        Object.defineProperty(NgxMatDatetimeContent.prototype, "valid", {
            /**
             * Whether or not the selected date is valid (min,max...)
             * @return {?}
             */
            get: function () {
                if (this.datepicker.hideTime)
                    return this.datepicker.valid;
                return this._timePicker && this._timePicker.valid && this.datepicker.valid;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimeContent.prototype, "isViewMonth", {
            /**
             * @return {?}
             */
            get: function () {
                if (!this._calendar || this._calendar.currentView == null)
                    return true;
                return this._calendar.currentView == 'month';
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxMatDatetimeContent.prototype.ngAfterViewInit = function () {
            this._calendar.focusActiveCell();
        };
        return NgxMatDatetimeContent;
    }(_MatDatepickerContentMixinBase));
    NgxMatDatetimeContent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-mat-datetime-content',
                    template: "<ngx-mat-calendar cdkTrapFocus [id]=\"datepicker.id\" [ngClass]=\"datepicker.panelClass\" [startAt]=\"datepicker.startAt\"\r\n    [startView]=\"datepicker.startView\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\"\r\n    [dateFilter]=\"datepicker._dateFilter\" [headerComponent]=\"datepicker.calendarHeaderComponent\"\r\n    [selected]=\"datepicker._selected\" [dateClass]=\"datepicker.dateClass\" [@fadeInCalendar]=\"'enter'\"\r\n    (selectedChange)=\"datepicker.select($event)\" (yearSelected)=\"datepicker._selectYear($event)\"\r\n    (monthSelected)=\"datepicker._selectMonth($event)\">\r\n</ngx-mat-calendar>\r\n<ng-container *ngIf=\"isViewMonth\">\r\n    <div *ngIf=\"!datepicker._hideTime\" class=\"time-container\" [class.disable-seconds]=\"!datepicker._showSeconds\">\r\n        <ngx-mat-timepicker [showSpinners]=\"datepicker._showSpinners\" [showSeconds]=\"datepicker._showSeconds\"\r\n            [disabled]=\"datepicker._disabled\" [stepHour]=\"datepicker._stepHour\" [stepMinute]=\"datepicker._stepMinute\"\r\n            [stepSecond]=\"datepicker._stepSecond\" [(ngModel)]=\"datepicker._selected\" [color]=\"datepicker._color\"\r\n            [enableMeridian]=\"datepicker._enableMeridian\" [disableMinute]=\"datepicker._disableMinute\">\r\n        </ngx-mat-timepicker>\r\n    </div>\r\n    <div class=\"actions\">\r\n        <button mat-button (click)=\"datepicker.ok()\" mat-stroked-button [color]=\"datepicker._color\" cdkFocusInitial\r\n            [disabled]=\"!valid\">\r\n            <mat-icon>done</mat-icon>\r\n        </button>\r\n    </div>\r\n</ng-container>",
                    host: {
                        'class': 'mat-datepicker-content',
                        '[@transformPanel]': '"enter"',
                        '[class.mat-datepicker-content-touch]': 'datepicker.touchUi',
                    },
                    animations: [
                        datepicker.matDatepickerAnimations.transformPanel,
                        datepicker.matDatepickerAnimations.fadeInCalendar,
                    ],
                    exportAs: 'ngxMatDatetimeContent',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    inputs: ['color'],
                    styles: [".mat-datepicker-content{border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);display:block}.mat-datepicker-content .mat-calendar{width:296px}.mat-datepicker-content .time-container{display:flex;justify-content:center;padding-top:5px;position:relative}.mat-datepicker-content .time-container.disable-seconds .ngx-mat-timepicker .table{margin-left:9px}.mat-datepicker-content .time-container:before{background-color:rgba(0,0,0,.12);content:\"\";height:1px;left:0;position:absolute;right:0;top:0}.mat-datepicker-content .actions{display:flex;justify-content:flex-end;padding:5px 15px 10px}"]
                }] }
    ];
    /** @nocollapse */
    NgxMatDatetimeContent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NgxMatDatetimeContent.propDecorators = {
        _calendar: [{ type: core.ViewChild, args: [NgxMatCalendar,] }],
        _timePicker: [{ type: core.ViewChild, args: [NgxMatTimepickerComponent,] }]
    };
    if (false) {
        /**
         * Reference to the internal calendar component.
         * @type {?}
         */
        NgxMatDatetimeContent.prototype._calendar;
        /**
         * Reference to the internal time picker component.
         * @type {?}
         */
        NgxMatDatetimeContent.prototype._timePicker;
        /**
         * Reference to the datepicker that created the overlay.
         * @type {?}
         */
        NgxMatDatetimeContent.prototype.datepicker;
        /**
         * Whether the datepicker is above or below the input.
         * @type {?}
         */
        NgxMatDatetimeContent.prototype._isAbove;
    }
    // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
    // template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
    // if angular adds support for `exportAs: '$implicit'` on directives.
    /**
     * Component responsible for managing the datepicker popup/dialog.
     * @template D
     */
    var NgxMatDatetimePicker = /** @class */ (function () {
        /**
         * @param {?} _dialog
         * @param {?} _overlay
         * @param {?} _ngZone
         * @param {?} _viewContainerRef
         * @param {?} scrollStrategy
         * @param {?} _dateAdapter
         * @param {?} _dir
         * @param {?} _document
         */
        function NgxMatDatetimePicker(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
            var _this = this;
            this._dialog = _dialog;
            this._overlay = _overlay;
            this._ngZone = _ngZone;
            this._viewContainerRef = _viewContainerRef;
            this._dateAdapter = _dateAdapter;
            this._dir = _dir;
            this._document = _document;
            this._defaultColor = 'primary';
            /**
             * The view that the calendar should start in.
             */
            this.startView = 'month';
            this._touchUi = false;
            this._hideTime = false;
            /**
             * Emits selected year in multiyear view.
             * This doesn't imply a change on the selected date.
             */
            this.yearSelected = new core.EventEmitter();
            /**
             * Emits selected month in year view.
             * This doesn't imply a change on the selected date.
             */
            this.monthSelected = new core.EventEmitter();
            /**
             * Emits when the datepicker has been opened.
             */
            this.openedStream = new core.EventEmitter();
            /**
             * Emits when the datepicker has been closed.
             */
            this.closedStream = new core.EventEmitter();
            this._opened = false;
            this._showSpinners = true;
            this._showSeconds = false;
            this._stepHour = DEFAULT_STEP;
            this._stepMinute = DEFAULT_STEP;
            this._stepSecond = DEFAULT_STEP;
            this._enableMeridian = false;
            this._hasBackdrop = true;
            /**
             * The id for the datepicker calendar.
             */
            this.id = "mat-datepicker-" + datepickerUid++;
            this._validSelected = null;
            /**
             * The element that was focused before the datepicker was opened.
             */
            this._focusedElementBeforeOpen = null;
            /**
             * Subscription to value changes in the associated input element.
             */
            this._inputSubscription = rxjs.Subscription.EMPTY;
            /**
             * Emits when the datepicker is disabled.
             */
            this._stateChanges = new rxjs.Subject();
            /**
             * Emits new selected date when selected date changes.
             */
            this._selectedChanged = new rxjs.Subject();
            /**
             * The form control validator for the min date.
             */
            this._minValidator = ( /**
             * @return {?}
             */function () {
                return (!_this._minDate || !_this._selected ||
                    _this._dateAdapter.compareDateWithTime(_this._minDate, _this._selected, _this.showSeconds) <= 0) ?
                    null : { 'matDatetimePickerMin': { 'min': _this._minDate, 'actual': _this._selected } };
            });
            /**
             * The form control validator for the max date.
             */
            this._maxValidator = ( /**
             * @return {?}
             */function () {
                return (!_this._maxDate || !_this._selected ||
                    _this._dateAdapter.compareDateWithTime(_this._maxDate, _this._selected, _this.showSeconds) >= 0) ?
                    null : { 'matDatetimePickerMax': { 'max': _this._maxDate, 'actual': _this._selected } };
            });
            if (!this._dateAdapter) {
                throw createMissingDateImplError('NgxMatDateAdapter');
            }
            this._scrollStrategy = scrollStrategy;
        }
        Object.defineProperty(NgxMatDatetimePicker.prototype, "defaultColor", {
            get: function () {
                return this._defaultColor;
            },
            set: function (value) {
                this._defaultColor = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "startAt", {
            /**
             * The date to open the calendar to initially.
             * @return {?}
             */
            get: function () {
                // If an explicit startAt is set we start there, otherwise we start at whatever the currently
                // selected value is.
                return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "color", {
            /**
             * Color palette to use on the datepicker's calendar.
             * @return {?}
             */
            get: function () {
                return this._color ||
                    (this._datepickerInput ? this._datepickerInput._getThemePalette() : 'primary');
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._color = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "touchUi", {
            /**
             * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
             * than a popup and elements have more padding to allow for bigger touch targets.
             * @return {?}
             */
            get: function () { return this._touchUi; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._touchUi = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "hideTime", {
            /**
             * @return {?}
             */
            get: function () { return this._hideTime; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._hideTime = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "disabled", {
            /**
             * Whether the datepicker pop-up should be disabled.
             * @return {?}
             */
            get: function () {
                return this._disabled === undefined && this._datepickerInput ?
                    this._datepickerInput.disabled : !!this._disabled;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                /** @type {?} */
                var newValue = coercion.coerceBooleanProperty(value);
                if (newValue !== this._disabled) {
                    this._disabled = newValue;
                    this._stateChanges.next(newValue);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "opened", {
            /**
             * Whether the calendar is open.
             * @return {?}
             */
            get: function () { return this._opened; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { value ? this.open() : this.close(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "showSpinners", {
            /**
             * Whether the timepicker'spinners is shown.
             * @return {?}
             */
            get: function () { return this._showSpinners; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._showSpinners = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "showSeconds", {
            /**
             * Whether the second part is disabled.
             * @return {?}
             */
            get: function () { return this._showSeconds; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._showSeconds = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "stepHour", {
            /**
             * Step hour
             * @return {?}
             */
            get: function () { return this._stepHour; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._stepHour = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "stepMinute", {
            /**
             * Step minute
             * @return {?}
             */
            get: function () { return this._stepMinute; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._stepMinute = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "stepSecond", {
            /**
             * Step second
             * @return {?}
             */
            get: function () { return this._stepSecond; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._stepSecond = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "enableMeridian", {
            /**
             * Enable meridian
             * @return {?}
             */
            get: function () { return this._enableMeridian; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._enableMeridian = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "disableMinute", {
            /**
             * disable minute
             * @return {?}
             */
            get: function () { return this._disableMinute; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._disableMinute = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "defaultTime", {
            /**
             * Step second
             * @return {?}
             */
            get: function () { return this._defaultTime; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._defaultTime = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "_selected", {
            /**
             * The currently selected date.
             * @return {?}
             */
            get: function () { return this._validSelected; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._validSelected = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "_minDate", {
            /**
             * The minimum selectable date.
             * @return {?}
             */
            get: function () {
                return this._datepickerInput && this._datepickerInput.min;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "_maxDate", {
            /**
             * The maximum selectable date.
             * @return {?}
             */
            get: function () {
                return this._datepickerInput && this._datepickerInput.max;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "valid", {
            /**
             * @return {?}
             */
            get: function () {
                /** @type {?} */
                var minValidators = this._minValidator();
                /** @type {?} */
                var maxValidators = this._maxValidator();
                return minValidators == null && maxValidators == null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimePicker.prototype, "_dateFilter", {
            /**
             * @return {?}
             */
            get: function () {
                return this._datepickerInput && this._datepickerInput._dateFilter;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxMatDatetimePicker.prototype.ngOnDestroy = function () {
            this.close();
            if (this._popupRef) {
                this._popupRef.dispose();
                this._popupComponentRef = null;
            }
            this._inputSubscription.unsubscribe();
            this._stateChanges.complete();
        };
        /**
         * Selects the given date
         * @param {?} date
         * @return {?}
         */
        NgxMatDatetimePicker.prototype.select = function (date) {
            this._dateAdapter.copyTime(date, this._selected);
            this._selected = date;
        };
        /**
         * Emits the selected year in multiyear view
         * @param {?} normalizedYear
         * @return {?}
         */
        NgxMatDatetimePicker.prototype._selectYear = function (normalizedYear) {
            this.yearSelected.emit(normalizedYear);
        };
        /**
         * Emits selected month in year view
         * @param {?} normalizedMonth
         * @return {?}
         */
        NgxMatDatetimePicker.prototype._selectMonth = function (normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
        };
        /**
         * OK button handler and close
         * @return {?}
         */
        NgxMatDatetimePicker.prototype.ok = function () {
            /** @type {?} */
            var cloned = this._dateAdapter.clone(this._selected);
            this._selectedChanged.next(cloned);
            this.close();
        };
        /**
         * Cancel and close
         * @return {?}
         */
        NgxMatDatetimePicker.prototype.cancel = function () {
            this._selected = this._rawValue;
            this.close();
        };
        /**
         * Register an input with this datepicker.
         * @param {?} input The datepicker input to register with this datepicker.
         * @return {?}
         */
        NgxMatDatetimePicker.prototype._registerInput = function (input) {
            var _this = this;
            if (this._datepickerInput) {
                throw Error('A NgxMatDatepicker can only be associated with a single input.');
            }
            this._datepickerInput = input;
            this._inputSubscription =
                this._datepickerInput._valueChange.subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return _this._selected = value; }));
        };
        /**
         * Open the calendar.
         * @return {?}
         */
        NgxMatDatetimePicker.prototype.open = function () {
            this._rawValue = this._selected != null
                ? this._dateAdapter.clone(this._selected) : null;
            if (this._selected == null) {
                this._selected = this._dateAdapter.today();
                if (this.defaultTime != null) {
                    this._dateAdapter.setTimeByDefaultValues(this._selected, this.defaultTime);
                }
            }
            if (this._opened || this.disabled) {
                return;
            }
            if (!this._datepickerInput) {
                throw Error('Attempted to open an NgxMatDatepicker with no associated input.');
            }
            if (this._document) {
                this._focusedElementBeforeOpen = this._document.activeElement;
            }
            this.touchUi ? this._openAsDialog() : this._openAsPopup();
            this._opened = true;
            this.openedStream.emit();
        };
        /**
         * Close the calendar.
         * @return {?}
         */
        NgxMatDatetimePicker.prototype.close = function () {
            var _this = this;
            if (!this._opened) {
                return;
            }
            if (this._popupRef && this._popupRef.hasAttached()) {
                this._popupRef.detach();
            }
            if (this._dialogRef) {
                this._dialogRef.close();
                this._dialogRef = null;
            }
            if (this._calendarPortal && this._calendarPortal.isAttached) {
                this._calendarPortal.detach();
            }
            /** @type {?} */
            var completeClose = ( /**
             * @return {?}
             */function () {
                // The `_opened` could've been reset already if
                // we got two events in quick succession.
                if (_this._opened) {
                    _this._opened = false;
                    _this.closedStream.emit();
                    _this._focusedElementBeforeOpen = null;
                }
            });
            if (this._focusedElementBeforeOpen &&
                typeof this._focusedElementBeforeOpen.focus === 'function') {
                // Because IE moves focus asynchronously, we can't count on it being restored before we've
                // marked the datepicker as closed. If the event fires out of sequence and the element that
                // we're refocusing opens the datepicker on focus, the user could be stuck with not being
                // able to close the calendar at all. We work around it by making the logic, that marks
                // the datepicker as closed, async as well.
                this._focusedElementBeforeOpen.focus();
                setTimeout(completeClose);
            }
            else {
                completeClose();
            }
        };
        /**
         * Open the calendar as a dialog.
         * @private
         * @return {?}
         */
        NgxMatDatetimePicker.prototype._openAsDialog = function () {
            var _this = this;
            // Usually this would be handled by `open` which ensures that we can only have one overlay
            // open at a time, however since we reset the variables in async handlers some overlays
            // may slip through if the user opens and closes multiple times in quick succession (e.g.
            // by holding down the enter key).
            if (this._dialogRef) {
                this._dialogRef.close();
            }
            this._dialogRef = this._dialog.open(NgxMatDatetimeContent, {
                direction: this._dir ? this._dir.value : 'ltr',
                viewContainerRef: this._viewContainerRef,
                panelClass: 'mat-datepicker-dialog',
                hasBackdrop: this._hasBackdrop
            });
            this._dialogRef.afterClosed().subscribe(( /**
             * @return {?}
             */function () { return _this.close(); }));
            this._dialogRef.componentInstance.datepicker = this;
            this._setColor();
        };
        /**
         * Open the calendar as a popup.
         * @private
         * @return {?}
         */
        NgxMatDatetimePicker.prototype._openAsPopup = function () {
            var _this = this;
            if (!this._calendarPortal) {
                this._calendarPortal = new portal.ComponentPortal(NgxMatDatetimeContent, this._viewContainerRef);
            }
            if (!this._popupRef) {
                this._createPopup();
            }
            if (!this._popupRef.hasAttached()) {
                this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
                this._popupComponentRef.instance.datepicker = this;
                this._setColor();
                // Update the position once the calendar has rendered.
                this._ngZone.onStable.asObservable().pipe(operators.take(1)).subscribe(( /**
                 * @return {?}
                 */function () {
                    _this._popupRef.updatePosition();
                }));
            }
        };
        /**
         * Create the popup.
         * @private
         * @return {?}
         */
        NgxMatDatetimePicker.prototype._createPopup = function () {
            var _this = this;
            /** @type {?} */
            var overlayConfig = new overlay.OverlayConfig({
                positionStrategy: this._createPopupPositionStrategy(),
                hasBackdrop: this._hasBackdrop,
                backdropClass: 'mat-overlay-transparent-backdrop',
                direction: this._dir,
                scrollStrategy: this._scrollStrategy(),
                panelClass: 'mat-datepicker-popup',
            });
            this._popupRef = this._overlay.create(overlayConfig);
            this._popupRef.overlayElement.setAttribute('role', 'dialog');
            rxjs.merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(operators.filter(( /**
             * @param {?} event
             * @return {?}
             */function (/**
             * @param {?} event
             * @return {?}
             */ event) {
                // Closing on alt + up is only valid when there's an input associated with the datepicker.
                return event.keyCode === keycodes.ESCAPE ||
                    (_this._datepickerInput && event.altKey && event.keyCode === keycodes.UP_ARROW);
            })))).subscribe(( /**
             * @param {?} event
             * @return {?}
             */function (/**
             * @param {?} event
             * @return {?}
             */ event) {
                if (event) {
                    event.preventDefault();
                }
                (_this._hasBackdrop && event) ? _this.cancel() : _this.close();
            }));
        };
        /**
         * Create the popup PositionStrategy.
         * @private
         * @return {?}
         */
        NgxMatDatetimePicker.prototype._createPopupPositionStrategy = function () {
            return this._overlay.position()
                .flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin())
                .withTransformOriginOn('.mat-datepicker-content')
                .withFlexibleDimensions(false)
                .withViewportMargin(8)
                .withLockedPosition()
                .withPositions([
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'bottom'
                }
            ]);
        };
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */
        NgxMatDatetimePicker.prototype._getValidDateOrNull = function (obj) {
            return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
        };
        /**
         * Passes the current theme color along to the calendar overlay.
         * @private
         * @return {?}
         */
        NgxMatDatetimePicker.prototype._setColor = function () {
            /** @type {?} */
            var color = this.color;
            if (this._popupComponentRef) {
                this._popupComponentRef.instance.color = color;
            }
            if (this._dialogRef) {
                this._dialogRef.componentInstance.color = color;
            }
        };
        return NgxMatDatetimePicker;
    }());
    NgxMatDatetimePicker.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-mat-datetime-picker',
                    template: '',
                    exportAs: 'ngxMatDatetimePicker',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NgxMatDatetimePicker.ctorParameters = function () { return [
        { type: dialog.MatDialog },
        { type: overlay.Overlay },
        { type: core.NgZone },
        { type: core.ViewContainerRef },
        { type: undefined, decorators: [{ type: core.Inject, args: [datepicker.MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
        { type: NgxMatDateAdapter, decorators: [{ type: core.Optional }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };
    NgxMatDatetimePicker.propDecorators = {
        calendarHeaderComponent: [{ type: core.Input }],
        startAt: [{ type: core.Input }],
        startView: [{ type: core.Input }],
        color: [{ type: core.Input }],
        touchUi: [{ type: core.Input }],
        hideTime: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        yearSelected: [{ type: core.Output }],
        monthSelected: [{ type: core.Output }],
        panelClass: [{ type: core.Input }],
        dateClass: [{ type: core.Input }],
        openedStream: [{ type: core.Output, args: ['opened',] }],
        closedStream: [{ type: core.Output, args: ['closed',] }],
        opened: [{ type: core.Input }],
        showSpinners: [{ type: core.Input }],
        showSeconds: [{ type: core.Input }],
        stepHour: [{ type: core.Input }],
        stepMinute: [{ type: core.Input }],
        stepSecond: [{ type: core.Input }],
        enableMeridian: [{ type: core.Input }],
        disableMinute: [{ type: core.Input }],
        defaultTime: [{ type: core.Input }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._scrollStrategy;
        /**
         * An input indicating the type of the custom header component for the calendar, if set.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype.calendarHeaderComponent;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._startAt;
        /**
         * The view that the calendar should start in.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype.startView;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._color;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._touchUi;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._hideTime;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._disabled;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype.yearSelected;
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype.monthSelected;
        /**
         * Classes to be passed to the date picker panel. Supports the same syntax as `ngClass`.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype.panelClass;
        /**
         * Function that can be used to add custom CSS classes to dates.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype.dateClass;
        /**
         * Emits when the datepicker has been opened.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype.openedStream;
        /**
         * Emits when the datepicker has been closed.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype.closedStream;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._opened;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._showSpinners;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._showSeconds;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._stepHour;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._stepMinute;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._stepSecond;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._enableMeridian;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._disableMinute;
        /** @type {?} */
        NgxMatDatetimePicker.prototype._defaultTime;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._hasBackdrop;
        /**
         * The id for the datepicker calendar.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype.id;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._validSelected;
        /**
         * A reference to the overlay when the calendar is opened as a popup.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype._popupRef;
        /**
         * A reference to the dialog when the calendar is opened as a dialog.
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._dialogRef;
        /**
         * A portal containing the calendar for this datepicker.
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._calendarPortal;
        /**
         * Reference to the component instantiated in popup mode.
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._popupComponentRef;
        /**
         * The element that was focused before the datepicker was opened.
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._focusedElementBeforeOpen;
        /**
         * Subscription to value changes in the associated input element.
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._inputSubscription;
        /**
         * The input element this datepicker is associated with.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype._datepickerInput;
        /**
         * Emits when the datepicker is disabled.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype._stateChanges;
        /**
         * Emits new selected date when selected date changes.
         * @type {?}
         */
        NgxMatDatetimePicker.prototype._selectedChanged;
        /**
         * Raw value before
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._rawValue;
        /**
         * The form control validator for the min date.
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._minValidator;
        /**
         * The form control validator for the max date.
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._maxValidator;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._dialog;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._overlay;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._ngZone;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._viewContainerRef;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._dateAdapter;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._dir;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimePicker.prototype._document;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/datetime-input.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * \@docs-private
     * @type {?}
     */
    var MAT_DATEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(( /**
         * @return {?}
         */function () { return NgxMatDatetimeInput; })),
        multi: true
    };
    /**
     * \@docs-private
     * @type {?}
     */
    var MAT_DATEPICKER_VALIDATORS = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(( /**
         * @return {?}
         */function () { return NgxMatDatetimeInput; })),
        multi: true
    };
    /**
     * An event used for datepicker input and change events. We don't always have access to a native
     * input or change event because the event may have been triggered by the user clicking on the
     * calendar popup. For consistency, we always use MatDatetimePickerInputEvent instead.
     * @template D
     */
    var MatDatetimePickerInputEvent = /** @class */ (function () {
        /**
         * @param {?} target
         * @param {?} targetElement
         */
        function MatDatetimePickerInputEvent(target, targetElement) {
            this.target = target;
            this.targetElement = targetElement;
            this.value = this.target.value;
        }
        return MatDatetimePickerInputEvent;
    }());
    if (false) {
        /**
         * The new value for the target datepicker input.
         * @type {?}
         */
        MatDatetimePickerInputEvent.prototype.value;
        /**
         * Reference to the datepicker input component that emitted the event.
         * @type {?}
         */
        MatDatetimePickerInputEvent.prototype.target;
        /**
         * Reference to the native input element associated with the datepicker input.
         * @type {?}
         */
        MatDatetimePickerInputEvent.prototype.targetElement;
    }
    /**
     * Directive used to connect an input to a matDatetimePicker.
     * @template D
     */
    var NgxMatDatetimeInput = /** @class */ (function () {
        /**
         * @param {?} _elementRef
         * @param {?} _dateAdapter
         * @param {?} _dateFormats
         * @param {?} _formField
         */
        function NgxMatDatetimeInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
            var _this = this;
            this._elementRef = _elementRef;
            this._dateAdapter = _dateAdapter;
            this._dateFormats = _dateFormats;
            this._formField = _formField;
            /**
             * Emits when a `change` event is fired on this `<input>`.
             */
            this.dateChange = new core.EventEmitter();
            /**
             * Emits when an `input` event is fired on this `<input>`.
             */
            this.dateInput = new core.EventEmitter();
            /**
             * Emits when the value changes (either due to user input or programmatic change).
             */
            this._valueChange = new core.EventEmitter();
            /**
             * Emits when the disabled state has changed
             */
            this._stateChanges = new core.EventEmitter();
            this._onTouched = ( /**
             * @return {?}
             */function () { });
            this._cvaOnChange = ( /**
             * @return {?}
             */function () { });
            this._validatorOnChange = ( /**
             * @return {?}
             */function () { });
            this._datepickerSubscription = rxjs.Subscription.EMPTY;
            this._localeSubscription = rxjs.Subscription.EMPTY;
            /**
             * The form control validator for whether the input parses.
             */
            this._parseValidator = ( /**
             * @return {?}
             */function () {
                return _this._lastValueValid ?
                    null : { 'matDatetimePickerParse': { 'text': _this._elementRef.nativeElement.value } };
            });
            /**
             * The form control validator for the min date.
             */
            this._minValidator = ( /**
             * @param {?} control
             * @return {?}
             */function (control) {
                /** @type {?} */
                var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                return (!_this.min || !controlValue ||
                    _this._dateAdapter.compareDateWithTime(_this.min, controlValue, _this._datepicker.showSeconds) <= 0) ?
                    null : { 'matDatetimePickerMin': { 'min': _this.min, 'actual': controlValue } };
            });
            /**
             * The form control validator for the max date.
             */
            this._maxValidator = ( /**
             * @param {?} control
             * @return {?}
             */function (control) {
                /** @type {?} */
                var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                return (!_this.max || !controlValue ||
                    _this._dateAdapter.compareDateWithTime(_this.max, controlValue, _this._datepicker.showSeconds) >= 0) ?
                    null : { 'matDatetimePickerMax': { 'max': _this.max, 'actual': controlValue } };
            });
            /**
             * The form control validator for the date filter.
             */
            this._filterValidator = ( /**
             * @param {?} control
             * @return {?}
             */function (control) {
                /** @type {?} */
                var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue) ?
                    null : { 'matDatetimePickerFilter': true };
            });
            /**
             * The combined form control validator for this input.
             */
            this._validator = forms.Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
            /**
             * Whether the last value set on the input was valid.
             */
            this._lastValueValid = false;
            if (!this._dateAdapter) {
                throw createMissingDateImplError('NgxMatDateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('NGX_MAT_DATE_FORMATS');
            }
            // Update the displayed date when the locale changes.
            this._localeSubscription = _dateAdapter.localeChanges.subscribe(( /**
             * @return {?}
             */function () {
                _this.value = _this.value;
            }));
        }
        Object.defineProperty(NgxMatDatetimeInput.prototype, "ngxMatDatetimePicker", {
            /**
             * The datepicker that this input is associated with.
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                var _this = this;
                if (!value) {
                    return;
                }
                this._datepicker = value;
                this._datepicker._registerInput(this);
                this._datepickerSubscription.unsubscribe();
                this._datepickerSubscription = this._datepicker._selectedChanged.subscribe(( /**
                 * @param {?} selected
                 * @return {?}
                 */function (selected) {
                    _this.value = selected;
                    _this._cvaOnChange(selected);
                    _this._onTouched();
                    _this.dateInput.emit(new MatDatetimePickerInputEvent(_this, _this._elementRef.nativeElement));
                    _this.dateChange.emit(new MatDatetimePickerInputEvent(_this, _this._elementRef.nativeElement));
                }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimeInput.prototype, "ngxMatDatetimePickerFilter", {
            /**
             * Function that can be used to filter out dates within the datepicker.
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._dateFilter = value;
                this._validatorOnChange();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimeInput.prototype, "value", {
            /**
             * The value of the input.
             * @return {?}
             */
            get: function () { return this._value; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                value = this._dateAdapter.deserialize(value);
                this._lastValueValid = !value || this._dateAdapter.isValid(value);
                value = this._getValidDateOrNull(value);
                /** @type {?} */
                var oldDate = this.value;
                this._value = value;
                this._formatValue(value);
                if (!this._dateAdapter.sameDate(oldDate, value)) {
                    this._valueChange.emit(value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimeInput.prototype, "min", {
            /**
             * The minimum valid date.
             * @return {?}
             */
            get: function () { return this._min; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                this._validatorOnChange();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimeInput.prototype, "max", {
            /**
             * The maximum valid date.
             * @return {?}
             */
            get: function () { return this._max; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                this._validatorOnChange();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxMatDatetimeInput.prototype, "disabled", {
            /**
             * Whether the datepicker-input is disabled.
             * @return {?}
             */
            get: function () { return !!this._disabled; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                /** @type {?} */
                var newValue = value != null && "" + value !== 'false';
                /** @type {?} */
                var element = this._elementRef.nativeElement;
                if (this._disabled !== newValue) {
                    this._disabled = newValue;
                    this._stateChanges.emit(undefined);
                }
                // We need to null check the `blur` method, because it's undefined during SSR.
                if (newValue && element.blur) {
                    // Normally, native input elements automatically blur if they turn disabled. This behavior
                    // is problematic, because it would mean that it triggers another change detection cycle,
                    // which then causes a changed after checked error if the input element was focused before.
                    element.blur();
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxMatDatetimeInput.prototype.ngOnDestroy = function () {
            this._datepickerSubscription.unsubscribe();
            this._localeSubscription.unsubscribe();
            this._valueChange.complete();
            this._stateChanges.complete();
        };
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */
        NgxMatDatetimeInput.prototype.registerOnValidatorChange = function (fn) {
            this._validatorOnChange = fn;
        };
        /**
         * \@docs-private
         * @param {?} c
         * @return {?}
         */
        NgxMatDatetimeInput.prototype.validate = function (c) {
            return this._validator ? this._validator(c) : null;
        };
        /**
         * @deprecated
         * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
         * @return {?}
         */
        NgxMatDatetimeInput.prototype.getPopupConnectionElementRef = function () {
            return this.getConnectedOverlayOrigin();
        };
        /**
         * Gets the element that the datepicker popup should be connected to.
         * @return {?} The element to connect the popup to.
         */
        NgxMatDatetimeInput.prototype.getConnectedOverlayOrigin = function () {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
        };
        // Implemented as part of ControlValueAccessor.
        /**
         * @param {?} value
         * @return {?}
         */
        NgxMatDatetimeInput.prototype.writeValue = function (value) {
            this.value = value;
        };
        // Implemented as part of ControlValueAccessor.
        /**
         * @param {?} fn
         * @return {?}
         */
        NgxMatDatetimeInput.prototype.registerOnChange = function (fn) {
            this._cvaOnChange = fn;
        };
        // Implemented as part of ControlValueAccessor.
        /**
         * @param {?} fn
         * @return {?}
         */
        NgxMatDatetimeInput.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        // Implemented as part of ControlValueAccessor.
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgxMatDatetimeInput.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxMatDatetimeInput.prototype._onKeydown = function (event) {
            /** @type {?} */
            var isAltDownArrow = event.altKey && event.keyCode === keycodes.DOWN_ARROW;
            if (this._datepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
                this._datepicker.open();
                event.preventDefault();
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NgxMatDatetimeInput.prototype._onInput = function (value) {
            /** @type {?} */
            var lastValueWasValid = this._lastValueValid;
            /** @type {?} */
            var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
            this._lastValueValid = !date || this._dateAdapter.isValid(date);
            date = this._getValidDateOrNull(date);
            /** @type {?} */
            var isSameTime = this._dateAdapter.isSameTime(date, this._value);
            if ((date != null && (!isSameTime || !this._dateAdapter.sameDate(date, this._value)))
                || (date == null && this._value != null)) {
                this._value = date;
                this._cvaOnChange(date);
                this._valueChange.emit(date);
                this.dateInput.emit(new MatDatetimePickerInputEvent(this, this._elementRef.nativeElement));
            }
            else if (lastValueWasValid !== this._lastValueValid) {
                this._validatorOnChange();
            }
        };
        /**
         * @return {?}
         */
        NgxMatDatetimeInput.prototype._onChange = function () {
            this.dateChange.emit(new MatDatetimePickerInputEvent(this, this._elementRef.nativeElement));
        };
        /**
         * Returns the palette used by the input's form field, if any.
         * @return {?}
         */
        NgxMatDatetimeInput.prototype._getThemePalette = function () {
            return this._formField ? this._formField.color : undefined;
        };
        /**
         * Handles blur events on the input.
         * @return {?}
         */
        NgxMatDatetimeInput.prototype._onBlur = function () {
            // Reformat the input only if we have a valid value.
            if (this.value) {
                this._formatValue(this.value);
            }
            this._onTouched();
        };
        /**
         * Handles focus events on the input.
         * @return {?}
         */
        NgxMatDatetimeInput.prototype._onFocus = function () {
            // Close datetime picker if opened
            if (this._datepicker && this._datepicker.opened) {
                this._datepicker.cancel();
            }
        };
        /**
         * Formats a value and sets it on the input element.
         * @private
         * @param {?} value
         * @return {?}
         */
        NgxMatDatetimeInput.prototype._formatValue = function (value) {
            this._elementRef.nativeElement.value =
                value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
        };
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */
        NgxMatDatetimeInput.prototype._getValidDateOrNull = function (obj) {
            return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
        };
        return NgxMatDatetimeInput;
    }());
    NgxMatDatetimeInput.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[ngxMatDatetimePicker]',
                    providers: [
                        MAT_DATEPICKER_VALUE_ACCESSOR,
                        MAT_DATEPICKER_VALIDATORS,
                        { provide: input.MAT_INPUT_VALUE_ACCESSOR, useExisting: NgxMatDatetimeInput },
                    ],
                    host: {
                        '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
                        '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                        '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                        '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                        '[disabled]': 'disabled',
                        '(input)': '_onInput($event.target.value)',
                        '(change)': '_onChange()',
                        '(blur)': '_onBlur()',
                        '(focus)': '_onFocus()',
                        '(keydown)': '_onKeydown($event)',
                    },
                    exportAs: 'ngxMatDatetimePickerInput',
                },] }
    ];
    /** @nocollapse */
    NgxMatDatetimeInput.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: NgxMatDateAdapter, decorators: [{ type: core.Optional }] },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
        { type: formField.MatFormField, decorators: [{ type: core.Optional }] }
    ]; };
    NgxMatDatetimeInput.propDecorators = {
        ngxMatDatetimePicker: [{ type: core.Input }],
        ngxMatDatetimePickerFilter: [{ type: core.Input }],
        value: [{ type: core.Input }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        dateChange: [{ type: core.Output }],
        dateInput: [{ type: core.Output }]
    };
    if (false) {
        /** @type {?} */
        NgxMatDatetimeInput.prototype._datepicker;
        /** @type {?} */
        NgxMatDatetimeInput.prototype._dateFilter;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._value;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._min;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._max;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._disabled;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         * @type {?}
         */
        NgxMatDatetimeInput.prototype.dateChange;
        /**
         * Emits when an `input` event is fired on this `<input>`.
         * @type {?}
         */
        NgxMatDatetimeInput.prototype.dateInput;
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         * @type {?}
         */
        NgxMatDatetimeInput.prototype._valueChange;
        /**
         * Emits when the disabled state has changed
         * @type {?}
         */
        NgxMatDatetimeInput.prototype._stateChanges;
        /** @type {?} */
        NgxMatDatetimeInput.prototype._onTouched;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._cvaOnChange;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._validatorOnChange;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._datepickerSubscription;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._localeSubscription;
        /**
         * The form control validator for whether the input parses.
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._parseValidator;
        /**
         * The form control validator for the min date.
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._minValidator;
        /**
         * The form control validator for the max date.
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._maxValidator;
        /**
         * The form control validator for the date filter.
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._filterValidator;
        /**
         * The combined form control validator for this input.
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._validator;
        /**
         * Whether the last value set on the input was valid.
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._lastValueValid;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._elementRef;
        /** @type {?} */
        NgxMatDatetimeInput.prototype._dateAdapter;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._dateFormats;
        /**
         * @type {?}
         * @private
         */
        NgxMatDatetimeInput.prototype._formField;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/timepicker.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxMatTimepickerModule = /** @class */ (function () {
        function NgxMatTimepickerModule() {
        }
        return NgxMatTimepickerModule;
    }());
    NgxMatTimepickerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        input.MatInputModule,
                        forms.ReactiveFormsModule,
                        forms.FormsModule,
                        icon.MatIconModule,
                        button.MatButtonModule,
                    ],
                    exports: [
                        NgxMatTimepickerComponent
                    ],
                    declarations: [
                        NgxMatTimepickerComponent
                    ]
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/datetime-picker.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxMatDatetimePickerModule = /** @class */ (function () {
        function NgxMatDatetimePickerModule() {
        }
        return NgxMatDatetimePickerModule;
    }());
    NgxMatDatetimePickerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        datepicker.MatDatepickerModule,
                        dialog.MatDialogModule,
                        portal.PortalModule,
                        forms.FormsModule,
                        icon.MatIconModule,
                        button.MatButtonModule,
                        input.MatInputModule,
                        NgxMatTimepickerModule
                    ],
                    exports: [
                        NgxMatDatetimePicker,
                        NgxMatDatetimeInput,
                        NgxMatCalendar,
                        NgxMatMonthView,
                        NgxMatCalendarBody,
                        NgxMatYearView,
                        NgxMatMultiYearView,
                        NgxMatCalendarHeader
                    ],
                    declarations: [
                        NgxMatDatetimePicker,
                        NgxMatDatetimeContent,
                        NgxMatDatetimeInput,
                        NgxMatCalendar,
                        NgxMatMonthView,
                        NgxMatCalendarBody,
                        NgxMatYearView,
                        NgxMatMultiYearView,
                        NgxMatCalendarHeader
                    ],
                    entryComponents: [
                        NgxMatDatetimeContent,
                        NgxMatCalendarHeader
                    ],
                    providers: [
                        datepicker.MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
                        {
                            provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
                            useClass: DefaultNgxMatCalendarRangeStrategy
                        }
                    ]
                },] }
    ];

    // TODO(mmalerba): Remove when we no longer support safari 9.
    /**
     * Whether the browser supports the Intl API.
     * @type {?}
     */
    var SUPPORTS_INTL_API;
    // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687
    try {
        SUPPORTS_INTL_API = typeof Intl != 'undefined';
    }
    catch (_a) {
        SUPPORTS_INTL_API = false;
    }
    /**
     * The default month names to use if Intl API is not available.
     * @type {?}
     */
    var DEFAULT_MONTH_NAMES = {
        'long': [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'
        ],
        'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    };
    var ɵ0 = /**
     * @param {?} i
     * @return {?}
     */ function (/**
     * @param {?} i
     * @return {?}
     */ i) { return String(i + 1); };
    /**
     * The default date names to use if Intl API is not available.
     * @type {?}
     */
    var DEFAULT_DATE_NAMES = range(31, (ɵ0));
    /**
     * The default day of the week names to use if Intl API is not available.
     * @type {?}
     */
    var DEFAULT_DAY_OF_WEEK_NAMES = {
        'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
    /**
     * Matches strings that have the form of a valid RFC 3339 string
     * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
     * because the regex will match strings an with out of bounds month, date, etc.
     * @type {?}
     */
    var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
    /**
     * Creates an array and fills it with values.
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */
    function range(length, valueFunction) {
        /** @type {?} */
        var valuesArray = Array(length);
        for (var i = 0; i < length; i++) {
            valuesArray[i] = valueFunction(i);
        }
        return valuesArray;
    }
    /**
     * Adapts the native JS Date for use with cdk-based components that work with dates.
     */
    var NgxMatNativeDateAdapter = /** @class */ (function (_super) {
        __extends(NgxMatNativeDateAdapter, _super);
        /**
         * @param {?} matDateLocale
         * @param {?} platform
         */
        function NgxMatNativeDateAdapter(matDateLocale, platform) {
            var _this = _super.call(this) || this;
            /**
             * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
             * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
             * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
             * will produce `'8/13/1800'`.
             *
             * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
             * getting the string representation of a Date object from its utc representation. We're keeping
             * it here for sometime, just for precaution, in case we decide to revert some of these changes
             * though.
             */
            _this.useUtcForDisplay = true;
            _super.prototype.setLocale.call(_this, matDateLocale);
            // IE does its own time zone correction, so we disable this on IE.
            _this.useUtcForDisplay = !platform.TRIDENT;
            _this._clampDate = platform.TRIDENT || platform.EDGE;
            return _this;
        }
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getYear = function (date) {
            return date.getFullYear();
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getMonth = function (date) {
            return date.getMonth();
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getDate = function (date) {
            return date.getDate();
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getDayOfWeek = function (date) {
            return date.getDay();
        };
        /**
         * @param {?} style
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getMonthNames = function (style) {
            var _this = this;
            if (SUPPORTS_INTL_API) {
                /** @type {?} */
                var dtf_1 = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
                return range(12, ( /**
                 * @param {?} i
                 * @return {?}
                 */function (/**
                 * @param {?} i
                 * @return {?}
                 */ i) { return _this._stripDirectionalityCharacters(_this._format(dtf_1, new Date(2017, i, 1))); }));
            }
            return DEFAULT_MONTH_NAMES[style];
        };
        /**
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getDateNames = function () {
            var _this = this;
            if (SUPPORTS_INTL_API) {
                /** @type {?} */
                var dtf_2 = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
                return range(31, ( /**
                 * @param {?} i
                 * @return {?}
                 */function (/**
                 * @param {?} i
                 * @return {?}
                 */ i) { return _this._stripDirectionalityCharacters(_this._format(dtf_2, new Date(2017, 0, i + 1))); }));
            }
            return DEFAULT_DATE_NAMES;
        };
        /**
         * @param {?} style
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getDayOfWeekNames = function (style) {
            var _this = this;
            if (SUPPORTS_INTL_API) {
                /** @type {?} */
                var dtf_3 = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
                return range(7, ( /**
                 * @param {?} i
                 * @return {?}
                 */function (/**
                 * @param {?} i
                 * @return {?}
                 */ i) { return _this._stripDirectionalityCharacters(_this._format(dtf_3, new Date(2017, 0, i + 1))); }));
            }
            return DEFAULT_DAY_OF_WEEK_NAMES[style];
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getYearName = function (date) {
            if (SUPPORTS_INTL_API) {
                /** @type {?} */
                var dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
                return this._stripDirectionalityCharacters(this._format(dtf, date));
            }
            return String(this.getYear(date));
        };
        /**
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getFirstDayOfWeek = function () {
            // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
            return 0;
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getNumDaysInMonth = function (date) {
            return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.clone = function (date) {
            return new Date(date.getTime());
        };
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.createDate = function (year, month, date) {
            // Check for invalid month and date (except upper bound on date which we have to check after
            // creating the Date).
            if (month < 0 || month > 11) {
                throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
            }
            if (date < 1) {
                throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
            }
            /** @type {?} */
            var result = this._createDateWithOverflow(year, month, date);
            // Check that the date wasn't above the upper bound for the month, causing the month to overflow
            if (result.getMonth() != month) {
                throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
            }
            return result;
        };
        /**
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.today = function () {
            return new Date();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.parse = function (value) {
            // We have no way using the native JS Date to set the parse format or locale, so we ignore these
            // parameters.
            if (typeof value == 'number') {
                return new Date(value);
            }
            return value ? new Date(Date.parse(value)) : null;
        };
        /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.format = function (date, displayFormat) {
            if (!this.isValid(date)) {
                throw Error('NativeDateAdapter: Cannot format invalid date.');
            }
            if (SUPPORTS_INTL_API) {
                // On IE and Edge the i18n API will throw a hard error that can crash the entire app
                // if we attempt to format a date whose year is less than 1 or greater than 9999.
                if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                    date = this.clone(date);
                    date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
                }
                displayFormat = Object.assign(Object.assign({}, displayFormat), { timeZone: 'utc' });
                /** @type {?} */
                var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
                return this._stripDirectionalityCharacters(this._format(dtf, date));
            }
            return this._stripDirectionalityCharacters(date.toDateString());
        };
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.addCalendarYears = function (date, years) {
            return this.addCalendarMonths(date, years * 12);
        };
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.addCalendarMonths = function (date, months) {
            /** @type {?} */
            var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
            // It's possible to wind up in the wrong month if the original month has more days than the new
            // month. In this case we want to go to the last day of the desired month.
            // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
            // guarantee this.
            if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
                newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
            }
            return newDate;
        };
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.addCalendarDays = function (date, days) {
            return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.toIso8601 = function (date) {
            return [
                date.getUTCFullYear(),
                this._2digit(date.getUTCMonth() + 1),
                this._2digit(date.getUTCDate())
            ].join('-');
        };
        /**
         * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
         * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
         * invalid date for all other values.
         * @param {?} value
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.deserialize = function (value) {
            if (typeof value === 'string') {
                if (!value) {
                    return null;
                }
                // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
                // string is the right format first.
                if (ISO_8601_REGEX.test(value)) {
                    /** @type {?} */
                    var date = new Date(value);
                    if (this.isValid(date)) {
                        return date;
                    }
                }
            }
            return _super.prototype.deserialize.call(this, value);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.isDateInstance = function (obj) {
            return obj instanceof Date;
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.isValid = function (date) {
            return !isNaN(date.getTime());
        };
        /**
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.invalid = function () {
            return new Date(NaN);
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getHour = function (date) {
            return date.getHours();
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getMinute = function (date) {
            return date.getMinutes();
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.getSecond = function (date) {
            return date.getSeconds();
        };
        /**
         * @param {?} date
         * @param {?} value
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.setHour = function (date, value) {
            date.setHours(value);
        };
        /**
         * @param {?} date
         * @param {?} value
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.setMinute = function (date, value) {
            date.setMinutes(value);
        };
        /**
         * @param {?} date
         * @param {?} value
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype.setSecond = function (date, value) {
            date.setSeconds(value);
        };
        /**
         * Creates a date but allows the month and date to overflow.
         * @private
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */
        NgxMatNativeDateAdapter.prototype._createDateWithOverflow = function (year, month, date) {
            /** @type {?} */
            var result = new Date(year, month, date);
            // We need to correct for the fact that JS native Date treats years in range [0, 99] as
            // abbreviations for 19xx.
            if (year >= 0 && year < 100) {
                result.setFullYear(this.getYear(result) - 1900);
            }
            return result;
        };
        /**
         * Pads a number to make it two digits.
         * @private
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */
        NgxMatNativeDateAdapter.prototype._2digit = function (n) {
            return ('00' + n).slice(-2);
        };
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @private
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */
        NgxMatNativeDateAdapter.prototype._stripDirectionalityCharacters = function (str) {
            return str.replace(/[\u200e\u200f]/g, '');
        };
        /**
         * When converting Date object to string, javascript built-in functions may return wrong
         * results because it applies its internal DST rules. The DST rules around the world change
         * very frequently, and the current valid rule is not always valid in previous years though.
         * We work around this problem building a new Date object which has its internal UTC
         * representation with the local date and time.
         * @private
         * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
         *    timeZone set to 'utc' to work fine.
         * @param {?} date Date from which we want to get the string representation according to dtf
         * @return {?} A Date object with its UTC representation based on the passed in date info
         */
        NgxMatNativeDateAdapter.prototype._format = function (dtf, date) {
            /** @type {?} */
            var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
            return dtf.format(d);
        };
        return NgxMatNativeDateAdapter;
    }(NgxMatDateAdapter));
    NgxMatNativeDateAdapter.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    NgxMatNativeDateAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.MAT_DATE_LOCALE,] }] },
        { type: platform.Platform }
    ]; };
    if (false) {
        /**
         * Whether to clamp the date between 1 and 9999 to avoid IE and Edge errors.
         * @type {?}
         * @private
         */
        NgxMatNativeDateAdapter.prototype._clampDate;
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         * @type {?}
         */
        NgxMatNativeDateAdapter.prototype.useUtcForDisplay;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/native-date-formats.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */
    var DEFAULT_DATE_INPUT = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"
    };
    /** @type {?} */
    var NGX_MAT_NATIVE_DATE_FORMATS = {
        parse: {
            dateInput: DEFAULT_DATE_INPUT,
        },
        display: {
            dateInput: DEFAULT_DATE_INPUT,
            monthYearLabel: { year: 'numeric', month: 'short' },
            dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
            monthYearA11yLabel: { year: 'numeric', month: 'long' },
        }
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/native-date.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxNativeDateModule = /** @class */ (function () {
        function NgxNativeDateModule() {
        }
        return NgxNativeDateModule;
    }());
    NgxNativeDateModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [platform.PlatformModule],
                    providers: [
                        { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter },
                    ],
                },] }
    ];
    var ɵ0$1 = NGX_MAT_NATIVE_DATE_FORMATS;
    var NgxMatNativeDateModule = /** @class */ (function () {
        function NgxMatNativeDateModule() {
        }
        return NgxMatNativeDateModule;
    }());
    NgxMatNativeDateModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [NgxNativeDateModule],
                    providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: ɵ0$1 }],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-material-components-datetime-picker.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.DefaultNgxMatCalendarRangeStrategy = DefaultNgxMatCalendarRangeStrategy;
    exports.MAT_DATEPICKER_VALIDATORS = MAT_DATEPICKER_VALIDATORS;
    exports.MAT_DATEPICKER_VALUE_ACCESSOR = MAT_DATEPICKER_VALUE_ACCESSOR;
    exports.MatDatetimePickerInputEvent = MatDatetimePickerInputEvent;
    exports.NGX_MAT_DATE_FORMATS = NGX_MAT_DATE_FORMATS;
    exports.NGX_MAT_DATE_RANGE_SELECTION_STRATEGY = NGX_MAT_DATE_RANGE_SELECTION_STRATEGY;
    exports.NGX_MAT_NATIVE_DATE_FORMATS = NGX_MAT_NATIVE_DATE_FORMATS;
    exports.NgxMatCalendar = NgxMatCalendar;
    exports.NgxMatCalendarBody = NgxMatCalendarBody;
    exports.NgxMatCalendarCell = NgxMatCalendarCell;
    exports.NgxMatCalendarHeader = NgxMatCalendarHeader;
    exports.NgxMatDateAdapter = NgxMatDateAdapter;
    exports.NgxMatDatetimeContent = NgxMatDatetimeContent;
    exports.NgxMatDatetimeInput = NgxMatDatetimeInput;
    exports.NgxMatDatetimePicker = NgxMatDatetimePicker;
    exports.NgxMatDatetimePickerModule = NgxMatDatetimePickerModule;
    exports.NgxMatMonthView = NgxMatMonthView;
    exports.NgxMatMultiYearView = NgxMatMultiYearView;
    exports.NgxMatNativeDateAdapter = NgxMatNativeDateAdapter;
    exports.NgxMatNativeDateModule = NgxMatNativeDateModule;
    exports.NgxMatTimepickerComponent = NgxMatTimepickerComponent;
    exports.NgxMatTimepickerModule = NgxMatTimepickerModule;
    exports.NgxMatYearView = NgxMatYearView;
    exports.NgxNativeDateModule = NgxNativeDateModule;
    exports.getActiveOffset = getActiveOffset;
    exports.isSameMultiYearView = isSameMultiYearView;
    exports.yearsPerPage = yearsPerPage;
    exports.yearsPerRow = yearsPerRow;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-material-components-datetime-picker.umd.js.map
