/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/native-date.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { NgxMatDateAdapter } from './date-adapter';
import { NgxMatNativeDateAdapter } from './native-date-adapter';
import { NGX_MAT_NATIVE_DATE_FORMATS } from './native-date-formats';
import { NGX_MAT_DATE_FORMATS } from './date-formats';
export class NgxNativeDateModule {
}
NgxNativeDateModule.decorators = [
    { type: NgModule, args: [{
                imports: [PlatformModule],
                providers: [
                    { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter },
                ],
            },] }
];
const ɵ0 = NGX_MAT_NATIVE_DATE_FORMATS;
export class NgxMatNativeDateModule {
}
NgxMatNativeDateModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgxNativeDateModule],
                providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: ɵ0 }],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGF0ZXRpbWUtcGlja2VyL3NyYy9saWIvY29yZS9uYXRpdmUtZGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTdEQsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTi9CLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRTtvQkFDUCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7aUJBQ3BFO2FBQ0o7O1dBSzBELDJCQUEyQjtBQUV0RixNQUFNLE9BQU8sc0JBQXNCOzs7WUFKbEMsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLElBQTZCLEVBQUUsQ0FBQzthQUN4RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hNYXREYXRlQWRhcHRlciB9IGZyb20gJy4vZGF0ZS1hZGFwdGVyJztcclxuaW1wb3J0IHsgTmd4TWF0TmF0aXZlRGF0ZUFkYXB0ZXIgfSBmcm9tICcuL25hdGl2ZS1kYXRlLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBOR1hfTUFUX05BVElWRV9EQVRFX0ZPUk1BVFMgfSBmcm9tICcuL25hdGl2ZS1kYXRlLWZvcm1hdHMnO1xyXG5pbXBvcnQgeyBOR1hfTUFUX0RBVEVfRk9STUFUUyB9IGZyb20gJy4vZGF0ZS1mb3JtYXRzJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1BsYXRmb3JtTW9kdWxlXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogTmd4TWF0RGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBOZ3hNYXROYXRpdmVEYXRlQWRhcHRlciB9LFxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE5hdGl2ZURhdGVNb2R1bGUgeyB9XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05neE5hdGl2ZURhdGVNb2R1bGVdLFxyXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR1hfTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE5HWF9NQVRfTkFUSVZFX0RBVEVfRk9STUFUUyB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdE5hdGl2ZURhdGVNb2R1bGUgeyB9XHJcbiJdfQ==