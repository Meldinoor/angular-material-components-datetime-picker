/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar-body.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation, NgZone, } from '@angular/core';
import { take } from 'rxjs/operators';
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 * @template D
 */
export class NgxMatCalendarCell {
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
export function NgxMatCalendarUserEvent() { }
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
export class NgxMatCalendarBody {
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
NgxMatCalendarBody.decorators = [
    { type: Component, args: [{
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
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RhdGV0aW1lLXBpY2tlci9zcmMvbGliL2NhbGVuZGFyLWJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixNQUFNLEdBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFXcEMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7OztJQUM3QixZQUFtQixLQUFhLEVBQ2IsWUFBb0IsRUFDcEIsU0FBaUIsRUFDakIsT0FBZ0IsRUFDaEIsYUFBMkMsRUFBRSxFQUM3QyxlQUFlLEtBQUssRUFDcEIsUUFBWTtRQU5aLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUM7UUFDN0MsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBSTtJQUFHLENBQUM7Q0FDcEM7OztJQVBhLG1DQUFvQjs7SUFDcEIsMENBQTJCOztJQUMzQix1Q0FBd0I7O0lBQ3hCLHFDQUF1Qjs7SUFDdkIsd0NBQW9EOztJQUNwRCwwQ0FBMkI7O0lBQzNCLHNDQUFtQjs7Ozs7OztBQUlqQyw2Q0FHQzs7O0lBRkMsd0NBQVM7O0lBQ1Qsd0NBQWE7Ozs7OztBQW9CZixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQW9FN0IsWUFBb0IsV0FBb0MsRUFBVSxPQUFlO1FBQTdELGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUFVLFlBQU8s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Q0FBQztBQUN6RSxDQUFDOzs7Ozs7OztBQUdELFNBQVMsS0FBSyxDQUFDLEtBQWEsRUFBRSxLQUFvQixFQUFFLEdBQWtCO0lBQ3BFLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUM1RSxDQUFDOzs7Ozs7Ozs7QUFHRCxTQUFTLFNBQVMsQ0FBQyxLQUFhLEVBQ2IsS0FBb0IsRUFDcEIsR0FBa0IsRUFDbEIsWUFBcUI7SUFDdEMsT0FBTyxZQUFZLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHO1FBQy9ELEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQztBQUN4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG4vKipcclxuICogRXh0cmEgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgYXNzb2NpYXRlZCB3aXRoIGEgY2FsZW5kYXIgY2VsbC5cclxuICovXHJcbmV4cG9ydCB0eXBlIE5neE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXMgPSBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwge1trZXk6IHN0cmluZ106IGFueX07XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY2xhc3MgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gYSBzaW5nbGUgY2FsZW5kYXIgY2VsbC5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5neE1hdENhbGVuZGFyQ2VsbDxEID0gYW55PiB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgcHVibGljIGRpc3BsYXlWYWx1ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbixcclxuICAgICAgICAgICAgICBwdWJsaWMgY3NzQ2xhc3NlczogTmd4TWF0Q2FsZW5kYXJDZWxsQ3NzQ2xhc3NlcyA9IHt9LFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBjb21wYXJlVmFsdWUgPSB2YWx1ZSxcclxuICAgICAgICAgICAgICBwdWJsaWMgcmF3VmFsdWU/OiBEKSB7fVxyXG59XHJcblxyXG4vKiogRXZlbnQgZW1pdHRlZCB3aGVuIGEgZGF0ZSBpbnNpZGUgdGhlIGNhbGVuZGFyIGlzIHRyaWdnZXJlZCBhcyBhIHJlc3VsdCBvZiBhIHVzZXIgYWN0aW9uLiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE5neE1hdENhbGVuZGFyVXNlckV2ZW50PEQ+IHtcclxuICB2YWx1ZTogRDtcclxuICBldmVudDogRXZlbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcm5hbCBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IGNhbGVuZGFyIGRhdGEgaW4gYSB0YWJsZS5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4LW1hdC1jYWxlbmRhci1ib2R5XScsXHJcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1ib2R5Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjYWxlbmRhci1ib2R5LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnY2xhc3MnOiAnbmd4LW1hdC1jYWxlbmRhci1ib2R5JyxcclxuICAgICdyb2xlJzogJ2dyaWQnLFxyXG4gICAgJ2FyaWEtcmVhZG9ubHknOiAndHJ1ZSdcclxuICB9LFxyXG4gIGV4cG9ydEFzOiAnTmd4TWF0Q2FsZW5kYXJCb2R5JyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0Q2FsZW5kYXJCb2R5IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gc2tpcCB0aGUgbmV4dCBmb2N1cyBldmVudCB3aGVuIHJlbmRlcmluZyB0aGUgcHJldmlldyByYW5nZS5cclxuICAgKiBXZSBuZWVkIGEgZmxhZyBsaWtlIHRoaXMsIGJlY2F1c2Ugc29tZSBicm93c2VycyBmaXJlIGZvY3VzIGV2ZW50cyBhc3luY2hyb25vdXNseS5cclxuICAgKi9cclxuICBwcml2YXRlIF9za2lwTmV4dEZvY3VzOiBib29sZWFuO1xyXG5cclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgdGFibGUuIChlLmcuIFwiSmFuIDIwMTdcIikuICovXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBjZWxscyB0byBkaXNwbGF5IGluIHRoZSB0YWJsZS4gKi9cclxuICBASW5wdXQoKSByb3dzOiBOZ3hNYXRDYWxlbmRhckNlbGxbXVtdO1xyXG5cclxuICAvKiogVGhlIHZhbHVlIGluIHRoZSB0YWJsZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRvZGF5LiAqL1xyXG4gIEBJbnB1dCgpIHRvZGF5VmFsdWU6IG51bWJlcjtcclxuXHJcbiAgLyoqIFN0YXJ0IHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBkYXRlIHJhbmdlLiAqL1xyXG4gIEBJbnB1dCgpIHN0YXJ0VmFsdWU6IG51bWJlcjtcclxuXHJcbiAgLyoqIEVuZCB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgZGF0ZSByYW5nZS4gKi9cclxuICBASW5wdXQoKSBlbmRWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGZyZWUgY2VsbHMgbmVlZGVkIHRvIGZpdCB0aGUgbGFiZWwgaW4gdGhlIGZpcnN0IHJvdy4gKi9cclxuICBASW5wdXQoKSBsYWJlbE1pblJlcXVpcmVkQ2VsbHM6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgdGFibGUuICovXHJcbiAgQElucHV0KCkgbnVtQ29sczogbnVtYmVyID0gNztcclxuXHJcbiAgLyoqIFRoZSBjZWxsIG51bWJlciBvZiB0aGUgYWN0aXZlIGNlbGwgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUNlbGw6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKiBXaGV0aGVyIGEgcmFuZ2UgaXMgYmVpbmcgc2VsZWN0ZWQuICovXHJcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYXNwZWN0IHJhdGlvICh3aWR0aCAvIGhlaWdodCkgdG8gdXNlIGZvciB0aGUgY2VsbHMgaW4gdGhlIHRhYmxlLiBUaGlzIGFzcGVjdCByYXRpbyB3aWxsIGJlXHJcbiAgICogbWFpbnRhaW5lZCBldmVuIGFzIHRoZSB0YWJsZSByZXNpemVzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNlbGxBc3BlY3RSYXRpbzogbnVtYmVyID0gMTtcclxuXHJcbiAgLyoqIFN0YXJ0IG9mIHRoZSBjb21wYXJpc29uIHJhbmdlLiAqL1xyXG4gIEBJbnB1dCgpIGNvbXBhcmlzb25TdGFydDogbnVtYmVyIHwgbnVsbDtcclxuXHJcbiAgLyoqIEVuZCBvZiB0aGUgY29tcGFyaXNvbiByYW5nZS4gKi9cclxuICBASW5wdXQoKSBjb21wYXJpc29uRW5kOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICAvKiogU3RhcnQgb2YgdGhlIHByZXZpZXcgcmFuZ2UuICovXHJcbiAgQElucHV0KCkgcHJldmlld1N0YXJ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIEVuZCBvZiB0aGUgcHJldmlldyByYW5nZS4gKi9cclxuICBASW5wdXQoKSBwcmV2aWV3RW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gYSBuZXcgdmFsdWUgaXMgc2VsZWN0ZWQuICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ3hNYXRDYWxlbmRhclVzZXJFdmVudDxudW1iZXI+PiA9XHJcbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8Tmd4TWF0Q2FsZW5kYXJVc2VyRXZlbnQ8bnVtYmVyPj4oKTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHByZXZpZXcgaGFzIGNoYW5nZWQgYXMgYSByZXN1bHQgb2YgYSB1c2VyIGFjdGlvbi4gKi9cclxuICBAT3V0cHV0KCkgcHJldmlld0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd4TWF0Q2FsZW5kYXJVc2VyRXZlbnQ8Tmd4TWF0Q2FsZW5kYXJDZWxsIHwgbnVsbD4+KCk7XHJcblxyXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGJsYW5rIGNlbGxzIHRvIHB1dCBhdCB0aGUgYmVnaW5uaW5nIGZvciB0aGUgZmlyc3Qgcm93LiAqL1xyXG4gIF9maXJzdFJvd09mZnNldDogbnVtYmVyO1xyXG5cclxuICAvKiogUGFkZGluZyBmb3IgdGhlIGluZGl2aWR1YWwgZGF0ZSBjZWxscy4gKi9cclxuICBfY2VsbFBhZGRpbmc6IHN0cmluZztcclxuXHJcbiAgLyoqIFdpZHRoIG9mIGFuIGluZGl2aWR1YWwgY2VsbC4gKi9cclxuICBfY2VsbFdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLl9lbnRlckhhbmRsZXIsIHRydWUpO1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fZW50ZXJIYW5kbGVyLCB0cnVlKTtcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5fbGVhdmVIYW5kbGVyLCB0cnVlKTtcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fbGVhdmVIYW5kbGVyLCB0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIENhbGxlZCB3aGVuIGEgY2VsbCBpcyBjbGlja2VkLiAqL1xyXG4gIF9jZWxsQ2xpY2tlZChjZWxsOiBOZ3hNYXRDYWxlbmRhckNlbGwsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoY2VsbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHt2YWx1ZTogY2VsbC52YWx1ZSwgZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBSZXR1cm5zIHdoZXRoZXIgYSBjZWxsIHNob3VsZCBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQuICovXHJcbiAgX2lzU2VsZWN0ZWQoY2VsbDogTmd4TWF0Q2FsZW5kYXJDZWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFydFZhbHVlID09PSBjZWxsLmNvbXBhcmVWYWx1ZSB8fCB0aGlzLmVuZFZhbHVlID09PSBjZWxsLmNvbXBhcmVWYWx1ZTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IGNvbHVtbkNoYW5nZXMgPSBjaGFuZ2VzWydudW1Db2xzJ107XHJcbiAgICBjb25zdCB7cm93cywgbnVtQ29sc30gPSB0aGlzO1xyXG5cclxuICAgIGlmIChjaGFuZ2VzWydyb3dzJ10gfHwgY29sdW1uQ2hhbmdlcykge1xyXG4gICAgICB0aGlzLl9maXJzdFJvd09mZnNldCA9IHJvd3MgJiYgcm93cy5sZW5ndGggJiYgcm93c1swXS5sZW5ndGggPyBudW1Db2xzIC0gcm93c1swXS5sZW5ndGggOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzWydjZWxsQXNwZWN0UmF0aW8nXSB8fCBjb2x1bW5DaGFuZ2VzIHx8ICF0aGlzLl9jZWxsUGFkZGluZykge1xyXG4gICAgICB0aGlzLl9jZWxsUGFkZGluZyA9IGAkezUwICogdGhpcy5jZWxsQXNwZWN0UmF0aW8gLyBudW1Db2xzfSVgO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb2x1bW5DaGFuZ2VzIHx8ICF0aGlzLl9jZWxsV2lkdGgpIHtcclxuICAgICAgdGhpcy5fY2VsbFdpZHRoID0gYCR7MTAwIC8gbnVtQ29sc30lYDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuX2VudGVySGFuZGxlciwgdHJ1ZSk7XHJcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fZW50ZXJIYW5kbGVyLCB0cnVlKTtcclxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuX2xlYXZlSGFuZGxlciwgdHJ1ZSk7XHJcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9sZWF2ZUhhbmRsZXIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJldHVybnMgd2hldGhlciBhIGNlbGwgaXMgYWN0aXZlLiAqL1xyXG4gIF9pc0FjdGl2ZUNlbGwocm93SW5kZXg6IG51bWJlciwgY29sSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNlbGxOdW1iZXIgPSByb3dJbmRleCAqIHRoaXMubnVtQ29scyArIGNvbEluZGV4O1xyXG5cclxuICAgIC8vIEFjY291bnQgZm9yIHRoZSBmYWN0IHRoYXQgdGhlIGZpcnN0IHJvdyBtYXkgbm90IGhhdmUgYXMgbWFueSBjZWxscy5cclxuICAgIGlmIChyb3dJbmRleCkge1xyXG4gICAgICBjZWxsTnVtYmVyIC09IHRoaXMuX2ZpcnN0Um93T2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjZWxsTnVtYmVyID09IHRoaXMuYWN0aXZlQ2VsbDtcclxuICB9XHJcblxyXG4gIC8qKiBGb2N1c2VzIHRoZSBhY3RpdmUgY2VsbCBhZnRlciB0aGUgbWljcm90YXNrIHF1ZXVlIGlzIGVtcHR5LiAqL1xyXG4gIF9mb2N1c0FjdGl2ZUNlbGwobW92ZVByZXZpZXcgPSB0cnVlKSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNlbGw6IEhUTUxFbGVtZW50IHwgbnVsbCA9XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmd4LW1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZScpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlQ2VsbCkge1xyXG4gICAgICAgICAgaWYgKCFtb3ZlUHJldmlldykge1xyXG4gICAgICAgICAgICB0aGlzLl9za2lwTmV4dEZvY3VzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhY3RpdmVDZWxsLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBzdGFydCBvZiB0aGUgbWFpbiByYW5nZS4gKi9cclxuICBfaXNSYW5nZVN0YXJ0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBpc1N0YXJ0KHZhbHVlLCB0aGlzLnN0YXJ0VmFsdWUsIHRoaXMuZW5kVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBlbmQgb2YgdGhlIG1haW4gcmFuZ2UuICovXHJcbiAgX2lzUmFuZ2VFbmQodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGlzRW5kKHZhbHVlLCB0aGlzLnN0YXJ0VmFsdWUsIHRoaXMuZW5kVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHdpdGhpbiB0aGUgY3VycmVudGx5LXNlbGVjdGVkIHJhbmdlLiAqL1xyXG4gIF9pc0luUmFuZ2UodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzSW5SYW5nZSh2YWx1ZSwgdGhpcy5zdGFydFZhbHVlLCB0aGlzLmVuZFZhbHVlLCB0aGlzLmlzUmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBzdGFydCBvZiB0aGUgY29tcGFyaXNvbiByYW5nZS4gKi9cclxuICBfaXNDb21wYXJpc29uU3RhcnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGlzU3RhcnQodmFsdWUsIHRoaXMuY29tcGFyaXNvblN0YXJ0LCB0aGlzLmNvbXBhcmlzb25FbmQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNlbGwgaXMgYSBzdGFydCBicmlkZ2UgY2VsbCBiZXR3ZWVuIHRoZSBtYWluIGFuZCBjb21wYXJpc29uIHJhbmdlcy4gKi9cclxuICBfaXNDb21wYXJpc29uQnJpZGdlU3RhcnQodmFsdWU6IG51bWJlciwgcm93SW5kZXg6IG51bWJlciwgY29sSW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLl9pc0NvbXBhcmlzb25TdGFydCh2YWx1ZSkgfHwgdGhpcy5faXNSYW5nZVN0YXJ0KHZhbHVlKSB8fCAhdGhpcy5faXNJblJhbmdlKHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXZpb3VzQ2VsbDogTmd4TWF0Q2FsZW5kYXJDZWxsIHwgdW5kZWZpbmVkID0gdGhpcy5yb3dzW3Jvd0luZGV4XVtjb2xJbmRleCAtIDFdO1xyXG5cclxuICAgIGlmICghcHJldmlvdXNDZWxsKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzUm93ID0gdGhpcy5yb3dzW3Jvd0luZGV4IC0gMV07XHJcbiAgICAgIHByZXZpb3VzQ2VsbCA9IHByZXZpb3VzUm93ICYmIHByZXZpb3VzUm93W3ByZXZpb3VzUm93Lmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmV2aW91c0NlbGwgJiYgIXRoaXMuX2lzUmFuZ2VFbmQocHJldmlvdXNDZWxsLmNvbXBhcmVWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2VsbCBpcyBhbiBlbmQgYnJpZGdlIGNlbGwgYmV0d2VlbiB0aGUgbWFpbiBhbmQgY29tcGFyaXNvbiByYW5nZXMuICovXHJcbiAgX2lzQ29tcGFyaXNvbkJyaWRnZUVuZCh2YWx1ZTogbnVtYmVyLCByb3dJbmRleDogbnVtYmVyLCBjb2xJbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuX2lzQ29tcGFyaXNvbkVuZCh2YWx1ZSkgfHwgdGhpcy5faXNSYW5nZUVuZCh2YWx1ZSkgfHwgIXRoaXMuX2lzSW5SYW5nZSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXh0Q2VsbDogTmd4TWF0Q2FsZW5kYXJDZWxsIHwgdW5kZWZpbmVkID0gdGhpcy5yb3dzW3Jvd0luZGV4XVtjb2xJbmRleCArIDFdO1xyXG5cclxuICAgIGlmICghbmV4dENlbGwpIHtcclxuICAgICAgY29uc3QgbmV4dFJvdyA9IHRoaXMucm93c1tyb3dJbmRleCArIDFdO1xyXG4gICAgICBuZXh0Q2VsbCA9IG5leHRSb3cgJiYgbmV4dFJvd1swXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dENlbGwgJiYgIXRoaXMuX2lzUmFuZ2VTdGFydChuZXh0Q2VsbC5jb21wYXJlVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBlbmQgb2YgdGhlIGNvbXBhcmlzb24gcmFuZ2UuICovXHJcbiAgX2lzQ29tcGFyaXNvbkVuZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gaXNFbmQodmFsdWUsIHRoaXMuY29tcGFyaXNvblN0YXJ0LCB0aGlzLmNvbXBhcmlzb25FbmQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHdpdGhpbiB0aGUgY3VycmVudCBjb21wYXJpc29uIHJhbmdlLiAqL1xyXG4gIF9pc0luQ29tcGFyaXNvblJhbmdlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBpc0luUmFuZ2UodmFsdWUsIHRoaXMuY29tcGFyaXNvblN0YXJ0LCB0aGlzLmNvbXBhcmlzb25FbmQsIHRoaXMuaXNSYW5nZSk7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdGhlIHN0YXJ0IG9mIHRoZSBwcmV2aWV3IHJhbmdlLiAqL1xyXG4gIF9pc1ByZXZpZXdTdGFydCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gaXNTdGFydCh2YWx1ZSwgdGhpcy5wcmV2aWV3U3RhcnQsIHRoaXMucHJldmlld0VuZCk7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdGhlIGVuZCBvZiB0aGUgcHJldmlldyByYW5nZS4gKi9cclxuICBfaXNQcmV2aWV3RW5kKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBpc0VuZCh2YWx1ZSwgdGhpcy5wcmV2aWV3U3RhcnQsIHRoaXMucHJldmlld0VuZCk7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0cyB3aGV0aGVyIGEgdmFsdWUgaXMgaW5zaWRlIHRoZSBwcmV2aWV3IHJhbmdlLiAqL1xyXG4gIF9pc0luUHJldmlldyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gaXNJblJhbmdlKHZhbHVlLCB0aGlzLnByZXZpZXdTdGFydCwgdGhpcy5wcmV2aWV3RW5kLCB0aGlzLmlzUmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgdXNlciBlbnRlcnMgYW4gZWxlbWVudFxyXG4gICAqIGluc2lkZSB0aGUgY2FsZW5kYXIgYm9keSAoZS5nLiBieSBob3ZlcmluZyBpbiBvciBmb2N1cykuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZW50ZXJIYW5kbGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuX3NraXBOZXh0Rm9jdXMgJiYgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICB0aGlzLl9za2lwTmV4dEZvY3VzID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXZSBvbmx5IG5lZWQgdG8gaGl0IHRoZSB6b25lIHdoZW4gd2UncmUgc2VsZWN0aW5nIGEgcmFuZ2UuXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5fZ2V0Q2VsbEZyb21FbGVtZW50KGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XHJcblxyXG4gICAgICBpZiAoY2VsbCkge1xyXG4gICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5wcmV2aWV3Q2hhbmdlLmVtaXQoe3ZhbHVlOiBjZWxsLmVuYWJsZWQgPyBjZWxsIDogbnVsbCwgZXZlbnR9KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gdGhlIHVzZXIncyBwb2ludGVyIGxlYXZlcyBhbiBlbGVtZW50XHJcbiAgICogaW5zaWRlIHRoZSBjYWxlbmRhciBib2R5IChlLmcuIGJ5IGhvdmVyaW5nIG91dCBvciBibHVycmluZykuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbGVhdmVIYW5kbGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgLy8gV2Ugb25seSBuZWVkIHRvIGhpdCB0aGUgem9uZSB3aGVuIHdlJ3JlIHNlbGVjdGluZyBhIHJhbmdlLlxyXG4gICAgaWYgKHRoaXMucHJldmlld0VuZCAhPT0gbnVsbCAmJiB0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgLy8gT25seSByZXNldCB0aGUgcHJldmlldyBlbmQgdmFsdWUgd2hlbiBsZWF2aW5nIGNlbGxzLiBUaGlzIGxvb2tzIGJldHRlciwgYmVjYXVzZVxyXG4gICAgICAvLyB3ZSBoYXZlIGEgZ2FwIGJldHdlZW4gdGhlIGNlbGxzIGFuZCB0aGUgcm93cyBhbmQgd2UgZG9uJ3Qgd2FudCB0byByZW1vdmUgdGhlXHJcbiAgICAgIC8vIHJhbmdlIGp1c3QgZm9yIGl0IHRvIHNob3cgdXAgYWdhaW4gd2hlbiB0aGUgdXNlciBtb3ZlcyBhIGZldyBwaXhlbHMgdG8gdGhlIHNpZGUuXHJcbiAgICAgIGlmIChldmVudC50YXJnZXQgJiYgaXNUYWJsZUNlbGwoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5wcmV2aWV3Q2hhbmdlLmVtaXQoe3ZhbHVlOiBudWxsLCBldmVudH0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEZpbmRzIHRoZSBOZ3hNYXRDYWxlbmRhckNlbGwgdGhhdCBjb3JyZXNwb25kcyB0byBhIERPTSBub2RlLiAqL1xyXG4gIHByaXZhdGUgX2dldENlbGxGcm9tRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IE5neE1hdENhbGVuZGFyQ2VsbCB8IG51bGwge1xyXG4gICAgbGV0IGNlbGw6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmIChpc1RhYmxlQ2VsbChlbGVtZW50KSkge1xyXG4gICAgICBjZWxsID0gZWxlbWVudDtcclxuICAgIH0gZWxzZSBpZiAoaXNUYWJsZUNlbGwoZWxlbWVudC5wYXJlbnROb2RlISkpIHtcclxuICAgICAgY2VsbCA9IGVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2VsbCkge1xyXG4gICAgICBjb25zdCByb3cgPSBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1uZ3gtbWF0LXJvdycpO1xyXG4gICAgICBjb25zdCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1uZ3gtbWF0LWNvbCcpO1xyXG5cclxuICAgICAgaWYgKHJvdyAmJiBjb2wpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3dzW3BhcnNlSW50KHJvdyldW3BhcnNlSW50KGNvbCldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqIENoZWNrcyB3aGV0aGVyIGEgbm9kZSBpcyBhIHRhYmxlIGNlbGwgZWxlbWVudC4gKi9cclxuZnVuY3Rpb24gaXNUYWJsZUNlbGwobm9kZTogTm9kZSk6IG5vZGUgaXMgSFRNTFRhYmxlQ2VsbEVsZW1lbnQge1xyXG4gIHJldHVybiBub2RlLm5vZGVOYW1lID09PSAnVEQnO1xyXG59XHJcblxyXG4vKiogQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyB0aGUgc3RhcnQgb2YgYSByYW5nZS4gKi9cclxuZnVuY3Rpb24gaXNTdGFydCh2YWx1ZTogbnVtYmVyLCBzdGFydDogbnVtYmVyIHwgbnVsbCwgZW5kOiBudW1iZXIgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGVuZCAhPT0gbnVsbCAmJiBzdGFydCAhPT0gZW5kICYmIHZhbHVlIDwgZW5kICYmIHZhbHVlID09PSBzdGFydDtcclxufVxyXG5cclxuLyoqIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgdGhlIGVuZCBvZiBhIHJhbmdlLiAqL1xyXG5mdW5jdGlvbiBpc0VuZCh2YWx1ZTogbnVtYmVyLCBzdGFydDogbnVtYmVyIHwgbnVsbCwgZW5kOiBudW1iZXIgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHN0YXJ0ICE9PSBudWxsICYmIHN0YXJ0ICE9PSBlbmQgJiYgdmFsdWUgPj0gc3RhcnQgJiYgdmFsdWUgPT09IGVuZDtcclxufVxyXG5cclxuLyoqIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgaW5zaWRlIG9mIGEgcmFuZ2UuICovXHJcbmZ1bmN0aW9uIGlzSW5SYW5nZSh2YWx1ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgc3RhcnQ6IG51bWJlciB8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICBlbmQ6IG51bWJlciB8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICByYW5nZUVuYWJsZWQ6IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICByZXR1cm4gcmFuZ2VFbmFibGVkICYmIHN0YXJ0ICE9PSBudWxsICYmIGVuZCAhPT0gbnVsbCAmJiBzdGFydCAhPT0gZW5kICYmXHJcbiAgICAgICAgIHZhbHVlID49IHN0YXJ0ICYmIHZhbHVlIDw9IGVuZDtcclxufVxyXG4iXX0=