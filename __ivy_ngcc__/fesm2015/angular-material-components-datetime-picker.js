import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { InjectionToken, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, NgZone, Input, Output, Injectable, ChangeDetectorRef, Optional, Inject, ViewChild, forwardRef, ViewContainerRef, Directive, NgModule } from '@angular/core';
import { DateRange, MatDatepickerIntl, matDatepickerAnimations, MAT_DATEPICKER_SCROLL_STRATEGY, MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/datepicker';
import { Subscription, Subject, merge } from 'rxjs';
import { DateAdapter, mixinColor, MAT_DATE_LOCALE } from '@angular/material/core';
import { ESCAPE, SPACE, ENTER, PAGE_DOWN, PAGE_UP, END, HOME, DOWN_ARROW, UP_ARROW, RIGHT_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';
import { Directionality } from '@angular/cdk/bidi';
import { take, startWith, takeUntil, debounceTime, filter } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { DOCUMENT, CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Validators, NG_VALUE_ACCESSOR, FormBuilder, NG_VALIDATORS, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Platform, PlatformModule } from '@angular/cdk/platform';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/date-adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template D
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/material/datepicker';
import * as ɵngcc4 from '@angular/material/button';
import * as ɵngcc5 from '@angular/cdk/portal';
import * as ɵngcc6 from '@angular/forms';
import * as ɵngcc7 from '@angular/material/form-field';
import * as ɵngcc8 from '@angular/material/input';
import * as ɵngcc9 from '@angular/material/icon';
import * as ɵngcc10 from '@angular/material/dialog';
import * as ɵngcc11 from '@angular/cdk/overlay';
import * as ɵngcc12 from '@angular/cdk/platform';

const _c0 = ["ngx-mat-calendar-body", ""];
function NgxMatCalendarBody_tr_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 2);
    ɵngcc0.ɵɵelementStart(1, "td", 3);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    ɵngcc0.ɵɵattribute("colspan", ctx_r0.numCols);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
} }
function NgxMatCalendarBody_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);
    ɵngcc0.ɵɵattribute("colspan", ctx_r4._firstRowOffset);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
} }
function NgxMatCalendarBody_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 8);
    ɵngcc0.ɵɵlistener("click", function NgxMatCalendarBody_tr_1_td_2_Template_td_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const item_r6 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8._cellClicked(item_r6, $event); });
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "div", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const colIndex_r7 = ctx.index;
    const rowIndex_r3 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);
    ɵngcc0.ɵɵclassProp("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7))("mat-calendar-body-range-start", ctx_r5._isRangeStart(item_r6.compareValue))("mat-calendar-body-range-end", ctx_r5._isRangeEnd(item_r6.compareValue))("mat-calendar-body-in-range", ctx_r5._isInRange(item_r6.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r5._isComparisonBridgeStart(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-bridge-end", ctx_r5._isComparisonBridgeEnd(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-start", ctx_r5._isComparisonStart(item_r6.compareValue))("mat-calendar-body-comparison-end", ctx_r5._isComparisonEnd(item_r6.compareValue))("mat-calendar-body-in-comparison-range", ctx_r5._isInComparisonRange(item_r6.compareValue))("mat-calendar-body-preview-start", ctx_r5._isPreviewStart(item_r6.compareValue))("mat-calendar-body-preview-end", ctx_r5._isPreviewEnd(item_r6.compareValue))("mat-calendar-body-in-preview", ctx_r5._isInPreview(item_r6.compareValue));
    ɵngcc0.ɵɵproperty("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);
    ɵngcc0.ɵɵattribute("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r7)("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-selected", ctx_r5._isSelected(item_r6));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("mat-calendar-body-selected", ctx_r5._isSelected(item_r6))("mat-calendar-body-today", ctx_r5.todayValue === item_r6.compareValue);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r6.displayValue, " ");
} }
function NgxMatCalendarBody_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 4);
    ɵngcc0.ɵɵtemplate(1, NgxMatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);
    ɵngcc0.ɵɵtemplate(2, NgxMatCalendarBody_tr_1_td_2_Template, 4, 44, "td", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r2);
} }
function NgxMatMonthView_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵngcc0.ɵɵattribute("aria-label", day_r1.long);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(day_r1.narrow);
} }
const _c1 = ["*"];
function NgxMatCalendar_ng_template_0_Template(rf, ctx) { }
function NgxMatCalendar_ngx_mat_month_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-mat-month-view", 5);
    ɵngcc0.ɵɵlistener("activeDateChange", function NgxMatCalendar_ngx_mat_month_view_2_Template_ngx_mat_month_view_activeDateChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.activeDate = $event; })("selectedChange", function NgxMatCalendar_ngx_mat_month_view_2_Template_ngx_mat_month_view_selectedChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6._dateSelected($event); })("_userSelection", function NgxMatCalendar_ngx_mat_month_view_2_Template_ngx_mat_month_view__userSelection_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7._userSelected(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
} }
function NgxMatCalendar_ngx_mat_year_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-mat-year-view", 6);
    ɵngcc0.ɵɵlistener("activeDateChange", function NgxMatCalendar_ngx_mat_year_view_3_Template_ngx_mat_year_view_activeDateChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.activeDate = $event; })("monthSelected", function NgxMatCalendar_ngx_mat_year_view_3_Template_ngx_mat_year_view_monthSelected_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10._monthSelectedInYearView($event); })("selectedChange", function NgxMatCalendar_ngx_mat_year_view_3_Template_ngx_mat_year_view_selectedChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11._goToDateInView($event, "month"); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate);
} }
function NgxMatCalendar_ngx_mat_multi_year_view_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-mat-multi-year-view", 7);
    ɵngcc0.ɵɵlistener("activeDateChange", function NgxMatCalendar_ngx_mat_multi_year_view_4_Template_ngx_mat_multi_year_view_activeDateChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.activeDate = $event; })("yearSelected", function NgxMatCalendar_ngx_mat_multi_year_view_4_Template_ngx_mat_multi_year_view_yearSelected_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14._yearSelectedInMultiYearView($event); })("selectedChange", function NgxMatCalendar_ngx_mat_multi_year_view_4_Template_ngx_mat_multi_year_view_selectedChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15._goToDateInView($event, "year"); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate);
} }
function NgxMatTimepickerComponent_tr_3_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵelementStart(1, "button", 9);
    ɵngcc0.ɵɵlistener("click", function NgxMatTimepickerComponent_tr_3_td_11_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.change("second", true); });
    ɵngcc0.ɵɵelementStart(2, "mat-icon");
    ɵngcc0.ɵɵtext(3, "expand_less");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r6.disabled);
} }
function NgxMatTimepickerComponent_tr_3_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td", 5);
} }
function NgxMatTimepickerComponent_tr_3_td_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td");
} }
function NgxMatTimepickerComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "tr");
    ɵngcc0.ɵɵelementStart(1, "td");
    ɵngcc0.ɵɵelementStart(2, "button", 9);
    ɵngcc0.ɵɵlistener("click", function NgxMatTimepickerComponent_tr_3_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.change("hour", true); });
    ɵngcc0.ɵɵelementStart(3, "mat-icon");
    ɵngcc0.ɵɵtext(4, "expand_less");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(5, "td");
    ɵngcc0.ɵɵelementStart(6, "td");
    ɵngcc0.ɵɵelementStart(7, "button", 9);
    ɵngcc0.ɵɵlistener("click", function NgxMatTimepickerComponent_tr_3_Template_button_click_7_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.change("minute", true); });
    ɵngcc0.ɵɵelementStart(8, "mat-icon");
    ɵngcc0.ɵɵtext(9, "expand_less");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(10, "td");
    ɵngcc0.ɵɵtemplate(11, NgxMatTimepickerComponent_tr_3_td_11_Template, 4, 1, "td", 3);
    ɵngcc0.ɵɵtemplate(12, NgxMatTimepickerComponent_tr_3_td_12_Template, 1, 0, "td", 7);
    ɵngcc0.ɵɵtemplate(13, NgxMatTimepickerComponent_tr_3_td_13_Template, 1, 0, "td", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled || ctx_r0.disableMinute);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showSeconds);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.enableMeridian);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.enableMeridian);
} }
function NgxMatTimepickerComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 5);
    ɵngcc0.ɵɵtext(1, ":");
    ɵngcc0.ɵɵelementEnd();
} }
function NgxMatTimepickerComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵelementStart(1, "mat-form-field");
    ɵngcc0.ɵɵelementStart(2, "input", 10);
    ɵngcc0.ɵɵlistener("input", function NgxMatTimepickerComponent_td_14_Template_input_input_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.formatInput($event.target); })("keydown.ArrowUp", function NgxMatTimepickerComponent_td_14_Template_input_keydown_ArrowUp_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r16 = ɵngcc0.ɵɵnextContext(); ctx_r16.change("second", true); return $event.preventDefault(); })("keydown.ArrowDown", function NgxMatTimepickerComponent_td_14_Template_input_keydown_ArrowDown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r17 = ɵngcc0.ɵɵnextContext(); ctx_r17.change("second", false); return $event.preventDefault(); })("blur", function NgxMatTimepickerComponent_td_14_Template_input_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.change("second"); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function NgxMatTimepickerComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td", 5);
} }
function NgxMatTimepickerComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 11);
    ɵngcc0.ɵɵelementStart(1, "button", 12);
    ɵngcc0.ɵɵlistener("click", function NgxMatTimepickerComponent_td_16_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.toggleMeridian(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("color", ctx_r4.color)("disabled", ctx_r4.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.meridian, " ");
} }
function NgxMatTimepickerComponent_tr_17_td_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td");
} }
function NgxMatTimepickerComponent_tr_17_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵlistener("click", function NgxMatTimepickerComponent_tr_17_td_11_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.change("second", false); });
    ɵngcc0.ɵɵelementStart(2, "mat-icon");
    ɵngcc0.ɵɵtext(3, "expand_more");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r22.disabled);
} }
function NgxMatTimepickerComponent_tr_17_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td", 5);
} }
function NgxMatTimepickerComponent_tr_17_td_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td");
} }
function NgxMatTimepickerComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "tr");
    ɵngcc0.ɵɵelementStart(1, "td");
    ɵngcc0.ɵɵelementStart(2, "button", 13);
    ɵngcc0.ɵɵlistener("click", function NgxMatTimepickerComponent_tr_17_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.change("hour", false); });
    ɵngcc0.ɵɵelementStart(3, "mat-icon");
    ɵngcc0.ɵɵtext(4, "expand_more");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(5, "td");
    ɵngcc0.ɵɵelementStart(6, "td");
    ɵngcc0.ɵɵelementStart(7, "button", 13);
    ɵngcc0.ɵɵlistener("click", function NgxMatTimepickerComponent_tr_17_Template_button_click_7_listener() { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.change("minute", false); });
    ɵngcc0.ɵɵelementStart(8, "mat-icon");
    ɵngcc0.ɵɵtext(9, "expand_more");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(10, NgxMatTimepickerComponent_tr_17_td_10_Template, 1, 0, "td", 3);
    ɵngcc0.ɵɵtemplate(11, NgxMatTimepickerComponent_tr_17_td_11_Template, 4, 1, "td", 3);
    ɵngcc0.ɵɵtemplate(12, NgxMatTimepickerComponent_tr_17_td_12_Template, 1, 0, "td", 7);
    ɵngcc0.ɵɵtemplate(13, NgxMatTimepickerComponent_tr_17_td_13_Template, 1, 0, "td", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r5.disabled);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("disabled", ctx_r5.disabled || ctx_r5.disableMinute);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.showSeconds);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.showSeconds);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.enableMeridian);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.enableMeridian);
} }
function NgxMatDatetimeContent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelementStart(1, "ngx-mat-timepicker", 6);
    ɵngcc0.ɵɵlistener("ngModelChange", function NgxMatDatetimeContent_ng_container_1_div_1_Template_ngx_mat_timepicker_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(2); return ctx_r2.datepicker._selected = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("disable-seconds", !ctx_r1.datepicker._showSeconds);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("showSpinners", ctx_r1.datepicker._showSpinners)("showSeconds", ctx_r1.datepicker._showSeconds)("disabled", ctx_r1.datepicker._disabled)("stepHour", ctx_r1.datepicker._stepHour)("stepMinute", ctx_r1.datepicker._stepMinute)("stepSecond", ctx_r1.datepicker._stepSecond)("ngModel", ctx_r1.datepicker._selected)("color", ctx_r1.datepicker._color)("enableMeridian", ctx_r1.datepicker._enableMeridian)("disableMinute", ctx_r1.datepicker._disableMinute);
} }
function NgxMatDatetimeContent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NgxMatDatetimeContent_ng_container_1_div_1_Template, 2, 12, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "button", 4);
    ɵngcc0.ɵɵlistener("click", function NgxMatDatetimeContent_ng_container_1_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.datepicker.ok(); });
    ɵngcc0.ɵɵelementStart(4, "mat-icon");
    ɵngcc0.ɵɵtext(5, "done");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.datepicker._hideTime);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("color", ctx_r0.datepicker._color)("disabled", !ctx_r0.valid);
} }
class NgxMatDateAdapter extends DateAdapter {
    /**
     * Check if two date have same time
     * @param {?} a Date 1
     * @param {?} b Date 2
     * @return {?}
     */
    isSameTime(a, b) {
        if (a == null || b == null)
            return true;
        return this.getHour(a) === this.getHour(b)
            && this.getMinute(a) === this.getMinute(b)
            && this.getSecond(a) === this.getSecond(b);
    }
    /**
     * Copy time from a date to a another date
     * @param {?} toDate
     * @param {?} fromDate
     * @return {?}
     */
    copyTime(toDate, fromDate) {
        this.setHour(toDate, this.getHour(fromDate));
        this.setMinute(toDate, this.getMinute(fromDate));
        this.setSecond(toDate, this.getSecond(fromDate));
    }
    /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @param {?=} showSeconds
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDateWithTime(first, second, showSeconds) {
        /** @type {?} */
        let res = super.compareDate(first, second) ||
            this.getHour(first) - this.getHour(second) ||
            this.getMinute(first) - this.getMinute(second);
        if (showSeconds) {
            res = res || this.getSecond(first) - this.getSecond(second);
        }
        return res;
    }
    /**
     * Set time by using default values
     * @param {?} date
     * @param {?} defaultTime List default values [hour, minute, second]
     * @return {?}
     */
    setTimeByDefaultValues(date, defaultTime) {
        if (!Array.isArray(defaultTime)) {
            throw Error('@Input DefaultTime should be an array');
        }
        this.setHour(date, defaultTime[0] || 0);
        this.setMinute(date, defaultTime[1] || 0);
        this.setSecond(date, defaultTime[2] || 0);
    }
}
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
const NGX_MAT_DATE_FORMATS = new InjectionToken('ngx-mat-date-formats');

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
class NgxMatCalendarCell {
    /**
     * @param {?} value
     * @param {?} displayValue
     * @param {?} ariaLabel
     * @param {?} enabled
     * @param {?=} cssClasses
     * @param {?=} compareValue
     * @param {?=} rawValue
     */
    constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
        this.compareValue = compareValue;
        this.rawValue = rawValue;
    }
}
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
class NgxMatCalendarBody {
    /**
     * @param {?} _elementRef
     * @param {?} _ngZone
     */
    constructor(_elementRef, _ngZone) {
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
        this.selectedValueChange = new EventEmitter();
        /**
         * Emits when the preview has changed as a result of a user action.
         */
        this.previewChange = new EventEmitter();
        /**
         * Event handler for when the user enters an element
         * inside the calendar body (e.g. by hovering in or focus).
         */
        this._enterHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this._skipNextFocus && event.type === 'focus') {
                this._skipNextFocus = false;
                return;
            }
            // We only need to hit the zone when we're selecting a range.
            if (event.target && this.isRange) {
                /** @type {?} */
                const cell = this._getCellFromElement((/** @type {?} */ (event.target)));
                if (cell) {
                    this._ngZone.run((/**
                     * @return {?}
                     */
                    () => this.previewChange.emit({ value: cell.enabled ? cell : null, event })));
                }
            }
        });
        /**
         * Event handler for when the user's pointer leaves an element
         * inside the calendar body (e.g. by hovering out or blurring).
         */
        this._leaveHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // We only need to hit the zone when we're selecting a range.
            if (this.previewEnd !== null && this.isRange) {
                // Only reset the preview end value when leaving cells. This looks better, because
                // we have a gap between the cells and the rows and we don't want to remove the
                // range just for it to show up again when the user moves a few pixels to the side.
                if (event.target && isTableCell((/** @type {?} */ (event.target)))) {
                    this._ngZone.run((/**
                     * @return {?}
                     */
                    () => this.previewChange.emit({ value: null, event })));
                }
            }
        });
        _ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const element = _elementRef.nativeElement;
            element.addEventListener('mouseenter', this._enterHandler, true);
            element.addEventListener('focus', this._enterHandler, true);
            element.addEventListener('mouseleave', this._leaveHandler, true);
            element.addEventListener('blur', this._leaveHandler, true);
        }));
    }
    /**
     * Called when a cell is clicked.
     * @param {?} cell
     * @param {?} event
     * @return {?}
     */
    _cellClicked(cell, event) {
        if (cell.enabled) {
            this.selectedValueChange.emit({ value: cell.value, event });
        }
    }
    /**
     * Returns whether a cell should be marked as selected.
     * @param {?} cell
     * @return {?}
     */
    _isSelected(cell) {
        return this.startValue === cell.compareValue || this.endValue === cell.compareValue;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const columnChanges = changes['numCols'];
        const { rows, numCols } = this;
        if (changes['rows'] || columnChanges) {
            this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
        }
        if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
            this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
        }
        if (columnChanges || !this._cellWidth) {
            this._cellWidth = `${100 / numCols}%`;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        element.removeEventListener('mouseenter', this._enterHandler, true);
        element.removeEventListener('focus', this._enterHandler, true);
        element.removeEventListener('mouseleave', this._leaveHandler, true);
        element.removeEventListener('blur', this._leaveHandler, true);
    }
    /**
     * Returns whether a cell is active.
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    _isActiveCell(rowIndex, colIndex) {
        /** @type {?} */
        let cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    }
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @param {?=} movePreview
     * @return {?}
     */
    _focusActiveCell(movePreview = true) {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const activeCell = this._elementRef.nativeElement.querySelector('.ngx-mat-calendar-body-active');
                if (activeCell) {
                    if (!movePreview) {
                        this._skipNextFocus = true;
                    }
                    activeCell.focus();
                }
            }));
        }));
    }
    /**
     * Gets whether a value is the start of the main range.
     * @param {?} value
     * @return {?}
     */
    _isRangeStart(value) {
        return isStart(value, this.startValue, this.endValue);
    }
    /**
     * Gets whether a value is the end of the main range.
     * @param {?} value
     * @return {?}
     */
    _isRangeEnd(value) {
        return isEnd(value, this.startValue, this.endValue);
    }
    /**
     * Gets whether a value is within the currently-selected range.
     * @param {?} value
     * @return {?}
     */
    _isInRange(value) {
        return isInRange(value, this.startValue, this.endValue, this.isRange);
    }
    /**
     * Gets whether a value is the start of the comparison range.
     * @param {?} value
     * @return {?}
     */
    _isComparisonStart(value) {
        return isStart(value, this.comparisonStart, this.comparisonEnd);
    }
    /**
     * Whether the cell is a start bridge cell between the main and comparison ranges.
     * @param {?} value
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    _isComparisonBridgeStart(value, rowIndex, colIndex) {
        if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
            return false;
        }
        /** @type {?} */
        let previousCell = this.rows[rowIndex][colIndex - 1];
        if (!previousCell) {
            /** @type {?} */
            const previousRow = this.rows[rowIndex - 1];
            previousCell = previousRow && previousRow[previousRow.length - 1];
        }
        return previousCell && !this._isRangeEnd(previousCell.compareValue);
    }
    /**
     * Whether the cell is an end bridge cell between the main and comparison ranges.
     * @param {?} value
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    _isComparisonBridgeEnd(value, rowIndex, colIndex) {
        if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
            return false;
        }
        /** @type {?} */
        let nextCell = this.rows[rowIndex][colIndex + 1];
        if (!nextCell) {
            /** @type {?} */
            const nextRow = this.rows[rowIndex + 1];
            nextCell = nextRow && nextRow[0];
        }
        return nextCell && !this._isRangeStart(nextCell.compareValue);
    }
    /**
     * Gets whether a value is the end of the comparison range.
     * @param {?} value
     * @return {?}
     */
    _isComparisonEnd(value) {
        return isEnd(value, this.comparisonStart, this.comparisonEnd);
    }
    /**
     * Gets whether a value is within the current comparison range.
     * @param {?} value
     * @return {?}
     */
    _isInComparisonRange(value) {
        return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
    }
    /**
     * Gets whether a value is the start of the preview range.
     * @param {?} value
     * @return {?}
     */
    _isPreviewStart(value) {
        return isStart(value, this.previewStart, this.previewEnd);
    }
    /**
     * Gets whether a value is the end of the preview range.
     * @param {?} value
     * @return {?}
     */
    _isPreviewEnd(value) {
        return isEnd(value, this.previewStart, this.previewEnd);
    }
    /**
     * Gets whether a value is inside the preview range.
     * @param {?} value
     * @return {?}
     */
    _isInPreview(value) {
        return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
    }
    /**
     * Finds the NgxMatCalendarCell that corresponds to a DOM node.
     * @private
     * @param {?} element
     * @return {?}
     */
    _getCellFromElement(element) {
        /** @type {?} */
        let cell;
        if (isTableCell(element)) {
            cell = element;
        }
        else if (isTableCell((/** @type {?} */ (element.parentNode)))) {
            cell = (/** @type {?} */ (element.parentNode));
        }
        if (cell) {
            /** @type {?} */
            const row = cell.getAttribute('data-ngx-mat-row');
            /** @type {?} */
            const col = cell.getAttribute('data-ngx-mat-col');
            if (row && col) {
                return this.rows[parseInt(row)][parseInt(col)];
            }
        }
        return null;
    }
}
NgxMatCalendarBody.ɵfac = function NgxMatCalendarBody_Factory(t) { return new (t || NgxMatCalendarBody)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NgxMatCalendarBody.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxMatCalendarBody, selectors: [["", "ngx-mat-calendar-body", ""]], hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "ngx-mat-calendar-body"], inputs: { numCols: "numCols", activeCell: "activeCell", isRange: "isRange", cellAspectRatio: "cellAspectRatio", previewStart: "previewStart", previewEnd: "previewEnd", label: "label", rows: "rows", todayValue: "todayValue", startValue: "startValue", endValue: "endValue", labelMinRequiredCells: "labelMinRequiredCells", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedValueChange: "selectedValueChange", previewChange: "previewChange" }, exportAs: ["NgxMatCalendarBody"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 2, consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "mat-calendar-body-range-start", "mat-calendar-body-range-end", "mat-calendar-body-in-range", "mat-calendar-body-comparison-bridge-start", "mat-calendar-body-comparison-bridge-end", "mat-calendar-body-comparison-start", "mat-calendar-body-comparison-end", "mat-calendar-body-in-comparison-range", "mat-calendar-body-preview-start", "mat-calendar-body-preview-end", "mat-calendar-body-in-preview", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], [1, "mat-calendar-body-cell-preview"]], template: function NgxMatCalendarBody_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxMatCalendarBody_tr_0_Template, 3, 6, "tr", 0);
        ɵngcc0.ɵɵtemplate(1, NgxMatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.rows);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgClass], styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;padding-left:4.7142857143%;padding-right:4.7142857143%;text-align:left}.mat-calendar-body-cell{cursor:pointer;height:0;line-height:0;outline:none;position:relative;text-align:center}.mat-calendar-body-cell-preview,.mat-calendar-body-cell:after,.mat-calendar-body-cell:before{box-sizing:border-box;content:\"\";height:90%;left:0;position:absolute;top:5%;width:100%;z-index:0}.mat-calendar-body-comparison-start:after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview,.mat-calendar-body-range-start:after,.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before{border-bottom-left-radius:999px;border-top-left-radius:999px;left:5%;width:95%}[dir=rtl] .mat-calendar-body-comparison-start:after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview,[dir=rtl] .mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before{border-bottom-right-radius:999px;border-radius:0;border-top-right-radius:999px;left:0}.mat-calendar-body-comparison-end:after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview,.mat-calendar-body-range-end:after,.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before{border-bottom-right-radius:999px;border-top-right-radius:999px;width:95%}[dir=rtl] .mat-calendar-body-comparison-end:after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview,[dir=rtl] .mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before{border-bottom-left-radius:999px;border-radius:0;border-top-left-radius:999px;left:5%}[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end:after{border-bottom-right-radius:999px;border-top-right-radius:999px;width:95%}.mat-calendar-body-comparison-end.mat-calendar-body-range-start:after,.mat-calendar-body-comparison-start.mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end:after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-bottom:1px dashed;border-top:1px dashed}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:1px dashed}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:1px dashed}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:1px dashed}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-left:1px dashed;border-right:0}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{align-items:center;border-radius:999px;border-style:solid;border-width:1px;box-sizing:border-box;display:flex;height:90%;justify-content:center;left:5%;line-height:1;top:5%;width:90%;z-index:1}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-calendar-body-selected,.cdk-high-contrast-active .mat-datepicker-popup:not(:empty){outline:1px solid}.cdk-high-contrast-active .mat-calendar-body-today{outline:1px dotted}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:2px dotted}[dir=rtl] .mat-calendar-body-label{text-align:right}@media (hover:none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgxMatCalendarBody.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
NgxMatCalendarBody.propDecorators = {
    label: [{ type: Input }],
    rows: [{ type: Input }],
    todayValue: [{ type: Input }],
    startValue: [{ type: Input }],
    endValue: [{ type: Input }],
    labelMinRequiredCells: [{ type: Input }],
    numCols: [{ type: Input }],
    activeCell: [{ type: Input }],
    isRange: [{ type: Input }],
    cellAspectRatio: [{ type: Input }],
    comparisonStart: [{ type: Input }],
    comparisonEnd: [{ type: Input }],
    previewStart: [{ type: Input }],
    previewEnd: [{ type: Input }],
    selectedValueChange: [{ type: Output }],
    previewChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatCalendarBody, [{
        type: Component,
        args: [{
                selector: '[ngx-mat-calendar-body]',
                template: "<!--\r\n  If there's not enough space in the first row, create a separate label row. We mark this row as\r\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\r\n-->\r\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\r\n  <td class=\"mat-calendar-body-label\"\r\n      [attr.colspan]=\"numCols\"\r\n      [style.paddingTop]=\"_cellPadding\"\r\n      [style.paddingBottom]=\"_cellPadding\">\r\n    {{label}}\r\n  </td>\r\n</tr>\r\n\r\n<!-- Create the first row separately so we can include a special spacer cell. -->\r\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\r\n  <!--\r\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\r\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\r\n    percentage of the width (a variant of the trick described here:\r\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\r\n  -->\r\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\r\n      aria-hidden=\"true\"\r\n      class=\"mat-calendar-body-label\"\r\n      [attr.colspan]=\"_firstRowOffset\"\r\n      [style.paddingTop]=\"_cellPadding\"\r\n      [style.paddingBottom]=\"_cellPadding\">\r\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\r\n  </td>\r\n  <td *ngFor=\"let item of row; let colIndex = index\"\r\n      role=\"gridcell\"\r\n      class=\"mat-calendar-body-cell\"\r\n      [ngClass]=\"item.cssClasses\"\r\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\r\n      [attr.data-mat-row]=\"rowIndex\"\r\n      [attr.data-mat-col]=\"colIndex\"\r\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\r\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\r\n      [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\r\n      [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\r\n      [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\r\n      [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\r\n      [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\r\n      [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\r\n      [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\r\n      [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\r\n      [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\r\n      [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\r\n      [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\r\n      [attr.aria-label]=\"item.ariaLabel\"\r\n      [attr.aria-disabled]=\"!item.enabled || null\"\r\n      [attr.aria-selected]=\"_isSelected(item)\"\r\n      (click)=\"_cellClicked(item, $event)\"\r\n      [style.width]=\"_cellWidth\"\r\n      [style.paddingTop]=\"_cellPadding\"\r\n      [style.paddingBottom]=\"_cellPadding\">\r\n      <div class=\"mat-calendar-body-cell-content mat-focus-indicator\"\r\n        [class.mat-calendar-body-selected]=\"_isSelected(item)\"\r\n        [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\r\n        {{item.displayValue}}\r\n      </div>\r\n      <div class=\"mat-calendar-body-cell-preview\"></div>\r\n  </td>\r\n</tr>\r\n",
                host: {
                    'class': 'ngx-mat-calendar-body',
                    'role': 'grid',
                    'aria-readonly': 'true'
                },
                exportAs: 'NgxMatCalendarBody',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;padding-left:4.7142857143%;padding-right:4.7142857143%;text-align:left}.mat-calendar-body-cell{cursor:pointer;height:0;line-height:0;outline:none;position:relative;text-align:center}.mat-calendar-body-cell-preview,.mat-calendar-body-cell:after,.mat-calendar-body-cell:before{box-sizing:border-box;content:\"\";height:90%;left:0;position:absolute;top:5%;width:100%;z-index:0}.mat-calendar-body-comparison-start:after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview,.mat-calendar-body-range-start:after,.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before{border-bottom-left-radius:999px;border-top-left-radius:999px;left:5%;width:95%}[dir=rtl] .mat-calendar-body-comparison-start:after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview,[dir=rtl] .mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before{border-bottom-right-radius:999px;border-radius:0;border-top-right-radius:999px;left:0}.mat-calendar-body-comparison-end:after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview,.mat-calendar-body-range-end:after,.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before{border-bottom-right-radius:999px;border-top-right-radius:999px;width:95%}[dir=rtl] .mat-calendar-body-comparison-end:after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview,[dir=rtl] .mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before{border-bottom-left-radius:999px;border-radius:0;border-top-left-radius:999px;left:5%}[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end:after{border-bottom-right-radius:999px;border-top-right-radius:999px;width:95%}.mat-calendar-body-comparison-end.mat-calendar-body-range-start:after,.mat-calendar-body-comparison-start.mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end:after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-bottom:1px dashed;border-top:1px dashed}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:1px dashed}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:1px dashed}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:1px dashed}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-left:1px dashed;border-right:0}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{align-items:center;border-radius:999px;border-style:solid;border-width:1px;box-sizing:border-box;display:flex;height:90%;justify-content:center;left:5%;line-height:1;top:5%;width:90%;z-index:1}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-calendar-body-selected,.cdk-high-contrast-active .mat-datepicker-popup:not(:empty){outline:1px solid}.cdk-high-contrast-active .mat-calendar-body-today{outline:1px dotted}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:2px dotted}[dir=rtl] .mat-calendar-body-label{text-align:right}@media (hover:none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { numCols: [{
            type: Input
        }], activeCell: [{
            type: Input
        }], isRange: [{
            type: Input
        }], cellAspectRatio: [{
            type: Input
        }], previewStart: [{
            type: Input
        }], previewEnd: [{
            type: Input
        }], selectedValueChange: [{
            type: Output
        }], previewChange: [{
            type: Output
        }], label: [{
            type: Input
        }], rows: [{
            type: Input
        }], todayValue: [{
            type: Input
        }], startValue: [{
            type: Input
        }], endValue: [{
            type: Input
        }], labelMinRequiredCells: [{
            type: Input
        }], comparisonStart: [{
            type: Input
        }], comparisonEnd: [{
            type: Input
        }] }); })();
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
const NGX_MAT_DATE_RANGE_SELECTION_STRATEGY = new InjectionToken('NGX_MAT_DATE_RANGE_SELECTION_STRATEGY');
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
class DefaultNgxMatCalendarRangeStrategy {
    /**
     * @param {?} _dateAdapter
     */
    constructor(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
    }
    /**
     * @param {?} date
     * @param {?} currentRange
     * @return {?}
     */
    selectionFinished(date, currentRange) {
        let { start, end } = currentRange;
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
        return new DateRange(start, end);
    }
    /**
     * @param {?} activeDate
     * @param {?} currentRange
     * @return {?}
     */
    createPreview(activeDate, currentRange) {
        /** @type {?} */
        let start = null;
        /** @type {?} */
        let end = null;
        if (currentRange.start && !currentRange.end && activeDate) {
            start = currentRange.start;
            end = activeDate;
        }
        return new DateRange(start, end);
    }
}
DefaultNgxMatCalendarRangeStrategy.ɵfac = function DefaultNgxMatCalendarRangeStrategy_Factory(t) { return new (t || DefaultNgxMatCalendarRangeStrategy)(ɵngcc0.ɵɵinject(NgxMatDateAdapter)); };
DefaultNgxMatCalendarRangeStrategy.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DefaultNgxMatCalendarRangeStrategy, factory: DefaultNgxMatCalendarRangeStrategy.ɵfac });
/** @nocollapse */
DefaultNgxMatCalendarRangeStrategy.ctorParameters = () => [
    { type: NgxMatDateAdapter }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultNgxMatCalendarRangeStrategy, [{
        type: Injectable
    }], function () { return [{ type: NgxMatDateAdapter }]; }, null); })();
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
const LIMIT_TIMES = {
    minHour: 0,
    maxHour: 24,
    minMinute: 0,
    maxMinute: 60,
    minSecond: 0,
    maxSecond: 60,
    meridian: 12
};
/** @type {?} */
const MERIDIANS = {
    AM: 'AM',
    PM: 'PM'
};
/** @type {?} */
const DEFAULT_STEP = 1;
/** @type {?} */
const NUMERIC_REGEX = /[^0-9]/g;
/** @type {?} */
const PATTERN_INPUT_HOUR = /^(2[0-3]|[0-1][0-9]|[0-9])$/;
/** @type {?} */
const PATTERN_INPUT_MINUTE = /^([0-5][0-9]|[0-9])$/;
/** @type {?} */
const PATTERN_INPUT_SECOND = /^([0-5][0-9]|[0-9])$/;
/**
 * @param {?} val
 * @return {?}
 */
