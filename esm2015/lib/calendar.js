/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { NgxMatDateAdapter } from './core/date-adapter';
import { NGX_MAT_DATE_FORMATS } from './core/date-formats';
import { NgxMatMonthView } from './month-view';
import { getActiveOffset, isSameMultiYearView, NgxMatMultiYearView, yearsPerPage } from './multi-year-view';
import { createMissingDateImplError, formatYearRange } from './utils/date-utils';
import { NgxMatYearView } from './year-view';
/**
 * Default header for NgxMatCalendar
 * @template D
 */
export class NgxMatCalendarHeader {
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
NgxMatCalendarHeader.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-calendar-header',
                template: "<div class=\"mat-calendar-header\">\r\n  <div class=\"mat-calendar-controls\">\r\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\r\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\r\n            cdkAriaLive=\"polite\">\r\n      {{periodButtonText}}\r\n      <div class=\"mat-calendar-arrow\"\r\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\r\n    </button>\r\n\r\n    <div class=\"mat-calendar-spacer\"></div>\r\n\r\n    <ng-content></ng-content>\r\n\r\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\r\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\r\n            [attr.aria-label]=\"prevButtonLabel\">\r\n    </button>\r\n\r\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\r\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\r\n            [attr.aria-label]=\"nextButtonLabel\">\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                exportAs: 'ngxMatCalendarHeader',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
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
export class NgxMatCalendar {
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
NgxMatCalendar.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-calendar',
                template: "\r\n<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\r\n\r\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\r\n  <ngx-mat-month-view\r\n      *ngSwitchCase=\"'month'\"\r\n      [(activeDate)]=\"activeDate\"\r\n      [selected]=\"selected\"\r\n      [dateFilter]=\"dateFilter\"\r\n      [maxDate]=\"maxDate\"\r\n      [minDate]=\"minDate\"\r\n      [dateClass]=\"dateClass\"\r\n      (selectedChange)=\"_dateSelected($event)\"\r\n      (_userSelection)=\"_userSelected()\">\r\n  </ngx-mat-month-view>\r\n\r\n  <ngx-mat-year-view\r\n      *ngSwitchCase=\"'year'\"\r\n      [(activeDate)]=\"activeDate\"\r\n      [selected]=\"selected\"\r\n      [dateFilter]=\"dateFilter\"\r\n      [maxDate]=\"maxDate\"\r\n      [minDate]=\"minDate\"\r\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\r\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\r\n  </ngx-mat-year-view>\r\n\r\n  <ngx-mat-multi-year-view\r\n      *ngSwitchCase=\"'multi-year'\"\r\n      [(activeDate)]=\"activeDate\"\r\n      [selected]=\"selected\"\r\n      [dateFilter]=\"dateFilter\"\r\n      [maxDate]=\"maxDate\"\r\n      [minDate]=\"minDate\"\r\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\r\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\r\n  </ngx-mat-multi-year-view>\r\n</div>\r\n",
                host: {
                    'class': 'mat-calendar',
                },
                exportAs: 'ngxMatCalendar',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0}.mat-calendar-content{outline:none;padding:0 8px 8px}.mat-calendar-controls{display:flex;margin:5% calc(4.71429% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-top-style:solid;border-top-width:5px;display:inline-block;height:0;margin:0 0 0 5px;vertical-align:middle;width:0}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button:after,.mat-calendar-previous-button:after{border:solid;border-width:2px 0 0;bottom:0;content:\"\";left:0;margin:15.5px;position:absolute;right:0;top:0}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button:after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button:after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-collapse:collapse;border-spacing:0;width:100%}.mat-calendar-table-header th{padding:0 0 8px;text-align:center}.mat-calendar-table-header-divider{height:1px;position:relative}.mat-calendar-table-header-divider:after{content:\"\";height:1px;left:-8px;position:absolute;right:-8px;top:0}"]
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXRldGltZS1waWNrZXIvc3JjL2xpYi9jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUF5QixNQUFNLHFCQUFxQixDQUFDO0FBQzdFLE9BQU8sRUFBc0MsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBd0IsUUFBUSxFQUFFLE1BQU0sRUFBaUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hQLE9BQU8sRUFBNkIsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQXFCLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQWdCN0MsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7SUFDL0IsWUFBb0IsS0FBd0IsRUFDTyxRQUEyQixFQUN4RCxZQUFrQyxFQUNKLFlBQStCLEVBQ2pGLGlCQUFvQztRQUpsQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUNPLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBQ3hELGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUNKLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUdqRixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsRUFBQyxDQUFDO0lBQy9FLENBQUM7Ozs7O0lBR0QsSUFBSSxnQkFBZ0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxPQUFPLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWTtpQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztpQkFDMUUsaUJBQWlCLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUksTUFBTSxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNoRTs7Ozs7Y0FLSyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7O2NBQ2hFLGFBQWEsR0FBRyxVQUFVLEdBQUcsZUFBZSxDQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOztjQUN0RixhQUFhLEdBQUcsYUFBYSxHQUFHLFlBQVksR0FBRyxDQUFDOztjQUNoRCxXQUFXLEdBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Y0FDNUUsV0FBVyxHQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEYsT0FBTyxlQUFlLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFHRCxJQUFJLGVBQWU7UUFDakIsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWM7WUFDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTtZQUNoQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7U0FDNUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBR0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjO1lBQ2xDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDaEMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCO1NBQzVDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUdELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzVGLENBQUM7Ozs7O0lBR0QsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUNuRixDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFHRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUN2RCxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFHRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQzNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBR0QsV0FBVztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDM0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7Ozs7SUFHTyxXQUFXLENBQUMsS0FBUSxFQUFFLEtBQVE7UUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxPQUFPLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxNQUFNLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3RTtRQUNELHlDQUF5QztRQUN6QyxPQUFPLG1CQUFtQixDQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7WUFwSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLGlpQ0FBbUM7Z0JBQ25DLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQXRCbUMsaUJBQWlCO1lBeUJVLGNBQWMsdUJBQXhFLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxFQUFDO1lBdkJuQyxpQkFBaUIsdUJBd0JyQixRQUFROzRDQUNSLFFBQVEsWUFBSSxNQUFNLFNBQUMsb0JBQW9CO1lBNUIwQixpQkFBaUI7Ozs7Ozs7SUF5QnpFLHFDQUFnQzs7SUFDMUMsd0NBQTRFOzs7OztJQUM1RSw0Q0FBc0Q7Ozs7O0lBQ3RELDRDQUFpRjs7Ozs7OztBQTJIckYsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUE4R3pCLFlBQVksS0FBd0IsRUFDZCxZQUFrQyxFQUNKLFlBQStCLEVBQ3pFLGtCQUFxQztRQUZ6QixpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFDSixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDekUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjs7Ozs7O1FBbkd2Qyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7Ozs7UUFXNUIsY0FBUyxHQUFvQixPQUFPLENBQUM7Ozs7UUFpQzNCLG1CQUFjLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7Ozs7O1FBTXhELGlCQUFZLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7Ozs7O1FBTXRELGtCQUFhLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7Ozs7UUFHdkQsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7OztRQW1DakYsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBT2pDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLE1BQU0sMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLE1BQU0sMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUMxRDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDL0Msa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBOUdELElBQ0ksT0FBTyxLQUFlLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ2pELElBQUksT0FBTyxDQUFDLEtBQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7OztJQU9ELElBQ0ksUUFBUSxLQUFlLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ25ELElBQUksUUFBUSxDQUFDLEtBQWU7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7OztJQUlELElBQ0ksT0FBTyxLQUFlLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ2pELElBQUksT0FBTyxDQUFDLEtBQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7OztJQUlELElBQ0ksT0FBTyxLQUFlLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ2pELElBQUksT0FBTyxDQUFDLEtBQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7Ozs7SUF3Q0QsSUFBSSxVQUFVLEtBQVEsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzs7OztJQUN2RCxJQUFJLFVBQVUsQ0FBQyxLQUFRO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFJRCxJQUFJLFdBQVcsS0FBc0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDaEUsSUFBSSxXQUFXLENBQUMsS0FBc0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQTJCRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksb0JBQW9CLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1RCw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjs7Y0FDMUIsTUFBTSxHQUNWLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQztRQUVuRSxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7O2tCQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBRTVDLElBQUksSUFBSSxFQUFFO2dCQUNSLHNGQUFzRjtnQkFDdEYsNEZBQTRGO2dCQUM1RixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkO1NBQ0Y7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUdELGdCQUFnQjs7WUFDVixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RCxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRW5FLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUdELGFBQWEsQ0FBQyxJQUFjO1FBQzFCLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7OztJQUdELDRCQUE0QixDQUFDLGNBQWlCO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUdELHdCQUF3QixDQUFDLGVBQWtCO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7Ozs7O0lBR0QsZUFBZSxDQUFDLElBQU8sRUFBRSxJQUFxQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFNTyxtQkFBbUIsQ0FBQyxHQUFRO1FBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNoRyxDQUFDOzs7Ozs7SUFHTyx3QkFBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMvRCxDQUFDOzs7WUFwT0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGkzQ0FBNEI7Z0JBRTVCLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsY0FBYztpQkFDeEI7Z0JBQ0QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQXJKbUMsaUJBQWlCO1lBRTVDLGlCQUFpQix1QkFtUXJCLFFBQVE7NENBQ1IsUUFBUSxZQUFJLE1BQU0sU0FBQyxvQkFBb0I7WUF2UTBCLGlCQUFpQjs7OzhCQXlKcEYsS0FBSztzQkFlTCxLQUFLO3dCQVFMLEtBQUs7dUJBR0wsS0FBSztzQkFRTCxLQUFLO3NCQVFMLEtBQUs7eUJBUUwsS0FBSzt3QkFHTCxLQUFLOzZCQUdMLE1BQU07MkJBTU4sTUFBTTs0QkFNTixNQUFNOzZCQUdOLE1BQU07d0JBR04sU0FBUyxTQUFDLGVBQWU7dUJBR3pCLFNBQVMsU0FBQyxjQUFjOzRCQUd4QixTQUFTLFNBQUMsbUJBQW1COzs7Ozs7O0lBaEY5Qix5Q0FBNkM7Ozs7O0lBRzdDLCtDQUFtQzs7Ozs7SUFFbkMsc0NBQW1DOzs7Ozs7OztJQU9uQyw4Q0FBcUM7Ozs7O0lBUXJDLGtDQUEyQjs7Ozs7SUFHM0IsbUNBQThDOzs7OztJQVE5QyxtQ0FBNEI7Ozs7O0lBUTVCLGtDQUEyQjs7Ozs7SUFRM0Isa0NBQTJCOzs7OztJQUczQixvQ0FBMEM7Ozs7O0lBRzFDLG1DQUEyRDs7Ozs7SUFHM0Qsd0NBQTJFOzs7Ozs7SUFNM0Usc0NBQXlFOzs7Ozs7SUFNekUsdUNBQTBFOzs7OztJQUcxRSx3Q0FBaUY7Ozs7O0lBR2pGLG1DQUEwRDs7Ozs7SUFHMUQsa0NBQXVEOzs7OztJQUd2RCx1Q0FBc0U7Ozs7O0lBWXRFLDRDQUE4Qjs7Ozs7SUFTOUIsc0NBQXNDOzs7OztJQUt0QyxzQ0FBbUM7Ozs7O0lBR2pDLHNDQUFzRDs7Ozs7SUFDdEQsc0NBQWlGOzs7OztJQUNqRiw0Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgQ29tcG9uZW50VHlwZSwgUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0NoZWNrZWQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXMsIE1hdERhdGVwaWNrZXJJbnRsIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOZ3hNYXREYXRlQWRhcHRlciB9IGZyb20gJy4vY29yZS9kYXRlLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBOZ3hNYXREYXRlRm9ybWF0cywgTkdYX01BVF9EQVRFX0ZPUk1BVFMgfSBmcm9tICcuL2NvcmUvZGF0ZS1mb3JtYXRzJztcclxuaW1wb3J0IHsgTmd4TWF0TW9udGhWaWV3IH0gZnJvbSAnLi9tb250aC12aWV3JztcclxuaW1wb3J0IHsgZ2V0QWN0aXZlT2Zmc2V0LCBpc1NhbWVNdWx0aVllYXJWaWV3LCBOZ3hNYXRNdWx0aVllYXJWaWV3LCB5ZWFyc1BlclBhZ2UgfSBmcm9tICcuL211bHRpLXllYXItdmlldyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yLCBmb3JtYXRZZWFyUmFuZ2UgfSBmcm9tICcuL3V0aWxzL2RhdGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBOZ3hNYXRZZWFyVmlldyB9IGZyb20gJy4veWVhci12aWV3JztcclxuXHJcbi8qKlxyXG4gKiBQb3NzaWJsZSB2aWV3cyBmb3IgdGhlIGNhbGVuZGFyLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNYXRDYWxlbmRhclZpZXcgPSAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXInO1xyXG5cclxuLyoqIERlZmF1bHQgaGVhZGVyIGZvciBOZ3hNYXRDYWxlbmRhciAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1tYXQtY2FsZW5kYXItaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWhlYWRlci5odG1sJyxcclxuICBleHBvcnRBczogJ25neE1hdENhbGVuZGFySGVhZGVyJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0Q2FsZW5kYXJIZWFkZXI8RD4ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ludGw6IE1hdERhdGVwaWNrZXJJbnRsLFxyXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5neE1hdENhbGVuZGFyKSkgcHVibGljIGNhbGVuZGFyOiBOZ3hNYXRDYWxlbmRhcjxEPixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBOZ3hNYXREYXRlQWRhcHRlcjxEPixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTkdYX01BVF9EQVRFX0ZPUk1BVFMpIHByaXZhdGUgX2RhdGVGb3JtYXRzOiBOZ3hNYXREYXRlRm9ybWF0cyxcclxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgIHRoaXMuY2FsZW5kYXIuc3RhdGVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiBjaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY3VycmVudCBjYWxlbmRhciB2aWV3LiAqL1xyXG4gIGdldCBwZXJpb2RCdXR0b25UZXh0KCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5jYWxlbmRhci5jdXJyZW50VmlldyA9PSAnbW9udGgnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlQWRhcHRlclxyXG4gICAgICAgIC5mb3JtYXQodGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlLCB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsKVxyXG4gICAgICAgIC50b0xvY2FsZVVwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ3llYXInKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlQWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBvZmZzZXQgZnJvbSB0aGUgYWN0aXZlIHllYXIgdG8gdGhlIFwic2xvdFwiIGZvciB0aGUgc3RhcnRpbmcgeWVhciBpcyB0aGVcclxuICAgIC8vICphY3R1YWwqIGZpcnN0IHJlbmRlcmVkIHllYXIgaW4gdGhlIG11bHRpLXllYXIgdmlldywgYW5kIHRoZSBsYXN0IHllYXIgaXNcclxuICAgIC8vIGp1c3QgeWVhcnNQZXJQYWdlIC0gMSBhd2F5LlxyXG4gICAgY29uc3QgYWN0aXZlWWVhciA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIodGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IG1pblllYXJPZlBhZ2UgPSBhY3RpdmVZZWFyIC0gZ2V0QWN0aXZlT2Zmc2V0KFxyXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlciwgdGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlLCB0aGlzLmNhbGVuZGFyLm1pbkRhdGUsIHRoaXMuY2FsZW5kYXIubWF4RGF0ZSk7XHJcbiAgICBjb25zdCBtYXhZZWFyT2ZQYWdlID0gbWluWWVhck9mUGFnZSArIHllYXJzUGVyUGFnZSAtIDE7XHJcbiAgICBjb25zdCBtaW5ZZWFyTmFtZSA9XHJcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXJOYW1lKHRoaXMuX2RhdGVBZGFwdGVyLmNyZWF0ZURhdGUobWluWWVhck9mUGFnZSwgMCwgMSkpO1xyXG4gICAgY29uc3QgbWF4WWVhck5hbWUgPVxyXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLl9kYXRlQWRhcHRlci5jcmVhdGVEYXRlKG1heFllYXJPZlBhZ2UsIDAsIDEpKTtcclxuICAgIHJldHVybiBmb3JtYXRZZWFyUmFuZ2UobWluWWVhck5hbWUsIG1heFllYXJOYW1lKTtcclxuICB9XHJcblxyXG4gIGdldCBwZXJpb2RCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ21vbnRoJyA/XHJcbiAgICAgIHRoaXMuX2ludGwuc3dpdGNoVG9NdWx0aVllYXJWaWV3TGFiZWwgOiB0aGlzLl9pbnRsLnN3aXRjaFRvTW9udGhWaWV3TGFiZWw7XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgcHJldmlvdXMgYnV0dG9uLiAqL1xyXG4gIGdldCBwcmV2QnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICdtb250aCc6IHRoaXMuX2ludGwucHJldk1vbnRoTGFiZWwsXHJcbiAgICAgICd5ZWFyJzogdGhpcy5faW50bC5wcmV2WWVhckxhYmVsLFxyXG4gICAgICAnbXVsdGkteWVhcic6IHRoaXMuX2ludGwucHJldk11bHRpWWVhckxhYmVsXHJcbiAgICB9W3RoaXMuY2FsZW5kYXIuY3VycmVudFZpZXddO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIG5leHQgYnV0dG9uLiAqL1xyXG4gIGdldCBuZXh0QnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICdtb250aCc6IHRoaXMuX2ludGwubmV4dE1vbnRoTGFiZWwsXHJcbiAgICAgICd5ZWFyJzogdGhpcy5faW50bC5uZXh0WWVhckxhYmVsLFxyXG4gICAgICAnbXVsdGkteWVhcic6IHRoaXMuX2ludGwubmV4dE11bHRpWWVhckxhYmVsXHJcbiAgICB9W3RoaXMuY2FsZW5kYXIuY3VycmVudFZpZXddO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIHBlcmlvZCBsYWJlbC4gKi9cclxuICBjdXJyZW50UGVyaW9kQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPSB0aGlzLmNhbGVuZGFyLmN1cnJlbnRWaWV3ID09ICdtb250aCcgPyAnbXVsdGkteWVhcicgOiAnbW9udGgnO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIHByZXZpb3VzIGJ1dHRvbi4gKi9cclxuICBwcmV2aW91c0NsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUgPSB0aGlzLmNhbGVuZGFyLmN1cnJlbnRWaWV3ID09ICdtb250aCcgP1xyXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKSA6XHJcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnMoXHJcbiAgICAgICAgdGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlLCB0aGlzLmNhbGVuZGFyLmN1cnJlbnRWaWV3ID09ICd5ZWFyJyA/IC0xIDogLXllYXJzUGVyUGFnZVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIG5leHQgYnV0dG9uLiAqL1xyXG4gIG5leHRDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlID0gdGhpcy5jYWxlbmRhci5jdXJyZW50VmlldyA9PSAnbW9udGgnID9cclxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlLCAxKSA6XHJcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnMoXHJcbiAgICAgICAgdGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlLFxyXG4gICAgICAgIHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ3llYXInID8gMSA6IHllYXJzUGVyUGFnZVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIHByZXZpb3VzIHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cclxuICBwcmV2aW91c0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXIubWluRGF0ZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhdGhpcy5jYWxlbmRhci5taW5EYXRlIHx8XHJcbiAgICAgICF0aGlzLl9pc1NhbWVWaWV3KHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSwgdGhpcy5jYWxlbmRhci5taW5EYXRlKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBuZXh0IHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cclxuICBuZXh0RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5jYWxlbmRhci5tYXhEYXRlIHx8XHJcbiAgICAgICF0aGlzLl9pc1NhbWVWaWV3KHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSwgdGhpcy5jYWxlbmRhci5tYXhEYXRlKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSB0d28gZGF0ZXMgcmVwcmVzZW50IHRoZSBzYW1lIHZpZXcgaW4gdGhlIGN1cnJlbnQgdmlldyBtb2RlIChtb250aCBvciB5ZWFyKS4gKi9cclxuICBwcml2YXRlIF9pc1NhbWVWaWV3KGRhdGUxOiBELCBkYXRlMjogRCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ21vbnRoJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0WWVhcihkYXRlMSkgPT0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0WWVhcihkYXRlMikgJiZcclxuICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5nZXRNb250aChkYXRlMSkgPT0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0TW9udGgoZGF0ZTIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ3llYXInKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlQWRhcHRlci5nZXRZZWFyKGRhdGUxKSA9PSB0aGlzLl9kYXRlQWRhcHRlci5nZXRZZWFyKGRhdGUyKTtcclxuICAgIH1cclxuICAgIC8vIE90aGVyd2lzZSB3ZSBhcmUgaW4gJ211bHRpLXllYXInIHZpZXcuXHJcbiAgICByZXR1cm4gaXNTYW1lTXVsdGlZZWFyVmlldyhcclxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIsIGRhdGUxLCBkYXRlMiwgdGhpcy5jYWxlbmRhci5taW5EYXRlLCB0aGlzLmNhbGVuZGFyLm1heERhdGUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY2FsZW5kYXIgdGhhdCBpcyB1c2VkIGFzIHBhcnQgb2YgdGhlIGRhdGVwaWNrZXIuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW1hdC1jYWxlbmRhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY2FsZW5kYXIuc2NzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdtYXQtY2FsZW5kYXInLFxyXG4gIH0sXHJcbiAgZXhwb3J0QXM6ICduZ3hNYXRDYWxlbmRhcicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdENhbGVuZGFyPEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8qKiBBbiBpbnB1dCBpbmRpY2F0aW5nIHRoZSB0eXBlIG9mIHRoZSBoZWFkZXIgY29tcG9uZW50LCBpZiBzZXQuICovXHJcbiAgQElucHV0KCkgaGVhZGVyQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XHJcblxyXG4gIC8qKiBBIHBvcnRhbCBjb250YWluaW5nIHRoZSBoZWFkZXIgY29tcG9uZW50IHR5cGUgZm9yIHRoaXMgY2FsZW5kYXIuICovXHJcbiAgX2NhbGVuZGFySGVhZGVyUG9ydGFsOiBQb3J0YWw8YW55PjtcclxuXHJcbiAgcHJpdmF0ZSBfaW50bENoYW5nZXM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3Igc2NoZWR1bGluZyB0aGF0IGZvY3VzIHNob3VsZCBiZSBtb3ZlZCB0byB0aGUgYWN0aXZlIGNlbGwgb24gdGhlIG5leHQgdGljay5cclxuICAgKiBXZSBuZWVkIHRvIHNjaGVkdWxlIGl0LCByYXRoZXIgdGhhbiBkbyBpdCBpbW1lZGlhdGVseSwgYmVjYXVzZSB3ZSBoYXZlIHRvIHdhaXRcclxuICAgKiBmb3IgQW5ndWxhciB0byByZS1ldmFsdWF0ZSB0aGUgdmlldyBjaGlsZHJlbi5cclxuICAgKi9cclxuICBwcml2YXRlIF9tb3ZlRm9jdXNPbk5leHRUaWNrID0gZmFsc2U7XHJcblxyXG4gIC8qKiBBIGRhdGUgcmVwcmVzZW50aW5nIHRoZSBwZXJpb2QgKG1vbnRoIG9yIHllYXIpIHRvIHN0YXJ0IHRoZSBjYWxlbmRhciBpbi4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzdGFydEF0KCk6IEQgfCBudWxsIHsgcmV0dXJuIHRoaXMuX3N0YXJ0QXQ7IH1cclxuICBzZXQgc3RhcnRBdCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc3RhcnRBdDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBzaG91bGQgYmUgc3RhcnRlZCBpbiBtb250aCBvciB5ZWFyIHZpZXcuICovXHJcbiAgQElucHV0KCkgc3RhcnRWaWV3OiBNYXRDYWxlbmRhclZpZXcgPSAnbW9udGgnO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkKCk6IEQgfCBudWxsIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkOyB9XHJcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQgfCBudWxsO1xyXG5cclxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1pbkRhdGUoKTogRCB8IG51bGwgeyByZXR1cm4gdGhpcy5fbWluRGF0ZTsgfVxyXG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWluRGF0ZSA9IHRoaXMuX2dldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xyXG4gIH1cclxuICBwcml2YXRlIF9taW5EYXRlOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBtYXhEYXRlKCk6IEQgfCBudWxsIHsgcmV0dXJuIHRoaXMuX21heERhdGU7IH1cclxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbWF4RGF0ZTogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBGdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB3aGljaCBkYXRlcyBhcmUgc2VsZWN0YWJsZS4gKi9cclxuICBASW5wdXQoKSBkYXRlRmlsdGVyOiAoZGF0ZTogRCkgPT4gYm9vbGVhbjtcclxuXHJcbiAgLyoqIEZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWRkIGN1c3RvbSBDU1MgY2xhc3NlcyB0byBkYXRlcy4gKi9cclxuICBASW5wdXQoKSBkYXRlQ2xhc3M6IChkYXRlOiBEKSA9PiBNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUgY2hhbmdlcy4gKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEPiA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgdGhlIHllYXIgY2hvc2VuIGluIG11bHRpeWVhciB2aWV3LlxyXG4gICAqIFRoaXMgZG9lc24ndCBpbXBseSBhIGNoYW5nZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgeWVhclNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIHRoZSBtb250aCBjaG9zZW4gaW4geWVhciB2aWV3LlxyXG4gICAqIFRoaXMgZG9lc24ndCBpbXBseSBhIGNoYW5nZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbW9udGhTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhbnkgZGF0ZSBpcyBzZWxlY3RlZC4gKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgX3VzZXJTZWxlY3Rpb246IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBtb250aCB2aWV3IGNvbXBvbmVudC4gKi9cclxuICBAVmlld0NoaWxkKE5neE1hdE1vbnRoVmlldykgbW9udGhWaWV3OiBOZ3hNYXRNb250aFZpZXc8RD47XHJcblxyXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgeWVhciB2aWV3IGNvbXBvbmVudC4gKi9cclxuICBAVmlld0NoaWxkKE5neE1hdFllYXJWaWV3KSB5ZWFyVmlldzogTmd4TWF0WWVhclZpZXc8RD47XHJcblxyXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgbXVsdGkteWVhciB2aWV3IGNvbXBvbmVudC4gKi9cclxuICBAVmlld0NoaWxkKE5neE1hdE11bHRpWWVhclZpZXcpIG11bHRpWWVhclZpZXc6IE5neE1hdE11bHRpWWVhclZpZXc8RD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjdXJyZW50IGFjdGl2ZSBkYXRlLiBUaGlzIGRldGVybWluZXMgd2hpY2ggdGltZSBwZXJpb2QgaXMgc2hvd24gYW5kIHdoaWNoIGRhdGUgaXNcclxuICAgKiBoaWdobGlnaHRlZCB3aGVuIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICovXHJcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRCB7IHJldHVybiB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZTsgfVxyXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEKSB7XHJcbiAgICB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmNsYW1wRGF0ZSh2YWx1ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2NsYW1wZWRBY3RpdmVEYXRlOiBEO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgaXMgaW4gbW9udGggdmlldy4gKi9cclxuICBnZXQgY3VycmVudFZpZXcoKTogTWF0Q2FsZW5kYXJWaWV3IHsgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3OyB9XHJcbiAgc2V0IGN1cnJlbnRWaWV3KHZhbHVlOiBNYXRDYWxlbmRhclZpZXcpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdmFsdWU7XHJcbiAgICB0aGlzLl9tb3ZlRm9jdXNPbk5leHRUaWNrID0gdHJ1ZTtcclxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBwcml2YXRlIF9jdXJyZW50VmlldzogTWF0Q2FsZW5kYXJWaWV3O1xyXG5cclxuICAvKipcclxuICAgKiBFbWl0cyB3aGVuZXZlciB0aGVyZSBpcyBhIHN0YXRlIGNoYW5nZSB0aGF0IHRoZSBoZWFkZXIgbWF5IG5lZWQgdG8gcmVzcG9uZCB0by5cclxuICAgKi9cclxuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihfaW50bDogTWF0RGF0ZXBpY2tlckludGwsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kYXRlQWRhcHRlcjogTmd4TWF0RGF0ZUFkYXB0ZXI8RD4sXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5HWF9NQVRfREFURV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTmd4TWF0RGF0ZUZvcm1hdHMsXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKCdOZ3hEYXRlQWRhcHRlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fZGF0ZUZvcm1hdHMpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoJ05HWF9NQVRfREFURV9GT1JNQVRTJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5faW50bENoYW5nZXMgPSBfaW50bC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIF9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9jYWxlbmRhckhlYWRlclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwodGhpcy5oZWFkZXJDb21wb25lbnQgfHwgTmd4TWF0Q2FsZW5kYXJIZWFkZXIpO1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zdGFydEF0IHx8IHRoaXMuX2RhdGVBZGFwdGVyLnRvZGF5KCk7XHJcblxyXG4gICAgLy8gQXNzaWduIHRvIHRoZSBwcml2YXRlIHByb3BlcnR5IHNpbmNlIHdlIGRvbid0IHdhbnQgdG8gbW92ZSBmb2N1cyBvbiBpbml0LlxyXG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSB0aGlzLnN0YXJ0VmlldztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgIGlmICh0aGlzLl9tb3ZlRm9jdXNPbk5leHRUaWNrKSB7XHJcbiAgICAgIHRoaXMuX21vdmVGb2N1c09uTmV4dFRpY2sgPSBmYWxzZTtcclxuICAgICAgdGhpcy5mb2N1c0FjdGl2ZUNlbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5faW50bENoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBjaGFuZ2UgPVxyXG4gICAgICBjaGFuZ2VzWydtaW5EYXRlJ10gfHwgY2hhbmdlc1snbWF4RGF0ZSddIHx8IGNoYW5nZXNbJ2RhdGVGaWx0ZXInXTtcclxuXHJcbiAgICBpZiAoY2hhbmdlICYmICFjaGFuZ2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgY29uc3QgdmlldyA9IHRoaXMuX2dldEN1cnJlbnRWaWV3Q29tcG9uZW50KCk7XHJcblxyXG4gICAgICBpZiAodmlldykge1xyXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gYGRldGVjdENoYW5nZXNgIG1hbnVhbGx5IGhlcmUsIGJlY2F1c2UgdGhlIGBtaW5EYXRlYCwgYG1heERhdGVgIGV0Yy4gYXJlXHJcbiAgICAgICAgLy8gcGFzc2VkIGRvd24gdG8gdGhlIHZpZXcgdmlhIGRhdGEgYmluZGluZ3Mgd2hpY2ggd29uJ3QgYmUgdXAtdG8tZGF0ZSB3aGVuIHdlIGNhbGwgYF9pbml0YC5cclxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgdmlldy5faW5pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNBY3RpdmVDZWxsKCkge1xyXG4gICAgdGhpcy5fZ2V0Q3VycmVudFZpZXdDb21wb25lbnQoKS5fZm9jdXNBY3RpdmVDZWxsKCk7XHJcbiAgfVxyXG5cclxuICAvKiogVXBkYXRlcyB0b2RheSdzIGRhdGUgYWZ0ZXIgYW4gdXBkYXRlIG9mIHRoZSBhY3RpdmUgZGF0ZSAqL1xyXG4gIHVwZGF0ZVRvZGF5c0RhdGUoKSB7XHJcbiAgICBsZXQgdmlldyA9IHRoaXMuY3VycmVudFZpZXcgPT0gJ21vbnRoJyA/IHRoaXMubW9udGhWaWV3IDpcclxuICAgICAgKHRoaXMuY3VycmVudFZpZXcgPT0gJ3llYXInID8gdGhpcy55ZWFyVmlldyA6IHRoaXMubXVsdGlZZWFyVmlldyk7XHJcblxyXG4gICAgdmlldy5uZ0FmdGVyQ29udGVudEluaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIGRhdGUgc2VsZWN0aW9uIGluIHRoZSBtb250aCB2aWV3LiAqL1xyXG4gIF9kYXRlU2VsZWN0ZWQoZGF0ZTogRCB8IG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChkYXRlICYmICF0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZShkYXRlLCB0aGlzLnNlbGVjdGVkKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyB5ZWFyIHNlbGVjdGlvbiBpbiB0aGUgbXVsdGl5ZWFyIHZpZXcuICovXHJcbiAgX3llYXJTZWxlY3RlZEluTXVsdGlZZWFyVmlldyhub3JtYWxpemVkWWVhcjogRCkge1xyXG4gICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkWWVhcik7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBtb250aCBzZWxlY3Rpb24gaW4gdGhlIHllYXIgdmlldy4gKi9cclxuICBfbW9udGhTZWxlY3RlZEluWWVhclZpZXcobm9ybWFsaXplZE1vbnRoOiBEKSB7XHJcbiAgICB0aGlzLm1vbnRoU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkTW9udGgpO1xyXG4gIH1cclxuXHJcbiAgX3VzZXJTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3VzZXJTZWxlY3Rpb24uZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgeWVhci9tb250aCBzZWxlY3Rpb24gaW4gdGhlIG11bHRpLXllYXIveWVhciB2aWV3cy4gKi9cclxuICBfZ29Ub0RhdGVJblZpZXcoZGF0ZTogRCwgdmlldzogJ21vbnRoJyB8ICd5ZWFyJyB8ICdtdWx0aS15ZWFyJyk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcclxuICAgIHRoaXMuY3VycmVudFZpZXcgPSB2aWV3O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrLlxyXG4gICAqIEByZXR1cm5zIFRoZSBnaXZlbiBvYmplY3QgaWYgaXQgaXMgYm90aCBhIGRhdGUgaW5zdGFuY2UgYW5kIHZhbGlkLCBvdGhlcndpc2UgbnVsbC5cclxuICAgKi9cclxuICBwcml2YXRlIF9nZXRWYWxpZERhdGVPck51bGwob2JqOiBhbnkpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gKHRoaXMuX2RhdGVBZGFwdGVyLmlzRGF0ZUluc3RhbmNlKG9iaikgJiYgdGhpcy5fZGF0ZUFkYXB0ZXIuaXNWYWxpZChvYmopKSA/IG9iaiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKiogUmV0dXJucyB0aGUgY29tcG9uZW50IGluc3RhbmNlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGN1cnJlbnQgY2FsZW5kYXIgdmlldy4gKi9cclxuICBwcml2YXRlIF9nZXRDdXJyZW50Vmlld0NvbXBvbmVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1vbnRoVmlldyB8fCB0aGlzLnllYXJWaWV3IHx8IHRoaXMubXVsdGlZZWFyVmlldztcclxuICB9XHJcbn1cclxuIl19