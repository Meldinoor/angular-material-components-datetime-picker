/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/date-adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DateAdapter } from '@angular/material/core';
/**
 * @abstract
 * @template D
 */
export class NgxMatDateAdapter extends DateAdapter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGF0ZXRpbWUtcGlja2VyL3NyYy9saWIvY29yZS9kYXRlLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRXJELE1BQU0sT0FBZ0IsaUJBQXFCLFNBQVEsV0FBYzs7Ozs7OztJQWdEL0QsVUFBVSxDQUFDLENBQUksRUFBRSxDQUFJO1FBQ25CLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztlQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2VBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7O0lBT0QsUUFBUSxDQUFDLE1BQVMsRUFBRSxRQUFXO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7OztJQVNELG1CQUFtQixDQUFDLEtBQVEsRUFBRSxNQUFTLEVBQUUsV0FBcUI7O1lBQ3hELEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ2hELElBQUksV0FBVyxFQUFFO1lBQ2YsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFNRCxzQkFBc0IsQ0FBQyxJQUFPLEVBQUUsV0FBcUI7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FFRjs7Ozs7Ozs7SUExRkMsMERBQWtDOzs7Ozs7O0lBT2xDLDREQUFvQzs7Ozs7OztJQU9wQyw0REFBb0M7Ozs7Ozs7O0lBT3BDLGlFQUErQzs7Ozs7Ozs7SUFPL0MsbUVBQWlEOzs7Ozs7OztJQU9qRCxtRUFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neE1hdERhdGVBZGFwdGVyPEQ+IGV4dGVuZHMgRGF0ZUFkYXB0ZXI8RD4ge1xyXG4gIC8qKlxyXG4gKiBHZXRzIHRoZSBob3VyIGNvbXBvbmVudCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cclxuICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cclxuICogQHJldHVybnMgVGhlIGhvdXIgY29tcG9uZW50LlxyXG4gKi9cclxuICBhYnN0cmFjdCBnZXRIb3VyKGRhdGU6IEQpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4qIEdldHMgdGhlIG1pbnV0ZSBjb21wb25lbnQgb2YgdGhlIGdpdmVuIGRhdGUuXHJcbiogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cclxuKiBAcmV0dXJucyBUaGUgbWludXRlIGNvbXBvbmVudC5cclxuKi9cclxuICBhYnN0cmFjdCBnZXRNaW51dGUoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgKiBHZXRzIHRoZSBzZWNvbmQgY29tcG9uZW50IG9mIHRoZSBnaXZlbiBkYXRlLlxyXG4gICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cclxuICAqIEByZXR1cm5zIFRoZSBzZWNvbmQgY29tcG9uZW50LlxyXG4gICovXHJcbiAgYWJzdHJhY3QgZ2V0U2Vjb25kKGRhdGU6IEQpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICogU2V0IHRoZSBob3VyIGNvbXBvbmVudCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cclxuICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIG1vbnRoIGZyb20uXHJcbiAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cclxuICAqL1xyXG4gIGFic3RyYWN0IHNldEhvdXIoZGF0ZTogRCwgdmFsdWU6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICogU2V0IHRoZSBzZWNvbmQgY29tcG9uZW50IG9mIHRoZSBnaXZlbiBkYXRlLlxyXG4gICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cclxuICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxyXG4gICovXHJcbiAgYWJzdHJhY3Qgc2V0TWludXRlKGRhdGU6IEQsIHZhbHVlOiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHNlY29uZCBjb21wb25lbnQgb2YgdGhlIGdpdmVuIGRhdGUuXHJcbiAgICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cclxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cclxuICAgKi9cclxuICBhYnN0cmFjdCBzZXRTZWNvbmQoZGF0ZTogRCwgdmFsdWU6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHR3byBkYXRlIGhhdmUgc2FtZSB0aW1lXHJcbiAgICogQHBhcmFtIGEgRGF0ZSAxXHJcbiAgICogQHBhcmFtIGIgRGF0ZSAyXHJcbiAgICovXHJcbiAgaXNTYW1lVGltZShhOiBELCBiOiBEKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRIb3VyKGEpID09PSB0aGlzLmdldEhvdXIoYilcclxuICAgICAgJiYgdGhpcy5nZXRNaW51dGUoYSkgPT09IHRoaXMuZ2V0TWludXRlKGIpXHJcbiAgICAgICYmIHRoaXMuZ2V0U2Vjb25kKGEpID09PSB0aGlzLmdldFNlY29uZChiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcHkgdGltZSBmcm9tIGEgZGF0ZSB0byBhIGFub3RoZXIgZGF0ZVxyXG4gICAqIEBwYXJhbSB0b0RhdGUgXHJcbiAgICogQHBhcmFtIGZyb21EYXRlIFxyXG4gICAqL1xyXG4gIGNvcHlUaW1lKHRvRGF0ZTogRCwgZnJvbURhdGU6IEQpIHtcclxuICAgIHRoaXMuc2V0SG91cih0b0RhdGUsIHRoaXMuZ2V0SG91cihmcm9tRGF0ZSkpO1xyXG4gICAgdGhpcy5zZXRNaW51dGUodG9EYXRlLCB0aGlzLmdldE1pbnV0ZShmcm9tRGF0ZSkpO1xyXG4gICAgdGhpcy5zZXRTZWNvbmQodG9EYXRlLCB0aGlzLmdldFNlY29uZChmcm9tRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIENvbXBhcmVzIHR3byBkYXRlcy5cclxuICogQHBhcmFtIGZpcnN0IFRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmUuXHJcbiAqIEBwYXJhbSBzZWNvbmQgVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmUuXHJcbiAqIEByZXR1cm5zIDAgaWYgdGhlIGRhdGVzIGFyZSBlcXVhbCwgYSBudW1iZXIgbGVzcyB0aGFuIDAgaWYgdGhlIGZpcnN0IGRhdGUgaXMgZWFybGllcixcclxuICogICAgIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGxhdGVyLlxyXG4gKi9cclxuICBjb21wYXJlRGF0ZVdpdGhUaW1lKGZpcnN0OiBELCBzZWNvbmQ6IEQsIHNob3dTZWNvbmRzPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICBsZXQgcmVzID0gc3VwZXIuY29tcGFyZURhdGUoZmlyc3QsIHNlY29uZCkgfHxcclxuICAgICAgdGhpcy5nZXRIb3VyKGZpcnN0KSAtIHRoaXMuZ2V0SG91cihzZWNvbmQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0TWludXRlKGZpcnN0KSAtIHRoaXMuZ2V0TWludXRlKHNlY29uZCk7XHJcbiAgICBpZiAoc2hvd1NlY29uZHMpIHtcclxuICAgICAgcmVzID0gcmVzIHx8IHRoaXMuZ2V0U2Vjb25kKGZpcnN0KSAtIHRoaXMuZ2V0U2Vjb25kKHNlY29uZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRpbWUgYnkgdXNpbmcgZGVmYXVsdCB2YWx1ZXNcclxuICAgKiBAcGFyYW0gZGVmYXVsdFRpbWUgTGlzdCBkZWZhdWx0IHZhbHVlcyBbaG91ciwgbWludXRlLCBzZWNvbmRdXHJcbiAgICovXHJcbiAgc2V0VGltZUJ5RGVmYXVsdFZhbHVlcyhkYXRlOiBELCBkZWZhdWx0VGltZTogbnVtYmVyW10pIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkZWZhdWx0VGltZSkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0BJbnB1dCBEZWZhdWx0VGltZSBzaG91bGQgYmUgYW4gYXJyYXknKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0SG91cihkYXRlLCBkZWZhdWx0VGltZVswXSB8fCAwKTtcclxuICAgIHRoaXMuc2V0TWludXRlKGRhdGUsIGRlZmF1bHRUaW1lWzFdIHx8IDApO1xyXG4gICAgdGhpcy5zZXRTZWNvbmQoZGF0ZSwgZGVmYXVsdFRpbWVbMl0gfHwgMCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=