function formatTwoDigitTimeValue(val) {
    /** @type {?} */
    const txt = val.toString();
    return txt.length > 1 ? txt : `0${txt}`;
}
/**
 * @param {?} provider
 * @return {?}
 */
function createMissingDateImplError(provider) {
    return Error(`NgxMatDatepicker: No provider found for ${provider}. You must import one of the following ` +
        `modules at your application root: NgxMatNativeDateModule, NgxMatMomentModule, or provide a ` +
        `custom implementation.`);
}
/**
 * Formats a range of years.
 * @param {?} start
 * @param {?} end
 * @return {?}
 */
function formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/month-view.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * \@docs-private
 * @template D
 */
class NgxMatMonthView {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dateFormats
     * @param {?} _dateAdapter
     * @param {?=} _dir
     * @param {?=} _rangeStrategy
     */
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rangeStrategy = _rangeStrategy;
        this._rerenderSubscription = Subscription.EMPTY;
        /**
         * Emits when a new date is selected.
         */
        this.selectedChange = new EventEmitter();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new EventEmitter();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new EventEmitter();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxMatDateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('NGX_MAT_DATE_FORMATS');
        }
        this._activeDate = this._dateAdapter.today();
    }
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     * @return {?}
     */
    get activeDate() { return this._activeDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        /** @type {?} */
        const oldActiveDate = this._activeDate;
        /** @type {?} */
        const validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
            this._init();
        }
    }
    /**
     * The currently selected date.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setRanges(this._selected);
    }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get minDate() { return this._minDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get maxDate() { return this._maxDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe(startWith(null))
            .subscribe((/**
         * @return {?}
         */
        () => this._init()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /**
     * Handles when a new date is selected.
     * @param {?} event
     * @return {?}
     */
    _dateSelected(event) {
        /** @type {?} */
        const date = event.value;
        /** @type {?} */
        const selectedYear = this._dateAdapter.getYear(this.activeDate);
        /** @type {?} */
        const selectedMonth = this._dateAdapter.getMonth(this.activeDate);
        /** @type {?} */
        const selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
        /** @type {?} */
        let rangeStartDate;
        /** @type {?} */
        let rangeEndDate;
        if (this._selected instanceof DateRange) {
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
    }
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        /** @type {?} */
        const oldActiveDate = this._activeDate;
        /** @type {?} */
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;
            case RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;
            case UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case HOME:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case END:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case PAGE_UP:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case PAGE_DOWN:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case ENTER:
            case SPACE:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                    this._dateSelected({ value: this._dateAdapter.getDate(this._activeDate), event });
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            case ESCAPE:
                // Abort the current range selection if the user presses escape mid-selection.
                if (this._previewEnd != null) {
                    this._previewStart = this._previewEnd = null;
                    this.selectedChange.emit(null);
                    this._userSelection.emit({ value: null, event });
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
    }
    /**
     * Initializes this month view.
     * @return {?}
     */
    _init() {
        this._setRanges(this.selected);
        this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
        this._monthLabel =
            this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();
        /** @type {?} */
        let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._initWeekdays();
        this._createWeekCells();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @param {?=} movePreview
     * @return {?}
     */
    _focusActiveCell(movePreview) {
        this._matCalendarBody._focusActiveCell(movePreview);
    }
    /**
     * Called when the user has activated a new cell and the preview needs to be updated.
     * @param {?} __0
     * @return {?}
     */
    _previewChanged({ event, value: cell }) {
        if (this._rangeStrategy) {
            // We can assume that this will be a range, because preview
            // events aren't fired for single date selections.
            /** @type {?} */
            const value = cell ? (/** @type {?} */ (cell.rawValue)) : null;
            /** @type {?} */
            const previewRange = this._rangeStrategy.createPreview(value, (/** @type {?} */ (this.selected)), event);
            this._previewStart = this._getCellCompareValue(previewRange.start);
            this._previewEnd = this._getCellCompareValue(previewRange.end);
            // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
            // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
            // when navigating one month back using the keyboard which will cause this handler
            // to throw a "changed after checked" error when updating the preview state.
            this._changeDetectorRef.detectChanges();
        }
    }
    /**
     * Initializes the weekdays.
     * @private
     * @return {?}
     */
    _initWeekdays() {
        /** @type {?} */
        const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        /** @type {?} */
        const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        /** @type {?} */
        const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        /** @type {?} */
        let weekdays = longWeekdays.map((/**
         * @param {?} long
         * @param {?} i
         * @return {?}
         */
        (long, i) => {
            return { long, narrow: narrowWeekdays[i] };
        }));
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    }
    /**
     * Creates MatCalendarCells for the dates in this month.
     * @private
     * @return {?}
     */
    _createWeekCells() {
        /** @type {?} */
        const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
        /** @type {?} */
        const dateNames = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            /** @type {?} */
            const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            /** @type {?} */
            const enabled = this._shouldEnableDate(date);
            /** @type {?} */
            const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            /** @type {?} */
            const cellClasses = this.dateClass ? this.dateClass(date) : undefined;
            this._weeks[this._weeks.length - 1].push(new NgxMatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, (/** @type {?} */ (this._getCellCompareValue(date))), date));
        }
    }
    /**
     * Date filter for the month
     * @private
     * @param {?} date
     * @return {?}
     */
    _shouldEnableDate(date) {
        return !!date &&
            (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) &&
            (!this.dateFilter || this.dateFilter(date));
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @private
     * @param {?} date
     * @return {?}
     */
    _getDateInCurrentMonth(date) {
        return date && this._hasSameMonthAndYear(date, this.activeDate) ?
            this._dateAdapter.getDate(date) : null;
    }
    /**
     * Checks whether the 2 dates are non-null and fall within the same month of the same year.
     * @private
     * @param {?} d1
     * @param {?} d2
     * @return {?}
     */
    _hasSameMonthAndYear(d1, d2) {
        return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
            this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    }
    /**
     * Gets the value that will be used to one cell to another.
     * @private
     * @param {?} date
     * @return {?}
     */
    _getCellCompareValue(date) {
        if (date) {
            // We use the time since the Unix epoch to compare dates in this view, rather than the
            // cell values, because we need to support ranges that span across multiple months/years.
            /** @type {?} */
            const year = this._dateAdapter.getYear(date);
            /** @type {?} */
            const month = this._dateAdapter.getMonth(date);
            /** @type {?} */
            const day = this._dateAdapter.getDate(date);
            return new Date(year, month, day).getTime();
        }
        return null;
    }
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    _getValidDateOrNull(obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    }
    /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /**
     * Sets the current range based on a model value.
     * @private
     * @param {?} selectedValue
     * @return {?}
     */
    _setRanges(selectedValue) {
        if (selectedValue instanceof DateRange) {
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
    }
}
NgxMatMonthView.ɵfac = function NgxMatMonthView_Factory(t) { return new (t || NgxMatMonthView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NGX_MAT_DATE_FORMATS, 8), ɵngcc0.ɵɵdirectiveInject(NgxMatDateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(NGX_MAT_DATE_RANGE_SELECTION_STRATEGY, 8)); };
NgxMatMonthView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxMatMonthView, selectors: [["ngx-mat-month-view"]], viewQuery: function NgxMatMonthView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgxMatCalendarBody, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection", activeDateChange: "activeDateChange" }, exportAs: ["ngxMatMonthView"], decls: 7, vars: 13, consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["colspan", "7", "aria-hidden", "true", 1, "mat-calendar-table-header-divider"], ["ngx-mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "selectedValueChange", "previewChange", "keydown"], ["scope", "col"]], template: function NgxMatMonthView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵelementStart(1, "thead", 1);
        ɵngcc0.ɵɵelementStart(2, "tr");
        ɵngcc0.ɵɵtemplate(3, NgxMatMonthView_th_3_Template, 2, 2, "th", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "tr");
        ɵngcc0.ɵɵelement(5, "th", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "tbody", 4);
        ɵngcc0.ɵɵlistener("selectedValueChange", function NgxMatMonthView_Template_tbody_selectedValueChange_6_listener($event) { return ctx._dateSelected($event); })("previewChange", function NgxMatMonthView_Template_tbody_previewChange_6_listener($event) { return ctx._previewChanged($event); })("keydown", function NgxMatMonthView_Template_tbody_keydown_6_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx._weekdays);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
    } }, directives: [ɵngcc1.NgForOf, NgxMatCalendarBody], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgxMatMonthView.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,] }, { type: Optional }] }
];
NgxMatMonthView.propDecorators = {
    activeDate: [{ type: Input }],
    selected: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateFilter: [{ type: Input }],
    dateClass: [{ type: Input }],
    comparisonStart: [{ type: Input }],
    comparisonEnd: [{ type: Input }],
    selectedChange: [{ type: Output }],
    _userSelection: [{ type: Output }],
    activeDateChange: [{ type: Output }],
    _matCalendarBody: [{ type: ViewChild, args: [NgxMatCalendarBody,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatMonthView, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-month-view',
                template: "<table class=\"mat-calendar-table\" role=\"presentation\">\r\n  <thead class=\"mat-calendar-table-header\">\r\n    <tr>\r\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\r\n    </tr>\r\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\r\n  </thead>\r\n  <tbody ngx-mat-calendar-body\r\n         [label]=\"_monthLabel\"\r\n         [rows]=\"_weeks\"\r\n         [todayValue]=\"_todayDate!\"\r\n         [startValue]=\"_rangeStart!\"\r\n         [endValue]=\"_rangeEnd!\"\r\n         [comparisonStart]=\"_comparisonRangeStart\"\r\n         [comparisonEnd]=\"_comparisonRangeEnd\"\r\n         [previewStart]=\"_previewStart\"\r\n         [previewEnd]=\"_previewEnd\"\r\n         [isRange]=\"_isRange\"\r\n         [labelMinRequiredCells]=\"3\"\r\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\r\n         (selectedValueChange)=\"_dateSelected($event)\"\r\n         (previewChange)=\"_previewChanged($event)\"\r\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\r\n  </tbody>\r\n</table>\r\n",
                exportAs: 'ngxMatMonthView',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NGX_MAT_DATE_FORMATS]
            }] }, { type: NgxMatDateAdapter, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [NGX_MAT_DATE_RANGE_SELECTION_STRATEGY]
            }, {
                type: Optional
            }] }]; }, { selectedChange: [{
            type: Output
        }], _userSelection: [{
            type: Output
        }], activeDateChange: [{
            type: Output
        }], activeDate: [{
            type: Input
        }], selected: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], dateFilter: [{
            type: Input
        }], dateClass: [{
            type: Input
        }], comparisonStart: [{
            type: Input
        }], comparisonEnd: [{
            type: Input
        }], _matCalendarBody: [{
            type: ViewChild,
            args: [NgxMatCalendarBody]
        }] }); })();
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
const yearsPerPage = 24;
/** @type {?} */
const yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * \@docs-private
 * @template D
 */
class NgxMatMultiYearView {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dateAdapter
     * @param {?=} _dir
     */
    constructor(_changeDetectorRef, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = Subscription.EMPTY;
        /**
         * Emits when a new year is selected.
         */
        this.selectedChange = new EventEmitter();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         */
        this.yearSelected = new EventEmitter();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new EventEmitter();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxMatDateAdapter');
        }
        this._activeDate = this._dateAdapter.today();
    }
    /**
     * The date to display in this multi-year view (everything other than the year is ignored).
     * @return {?}
     */
    get activeDate() { return this._activeDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        /** @type {?} */
        let oldActiveDate = this._activeDate;
        /** @type {?} */
        const validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
            this._init();
        }
    }
    /**
     * The currently selected date.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setSelectedYear(value);
    }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get minDate() { return this._minDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get maxDate() { return this._maxDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe(startWith(null))
            .subscribe((/**
         * @return {?}
         */
        () => this._init()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /**
     * Initializes this multi-year view.
     * @return {?}
     */
    _init() {
        this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
        // We want a range years such that we maximize the number of
        // enabled dates visible at once. This prevents issues where the minimum year
        // is the last item of a page OR the maximum year is the first item of a page.
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view.
        /** @type {?} */
        const activeYear = this._dateAdapter.getYear(this._activeDate);
        /** @type {?} */
        const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        this._years = [];
        for (let i = 0, row = []; i < yearsPerPage; i++) {
            row.push(minYearOfPage + i);
            if (row.length == yearsPerRow) {
                this._years.push(row.map((/**
                 * @param {?} year
                 * @return {?}
                 */
                year => this._createCellForYear(year))));
                row = [];
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Handles when a new year is selected.
     * @param {?} event
     * @return {?}
     */
    _yearSelected(event) {
        /** @type {?} */
        const year = event.value;
        this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
        /** @type {?} */
        let month = this._dateAdapter.getMonth(this.activeDate);
        /** @type {?} */
        let daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /**
     * Handles keydown events on the calendar body when calendar is in multi-year view.
     * @param {?} event
     * @return {?}
     */
    _handleCalendarBodyKeydown(event) {
        /** @type {?} */
        const oldActiveDate = this._activeDate;
        /** @type {?} */
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;
            case RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;
            case UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;
            case DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;
            case HOME:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;
            case END:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;
            case PAGE_UP:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case PAGE_DOWN:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case ENTER:
            case SPACE:
                this._yearSelected({ value: this._dateAdapter.getYear(this._activeDate), event });
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
    }
    /**
     * @return {?}
     */
    _getActiveCell() {
        return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    }
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
    }
    /**
     * Creates an MatCalendarCell for the given year.
     * @private
     * @param {?} year
     * @return {?}
     */
    _createCellForYear(year) {
        /** @type {?} */
        let yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));
        return new NgxMatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
    }
    /**
     * Whether the given year is enabled.
     * @private
     * @param {?} year
     * @return {?}
     */
    _shouldEnableYear(year) {
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
        const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    _getValidDateOrNull(obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    }
    /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /**
     * Sets the currently-highlighted year based on a model value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _setSelectedYear(value) {
        this._selectedYear = null;
        if (value instanceof DateRange) {
            /** @type {?} */
            const displayValue = value.start || value.end;
            if (displayValue) {
                this._selectedYear = this._dateAdapter.getYear(displayValue);
            }
        }
        else if (value) {
            this._selectedYear = this._dateAdapter.getYear(value);
        }
    }
}
NgxMatMultiYearView.ɵfac = function NgxMatMultiYearView_Factory(t) { return new (t || NgxMatMultiYearView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NgxMatDateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NgxMatMultiYearView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxMatMultiYearView, selectors: [["ngx-mat-multi-year-view"]], viewQuery: function NgxMatMultiYearView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgxMatCalendarBody, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", activeDateChange: "activeDateChange" }, exportAs: ["ngxMatMultiYearView"], decls: 5, vars: 7, consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["ngx-mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]], template: function NgxMatMultiYearView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵelementStart(1, "thead", 1);
        ɵngcc0.ɵɵelementStart(2, "tr");
        ɵngcc0.ɵɵelement(3, "th", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "tbody", 3);
        ɵngcc0.ɵɵlistener("selectedValueChange", function NgxMatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) { return ctx._yearSelected($event); })("keydown", function NgxMatMultiYearView_Template_tbody_keydown_4_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
    } }, directives: [NgxMatCalendarBody], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgxMatMultiYearView.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NgxMatMultiYearView.propDecorators = {
    activeDate: [{ type: Input }],
    selected: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateFilter: [{ type: Input }],
    selectedChange: [{ type: Output }],
    yearSelected: [{ type: Output }],
    activeDateChange: [{ type: Output }],
    _matCalendarBody: [{ type: ViewChild, args: [NgxMatCalendarBody,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatMultiYearView, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-multi-year-view',
                template: "<table class=\"mat-calendar-table\" role=\"presentation\">\r\n  <thead class=\"mat-calendar-table-header\">\r\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\r\n  </thead>\r\n  <tbody ngx-mat-calendar-body\r\n         [rows]=\"_years\"\r\n         [todayValue]=\"_todayYear\"\r\n         [startValue]=\"_selectedYear!\"\r\n         [endValue]=\"_selectedYear!\"\r\n         [numCols]=\"4\"\r\n         [cellAspectRatio]=\"4 / 7\"\r\n         [activeCell]=\"_getActiveCell()\"\r\n         (selectedValueChange)=\"_yearSelected($event)\"\r\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\r\n  </tbody>\r\n</table>\r\n\r\n",
                exportAs: 'ngxMatMultiYearView',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: NgxMatDateAdapter, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { selectedChange: [{
            type: Output
        }], yearSelected: [{
            type: Output
        }], activeDateChange: [{
            type: Output
        }], activeDate: [{
            type: Input
        }], selected: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], dateFilter: [{
            type: Input
        }], _matCalendarBody: [{
            type: ViewChild,
            args: [NgxMatCalendarBody]
        }] }); })();
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
    const year1 = dateAdapter.getYear(date1);
    /** @type {?} */
    const year2 = dateAdapter.getYear(date2);
    /** @type {?} */
    const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
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
    const activeYear = dateAdapter.getYear(activeDate);
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
    let startingYear = 0;
    if (maxDate) {
        /** @type {?} */
        const maxYear = dateAdapter.getYear(maxDate);
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
class NgxMatYearView {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dateFormats
     * @param {?} _dateAdapter
     * @param {?=} _dir
     */
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = Subscription.EMPTY;
        /**
         * Emits when a new month is selected.
         */
        this.selectedChange = new EventEmitter();
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         */
        this.monthSelected = new EventEmitter();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new EventEmitter();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxMatDateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('NGX_MAT_DATE_FORMATS');
        }
        this._activeDate = this._dateAdapter.today();
    }
    /**
     * The date to display in this year view (everything other than the year is ignored).
     * @return {?}
     */
    get activeDate() { return this._activeDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        /** @type {?} */
        let oldActiveDate = this._activeDate;
        /** @type {?} */
        const validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
            this._init();
        }
    }
    /**
     * The currently selected date.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setSelectedMonth(value);
    }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get minDate() { return this._minDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get maxDate() { return this._maxDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe(startWith(null))
            .subscribe((/**
         * @return {?}
         */
        () => this._init()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /**
     * Handles when a new month is selected.
     * @param {?} event
     * @return {?}
     */
    _monthSelected(event) {
        /** @type {?} */
        const month = event.value;
        /** @type {?} */
        const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        this.monthSelected.emit(normalizedDate);
        /** @type {?} */
        const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
        this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        /** @type {?} */
        const oldActiveDate = this._activeDate;
        /** @type {?} */
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;
            case RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;
            case UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;
            case DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;
            case HOME:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case END:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case PAGE_UP:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case PAGE_DOWN:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case ENTER:
            case SPACE:
                this._monthSelected({ value: this._dateAdapter.getMonth(this._activeDate), event });
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
    }
    /**
     * Initializes this year view.
     * @return {?}
     */
    _init() {
        this._setSelectedMonth(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
        this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
        /** @type {?} */
        let monthNames = this._dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map((/**
         * @param {?} row
         * @return {?}
         */
        row => row.map((/**
         * @param {?} month
         * @return {?}
         */
        month => this._createCellForMonth(month, monthNames[month])))));
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @private
     * @param {?} date
     * @return {?}
     */
    _getMonthInCurrentYear(date) {
        return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
            this._dateAdapter.getMonth(date) : null;
    }
    /**
     * Creates an MatCalendarCell for the given month.
     * @private
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    _createCellForMonth(month, monthName) {
        /** @type {?} */
        let ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);
        return new NgxMatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
    }
    /**
     * Whether the given month is enabled.
     * @private
     * @param {?} month
     * @return {?}
     */
    _shouldEnableMonth(month) {
        /** @type {?} */
        const activeYear = this._dateAdapter.getYear(this.activeDate);
        if (month === undefined || month === null ||
            this._isYearAndMonthAfterMaxDate(activeYear, month) ||
            this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
        }
        if (!this.dateFilter) {
            return true;
        }
        /** @type {?} */
        const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
        // If any date in the month is enabled count the month as enabled.
        for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     * @private
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    _isYearAndMonthAfterMaxDate(year, month) {
        if (this.maxDate) {
            /** @type {?} */
            const maxYear = this._dateAdapter.getYear(this.maxDate);
            /** @type {?} */
            const maxMonth = this._dateAdapter.getMonth(this.maxDate);
            return year > maxYear || (year === maxYear && month > maxMonth);
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     * @private
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    _isYearAndMonthBeforeMinDate(year, month) {
        if (this.minDate) {
            /** @type {?} */
            const minYear = this._dateAdapter.getYear(this.minDate);
            /** @type {?} */
            const minMonth = this._dateAdapter.getMonth(this.minDate);
            return year < minYear || (year === minYear && month < minMonth);
        }
        return false;
    }
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    _getValidDateOrNull(obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    }
    /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /**
     * Sets the currently-selected month based on a model value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _setSelectedMonth(value) {
        if (value instanceof DateRange) {
            this._selectedMonth = this._getMonthInCurrentYear(value.start) ||
                this._getMonthInCurrentYear(value.end);
        }
        else {
            this._selectedMonth = this._getMonthInCurrentYear(value);
        }
    }
}
NgxMatYearView.ɵfac = function NgxMatYearView_Factory(t) { return new (t || NgxMatYearView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NGX_MAT_DATE_FORMATS, 8), ɵngcc0.ɵɵdirectiveInject(NgxMatDateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NgxMatYearView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxMatYearView, selectors: [["ngx-mat-year-view"]], viewQuery: function NgxMatYearView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgxMatCalendarBody, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter" }, outputs: { selectedChange: "selectedChange", monthSelected: "monthSelected", activeDateChange: "activeDateChange" }, exportAs: ["ngxMatYearView"], decls: 5, vars: 9, consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["ngx-mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]], template: function NgxMatYearView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵelementStart(1, "thead", 1);
        ɵngcc0.ɵɵelementStart(2, "tr");
        ɵngcc0.ɵɵelement(3, "th", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "tbody", 3);
        ɵngcc0.ɵɵlistener("selectedValueChange", function NgxMatYearView_Template_tbody_selectedValueChange_4_listener($event) { return ctx._monthSelected($event); })("keydown", function NgxMatYearView_Template_tbody_keydown_4_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
    } }, directives: [NgxMatCalendarBody], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgxMatYearView.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NgxMatYearView.propDecorators = {
    activeDate: [{ type: Input }],
    selected: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateFilter: [{ type: Input }],
    selectedChange: [{ type: Output }],
    monthSelected: [{ type: Output }],
    activeDateChange: [{ type: Output }],
    _matCalendarBody: [{ type: ViewChild, args: [NgxMatCalendarBody,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatYearView, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-year-view',
                template: "<table class=\"mat-calendar-table\" role=\"presentation\">\r\n  <thead class=\"mat-calendar-table-header\">\r\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\r\n  </thead>\r\n  <tbody ngx-mat-calendar-body\r\n         [label]=\"_yearLabel\"\r\n         [rows]=\"_months\"\r\n         [todayValue]=\"_todayMonth!\"\r\n         [startValue]=\"_selectedMonth!\"\r\n         [endValue]=\"_selectedMonth!\"\r\n         [labelMinRequiredCells]=\"2\"\r\n         [numCols]=\"4\"\r\n         [cellAspectRatio]=\"4 / 7\"\r\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\r\n         (selectedValueChange)=\"_monthSelected($event)\"\r\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\r\n  </tbody>\r\n</table>\r\n",
                exportAs: 'ngxMatYearView',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NGX_MAT_DATE_FORMATS]
            }] }, { type: NgxMatDateAdapter, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { selectedChange: [{
            type: Output
        }], monthSelected: [{
            type: Output
        }], activeDateChange: [{
            type: Output
        }], activeDate: [{
            type: Input
        }], selected: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], dateFilter: [{
            type: Input
        }], _matCalendarBody: [{
            type: ViewChild,
            args: [NgxMatCalendarBody]
        }] }); })();
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
class NgxMatCalendarHeader {
    /**
     * @param {?} _intl
     * @param {?} calendar
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     * @param {?} changeDetectorRef
     */
    constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
        this._intl = _intl;
        this.calendar = calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this.calendar.stateChanges.subscribe((/**
         * @return {?}
         */
        () => changeDetectorRef.markForCheck()));
    }
    /**
     * The label for the current calendar view.
     * @return {?}
     */
    get periodButtonText() {
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
        const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
        /** @type {?} */
        const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
        /** @type {?} */
        const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
        /** @type {?} */
        const minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
        /** @type {?} */
        const maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
        return formatYearRange(minYearName, maxYearName);
    }
    /**
     * @return {?}
     */
    get periodButtonLabel() {
        return this.calendar.currentView == 'month' ?
            this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
    }
    /**
     * The label for the previous button.
     * @return {?}
     */
    get prevButtonLabel() {
        return {
            'month': this._intl.prevMonthLabel,
            'year': this._intl.prevYearLabel,
            'multi-year': this._intl.prevMultiYearLabel
        }[this.calendar.currentView];
    }
    /**
     * The label for the next button.
     * @return {?}
     */
    get nextButtonLabel() {
        return {
            'month': this._intl.nextMonthLabel,
            'year': this._intl.nextYearLabel,
            'multi-year': this._intl.nextMultiYearLabel
        }[this.calendar.currentView];
    }
    /**
     * Handles user clicks on the period label.
     * @return {?}
     */
    currentPeriodClicked() {
        this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    }
    /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    previousClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    }
    /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    nextClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    }
    /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    previousEnabled() {
        if (!this.calendar.minDate) {
            return true;
        }
        return !this.calendar.minDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    }
    /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    nextEnabled() {
        return !this.calendar.maxDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @private
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    _isSameView(date1, date2) {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
        }
        // Otherwise we are in 'multi-year' view.
        return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    }
}
NgxMatCalendarHeader.ɵfac = function NgxMatCalendarHeader_Factory(t) { return new (t || NgxMatCalendarHeader)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.MatDatepickerIntl), ɵngcc0.ɵɵdirectiveInject(forwardRef(( /**
                 * @return {?}
                 */() => NgxMatCalendar))), ɵngcc0.ɵɵdirectiveInject(NgxMatDateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(NGX_MAT_DATE_FORMATS, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgxMatCalendarHeader.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxMatCalendarHeader, selectors: [["ngx-mat-calendar-header"]], exportAs: ["ngxMatCalendarHeader"], ngContentSelectors: _c1, decls: 9, vars: 8, consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mat-calendar-period-button", 3, "click"], [1, "mat-calendar-arrow"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"]], template: function NgxMatCalendarHeader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2);
        ɵngcc0.ɵɵlistener("click", function NgxMatCalendarHeader_Template_button_click_2_listener() { return ctx.currentPeriodClicked(); });
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelement(4, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(5, "div", 4);
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵelementStart(7, "button", 5);
        ɵngcc0.ɵɵlistener("click", function NgxMatCalendarHeader_Template_button_click_7_listener() { return ctx.previousClicked(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "button", 6);
        ɵngcc0.ɵɵlistener("click", function NgxMatCalendarHeader_Template_button_click_8_listener() { return ctx.nextClicked(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("aria-label", ctx.periodButtonLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.periodButtonText, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("mat-calendar-invert", ctx.calendar.currentView != "month");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", !ctx.previousEnabled());
        ɵngcc0.ɵɵattribute("aria-label", ctx.prevButtonLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", !ctx.nextEnabled());
        ɵngcc0.ɵɵattribute("aria-label", ctx.nextButtonLabel);
    } }, directives: [ɵngcc4.MatButton], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgxMatCalendarHeader.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: NgxMatCalendar, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NgxMatCalendar)),] }] },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
    { type: ChangeDetectorRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatCalendarHeader, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-calendar-header',
                template: "<div class=\"mat-calendar-header\">\r\n  <div class=\"mat-calendar-controls\">\r\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\r\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\r\n            cdkAriaLive=\"polite\">\r\n      {{periodButtonText}}\r\n      <div class=\"mat-calendar-arrow\"\r\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\r\n    </button>\r\n\r\n    <div class=\"mat-calendar-spacer\"></div>\r\n\r\n    <ng-content></ng-content>\r\n\r\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\r\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\r\n            [attr.aria-label]=\"prevButtonLabel\">\r\n    </button>\r\n\r\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\r\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\r\n            [attr.aria-label]=\"nextButtonLabel\">\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                exportAs: 'ngxMatCalendarHeader',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc3.MatDatepickerIntl }, { type: NgxMatCalendar, decorators: [{
                type: Inject,
                args: [forwardRef(( /**
                                     * @return {?}
                                     */() => NgxMatCalendar))]
            }] }, { type: NgxMatDateAdapter, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NGX_MAT_DATE_FORMATS]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, null); })();
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
class NgxMatCalendar {
    /**
     * @param {?} _intl
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     * @param {?} _changeDetectorRef
     */
    constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
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
        this.selectedChange = new EventEmitter();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new EventEmitter();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new EventEmitter();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new EventEmitter();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new Subject();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxDateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('NGX_MAT_DATE_FORMATS');
        }
        this._intlChanges = _intl.changes.subscribe((/**
         * @return {?}
         */
        () => {
            _changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }));
    }
    /**
     * A date representing the period (month or year) to start the calendar in.
     * @return {?}
     */
    get startAt() { return this._startAt; }
    /**
     * @param {?} value
     * @return {?}
     */
    set startAt(value) {
        this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The currently selected date.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get minDate() { return this._minDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get maxDate() { return this._maxDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     * @return {?}
     */
    get activeDate() { return this._clampedActiveDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
        this.stateChanges.next();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Whether the calendar is in month view.
     * @return {?}
     */
    get currentView() { return this._currentView; }
    /**
     * @param {?} value
     * @return {?}
     */
    set currentView(value) {
        this._currentView = value;
        this._moveFocusOnNextTick = true;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._calendarHeaderPortal = new ComponentPortal(this.headerComponent || NgxMatCalendarHeader);
        this.activeDate = this.startAt || this._dateAdapter.today();
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._moveFocusOnNextTick) {
            this._moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
        this.stateChanges.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];
        if (change && !change.firstChange) {
            /** @type {?} */
            const view = this._getCurrentViewComponent();
            if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this._changeDetectorRef.detectChanges();
                view._init();
            }
        }
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    focusActiveCell() {
        this._getCurrentViewComponent()._focusActiveCell();
    }
    /**
     * Updates today's date after an update of the active date
     * @return {?}
     */
    updateTodaysDate() {
        /** @type {?} */
        let view = this.currentView == 'month' ? this.monthView :
            (this.currentView == 'year' ? this.yearView : this.multiYearView);
        view.ngAfterContentInit();
    }
    /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    _dateSelected(date) {
        if (date && !this._dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
        }
    }
    /**
     * Handles year selection in the multiyear view.
     * @param {?} normalizedYear
     * @return {?}
     */
    _yearSelectedInMultiYearView(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /**
     * Handles month selection in the year view.
     * @param {?} normalizedMonth
     * @return {?}
     */
    _monthSelectedInYearView(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * @return {?}
     */
    _userSelected() {
        this._userSelection.emit();
    }
    /**
     * Handles year/month selection in the multi-year/year views.
     * @param {?} date
     * @param {?} view
     * @return {?}
     */
    _goToDateInView(date, view) {
        this.activeDate = date;
        this.currentView = view;
    }
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    _getValidDateOrNull(obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    }
    /**
     * Returns the component instance that corresponds to the current calendar view.
     * @private
     * @return {?}
     */
    _getCurrentViewComponent() {
        return this.monthView || this.yearView || this.multiYearView;
    }
}
NgxMatCalendar.ɵfac = function NgxMatCalendar_Factory(t) { return new (t || NgxMatCalendar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.MatDatepickerIntl), ɵngcc0.ɵɵdirectiveInject(NgxMatDateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(NGX_MAT_DATE_FORMATS, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgxMatCalendar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxMatCalendar, selectors: [["ngx-mat-calendar"]], viewQuery: function NgxMatCalendar_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgxMatMonthView, true);
        ɵngcc0.ɵɵviewQuery(NgxMatYearView, true);
        ɵngcc0.ɵɵviewQuery(NgxMatMultiYearView, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.monthView = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.yearView = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.multiYearView = _t.first);
    } }, hostAttrs: [1, "mat-calendar"], inputs: { startView: "startView", startAt: "startAt", selected: "selected", minDate: "minDate", maxDate: "maxDate", headerComponent: "headerComponent", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", monthSelected: "monthSelected", _userSelection: "_userSelection" }, exportAs: ["ngxMatCalendar"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 5, consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "selectedChange", "_userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "selectedChange", "_userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange"]], template: function NgxMatCalendar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxMatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, NgxMatCalendar_ngx_mat_month_view_2_Template, 1, 6, "ngx-mat-month-view", 2);
        ɵngcc0.ɵɵtemplate(3, NgxMatCalendar_ngx_mat_year_view_3_Template, 1, 5, "ngx-mat-year-view", 3);
        ɵngcc0.ɵɵtemplate(4, NgxMatCalendar_ngx_mat_multi_year_view_4_Template, 1, 5, "ngx-mat-multi-year-view", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("cdkPortalOutlet", ctx._calendarHeaderPortal);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.currentView);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "month");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "year");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "multi-year");
    } }, directives: [ɵngcc5.CdkPortalOutlet, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, NgxMatMonthView, NgxMatYearView, NgxMatMultiYearView], styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0}.mat-calendar-content{outline:none;padding:0 8px 8px}.mat-calendar-controls{display:flex;margin:5% calc(4.71429% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-top-style:solid;border-top-width:5px;display:inline-block;height:0;margin:0 0 0 5px;vertical-align:middle;width:0}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button:after,.mat-calendar-previous-button:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;margin:15.5px;position:absolute;right:0;top:0}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button:after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button:after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-collapse:collapse;border-spacing:0;width:100%}.mat-calendar-table-header th{padding:0 0 8px;text-align:center}.mat-calendar-table-header-divider{height:1px;position:relative}.mat-calendar-table-header-divider:after{content:\"\";height:1px;left:-8px;position:absolute;right:-8px;top:0}"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgxMatCalendar.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
    { type: ChangeDetectorRef }
];
NgxMatCalendar.propDecorators = {
    headerComponent: [{ type: Input }],
    startAt: [{ type: Input }],
    startView: [{ type: Input }],
    selected: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateFilter: [{ type: Input }],
    dateClass: [{ type: Input }],
    selectedChange: [{ type: Output }],
    yearSelected: [{ type: Output }],
    monthSelected: [{ type: Output }],
    _userSelection: [{ type: Output }],
    monthView: [{ type: ViewChild, args: [NgxMatMonthView,] }],
    yearView: [{ type: ViewChild, args: [NgxMatYearView,] }],
    multiYearView: [{ type: ViewChild, args: [NgxMatMultiYearView,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatCalendar, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-calendar',
                template: "\r\n<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\r\n\r\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\r\n  <ngx-mat-month-view\r\n      *ngSwitchCase=\"'month'\"\r\n      [(activeDate)]=\"activeDate\"\r\n      [selected]=\"selected\"\r\n      [dateFilter]=\"dateFilter\"\r\n      [maxDate]=\"maxDate\"\r\n      [minDate]=\"minDate\"\r\n      [dateClass]=\"dateClass\"\r\n      (selectedChange)=\"_dateSelected($event)\"\r\n      (_userSelection)=\"_userSelected()\">\r\n  </ngx-mat-month-view>\r\n\r\n  <ngx-mat-year-view\r\n      *ngSwitchCase=\"'year'\"\r\n      [(activeDate)]=\"activeDate\"\r\n      [selected]=\"selected\"\r\n      [dateFilter]=\"dateFilter\"\r\n      [maxDate]=\"maxDate\"\r\n      [minDate]=\"minDate\"\r\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\r\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\r\n  </ngx-mat-year-view>\r\n\r\n  <ngx-mat-multi-year-view\r\n      *ngSwitchCase=\"'multi-year'\"\r\n      [(activeDate)]=\"activeDate\"\r\n      [selected]=\"selected\"\r\n      [dateFilter]=\"dateFilter\"\r\n      [maxDate]=\"maxDate\"\r\n      [minDate]=\"minDate\"\r\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\r\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\r\n  </ngx-mat-multi-year-view>\r\n</div>\r\n",
                host: {
                    'class': 'mat-calendar'
                },
                exportAs: 'ngxMatCalendar',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0}.mat-calendar-content{outline:none;padding:0 8px 8px}.mat-calendar-controls{display:flex;margin:5% calc(4.71429% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-top-style:solid;border-top-width:5px;display:inline-block;height:0;margin:0 0 0 5px;vertical-align:middle;width:0}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button:after,.mat-calendar-previous-button:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;margin:15.5px;position:absolute;right:0;top:0}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button:after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button:after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-collapse:collapse;border-spacing:0;width:100%}.mat-calendar-table-header th{padding:0 0 8px;text-align:center}.mat-calendar-table-header-divider{height:1px;position:relative}.mat-calendar-table-header-divider:after{content:\"\";height:1px;left:-8px;position:absolute;right:-8px;top:0}"]
            }]
    }], function () { return [{ type: ɵngcc3.MatDatepickerIntl }, { type: NgxMatDateAdapter, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NGX_MAT_DATE_FORMATS]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { startView: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], yearSelected: [{
            type: Output
        }], monthSelected: [{
            type: Output
        }], _userSelection: [{
            type: Output
        }], startAt: [{
            type: Input
        }], selected: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], headerComponent: [{
            type: Input
        }], dateFilter: [{
            type: Input
        }], dateClass: [{
            type: Input
        }], monthView: [{
            type: ViewChild,
            args: [NgxMatMonthView]
        }], yearView: [{
            type: ViewChild,
            args: [NgxMatYearView]
        }], multiYearView: [{
            type: ViewChild,
            args: [NgxMatMultiYearView]
        }] }); })();
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
class NgxMatTimepickerComponent {
    /**
     * @param {?} _dateAdapter
     * @param {?} cd
     * @param {?} formBuilder
     */
    constructor(_dateAdapter, cd, formBuilder) {
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
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this._destroyed = new Subject();
        this.pattern = PATTERN_INPUT_HOUR;
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxMatDateAdapter');
        }
        this.form = this.formBuilder.group({
            hour: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_HOUR)]],
            minute: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_MINUTE)]],
            second: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_SECOND)]]
        });
    }
    /**
     * Hour
     * @private
     * @return {?}
     */
    get hour() {
        /** @type {?} */
        let val = Number(this.form.controls['hour'].value);
        return isNaN(val) ? 0 : val;
    }
    ;
    /**
     * @private
     * @return {?}
     */
    get minute() {
        /** @type {?} */
        let val = Number(this.form.controls['minute'].value);
        return isNaN(val) ? 0 : val;
    }
    ;
    /**
     * @private
     * @return {?}
     */
    get second() {
        /** @type {?} */
        let val = Number(this.form.controls['second'].value);
        return isNaN(val) ? 0 : val;
    }
    ;
    /**
     * Whether or not the form is valid
     * @return {?}
     */
    get valid() {
        return this.form.valid;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form.valueChanges.pipe(takeUntil(this._destroyed), debounceTime(400)).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            this._updateModel();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
            this.disabled ? this.form.disable() : this.form.enable();
        }
        this.disableMinute ? this.form.get('minute').disable() : this.form.get('minute').enable();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Writes a new value to the element.
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
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
    }
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Enables or disables the appropriate DOM element
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
        this.cd.markForCheck();
    }
    /**
     * Format input
     * @param {?} input
     * @return {?}
     */
    formatInput(input) {
        input.value = input.value.replace(NUMERIC_REGEX, '');
    }
    /**
     * Toggle meridian
     * @return {?}
     */
    toggleMeridian() {
        this.meridian = (this.meridian === MERIDIANS.AM) ? MERIDIANS.PM : MERIDIANS.AM;
        this.change('hour');
    }
    /**
     * Change property of time
     * @param {?} prop
     * @param {?=} up
     * @return {?}
     */
    change(prop, up) {
        /** @type {?} */
        const next = this._getNextValueByProp(prop, up);
        this.form.controls[prop].setValue(formatTwoDigitTimeValue(next), { onlySelf: false, emitEvent: false });
        this._updateModel();
    }
    /**
     * Update controls of form by model
     * @private
     * @return {?}
     */
    _updateHourMinuteSecond() {
        /** @type {?} */
        let _hour = this._dateAdapter.getHour(this._model);
        /** @type {?} */
        const _minute = this._dateAdapter.getMinute(this._model);
        /** @type {?} */
        const _second = this._dateAdapter.getSecond(this._model);
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
    }
    /**
     * Update model
     * @private
     * @return {?}
     */
    _updateModel() {
        /** @type {?} */
        let _hour = this.hour;
        if (this.enableMeridian && this.meridian === MERIDIANS.PM && _hour !== LIMIT_TIMES.meridian) {
            _hour = _hour + LIMIT_TIMES.meridian;
        }
        this._dateAdapter.setHour(this._model, _hour);
        this._dateAdapter.setMinute(this._model, this.minute);
        this._dateAdapter.setSecond(this._model, this.second);
        this._onChange(this._model);
    }
    /**
     * Get next value by property
     * @private
     * @param {?} prop
     * @param {?=} up
     * @return {?}
     */
    _getNextValueByProp(prop, up) {
        /** @type {?} */
        const keyProp = prop[0].toUpperCase() + prop.slice(1);
        /** @type {?} */
        const min = LIMIT_TIMES[`min${keyProp}`];
        /** @type {?} */
        let max = LIMIT_TIMES[`max${keyProp}`];
        if (prop === 'hour' && this.enableMeridian) {
            max = LIMIT_TIMES.meridian;
        }
        /** @type {?} */
        let next;
        if (up == null) {
            next = this[prop] % (max);
        }
        else {
            next = up ? this[prop] + this[`step${keyProp}`] : this[prop] - this[`step${keyProp}`];
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
    }
}
NgxMatTimepickerComponent.ɵfac = function NgxMatTimepickerComponent_Factory(t) { return new (t || NgxMatTimepickerComponent)(ɵngcc0.ɵɵdirectiveInject(NgxMatDateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.FormBuilder)); };
NgxMatTimepickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxMatTimepickerComponent, selectors: [["ngx-mat-timepicker"]], hostAttrs: [1, "ngx-mat-timepicker"], inputs: { disabled: "disabled", showSpinners: "showSpinners", stepHour: "stepHour", stepMinute: "stepMinute", stepSecond: "stepSecond", showSeconds: "showSeconds", disableMinute: "disableMinute", enableMeridian: "enableMeridian", color: "color", defaultTime: "defaultTime" }, exportAs: ["ngxMatTimepicker"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */() => NgxMatTimepickerComponent)),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 18, vars: 7, consts: [[3, "formGroup"], [1, "ngx-mat-timepicker-table"], [1, "ngx-mat-timepicker-tbody"], [4, "ngIf"], ["type", "text", "matInput", "", "maxlength", "2", "formControlName", "hour", 3, "input", "keydown.ArrowUp", "keydown.ArrowDown", "blur"], [1, "ngx-mat-timepicker-spacer"], ["type", "text", "matInput", "", "maxlength", "2", "formControlName", "minute", 3, "input", "keydown.ArrowUp", "keydown.ArrowDown", "blur"], ["class", "ngx-mat-timepicker-spacer", 4, "ngIf"], ["class", "ngx-mat-timepicker-meridian", 4, "ngIf"], ["type", "button", "mat-icon-button", "", "aria-label", "expand_less icon", 3, "disabled", "click"], ["type", "text", "matInput", "", "maxlength", "2", "formControlName", "second", 3, "input", "keydown.ArrowUp", "keydown.ArrowDown", "blur"], [1, "ngx-mat-timepicker-meridian"], ["mat-button", "", "mat-stroked-button", "", 3, "color", "disabled", "click"], ["type", "button", "mat-icon-button", "", "aria-label", "expand_more icon", 3, "disabled", "click"]], template: function NgxMatTimepickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "form", 0);
        ɵngcc0.ɵɵelementStart(1, "table", 1);
        ɵngcc0.ɵɵelementStart(2, "tbody", 2);
        ɵngcc0.ɵɵtemplate(3, NgxMatTimepickerComponent_tr_3_Template, 14, 5, "tr", 3);
        ɵngcc0.ɵɵelementStart(4, "tr");
        ɵngcc0.ɵɵelementStart(5, "td");
        ɵngcc0.ɵɵelementStart(6, "mat-form-field");
        ɵngcc0.ɵɵelementStart(7, "input", 4);
        ɵngcc0.ɵɵlistener("input", function NgxMatTimepickerComponent_Template_input_input_7_listener($event) { return ctx.formatInput($event.target); })("keydown.ArrowUp", function NgxMatTimepickerComponent_Template_input_keydown_ArrowUp_7_listener($event) { ctx.change("hour", true); return $event.preventDefault(); })("keydown.ArrowDown", function NgxMatTimepickerComponent_Template_input_keydown_ArrowDown_7_listener($event) { ctx.change("hour", false); return $event.preventDefault(); })("blur", function NgxMatTimepickerComponent_Template_input_blur_7_listener() { return ctx.change("hour"); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "td", 5);
        ɵngcc0.ɵɵtext(9, ":");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "td");
        ɵngcc0.ɵɵelementStart(11, "mat-form-field");
        ɵngcc0.ɵɵelementStart(12, "input", 6);
        ɵngcc0.ɵɵlistener("input", function NgxMatTimepickerComponent_Template_input_input_12_listener($event) { return ctx.formatInput($event.target); })("keydown.ArrowUp", function NgxMatTimepickerComponent_Template_input_keydown_ArrowUp_12_listener($event) { ctx.change("minute", true); return $event.preventDefault(); })("keydown.ArrowDown", function NgxMatTimepickerComponent_Template_input_keydown_ArrowDown_12_listener($event) { ctx.change("minute", false); return $event.preventDefault(); })("blur", function NgxMatTimepickerComponent_Template_input_blur_12_listener() { return ctx.change("minute"); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(13, NgxMatTimepickerComponent_td_13_Template, 2, 0, "td", 7);
        ɵngcc0.ɵɵtemplate(14, NgxMatTimepickerComponent_td_14_Template, 3, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(15, NgxMatTimepickerComponent_td_15_Template, 1, 0, "td", 7);
        ɵngcc0.ɵɵtemplate(16, NgxMatTimepickerComponent_td_16_Template, 3, 3, "td", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(17, NgxMatTimepickerComponent_tr_17_Template, 14, 6, "tr", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("formGroup", ctx.form);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSpinners);
        ɵngcc0.ɵɵadvance(10);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSeconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSeconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.enableMeridian);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.enableMeridian);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSpinners);
    } }, directives: [ɵngcc6.ɵangular_packages_forms_forms_y, ɵngcc6.NgControlStatusGroup, ɵngcc6.FormGroupDirective, ɵngcc1.NgIf, ɵngcc7.MatFormField, ɵngcc8.MatInput, ɵngcc6.DefaultValueAccessor, ɵngcc6.MaxLengthValidator, ɵngcc6.NgControlStatus, ɵngcc6.FormControlName, ɵngcc4.MatButton, ɵngcc9.MatIcon], styles: [".ngx-mat-timepicker{font-size:13px}.ngx-mat-timepicker form{min-width:90px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td{text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer{font-weight:700}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mat-button{border-radius:4px;border-radius:50%;flex-shrink:0;height:36px;line-height:36px;min-width:64px;min-width:0;padding:0;width:36px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-icon-button{height:24px;line-height:24px;width:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-form-field{max-width:20px;text-align:center;width:20px}"], encapsulation: 2 });
