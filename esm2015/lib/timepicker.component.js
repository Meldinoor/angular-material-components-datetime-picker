/**
 * @fileoverview added by tsickle
 * Generated from: lib/timepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, forwardRef, Input, Optional, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { NgxMatDateAdapter } from './core/date-adapter';
import { createMissingDateImplError, DEFAULT_STEP, formatTwoDigitTimeValue, LIMIT_TIMES, MERIDIANS, NUMERIC_REGEX, PATTERN_INPUT_HOUR, PATTERN_INPUT_MINUTE, PATTERN_INPUT_SECOND } from './utils/date-utils';
/**
 * @template D
 */
export class NgxMatTimepickerComponent {
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
NgxMatTimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-timepicker',
                template: "<form [formGroup]=\"form\">\r\n  <table class=\"ngx-mat-timepicker-table\">\r\n    <tbody class=\"ngx-mat-timepicker-tbody\">\r\n      <tr *ngIf=\"showSpinners\">\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('hour', true)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td></td>\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('minute', true)\"\r\n            [disabled]=\"disabled || disableMinute\">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button> </td>\r\n        <td></td>\r\n        <td *ngIf=\"showSeconds\">\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('second', true)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-spacer\"></td>\r\n        <td *ngIf=\"enableMeridian\"></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\" formControlName=\"hour\"\r\n              (keydown.ArrowUp)=\"change('hour', true); $event.preventDefault()\"\r\n              (keydown.ArrowDown)=\"change('hour', false); $event.preventDefault()\" (blur)=\"change('hour')\">\r\n          </mat-form-field>\r\n        </td>\r\n        <td class=\"ngx-mat-timepicker-spacer\">&#58;</td>\r\n        <td>\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\"\r\n              formControlName=\"minute\" (keydown.ArrowUp)=\"change('minute', true); $event.preventDefault()\"\r\n              (keydown.ArrowDown)=\"change('minute', false); $event.preventDefault()\" (blur)=\"change('minute')\">\r\n          </mat-form-field>\r\n        </td>\r\n        <td *ngIf=\"showSeconds\" class=\"ngx-mat-timepicker-spacer\">&#58;</td>\r\n        <td *ngIf=\"showSeconds\">\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\"\r\n              formControlName=\"second\" (keydown.ArrowUp)=\"change('second', true); $event.preventDefault()\"\r\n              (keydown.ArrowDown)=\"change('second', false); $event.preventDefault()\" (blur)=\"change('second')\">\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-spacer\"></td>\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-meridian\">\r\n          <button mat-button (click)=\"toggleMeridian()\" mat-stroked-button [color]=\"color\" [disabled]=\"disabled\">\r\n            {{meridian}}\r\n          </button>\r\n        </td>\r\n      </tr>\r\n\r\n      <tr *ngIf=\"showSpinners\">\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('hour', false)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button> </td>\r\n        <td></td>\r\n        <td>\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('minute', false)\"\r\n            [disabled]=\"disabled || disableMinute\">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button> </td>\r\n        <td *ngIf=\"showSeconds\"></td>\r\n        <td *ngIf=\"showSeconds\">\r\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('second', false)\"\r\n            [disabled]=\"disabled\">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td *ngIf=\"enableMeridian\" class=\"ngx-mat-timepicker-spacer\"></td>\r\n        <td *ngIf=\"enableMeridian\"></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</form>",
                host: {
                    'class': 'ngx-mat-timepicker'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NgxMatTimepickerComponent)),
                        multi: true
                    }
                ],
                exportAs: 'ngxMatTimepicker',
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-mat-timepicker{font-size:13px}.ngx-mat-timepicker form{min-width:90px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td{text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer{font-weight:700}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mat-button{border-radius:4px;border-radius:50%;flex-shrink:0;height:36px;line-height:36px;min-width:64px;min-width:0;padding:0;width:36px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-icon-button{height:24px;line-height:24px;width:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-form-field{max-width:20px;text-align:center;width:20px}"]
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXRldGltZS1waWNrZXIvc3JjL2xpYi90aW1lcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSSxPQUFPLEVBQXdCLFdBQVcsRUFBYSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBbUI5TSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUErQ3BDLFlBQStCLFlBQWtDLEVBQ3ZELEVBQXFCLEVBQVUsV0FBd0I7UUFEbEMsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBQ3ZELE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUE1Q3hELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsYUFBUSxHQUFXLFlBQVksQ0FBQztRQUNoQyxlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLGVBQVUsR0FBVyxZQUFZLENBQUM7UUFD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QUNMLEtBQUs7Ozs7SUFYTix5Q0FBdUI7O0lBRXZCLDZDQUEwQjs7SUFDMUIsaURBQTZCOztJQUM3Qiw2Q0FBeUM7O0lBQ3pDLCtDQUEyQzs7SUFDM0MsK0NBQTJDOztJQUMzQyxnREFBNkI7O0lBQzdCLGtEQUErQjs7SUFDL0IsbURBQWdDOztJQUNoQyxnREFBK0I7O0lBQy9CLDBDQUF5Qzs7SUFFekMsNkNBQXVDOzs7OztJQXVCdkMsOENBQW1DOzs7OztJQUNuQywrQ0FBb0M7Ozs7O0lBQ3BDLDhDQUEyQjs7Ozs7SUFDM0IsMkNBQWtCOzs7OztJQUVsQiwrQ0FBd0Q7O0lBRXhELDRDQUFvQzs7SUFFeEIsaURBQXFEOzs7OztJQUMvRCx1Q0FBNkI7Ozs7O0lBQUUsZ0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTmd4TWF0RGF0ZUFkYXB0ZXIgfSBmcm9tICcuL2NvcmUvZGF0ZS1hZGFwdGVyJztcclxuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IsIERFRkFVTFRfU1RFUCwgZm9ybWF0VHdvRGlnaXRUaW1lVmFsdWUsIExJTUlUX1RJTUVTLCBNRVJJRElBTlMsIE5VTUVSSUNfUkVHRVgsIFBBVFRFUk5fSU5QVVRfSE9VUiwgUEFUVEVSTl9JTlBVVF9NSU5VVEUsIFBBVFRFUk5fSU5QVVRfU0VDT05EIH0gZnJvbSAnLi91dGlscy9kYXRlLXV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW1hdC10aW1lcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGltZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICduZ3gtbWF0LXRpbWVwaWNrZXInXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neE1hdFRpbWVwaWNrZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZXhwb3J0QXM6ICduZ3hNYXRUaW1lcGlja2VyJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0VGltZXBpY2tlckNvbXBvbmVudDxEPiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1NwaW5uZXJzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzdGVwSG91cjogbnVtYmVyID0gREVGQVVMVF9TVEVQO1xyXG4gIEBJbnB1dCgpIHN0ZXBNaW51dGU6IG51bWJlciA9IERFRkFVTFRfU1RFUDtcclxuICBASW5wdXQoKSBzdGVwU2Vjb25kOiBudW1iZXIgPSBERUZBVUxUX1NURVA7XHJcbiAgQElucHV0KCkgc2hvd1NlY29uZHMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlTWludXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW5hYmxlTWVyaWRpYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkZWZhdWx0VGltZTogbnVtYmVyW107XHJcbiAgQElucHV0KCkgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcclxuXHJcbiAgcHVibGljIG1lcmlkaWFuOiBzdHJpbmcgPSBNRVJJRElBTlMuQU07XHJcblxyXG4gIC8qKiBIb3VyICovXHJcbiAgcHJpdmF0ZSBnZXQgaG91cigpIHtcclxuICAgIGxldCB2YWwgPSBOdW1iZXIodGhpcy5mb3JtLmNvbnRyb2xzWydob3VyJ10udmFsdWUpO1xyXG4gICAgcmV0dXJuIGlzTmFOKHZhbCkgPyAwIDogdmFsO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZ2V0IG1pbnV0ZSgpIHtcclxuICAgIGxldCB2YWwgPSBOdW1iZXIodGhpcy5mb3JtLmNvbnRyb2xzWydtaW51dGUnXS52YWx1ZSk7XHJcbiAgICByZXR1cm4gaXNOYU4odmFsKSA/IDAgOiB2YWw7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgc2Vjb25kKCkge1xyXG4gICAgbGV0IHZhbCA9IE51bWJlcih0aGlzLmZvcm0uY29udHJvbHNbJ3NlY29uZCddLnZhbHVlKTtcclxuICAgIHJldHVybiBpc05hTih2YWwpID8gMCA6IHZhbDtcclxuICB9O1xyXG5cclxuICAvKiogV2hldGhlciBvciBub3QgdGhlIGZvcm0gaXMgdmFsaWQgKi9cclxuICBwdWJsaWMgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS52YWxpZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IH07XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfbW9kZWw6IEQ7XHJcblxyXG4gIHByaXZhdGUgX2Rlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHB1YmxpYyBwYXR0ZXJuID0gUEFUVEVSTl9JTlBVVF9IT1VSO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgX2RhdGVBZGFwdGVyOiBOZ3hNYXREYXRlQWRhcHRlcjxEPixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlcikge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcignTmd4TWF0RGF0ZUFkYXB0ZXInKTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoXHJcbiAgICAgIHtcclxuICAgICAgICBob3VyOiBbeyB2YWx1ZTogbnVsbCwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihQQVRURVJOX0lOUFVUX0hPVVIpXV0sXHJcbiAgICAgICAgbWludXRlOiBbeyB2YWx1ZTogbnVsbCwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihQQVRURVJOX0lOUFVUX01JTlVURSldXSxcclxuICAgICAgICBzZWNvbmQ6IFt7IHZhbHVlOiBudWxsLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9LCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKFBBVFRFUk5fSU5QVVRfU0VDT05EKV1dXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCksIGRlYm91bmNlVGltZSg0MDApKS5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgdGhpcy5fdXBkYXRlTW9kZWwoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCAmJiAhY2hhbmdlcy5kaXNhYmxlZC5maXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLmRpc2FibGVkID8gdGhpcy5mb3JtLmRpc2FibGUoKSA6IHRoaXMuZm9ybS5lbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpc2FibGVNaW51dGUgPyB0aGlzLmZvcm0uZ2V0KCdtaW51dGUnKS5kaXNhYmxlKCkgOiB0aGlzLmZvcm0uZ2V0KCdtaW51dGUnKS5lbmFibGUoKTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XHJcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyaXRlcyBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0gb2JqXHJcbiAgICovXHJcbiAgd3JpdGVWYWx1ZSh2YWw6IEQpOiB2b2lkIHtcclxuICAgIGlmICh2YWwgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9tb2RlbCA9IHZhbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX21vZGVsID0gdGhpcy5fZGF0ZUFkYXB0ZXIudG9kYXkoKTtcclxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFRpbWUgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNldFRpbWVCeURlZmF1bHRWYWx1ZXModGhpcy5fbW9kZWwsIHRoaXMuZGVmYXVsdFRpbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl91cGRhdGVIb3VyTWludXRlU2Vjb25kKCk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCdzIHZhbHVlIGNoYW5nZXMgaW4gdGhlIFVJLiAqL1xyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50LlxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvKiogRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgYXBwcm9wcmlhdGUgRE9NIGVsZW1lbnQgKi9cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXQgaW5wdXRcclxuICAgKiBAcGFyYW0gaW5wdXQgXHJcbiAgICovXHJcbiAgcHVibGljIGZvcm1hdElucHV0KGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoTlVNRVJJQ19SRUdFWCwgJycpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRvZ2dsZSBtZXJpZGlhbiAqL1xyXG4gIHB1YmxpYyB0b2dnbGVNZXJpZGlhbigpIHtcclxuICAgIHRoaXMubWVyaWRpYW4gPSAodGhpcy5tZXJpZGlhbiA9PT0gTUVSSURJQU5TLkFNKSA/IE1FUklESUFOUy5QTSA6IE1FUklESUFOUy5BTTtcclxuICAgIHRoaXMuY2hhbmdlKCdob3VyJyk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2hhbmdlIHByb3BlcnR5IG9mIHRpbWUgKi9cclxuICBwdWJsaWMgY2hhbmdlKHByb3A6IHN0cmluZywgdXA/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5fZ2V0TmV4dFZhbHVlQnlQcm9wKHByb3AsIHVwKTtcclxuICAgIHRoaXMuZm9ybS5jb250cm9sc1twcm9wXS5zZXRWYWx1ZShmb3JtYXRUd29EaWdpdFRpbWVWYWx1ZShuZXh0KSwgeyBvbmx5U2VsZjogZmFsc2UsIGVtaXRFdmVudDogZmFsc2UgfSk7XHJcbiAgICB0aGlzLl91cGRhdGVNb2RlbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFVwZGF0ZSBjb250cm9scyBvZiBmb3JtIGJ5IG1vZGVsICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlSG91ck1pbnV0ZVNlY29uZCgpIHtcclxuICAgIGxldCBfaG91ciA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldEhvdXIodGhpcy5fbW9kZWwpO1xyXG4gICAgY29uc3QgX21pbnV0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldE1pbnV0ZSh0aGlzLl9tb2RlbCk7XHJcbiAgICBjb25zdCBfc2Vjb25kID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0U2Vjb25kKHRoaXMuX21vZGVsKTtcclxuXHJcbiAgICBpZiAodGhpcy5lbmFibGVNZXJpZGlhbikge1xyXG4gICAgICBpZiAoX2hvdXIgPiBMSU1JVF9USU1FUy5tZXJpZGlhbikge1xyXG4gICAgICAgIF9ob3VyID0gX2hvdXIgLSBMSU1JVF9USU1FUy5tZXJpZGlhbjtcclxuICAgICAgICB0aGlzLm1lcmlkaWFuID0gTUVSSURJQU5TLlBNO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubWVyaWRpYW4gPSBNRVJJRElBTlMuQU07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2hvdXInXS5zZXRWYWx1ZShmb3JtYXRUd29EaWdpdFRpbWVWYWx1ZShfaG91cikpO1xyXG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzWydtaW51dGUnXS5zZXRWYWx1ZShmb3JtYXRUd29EaWdpdFRpbWVWYWx1ZShfbWludXRlKSk7XHJcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3NlY29uZCddLnNldFZhbHVlKGZvcm1hdFR3b0RpZ2l0VGltZVZhbHVlKF9zZWNvbmQpKTtcclxuICB9XHJcblxyXG4gIC8qKiBVcGRhdGUgbW9kZWwgKi9cclxuICBwcml2YXRlIF91cGRhdGVNb2RlbCgpIHtcclxuICAgIGxldCBfaG91ciA9IHRoaXMuaG91cjtcclxuICAgIGlmICh0aGlzLmVuYWJsZU1lcmlkaWFuICYmIHRoaXMubWVyaWRpYW4gPT09IE1FUklESUFOUy5QTSAmJiBfaG91ciAhPT0gTElNSVRfVElNRVMubWVyaWRpYW4pIHtcclxuICAgICAgX2hvdXIgPSBfaG91ciArIExJTUlUX1RJTUVTLm1lcmlkaWFuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNldEhvdXIodGhpcy5fbW9kZWwsIF9ob3VyKTtcclxuICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNldE1pbnV0ZSh0aGlzLl9tb2RlbCwgdGhpcy5taW51dGUpO1xyXG4gICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0U2Vjb25kKHRoaXMuX21vZGVsLCB0aGlzLnNlY29uZCk7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl9tb2RlbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbmV4dCB2YWx1ZSBieSBwcm9wZXJ0eVxyXG4gICAqIEBwYXJhbSBwcm9wIFxyXG4gICAqIEBwYXJhbSB1cFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2dldE5leHRWYWx1ZUJ5UHJvcChwcm9wOiBzdHJpbmcsIHVwPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICBjb25zdCBrZXlQcm9wID0gcHJvcFswXS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKTtcclxuICAgIGNvbnN0IG1pbiA9IExJTUlUX1RJTUVTW2BtaW4ke2tleVByb3B9YF07XHJcbiAgICBsZXQgbWF4ID0gTElNSVRfVElNRVNbYG1heCR7a2V5UHJvcH1gXTtcclxuXHJcbiAgICBpZiAocHJvcCA9PT0gJ2hvdXInICYmIHRoaXMuZW5hYmxlTWVyaWRpYW4pIHtcclxuICAgICAgbWF4ID0gTElNSVRfVElNRVMubWVyaWRpYW47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5leHQ7XHJcbiAgICBpZiAodXAgPT0gbnVsbCkge1xyXG4gICAgICBuZXh0ID0gdGhpc1twcm9wXSAlIChtYXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dCA9IHVwID8gdGhpc1twcm9wXSArIHRoaXNbYHN0ZXAke2tleVByb3B9YF0gOiB0aGlzW3Byb3BdIC0gdGhpc1tgc3RlcCR7a2V5UHJvcH1gXTtcclxuICAgICAgaWYgKHByb3AgPT09ICdob3VyJyAmJiB0aGlzLmVuYWJsZU1lcmlkaWFuKSB7XHJcbiAgICAgICAgbmV4dCA9IG5leHQgJSAobWF4ICsgMSk7XHJcbiAgICAgICAgaWYgKG5leHQgPT09IDApIG5leHQgPSB1cCA/IDEgOiBtYXg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV4dCA9IG5leHQgJSBtYXg7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVwKSB7XHJcbiAgICAgICAgbmV4dCA9IG5leHQgPiBtYXggPyAobmV4dCAtIG1heCArIG1pbikgOiBuZXh0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5leHQgPSBuZXh0IDwgbWluID8gKG5leHQgLSBtaW4gKyBtYXgpIDogbmV4dDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==