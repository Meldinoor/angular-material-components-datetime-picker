/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/date-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LIMIT_TIMES = {
    minHour: 0,
    maxHour: 24,
    minMinute: 0,
    maxMinute: 60,
    minSecond: 0,
    maxSecond: 60,
    meridian: 12
};
/** @type {?} */
export const MERIDIANS = {
    AM: 'AM',
    PM: 'PM'
};
/** @type {?} */
export const DEFAULT_STEP = 1;
/** @type {?} */
export const NUMERIC_REGEX = /[^0-9]/g;
/** @type {?} */
export const PATTERN_INPUT_HOUR = /^(2[0-3]|[0-1][0-9]|[0-9])$/;
/** @type {?} */
export const PATTERN_INPUT_MINUTE = /^([0-5][0-9]|[0-9])$/;
/** @type {?} */
export const PATTERN_INPUT_SECOND = /^([0-5][0-9]|[0-9])$/;
/**
 * @param {?} val
 * @return {?}
 */
export function formatTwoDigitTimeValue(val) {
    /** @type {?} */
    const txt = val.toString();
    return txt.length > 1 ? txt : `0${txt}`;
}
/**
 * @param {?} provider
 * @return {?}
 */
export function createMissingDateImplError(provider) {
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
export function formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RhdGV0aW1lLXBpY2tlci9zcmMvbGliL3V0aWxzL2RhdGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxPQUFPLFdBQVcsR0FBRztJQUN2QixPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sRUFBRSxFQUFFO0lBQ1gsU0FBUyxFQUFFLENBQUM7SUFDWixTQUFTLEVBQUUsRUFBRTtJQUNiLFNBQVMsRUFBRSxDQUFDO0lBQ1osU0FBUyxFQUFFLEVBQUU7SUFDYixRQUFRLEVBQUUsRUFBRTtDQUNmOztBQUVELE1BQU0sT0FBTyxTQUFTLEdBQUc7SUFDckIsRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtDQUNYOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBQUcsQ0FBQzs7QUFDN0IsTUFBTSxPQUFPLGFBQWEsR0FBRyxTQUFTOztBQUV0QyxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsNkJBQTZCOztBQUMvRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsc0JBQXNCOztBQUMxRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsc0JBQXNCOzs7OztBQUUxRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsR0FBVzs7VUFDekMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUU7SUFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQzVDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUFDLFFBQWdCO0lBQ3ZELE9BQU8sS0FBSyxDQUNSLDJDQUEyQyxRQUFRLHlDQUF5QztRQUM1Riw2RkFBNkY7UUFDN0Ysd0JBQXdCLENBQUMsQ0FBQztBQUNsQyxDQUFDOzs7Ozs7O0FBR0QsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFhLEVBQUUsR0FBVztJQUN0RCxPQUFPLEdBQUcsS0FBSyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTElNSVRfVElNRVMgPSB7XHJcbiAgICBtaW5Ib3VyOiAwLFxyXG4gICAgbWF4SG91cjogMjQsXHJcbiAgICBtaW5NaW51dGU6IDAsXHJcbiAgICBtYXhNaW51dGU6IDYwLFxyXG4gICAgbWluU2Vjb25kOiAwLFxyXG4gICAgbWF4U2Vjb25kOiA2MCxcclxuICAgIG1lcmlkaWFuOiAxMlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTUVSSURJQU5TID0ge1xyXG4gICAgQU06ICdBTScsXHJcbiAgICBQTTogJ1BNJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TVEVQID0gMTtcclxuZXhwb3J0IGNvbnN0IE5VTUVSSUNfUkVHRVggPSAvW14wLTldL2c7XHJcblxyXG5leHBvcnQgY29uc3QgUEFUVEVSTl9JTlBVVF9IT1VSID0gL14oMlswLTNdfFswLTFdWzAtOV18WzAtOV0pJC87XHJcbmV4cG9ydCBjb25zdCBQQVRURVJOX0lOUFVUX01JTlVURSA9IC9eKFswLTVdWzAtOV18WzAtOV0pJC87XHJcbmV4cG9ydCBjb25zdCBQQVRURVJOX0lOUFVUX1NFQ09ORCA9IC9eKFswLTVdWzAtOV18WzAtOV0pJC87XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VHdvRGlnaXRUaW1lVmFsdWUodmFsOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHR4dCA9IHZhbC50b1N0cmluZygpO1xyXG4gICAgcmV0dXJuIHR4dC5sZW5ndGggPiAxID8gdHh0IDogYDAke3R4dH1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IocHJvdmlkZXI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIEVycm9yKFxyXG4gICAgICAgIGBOZ3hNYXREYXRlcGlja2VyOiBObyBwcm92aWRlciBmb3VuZCBmb3IgJHtwcm92aWRlcn0uIFlvdSBtdXN0IGltcG9ydCBvbmUgb2YgdGhlIGZvbGxvd2luZyBgICtcclxuICAgICAgICBgbW9kdWxlcyBhdCB5b3VyIGFwcGxpY2F0aW9uIHJvb3Q6IE5neE1hdE5hdGl2ZURhdGVNb2R1bGUsIE5neE1hdE1vbWVudE1vZHVsZSwgb3IgcHJvdmlkZSBhIGAgK1xyXG4gICAgICAgIGBjdXN0b20gaW1wbGVtZW50YXRpb24uYCk7XHJcbn1cclxuXHJcbi8qKiBGb3JtYXRzIGEgcmFuZ2Ugb2YgeWVhcnMuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRZZWFyUmFuZ2Uoc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3N0YXJ0fSBcXHUyMDEzICR7ZW5kfWA7XHJcbn1cclxuXHJcbiJdfQ==