/** @nocollapse */
NgxMatTimepickerComponent.ctorParameters = () => [
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef },
    { type: FormBuilder }
];
NgxMatTimepickerComponent.propDecorators = {
    disabled: [{ type: Input }],
    showSpinners: [{ type: Input }],
    stepHour: [{ type: Input }],
    stepMinute: [{ type: Input }],
    stepSecond: [{ type: Input }],
    showSeconds: [{ type: Input }],
    disableMinute: [{ type: Input }],
    enableMeridian: [{ type: Input }],
    defaultTime: [{ type: Input }],
    color: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatTimepickerComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-timepicker',
                template: "<form [formGroup]=\"form\">\r\n  <table class=\"ngx-mat-timepicker-table\">\r\n    <tbody class=\"ngx-mat-timepicker-tbody\">\r\n      <tr *ngIf=\"showSpinners\">\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('hour', true)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td></td>\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('minute', true)\"\r\n            [disabled]=\"disabled || disableMinute\">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button> </td>\r\n        <td></td>\r\n        <td *ngIf=\"showSeconds\">\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('second', true)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-spacer\"></td>\r\n        <td *ngIf=\"enableMeridian\"></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\" formControlName=\"hour\"\r\n              (keydown.ArrowUp)=\"change('hour', true); $event.preventDefault()\"\r\n              (keydown.ArrowDown)=\"change('hour', false); $event.preventDefault()\" (blur)=\"change('hour')\">\r\n          </mat-form-field>\r\n        </td>\r\n        <td class=\"ngx-mat-timepicker-spacer\">&#58;</td>\r\n        <td>\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\"\r\n              formControlName=\"minute\" (keydown.ArrowUp)=\"change('minute', true); $event.preventDefault()\"\r\n              (keydown.ArrowDown)=\"change('minute', false); $event.preventDefault()\" (blur)=\"change('minute')\">\r\n          </mat-form-field>\r\n        </td>\r\n        <td *ngIf=\"showSeconds\" class=\"ngx-mat-timepicker-spacer\">&#58;</td>\r\n        <td *ngIf=\"showSeconds\">\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\"\r\n              formControlName=\"second\" (keydown.ArrowUp)=\"change('second', true); $event.preventDefault()\"\r\n              (keydown.ArrowDown)=\"change('second', false); $event.preventDefault()\" (blur)=\"change('second')\">\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-spacer\"></td>\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-meridian\">\r\n          <button mat-button (click)=\"toggleMeridian()\" mat-stroked-button [color]=\"color\" [disabled]=\"disabled\">\r\n            {{meridian}}\r\n          </button>\r\n        </td>\r\n      </tr>\r\n\r\n      <tr *ngIf=\"showSpinners\">\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('hour', false)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button> </td>\r\n        <td></td>\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('minute', false)\"\r\n            [disabled]=\"disabled || disableMinute\">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button> </td>\r\n        <td *ngIf=\"showSeconds\"></td>\r\n        <td *ngIf=\"showSeconds\">\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('second', false)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-spacer\"></td>\r\n        <td *ngIf=\"enableMeridian\"></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</form>",
                host: {
                    'class': 'ngx-mat-timepicker'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */() => NgxMatTimepickerComponent)),
                        multi: true
                    }
                ],
                exportAs: 'ngxMatTimepicker',
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-mat-timepicker{font-size:13px}.ngx-mat-timepicker form{min-width:90px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td{text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer{font-weight:700}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mat-button{border-radius:4px;border-radius:50%;flex-shrink:0;height:36px;line-height:36px;min-width:64px;min-width:0;padding:0;width:36px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-icon-button{height:24px;line-height:24px;width:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-form-field{max-width:20px;text-align:center;width:20px}"]
            }]
    }], function () { return [{ type: NgxMatDateAdapter, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc6.FormBuilder }]; }, { disabled: [{
            type: Input
        }], showSpinners: [{
            type: Input
        }], stepHour: [{
            type: Input
        }], stepMinute: [{
            type: Input
        }], stepSecond: [{
            type: Input
        }], showSeconds: [{
            type: Input
        }], disableMinute: [{
            type: Input
        }], enableMeridian: [{
            type: Input
        }], color: [{
            type: Input
        }], defaultTime: [{
            type: Input
        }] }); })();
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
 * @fileoverview added by tsickle
 * Generated from: lib/datetime-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate a unique ID for each datepicker instance.
 * @type {?}
 */
let datepickerUid = 0;
// Boilerplate for applying mixins to MatDatepickerContent.
/**
 * \@docs-private
 */
class MatDatepickerContentBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {
    /** @type {?} */
    MatDatepickerContentBase.prototype._elementRef;
}
/** @type {?} */
const _MatDatepickerContentMixinBase = mixinColor(MatDatepickerContentBase);
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * NgxMatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * \@docs-private
 * @template D
 */
class NgxMatDatetimeContent extends _MatDatepickerContentMixinBase {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
    /**
     * Whether or not the selected date is valid (min,max...)
     * @return {?}
     */
    get valid() {
        if (this.datepicker.hideTime)
            return this.datepicker.valid;
        return this._timePicker && this._timePicker.valid && this.datepicker.valid;
    }
    /**
     * @return {?}
     */
    get isViewMonth() {
        if (!this._calendar || this._calendar.currentView == null)
            return true;
        return this._calendar.currentView == 'month';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._calendar.focusActiveCell();
    }
}
NgxMatDatetimeContent.ɵfac = function NgxMatDatetimeContent_Factory(t) { return new (t || NgxMatDatetimeContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgxMatDatetimeContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxMatDatetimeContent, selectors: [["ngx-mat-datetime-content"]], viewQuery: function NgxMatDatetimeContent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgxMatCalendar, true);
        ɵngcc0.ɵɵviewQuery(NgxMatTimepickerComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._calendar = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._timePicker = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-content"], hostVars: 3, hostBindings: function NgxMatDatetimeContent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵsyntheticHostProperty("@transformPanel", "enter");
        ɵngcc0.ɵɵclassProp("mat-datepicker-content-touch", ctx.datepicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["ngxMatDatetimeContent"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 12, consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "selectedChange", "yearSelected", "monthSelected"], [4, "ngIf"], ["class", "time-container", 3, "disable-seconds", 4, "ngIf"], [1, "actions"], ["mat-button", "", "mat-stroked-button", "", "cdkFocusInitial", "", 3, "color", "disabled", "click"], [1, "time-container"], [3, "showSpinners", "showSeconds", "disabled", "stepHour", "stepMinute", "stepSecond", "ngModel", "color", "enableMeridian", "disableMinute", "ngModelChange"]], template: function NgxMatDatetimeContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-mat-calendar", 0);
        ɵngcc0.ɵɵlistener("selectedChange", function NgxMatDatetimeContent_Template_ngx_mat_calendar_selectedChange_0_listener($event) { return ctx.datepicker.select($event); })("yearSelected", function NgxMatDatetimeContent_Template_ngx_mat_calendar_yearSelected_0_listener($event) { return ctx.datepicker._selectYear($event); })("monthSelected", function NgxMatDatetimeContent_Template_ngx_mat_calendar_monthSelected_0_listener($event) { return ctx.datepicker._selectMonth($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(1, NgxMatDatetimeContent_ng_container_1_Template, 6, 3, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._minDate)("maxDate", ctx.datepicker._maxDate)("dateFilter", ctx.datepicker._dateFilter)("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx.datepicker._selected)("dateClass", ctx.datepicker.dateClass)("@fadeInCalendar", "enter");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isViewMonth);
    } }, directives: [NgxMatCalendar, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc4.MatButton, ɵngcc9.MatIcon, NgxMatTimepickerComponent, ɵngcc6.NgControlStatus, ɵngcc6.NgModel], styles: [".mat-datepicker-content{border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);display:block}.mat-datepicker-content .mat-calendar{width:296px}.mat-datepicker-content .time-container{display:flex;justify-content:center;padding-top:5px;position:relative}.mat-datepicker-content .time-container.disable-seconds .ngx-mat-timepicker .table{margin-left:9px}.mat-datepicker-content .time-container:before{background-color:rgba(0,0,0,.12);content:\"\";height:1px;left:0;position:absolute;right:0;top:0}.mat-datepicker-content .actions{display:flex;justify-content:flex-end;padding:5px 15px 10px}"], encapsulation: 2, data: { animation: [
            matDatepickerAnimations.transformPanel,
            matDatepickerAnimations.fadeInCalendar,
        ] }, changeDetection: 0 });
/** @nocollapse */
NgxMatDatetimeContent.ctorParameters = () => [
    { type: ElementRef }
];
NgxMatDatetimeContent.propDecorators = {
    _calendar: [{ type: ViewChild, args: [NgxMatCalendar,] }],
    _timePicker: [{ type: ViewChild, args: [NgxMatTimepickerComponent,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatDatetimeContent, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-datetime-content',
                template: "<ngx-mat-calendar cdkTrapFocus [id]=\"datepicker.id\" [ngClass]=\"datepicker.panelClass\" [startAt]=\"datepicker.startAt\"\r\n    [startView]=\"datepicker.startView\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\"\r\n    [dateFilter]=\"datepicker._dateFilter\" [headerComponent]=\"datepicker.calendarHeaderComponent\"\r\n    [selected]=\"datepicker._selected\" [dateClass]=\"datepicker.dateClass\" [@fadeInCalendar]=\"'enter'\"\r\n    (selectedChange)=\"datepicker.select($event)\" (yearSelected)=\"datepicker._selectYear($event)\"\r\n    (monthSelected)=\"datepicker._selectMonth($event)\">\r\n</ngx-mat-calendar>\r\n<ng-container *ngIf=\"isViewMonth\">\r\n    <div *ngIf=\"!datepicker._hideTime\" class=\"time-container\" [class.disable-seconds]=\"!datepicker._showSeconds\">\r\n        <ngx-mat-timepicker [showSpinners]=\"datepicker._showSpinners\" [showSeconds]=\"datepicker._showSeconds\"\r\n            [disabled]=\"datepicker._disabled\" [stepHour]=\"datepicker._stepHour\" [stepMinute]=\"datepicker._stepMinute\"\r\n            [stepSecond]=\"datepicker._stepSecond\" [(ngModel)]=\"datepicker._selected\" [color]=\"datepicker._color\"\r\n            [enableMeridian]=\"datepicker._enableMeridian\" [disableMinute]=\"datepicker._disableMinute\">\r\n        </ngx-mat-timepicker>\r\n    </div>\r\n    <div class=\"actions\">\r\n        <button mat-button (click)=\"datepicker.ok()\" mat-stroked-button [color]=\"datepicker._color\" cdkFocusInitial\r\n            [disabled]=\"!valid\">\r\n            <mat-icon>done</mat-icon>\r\n        </button>\r\n    </div>\r\n</ng-container>",
                host: {
                    'class': 'mat-datepicker-content',
                    '[@transformPanel]': '"enter"',
                    '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
                },
                animations: [
                    matDatepickerAnimations.transformPanel,
                    matDatepickerAnimations.fadeInCalendar,
                ],
                exportAs: 'ngxMatDatetimeContent',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['color'],
                styles: [".mat-datepicker-content{border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);display:block}.mat-datepicker-content .mat-calendar{width:296px}.mat-datepicker-content .time-container{display:flex;justify-content:center;padding-top:5px;position:relative}.mat-datepicker-content .time-container.disable-seconds .ngx-mat-timepicker .table{margin-left:9px}.mat-datepicker-content .time-container:before{background-color:rgba(0,0,0,.12);content:\"\";height:1px;left:0;position:absolute;right:0;top:0}.mat-datepicker-content .actions{display:flex;justify-content:flex-end;padding:5px 15px 10px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { _calendar: [{
            type: ViewChild,
            args: [NgxMatCalendar]
        }], _timePicker: [{
            type: ViewChild,
            args: [NgxMatTimepickerComponent]
        }] }); })();
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
class NgxMatDatetimePicker {
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
    constructor(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
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
        this.yearSelected = new EventEmitter();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new EventEmitter();
        /**
         * Emits when the datepicker has been opened.
         */
        this.openedStream = new EventEmitter();
        /**
         * Emits when the datepicker has been closed.
         */
        this.closedStream = new EventEmitter();
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
        this.id = `mat-datepicker-${datepickerUid++}`;
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */
        this._focusedElementBeforeOpen = null;
        /**
         * Subscription to value changes in the associated input element.
         */
        this._inputSubscription = Subscription.EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */
        this._stateChanges = new Subject();
        /**
         * Emits new selected date when selected date changes.
         */
        this._selectedChanged = new Subject();
        /**
         * The form control validator for the min date.
         */
        this._minValidator = (/**
         * @return {?}
         */
        () => {
            return (!this._minDate || !this._selected ||
                this._dateAdapter.compareDateWithTime(this._minDate, this._selected, this.showSeconds) <= 0) ?
                null : { 'matDatetimePickerMin': { 'min': this._minDate, 'actual': this._selected } };
        });
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = (/**
         * @return {?}
         */
        () => {
            return (!this._maxDate || !this._selected ||
                this._dateAdapter.compareDateWithTime(this._maxDate, this._selected, this.showSeconds) >= 0) ?
                null : { 'matDatetimePickerMax': { 'max': this._maxDate, 'actual': this._selected } };
        });
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxMatDateAdapter');
        }
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * The date to open the calendar to initially.
     * @return {?}
     */
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startAt(value) {
        this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * Color palette to use on the datepicker's calendar.
     * @return {?}
     */
    get color() {
        return this._color ||
            (this._datepickerInput ? this._datepickerInput._getThemePalette() : 'primary');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._color = value;
    }
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     * @return {?}
     */
    get touchUi() { return this._touchUi; }
    /**
     * @param {?} value
     * @return {?}
     */
    set touchUi(value) {
        this._touchUi = coerceBooleanProperty(value);
    }
    /**
     * @return {?}
     */
    get hideTime() { return this._hideTime; }
    /**
     * @param {?} value
     * @return {?}
     */
    set hideTime(value) {
        this._hideTime = coerceBooleanProperty(value);
    }
    /**
     * Whether the datepicker pop-up should be disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled === undefined && this._datepickerInput ?
            this._datepickerInput.disabled : !!this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._stateChanges.next(newValue);
        }
    }
    /**
     * Whether the calendar is open.
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) { value ? this.open() : this.close(); }
    /**
     * Whether the timepicker'spinners is shown.
     * @return {?}
     */
    get showSpinners() { return this._showSpinners; }
    /**
     * @param {?} value
     * @return {?}
     */
    set showSpinners(value) { this._showSpinners = value; }
    /**
     * Whether the second part is disabled.
     * @return {?}
     */
    get showSeconds() { return this._showSeconds; }
    /**
     * @param {?} value
     * @return {?}
     */
    set showSeconds(value) { this._showSeconds = value; }
    /**
     * Step hour
     * @return {?}
     */
    get stepHour() { return this._stepHour; }
    /**
     * @param {?} value
     * @return {?}
     */
    set stepHour(value) { this._stepHour = value; }
    /**
     * Step minute
     * @return {?}
     */
    get stepMinute() { return this._stepMinute; }
    /**
     * @param {?} value
     * @return {?}
     */
    set stepMinute(value) { this._stepMinute = value; }
    /**
     * Step second
     * @return {?}
     */
    get stepSecond() { return this._stepSecond; }
    /**
     * @param {?} value
     * @return {?}
     */
    set stepSecond(value) { this._stepSecond = value; }
    /**
     * Enable meridian
     * @return {?}
     */
    get enableMeridian() { return this._enableMeridian; }
    /**
     * @param {?} value
     * @return {?}
     */
    set enableMeridian(value) { this._enableMeridian = value; }
    /**
     * disable minute
     * @return {?}
     */
    get disableMinute() { return this._disableMinute; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disableMinute(value) { this._disableMinute = value; }
    /**
     * Step second
     * @return {?}
     */
    get defaultTime() { return this._defaultTime; }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultTime(value) { this._defaultTime = value; }
    /**
     * The currently selected date.
     * @return {?}
     */
    get _selected() { return this._validSelected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set _selected(value) { this._validSelected = value; }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get _minDate() {
        return this._datepickerInput && this._datepickerInput.min;
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get _maxDate() {
        return this._datepickerInput && this._datepickerInput.max;
    }
    /**
     * @return {?}
     */
    get valid() {
        /** @type {?} */
        const minValidators = this._minValidator();
        /** @type {?} */
        const maxValidators = this._maxValidator();
        return minValidators == null && maxValidators == null;
    }
    /**
     * @return {?}
     */
    get _dateFilter() {
        return this._datepickerInput && this._datepickerInput._dateFilter;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.close();
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupComponentRef = null;
        }
        this._inputSubscription.unsubscribe();
        this._stateChanges.complete();
    }
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    select(date) {
        this._dateAdapter.copyTime(date, this._selected);
        this._selected = date;
    }
    /**
     * Emits the selected year in multiyear view
     * @param {?} normalizedYear
     * @return {?}
     */
    _selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /**
     * Emits selected month in year view
     * @param {?} normalizedMonth
     * @return {?}
     */
    _selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * OK button handler and close
     * @return {?}
     */
    ok() {
        /** @type {?} */
        const cloned = this._dateAdapter.clone(this._selected);
        this._selectedChanged.next(cloned);
        this.close();
    }
    /**
     * Cancel and close
     * @return {?}
     */
    cancel() {
        this._selected = this._rawValue;
        this.close();
    }
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    _registerInput(input) {
        if (this._datepickerInput) {
            throw Error('A NgxMatDatepicker can only be associated with a single input.');
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            (value) => this._selected = value));
    }
    /**
     * Open the calendar.
     * @return {?}
     */
    open() {
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
    }
    /**
     * Close the calendar.
     * @return {?}
     */
    close() {
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
        const completeClose = (/**
         * @return {?}
         */
        () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
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
    }
    /**
     * Open the calendar as a dialog.
     * @private
     * @return {?}
     */
    _openAsDialog() {
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
        this._dialogRef.afterClosed().subscribe((/**
         * @return {?}
         */
        () => this.close()));
        this._dialogRef.componentInstance.datepicker = this;
        this._setColor();
    }
    /**
     * Open the calendar as a popup.
     * @private
     * @return {?}
     */
    _openAsPopup() {
        if (!this._calendarPortal) {
            this._calendarPortal = new ComponentPortal(NgxMatDatetimeContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
            this._popupComponentRef.instance.datepicker = this;
            this._setColor();
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe((/**
             * @return {?}
             */
            () => {
                this._popupRef.updatePosition();
            }));
        }
    }
    /**
     * Create the popup.
     * @private
     * @return {?}
     */
    _createPopup() {
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: this._hasBackdrop,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === ESCAPE ||
                (this._datepickerInput && event.altKey && event.keyCode === UP_ARROW);
        })))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event) {
                event.preventDefault();
            }
            (this._hasBackdrop && event) ? this.cancel() : this.close();
        }));
    }
    /**
     * Create the popup PositionStrategy.
     * @private
     * @return {?}
     */
    _createPopupPositionStrategy() {
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
    }
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    _getValidDateOrNull(obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    }
    /**
     * Passes the current theme color along to the calendar overlay.
     * @private
     * @return {?}
     */
    _setColor() {
        /** @type {?} */
        const color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    }
}
NgxMatDatetimePicker.ɵfac = function NgxMatDatetimePicker_Factory(t) { return new (t || NgxMatDatetimePicker)(ɵngcc0.ɵɵdirectiveInject(ɵngcc10.MatDialog), ɵngcc0.ɵɵdirectiveInject(ɵngcc11.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(MAT_DATEPICKER_SCROLL_STRATEGY), ɵngcc0.ɵɵdirectiveInject(NgxMatDateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8)); };
NgxMatDatetimePicker.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxMatDatetimePicker, selectors: [["ngx-mat-datetime-picker"]], inputs: { startView: "startView", startAt: "startAt", color: "color", touchUi: "touchUi", hideTime: "hideTime", disabled: "disabled", opened: "opened", showSpinners: "showSpinners", showSeconds: "showSeconds", stepHour: "stepHour", stepMinute: "stepMinute", stepSecond: "stepSecond", enableMeridian: "enableMeridian", disableMinute: "disableMinute", defaultTime: "defaultTime", calendarHeaderComponent: "calendarHeaderComponent", panelClass: "panelClass", dateClass: "dateClass" }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected", openedStream: "opened", closedStream: "closed" }, exportAs: ["ngxMatDatetimePicker"], decls: 0, vars: 0, template: function NgxMatDatetimePicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgxMatDatetimePicker.ctorParameters = () => [
    { type: MatDialog },
    { type: Overlay },
    { type: NgZone },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NgxMatDatetimePicker.propDecorators = {
    calendarHeaderComponent: [{ type: Input }],
    startAt: [{ type: Input }],
    startView: [{ type: Input }],
    color: [{ type: Input }],
    touchUi: [{ type: Input }],
    hideTime: [{ type: Input }],
    disabled: [{ type: Input }],
    yearSelected: [{ type: Output }],
    monthSelected: [{ type: Output }],
    panelClass: [{ type: Input }],
    dateClass: [{ type: Input }],
    openedStream: [{ type: Output, args: ['opened',] }],
    closedStream: [{ type: Output, args: ['closed',] }],
    opened: [{ type: Input }],
    showSpinners: [{ type: Input }],
    showSeconds: [{ type: Input }],
    stepHour: [{ type: Input }],
    stepMinute: [{ type: Input }],
    stepSecond: [{ type: Input }],
    enableMeridian: [{ type: Input }],
    disableMinute: [{ type: Input }],
    defaultTime: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatDatetimePicker, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-datetime-picker',
                template: '',
                exportAs: 'ngxMatDatetimePicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc10.MatDialog }, { type: ɵngcc11.Overlay }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DATEPICKER_SCROLL_STRATEGY]
            }] }, { type: NgxMatDateAdapter, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { startView: [{
            type: Input
        }], yearSelected: [{
            type: Output
        }], monthSelected: [{
            type: Output
        }], openedStream: [{
            type: Output,
            args: ['opened']
        }], closedStream: [{
            type: Output,
            args: ['closed']
        }], startAt: [{
            type: Input
        }], color: [{
            type: Input
        }], touchUi: [{
            type: Input
        }], hideTime: [{
            type: Input
        }], disabled: [{
            type: Input
        }], opened: [{
            type: Input
        }], showSpinners: [{
            type: Input
        }], showSeconds: [{
            type: Input
        }], stepHour: [{
            type: Input
        }], stepMinute: [{
            type: Input
        }], stepSecond: [{
            type: Input
        }], enableMeridian: [{
            type: Input
        }], disableMinute: [{
            type: Input
        }], defaultTime: [{
            type: Input
        }], calendarHeaderComponent: [{
            type: Input
        }], panelClass: [{
            type: Input
        }], dateClass: [{
            type: Input
        }] }); })();
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
const MAT_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NgxMatDatetimeInput)),
    multi: true
};
/**
 * \@docs-private
 * @type {?}
 */
