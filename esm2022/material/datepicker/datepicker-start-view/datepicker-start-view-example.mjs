import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Datepicker start date */
export class DatepickerStartViewExample {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerStartViewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerStartViewExample, isStandalone: true, selector: "datepicker-start-view-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerStartViewExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-start-view-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule], template: "<mat-form-field>\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItc3RhcnQtdmlldy9kYXRlcGlja2VyLXN0YXJ0LXZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1zdGFydC12aWV3L2RhdGVwaWNrZXItc3RhcnQtdmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRTNELG1DQUFtQztBQU9uQyxNQUFNLE9BQU8sMEJBQTBCO0lBTnZDO1FBT0UsY0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbEM7OEdBRlksMEJBQTBCO2tHQUExQiwwQkFBMEIseUZDYnZDLHlWQU9BLDJDRElZLGtCQUFrQixtZ0JBQUUsY0FBYywwV0FBRSxtQkFBbUIsaWdCQUFFLG1CQUFtQjs7MkZBRTNFLDBCQUEwQjtrQkFOdEMsU0FBUzsrQkFDRSwrQkFBK0IsY0FFN0IsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHtNYXROYXRpdmVEYXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBzdGFydCBkYXRlICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0TmF0aXZlRGF0ZU1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyU3RhcnRWaWV3RXhhbXBsZSB7XHJcbiAgc3RhcnREYXRlID0gbmV3IERhdGUoMTk5MCwgMCwgMSk7XHJcbn1cclxuIiwiPG1hdC1mb3JtLWZpZWxkPlxyXG4gIDxtYXQtbGFiZWw+Q2hvb3NlIGEgZGF0ZTwvbWF0LWxhYmVsPlxyXG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cclxuICA8bWF0LWhpbnQ+TU0vREQvWVlZWTwvbWF0LWhpbnQ+XHJcbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRJY29uU3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIgc3RhcnRWaWV3PVwieWVhclwiIFtzdGFydEF0XT1cInN0YXJ0RGF0ZVwiPjwvbWF0LWRhdGVwaWNrZXI+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbiJdfQ==