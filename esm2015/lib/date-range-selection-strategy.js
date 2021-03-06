/**
 * @fileoverview added by tsickle
 * Generated from: lib/date-range-selection-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, InjectionToken } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { NgxMatDateAdapter } from './core/date-adapter';
/**
 * Injection token used to customize the date range selection behavior.
 * @type {?}
 */
export const NGX_MAT_DATE_RANGE_SELECTION_STRATEGY = new InjectionToken('NGX_MAT_DATE_RANGE_SELECTION_STRATEGY');
/**
 * Object that can be provided in order to customize the date range selection behavior.
 * @record
 * @template D
 */
export function NgxMatDateRangeSelectionStrategy() { }
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
export class DefaultNgxMatCalendarRangeStrategy {
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
DefaultNgxMatCalendarRangeStrategy.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DefaultNgxMatCalendarRangeStrategy.ctorParameters = () => [
    { type: NgxMatDateAdapter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultNgxMatCalendarRangeStrategy.prototype._dateAdapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1zZWxlY3Rpb24tc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXRldGltZS1waWNrZXIvc3JjL2xpYi9kYXRlLXJhbmdlLXNlbGVjdGlvbi1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsVUFBVSxFQUFFLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBR3hELE1BQU0sT0FBTyxxQ0FBcUMsR0FDOUMsSUFBSSxjQUFjLENBQXdDLHVDQUF1QyxDQUFDOzs7Ozs7QUFHdEcsc0RBcUJDOzs7Ozs7Ozs7O0lBYkMsd0dBQTBGOzs7Ozs7Ozs7Ozs7SUFZMUYsMEdBQTRGOzs7Ozs7QUFLOUYsTUFBTSxPQUFPLGtDQUFrQzs7OztJQUM3QyxZQUFvQixZQUFrQztRQUFsQyxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7SUFBRyxDQUFDOzs7Ozs7SUFFMUQsaUJBQWlCLENBQUMsSUFBTyxFQUFFLFlBQTBCO1lBQy9DLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxHQUFHLFlBQVk7UUFFL0IsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDZDthQUFNLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqRixHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ1o7YUFBTTtZQUNMLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDYixHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ1o7UUFFRCxPQUFPLElBQUksU0FBUyxDQUFJLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsVUFBb0IsRUFBRSxZQUEwQjs7WUFDeEQsS0FBSyxHQUFhLElBQUk7O1lBQ3RCLEdBQUcsR0FBYSxJQUFJO1FBRXhCLElBQUksWUFBWSxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksVUFBVSxFQUFFO1lBQ3pELEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzNCLEdBQUcsR0FBRyxVQUFVLENBQUM7U0FDbEI7UUFFRCxPQUFPLElBQUksU0FBUyxDQUFJLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUE3QkYsVUFBVTs7OztZQS9CRixpQkFBaUI7Ozs7Ozs7SUFpQ1osMERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdGlvblRva2VufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IE5neE1hdERhdGVBZGFwdGVyIH0gZnJvbSAnLi9jb3JlL2RhdGUtYWRhcHRlcic7XHJcblxyXG4vKiogSW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gY3VzdG9taXplIHRoZSBkYXRlIHJhbmdlIHNlbGVjdGlvbiBiZWhhdmlvci4gKi9cclxuZXhwb3J0IGNvbnN0IE5HWF9NQVRfREFURV9SQU5HRV9TRUxFQ1RJT05fU1RSQVRFR1kgPVxyXG4gICAgbmV3IEluamVjdGlvblRva2VuPE5neE1hdERhdGVSYW5nZVNlbGVjdGlvblN0cmF0ZWd5PGFueT4+KCdOR1hfTUFUX0RBVEVfUkFOR0VfU0VMRUNUSU9OX1NUUkFURUdZJyk7XHJcblxyXG4vKiogT2JqZWN0IHRoYXQgY2FuIGJlIHByb3ZpZGVkIGluIG9yZGVyIHRvIGN1c3RvbWl6ZSB0aGUgZGF0ZSByYW5nZSBzZWxlY3Rpb24gYmVoYXZpb3IuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmd4TWF0RGF0ZVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3k8RD4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGhhcyBmaW5pc2hlZCBzZWxlY3RpbmcgYSB2YWx1ZS5cclxuICAgKiBAcGFyYW0gZGF0ZSBEYXRlIHRoYXQgd2FzIHNlbGVjdGVkLiBXaWxsIGJlIG51bGwgaWYgdGhlIHVzZXIgY2xlYXJlZCB0aGUgc2VsZWN0aW9uLlxyXG4gICAqIEBwYXJhbSBjdXJyZW50UmFuZ2UgUmFuZ2UgdGhhdCBpcyBjdXJyZW50bHkgc2hvdyBpbiB0aGUgY2FsZW5kYXIuXHJcbiAgICogQHBhcmFtIGV2ZW50IERPTSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgc2VsZWN0aW9uLiBDdXJyZW50bHkgb25seSBjb3JyZXNwb25kcyB0byBhIGBjbGlja2BcclxuICAgKiAgICBldmVudCwgYnV0IGl0IG1heSBnZXQgZXhwYW5kZWQgaW4gdGhlIGZ1dHVyZS5cclxuICAgKi9cclxuICBzZWxlY3Rpb25GaW5pc2hlZChkYXRlOiBEIHwgbnVsbCwgY3VycmVudFJhbmdlOiBEYXRlUmFuZ2U8RD4sIGV2ZW50OiBFdmVudCk6IERhdGVSYW5nZTxEPjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgaGFzIGFjdGl2YXRlZCBhIG5ldyBkYXRlIChlLmcuIGJ5IGhvdmVyaW5nIG92ZXJcclxuICAgKiBpdCBvciBtb3ZpbmcgZm9jdXMpIGFuZCB0aGUgY2FsZW5kYXIgdHJpZXMgdG8gZGlzcGxheSBhIGRhdGUgcmFuZ2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYWN0aXZlRGF0ZSBEYXRlIHRoYXQgdGhlIHVzZXIgaGFzIGFjdGl2YXRlZC4gV2lsbCBiZSBudWxsIGlmIHRoZSB1c2VyIG1vdmVkXHJcbiAgICogICAgZm9jdXMgdG8gYW4gZWxlbWVudCB0aGF0J3Mgbm8gYSBjYWxlbmRhciBjZWxsLlxyXG4gICAqIEBwYXJhbSBjdXJyZW50UmFuZ2UgUmFuZ2UgdGhhdCBpcyBjdXJyZW50bHkgc2hvd24gaW4gdGhlIGNhbGVuZGFyLlxyXG4gICAqIEBwYXJhbSBldmVudCBET00gZXZlbnQgdGhhdCBjYXVzZWQgdGhlIHByZXZpZXcgdG8gYmUgY2hhbmdlZC4gV2lsbCBiZSBlaXRoZXIgYVxyXG4gICAqICAgIGBtb3VzZWVudGVyYC9gbW91c2VsZWF2ZWAgb3IgYGZvY3VzYC9gYmx1cmAgZGVwZW5kaW5nIG9uIGhvdyB0aGUgdXNlciBpcyBuYXZpZ2F0aW5nLlxyXG4gICAqL1xyXG4gIGNyZWF0ZVByZXZpZXcoYWN0aXZlRGF0ZTogRCB8IG51bGwsIGN1cnJlbnRSYW5nZTogRGF0ZVJhbmdlPEQ+LCBldmVudDogRXZlbnQpOiBEYXRlUmFuZ2U8RD47XHJcbn1cclxuXHJcbi8qKiBQcm92aWRlcyB0aGUgZGVmYXVsdCBkYXRlIHJhbmdlIHNlbGVjdGlvbiBiZWhhdmlvci4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdE5neE1hdENhbGVuZGFyUmFuZ2VTdHJhdGVneTxEPiBpbXBsZW1lbnRzIE5neE1hdERhdGVSYW5nZVNlbGVjdGlvblN0cmF0ZWd5PEQ+IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRlQWRhcHRlcjogTmd4TWF0RGF0ZUFkYXB0ZXI8RD4pIHt9XHJcblxyXG4gIHNlbGVjdGlvbkZpbmlzaGVkKGRhdGU6IEQsIGN1cnJlbnRSYW5nZTogRGF0ZVJhbmdlPEQ+KSB7XHJcbiAgICBsZXQge3N0YXJ0LCBlbmR9ID0gY3VycmVudFJhbmdlO1xyXG5cclxuICAgIGlmIChzdGFydCA9PSBudWxsKSB7XHJcbiAgICAgIHN0YXJ0ID0gZGF0ZTtcclxuICAgIH0gZWxzZSBpZiAoZW5kID09IG51bGwgJiYgZGF0ZSAmJiB0aGlzLl9kYXRlQWRhcHRlci5jb21wYXJlRGF0ZShkYXRlLCBzdGFydCkgPj0gMCkge1xyXG4gICAgICBlbmQgPSBkYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhcnQgPSBkYXRlO1xyXG4gICAgICBlbmQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRGF0ZVJhbmdlPEQ+KHN0YXJ0LCBlbmQpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJldmlldyhhY3RpdmVEYXRlOiBEIHwgbnVsbCwgY3VycmVudFJhbmdlOiBEYXRlUmFuZ2U8RD4pIHtcclxuICAgIGxldCBzdGFydDogRCB8IG51bGwgPSBudWxsO1xyXG4gICAgbGV0IGVuZDogRCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGlmIChjdXJyZW50UmFuZ2Uuc3RhcnQgJiYgIWN1cnJlbnRSYW5nZS5lbmQgJiYgYWN0aXZlRGF0ZSkge1xyXG4gICAgICBzdGFydCA9IGN1cnJlbnRSYW5nZS5zdGFydDtcclxuICAgICAgZW5kID0gYWN0aXZlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IERhdGVSYW5nZTxEPihzdGFydCwgZW5kKTtcclxuICB9XHJcbn1cclxuIl19