const MAT_DATEPICKER_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NgxMatDatetimeInput)),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatetimePickerInputEvent instead.
 * @template D
 */
class MatDatetimePickerInputEvent {
    /**
     * @param {?} target
     * @param {?} targetElement
     */
    constructor(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
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
class NgxMatDatetimeInput {
    /**
     * @param {?} _elementRef
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     * @param {?} _formField
     */
    constructor(_elementRef, _dateAdapter, _dateFormats, _formField) {
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */
        this.dateChange = new EventEmitter();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */
        this.dateInput = new EventEmitter();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */
        this._valueChange = new EventEmitter();
        /**
         * Emits when the disabled state has changed
         */
        this._stateChanges = new EventEmitter();
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this._cvaOnChange = (/**
         * @return {?}
         */
        () => { });
        this._validatorOnChange = (/**
         * @return {?}
         */
        () => { });
        this._datepickerSubscription = Subscription.EMPTY;
        this._localeSubscription = Subscription.EMPTY;
        /**
         * The form control validator for whether the input parses.
         */
        this._parseValidator = (/**
         * @return {?}
         */
        () => {
            return this._lastValueValid ?
                null : { 'matDatetimePickerParse': { 'text': this._elementRef.nativeElement.value } };
        });
        /**
         * The form control validator for the min date.
         */
        this._minValidator = (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const controlValue = this._getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            return (!this.min || !controlValue ||
                this._dateAdapter.compareDateWithTime(this.min, controlValue, this._datepicker.showSeconds) <= 0) ?
                null : { 'matDatetimePickerMin': { 'min': this.min, 'actual': controlValue } };
        });
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const controlValue = this._getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            return (!this.max || !controlValue ||
                this._dateAdapter.compareDateWithTime(this.max, controlValue, this._datepicker.showSeconds) >= 0) ?
                null : { 'matDatetimePickerMax': { 'max': this.max, 'actual': controlValue } };
        });
        /**
         * The form control validator for the date filter.
         */
        this._filterValidator = (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const controlValue = this._getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            return !this._dateFilter || !controlValue || this._dateFilter(controlValue) ?
                null : { 'matDatetimePickerFilter': true };
        });
        /**
         * The combined form control validator for this input.
         */
        this._validator = Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
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
        this._localeSubscription = _dateAdapter.localeChanges.subscribe((/**
         * @return {?}
         */
        () => {
            this.value = this.value;
        }));
    }
    /**
     * The datepicker that this input is associated with.
     * @param {?} value
     * @return {?}
     */
    set ngxMatDatetimePicker(value) {
        if (!value) {
            return;
        }
        this._datepicker = value;
        this._datepicker._registerInput(this);
        this._datepickerSubscription.unsubscribe();
        this._datepickerSubscription = this._datepicker._selectedChanged.subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        (selected) => {
            this.value = selected;
            this._cvaOnChange(selected);
            this._onTouched();
            this.dateInput.emit(new MatDatetimePickerInputEvent(this, this._elementRef.nativeElement));
            this.dateChange.emit(new MatDatetimePickerInputEvent(this, this._elementRef.nativeElement));
        }));
    }
    /**
     * Function that can be used to filter out dates within the datepicker.
     * @param {?} value
     * @return {?}
     */
    set ngxMatDatetimePickerFilter(value) {
        this._dateFilter = value;
        this._validatorOnChange();
    }
    /**
     * The value of the input.
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        value = this._dateAdapter.deserialize(value);
        this._lastValueValid = !value || this._dateAdapter.isValid(value);
        value = this._getValidDateOrNull(value);
        /** @type {?} */
        const oldDate = this.value;
        this._value = value;
        this._formatValue(value);
        if (!this._dateAdapter.sameDate(oldDate, value)) {
            this._valueChange.emit(value);
        }
    }
    /**
     * The minimum valid date.
     * @return {?}
     */
    get min() { return this._min; }
    /**
     * @param {?} value
     * @return {?}
     */
    set min(value) {
        this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        this._validatorOnChange();
    }
    /**
     * The maximum valid date.
     * @return {?}
     */
    get max() { return this._max; }
    /**
     * @param {?} value
     * @return {?}
     */
    set max(value) {
        this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        this._validatorOnChange();
    }
    /**
     * Whether the datepicker-input is disabled.
     * @return {?}
     */
    get disabled() { return !!this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = value != null && `${value}` !== 'false';
        /** @type {?} */
        const element = this._elementRef.nativeElement;
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._datepickerSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._stateChanges.complete();
    }
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    /**
     * \@docs-private
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this._validator ? this._validator(c) : null;
    }
    /**
     * @deprecated
     * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     * @return {?}
     */
    getPopupConnectionElementRef() {
        return this.getConnectedOverlayOrigin();
    }
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onKeydown(event) {
        /** @type {?} */
        const isAltDownArrow = event.altKey && event.keyCode === DOWN_ARROW;
        if (this._datepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._datepicker.open();
            event.preventDefault();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _onInput(value) {
        /** @type {?} */
        const lastValueWasValid = this._lastValueValid;
        /** @type {?} */
        let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
        this._lastValueValid = !date || this._dateAdapter.isValid(date);
        date = this._getValidDateOrNull(date);
        /** @type {?} */
        const isSameTime = this._dateAdapter.isSameTime(date, this._value);
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
    }
    /**
     * @return {?}
     */
    _onChange() {
        this.dateChange.emit(new MatDatetimePickerInputEvent(this, this._elementRef.nativeElement));
    }
    /**
     * Returns the palette used by the input's form field, if any.
     * @return {?}
     */
    _getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /**
     * Handles blur events on the input.
     * @return {?}
     */
    _onBlur() {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    }
    /**
     * Handles focus events on the input.
     * @return {?}
     */
    _onFocus() {
        // Close datetime picker if opened
        if (this._datepicker && this._datepicker.opened) {
            this._datepicker.cancel();
        }
    }
    /**
     * Formats a value and sets it on the input element.
     * @private
     * @param {?} value
     * @return {?}
     */
    _formatValue(value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    }
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    _getValidDateOrNull(obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    }
}
NgxMatDatetimeInput.ɵfac = function NgxMatDatetimeInput_Factory(t) { return new (t || NgxMatDatetimeInput)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxMatDateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(NGX_MAT_DATE_FORMATS, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.MatFormField, 8)); };
NgxMatDatetimeInput.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgxMatDatetimeInput, selectors: [["input", "ngxMatDatetimePicker", ""]], hostVars: 5, hostBindings: function NgxMatDatetimeInput_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function NgxMatDatetimeInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function NgxMatDatetimeInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function NgxMatDatetimeInput_blur_HostBindingHandler() { return ctx._onBlur(); })("focus", function NgxMatDatetimeInput_focus_HostBindingHandler() { return ctx._onFocus(); })("keydown", function NgxMatDatetimeInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null);
    } }, inputs: { value: "value", ngxMatDatetimePicker: "ngxMatDatetimePicker", ngxMatDatetimePickerFilter: "ngxMatDatetimePickerFilter", min: "min", max: "max", disabled: "disabled" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, exportAs: ["ngxMatDatetimePickerInput"], features: [ɵngcc0.ɵɵProvidersFeature([
            MAT_DATEPICKER_VALUE_ACCESSOR,
            MAT_DATEPICKER_VALIDATORS,
            { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: NgxMatDatetimeInput },
        ])] });
