/**
 * @fileoverview added by tsickle
 * Generated from: lib/datetime-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatCalendar, NgxMatCalendarHeader } from './calendar';
import { NgxMatCalendarBody } from './calendar-body';
import { NgxMatDatetimeInput } from './datetime-input';
import { NgxMatDatetimeContent, NgxMatDatetimePicker } from './datetime-picker.component';
import { NgxMatMonthView } from './month-view';
import { NgxMatMultiYearView } from './multi-year-view';
import { NgxMatTimepickerModule } from './timepicker.module';
import { NgxMatYearView } from './year-view';
import { DefaultNgxMatCalendarRangeStrategy, NGX_MAT_DATE_RANGE_SELECTION_STRATEGY } from './date-range-selection-strategy';
export class NgxMatDatetimePickerModule {
}
NgxMatDatetimePickerModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RhdGV0aW1lLXBpY2tlci9zcmMvbGliL2RhdGV0aW1lLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsK0NBQStDLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQStDNUgsTUFBTSxPQUFPLDBCQUEwQjs7O1lBN0N0QyxRQUFRLFNBQUM7Z0JBQ1AsT0FBTyxFQUFFO29CQUNOLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxhQUFhO29CQUNiLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxzQkFBc0I7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDTixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLG9CQUFvQjtpQkFDdEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNYLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixvQkFBb0I7aUJBQ3RCO2dCQUNELGVBQWUsRUFBRTtvQkFDZCxxQkFBcUI7b0JBQ3JCLG9CQUFvQjtpQkFDdEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNSLCtDQUErQztvQkFDL0M7d0JBQ0csT0FBTyxFQUFFLHFDQUFxQzt3QkFDOUMsUUFBUSxFQUFFLGtDQUFrQztxQkFDOUM7aUJBQ0g7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTmd4TWF0Q2FsZW5kYXIsIE5neE1hdENhbGVuZGFySGVhZGVyIH0gZnJvbSAnLi9jYWxlbmRhcic7XHJcbmltcG9ydCB7IE5neE1hdENhbGVuZGFyQm9keSB9IGZyb20gJy4vY2FsZW5kYXItYm9keSc7XHJcbmltcG9ydCB7IE5neE1hdERhdGV0aW1lSW5wdXQgfSBmcm9tICcuL2RhdGV0aW1lLWlucHV0JztcclxuaW1wb3J0IHsgTmd4TWF0RGF0ZXRpbWVDb250ZW50LCBOZ3hNYXREYXRldGltZVBpY2tlciB9IGZyb20gJy4vZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neE1hdE1vbnRoVmlldyB9IGZyb20gJy4vbW9udGgtdmlldyc7XHJcbmltcG9ydCB7IE5neE1hdE11bHRpWWVhclZpZXcgfSBmcm9tICcuL211bHRpLXllYXItdmlldyc7XHJcbmltcG9ydCB7IE5neE1hdFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICcuL3RpbWVwaWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTmd4TWF0WWVhclZpZXcgfSBmcm9tICcuL3llYXItdmlldyc7XHJcbmltcG9ydCB7IERlZmF1bHROZ3hNYXRDYWxlbmRhclJhbmdlU3RyYXRlZ3ksIE5HWF9NQVRfREFURV9SQU5HRV9TRUxFQ1RJT05fU1RSQVRFR1kgfSBmcm9tICcuL2RhdGUtcmFuZ2Utc2VsZWN0aW9uLXN0cmF0ZWd5JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgIGltcG9ydHM6IFtcclxuICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgIFBvcnRhbE1vZHVsZSxcclxuICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgIE5neE1hdFRpbWVwaWNrZXJNb2R1bGVcclxuICAgXSxcclxuICAgZXhwb3J0czogW1xyXG4gICAgICBOZ3hNYXREYXRldGltZVBpY2tlcixcclxuICAgICAgTmd4TWF0RGF0ZXRpbWVJbnB1dCxcclxuICAgICAgTmd4TWF0Q2FsZW5kYXIsXHJcbiAgICAgIE5neE1hdE1vbnRoVmlldyxcclxuICAgICAgTmd4TWF0Q2FsZW5kYXJCb2R5LFxyXG4gICAgICBOZ3hNYXRZZWFyVmlldyxcclxuICAgICAgTmd4TWF0TXVsdGlZZWFyVmlldyxcclxuICAgICAgTmd4TWF0Q2FsZW5kYXJIZWFkZXJcclxuICAgXSxcclxuICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgIE5neE1hdERhdGV0aW1lUGlja2VyLFxyXG4gICAgICBOZ3hNYXREYXRldGltZUNvbnRlbnQsXHJcbiAgICAgIE5neE1hdERhdGV0aW1lSW5wdXQsXHJcbiAgICAgIE5neE1hdENhbGVuZGFyLFxyXG4gICAgICBOZ3hNYXRNb250aFZpZXcsXHJcbiAgICAgIE5neE1hdENhbGVuZGFyQm9keSxcclxuICAgICAgTmd4TWF0WWVhclZpZXcsXHJcbiAgICAgIE5neE1hdE11bHRpWWVhclZpZXcsXHJcbiAgICAgIE5neE1hdENhbGVuZGFySGVhZGVyXHJcbiAgIF0sXHJcbiAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICBOZ3hNYXREYXRldGltZUNvbnRlbnQsXHJcbiAgICAgIE5neE1hdENhbGVuZGFySGVhZGVyXHJcbiAgIF0sXHJcbiAgIHByb3ZpZGVyczogW1xyXG4gICAgICBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUixcclxuICAgICAge1xyXG4gICAgICAgICBwcm92aWRlOiBOR1hfTUFUX0RBVEVfUkFOR0VfU0VMRUNUSU9OX1NUUkFURUdZLFxyXG4gICAgICAgICB1c2VDbGFzczogRGVmYXVsdE5neE1hdENhbGVuZGFyUmFuZ2VTdHJhdGVneVxyXG4gICAgICB9XHJcbiAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdERhdGV0aW1lUGlja2VyTW9kdWxlIHsgfVxyXG4iXX0=