/** @nocollapse */
NgxMatDatetimeInput.ctorParameters = () => [
    { type: ElementRef },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
    { type: MatFormField, decorators: [{ type: Optional }] }
];
NgxMatDatetimeInput.propDecorators = {
    ngxMatDatetimePicker: [{ type: Input }],
    ngxMatDatetimePickerFilter: [{ type: Input }],
    value: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    disabled: [{ type: Input }],
    dateChange: [{ type: Output }],
    dateInput: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatDatetimeInput, [{
        type: Directive,
        args: [{
                selector: 'input[ngxMatDatetimePicker]',
                providers: [
                    MAT_DATEPICKER_VALUE_ACCESSOR,
                    MAT_DATEPICKER_VALIDATORS,
                    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: NgxMatDatetimeInput },
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
                    '(keydown)': '_onKeydown($event)'
                },
                exportAs: 'ngxMatDatetimePickerInput'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: NgxMatDateAdapter, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NGX_MAT_DATE_FORMATS]
            }] }, { type: ɵngcc7.MatFormField, decorators: [{
                type: Optional
            }] }]; }, { dateChange: [{
            type: Output
        }], dateInput: [{
            type: Output
        }], value: [{
            type: Input
        }], ngxMatDatetimePicker: [{
            type: Input
        }], ngxMatDatetimePickerFilter: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
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
class NgxMatTimepickerModule {
}
NgxMatTimepickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxMatTimepickerModule });
NgxMatTimepickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxMatTimepickerModule_Factory(t) { return new (t || NgxMatTimepickerModule)(); }, imports: [[
            CommonModule,
            MatInputModule,
            ReactiveFormsModule,
            FormsModule,
            MatIconModule,
            MatButtonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxMatTimepickerModule, { declarations: function () { return [NgxMatTimepickerComponent]; }, imports: function () { return [CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatButtonModule]; }, exports: function () { return [NgxMatTimepickerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatTimepickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatInputModule,
                    ReactiveFormsModule,
                    FormsModule,
                    MatIconModule,
                    MatButtonModule,
                ],
                exports: [
                    NgxMatTimepickerComponent
                ],
                declarations: [
                    NgxMatTimepickerComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/datetime-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMatDatetimePickerModule {
}
NgxMatDatetimePickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxMatDatetimePickerModule });
NgxMatDatetimePickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxMatDatetimePickerModule_Factory(t) { return new (t || NgxMatDatetimePickerModule)(); }, providers: [
        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
        {
            provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: DefaultNgxMatCalendarRangeStrategy
        }
    ], imports: [[
            CommonModule,
            MatDatepickerModule,
            MatDialogModule,
            PortalModule,
            FormsModule,
            MatIconModule,
            MatButtonModule,
            MatInputModule,
            NgxMatTimepickerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxMatDatetimePickerModule, { declarations: function () { return [NgxMatDatetimePicker, NgxMatDatetimeContent, NgxMatDatetimeInput, NgxMatCalendar, NgxMatMonthView, NgxMatCalendarBody, NgxMatYearView, NgxMatMultiYearView, NgxMatCalendarHeader]; }, imports: function () { return [CommonModule,
        MatDatepickerModule,
        MatDialogModule,
        PortalModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule, NgxMatTimepickerModule]; }, exports: function () { return [NgxMatDatetimePicker, NgxMatDatetimeInput, NgxMatCalendar, NgxMatMonthView, NgxMatCalendarBody, NgxMatYearView, NgxMatMultiYearView, NgxMatCalendarHeader]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatDatetimePickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    PortalModule,
                    FormsModule,
                    MatIconModule,
                    MatButtonModule,
                    MatInputModule,
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
                    MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
                    {
                        provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
                        useClass: DefaultNgxMatCalendarRangeStrategy
                    }
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/native-date-adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(mmalerba): Remove when we no longer support safari 9.
/**
 * Whether the browser supports the Intl API.
 * @type {?}
 */
let SUPPORTS_INTL_API;
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
const DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
const ɵ0 = /**
 * @param {?} i
 * @return {?}
 */
i => String(i + 1);
/**
 * The default date names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DATE_NAMES = range(31, (ɵ0));
/**
 * The default day of the week names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DAY_OF_WEEK_NAMES = {
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
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts the native JS Date for use with cdk-based components that work with dates.
 */
class NgxMatNativeDateAdapter extends NgxMatDateAdapter {
    /**
     * @param {?} matDateLocale
     * @param {?} platform
     */
    constructor(matDateLocale, platform) {
        super();
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
        this.useUtcForDisplay = true;
        super.setLocale(matDateLocale);
        // IE does its own time zone correction, so we disable this on IE.
        this.useUtcForDisplay = !platform.TRIDENT;
        this._clampDate = platform.TRIDENT || platform.EDGE;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYear(date) {
        return date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonth(date) {
        return date.getMonth();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
        return date.getDate();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayOfWeek(date) {
        return date.getDay();
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getMonthNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
            return range(12, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1)))));
        }
        return DEFAULT_MONTH_NAMES[style];
    }
    /**
     * @return {?}
     */
    getDateNames() {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
            return range(31, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DATE_NAMES;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getDayOfWeekNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
            return range(7, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYearName(date) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getNumDaysInMonth(date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
        return new Date(date.getTime());
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    createDate(year, month, date) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        /** @type {?} */
        let result = this._createDateWithOverflow(year, month, date);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() != month) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    /**
     * @return {?}
     */
    today() {
        return new Date();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    }
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    format(date, displayFormat) {
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
            const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    }
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
    }
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    addCalendarMonths(date, months) {
        /** @type {?} */
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    }
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toIso8601(date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    deserialize(value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                /** @type {?} */
                let date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return super.deserialize(value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isDateInstance(obj) {
        return obj instanceof Date;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isValid(date) {
        return !isNaN(date.getTime());
    }
    /**
     * @return {?}
     */
    invalid() {
        return new Date(NaN);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getHour(date) {
        return date.getHours();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMinute(date) {
        return date.getMinutes();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getSecond(date) {
        return date.getSeconds();
    }
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    setHour(date, value) {
        date.setHours(value);
    }
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    setMinute(date, value) {
        date.setMinutes(value);
    }
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    setSecond(date, value) {
        date.setSeconds(value);
    }
    /**
     * Creates a date but allows the month and date to overflow.
     * @private
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    _createDateWithOverflow(year, month, date) {
        /** @type {?} */
        const result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    }
    /**
     * Pads a number to make it two digits.
     * @private
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    _2digit(n) {
        return ('00' + n).slice(-2);
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @private
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    _stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, '');
    }
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
    _format(dtf, date) {
        /** @type {?} */
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
    }
}
NgxMatNativeDateAdapter.ɵfac = function NgxMatNativeDateAdapter_Factory(t) { return new (t || NgxMatNativeDateAdapter)(ɵngcc0.ɵɵinject(MAT_DATE_LOCALE, 8), ɵngcc0.ɵɵinject(ɵngcc12.Platform)); };
NgxMatNativeDateAdapter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgxMatNativeDateAdapter, factory: NgxMatNativeDateAdapter.ɵfac });
/** @nocollapse */
NgxMatNativeDateAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
    { type: Platform }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatNativeDateAdapter, [{
        type: Injectable
    }], function () { return [{ type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_DATE_LOCALE]
            }] }, { type: ɵngcc12.Platform }]; }, null); })();
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
const DEFAULT_DATE_INPUT = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"
};
/** @type {?} */
const NGX_MAT_NATIVE_DATE_FORMATS = {
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
class NgxNativeDateModule {
}
NgxNativeDateModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxNativeDateModule });
NgxNativeDateModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxNativeDateModule_Factory(t) { return new (t || NgxNativeDateModule)(); }, providers: [
        { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter },
    ], imports: [[PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxNativeDateModule, { imports: function () { return [PlatformModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxNativeDateModule, [{
        type: NgModule,
        args: [{
                imports: [PlatformModule],
                providers: [
                    { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter },
                ]
            }]
    }], null, null); })();
const ɵ0$1 = NGX_MAT_NATIVE_DATE_FORMATS;
class NgxMatNativeDateModule {
}
NgxMatNativeDateModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxMatNativeDateModule });
NgxMatNativeDateModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxMatNativeDateModule_Factory(t) { return new (t || NgxMatNativeDateModule)(); }, providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: ɵ0$1 }], imports: [[NgxNativeDateModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxMatNativeDateModule, { imports: [NgxNativeDateModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatNativeDateModule, [{
        type: NgModule,
        args: [{
                imports: [NgxNativeDateModule],
                providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: ɵ0$1 }]
            }]
    }], null, null); })();

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

export { DefaultNgxMatCalendarRangeStrategy, MAT_DATEPICKER_VALIDATORS, MAT_DATEPICKER_VALUE_ACCESSOR, MatDatetimePickerInputEvent, NGX_MAT_DATE_FORMATS, NGX_MAT_DATE_RANGE_SELECTION_STRATEGY, NGX_MAT_NATIVE_DATE_FORMATS, NgxMatCalendar, NgxMatCalendarBody, NgxMatCalendarCell, NgxMatCalendarHeader, NgxMatDateAdapter, NgxMatDatetimeContent, NgxMatDatetimeInput, NgxMatDatetimePicker, NgxMatDatetimePickerModule, NgxMatMonthView, NgxMatMultiYearView, NgxMatNativeDateAdapter, NgxMatNativeDateModule, NgxMatTimepickerComponent, NgxMatTimepickerModule, NgxMatYearView, NgxNativeDateModule, getActiveOffset, isSameMultiYearView, yearsPerPage, yearsPerRow };

//# sourceMappingURL=angular-material-components-datetime-picker.js.map