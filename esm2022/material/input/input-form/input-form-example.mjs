import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * @title Inputs in a form
 */
export class InputFormExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: InputFormExample, isStandalone: true, selector: "input-form-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Company (disabled)</mat-label>\r\n    <input matInput disabled value=\"Google\">\r\n  </mat-form-field>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>First name</mat-label>\r\n      <input matInput>\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\r\n      <input matInput>\r\n    </mat-form-field></td>\r\n  </tr></table>\r\n\r\n  <p>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Address</mat-label>\r\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Address 2</mat-label>\r\n      <textarea matInput></textarea>\r\n    </mat-form-field>\r\n  </p>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>City</mat-label>\r\n      <input matInput placeholder=\"Ex. San Francisco\">\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>State</mat-label>\r\n      <input matInput placeholder=\"Ex. California\">\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>Postal Code</mat-label>\r\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\r\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n    </mat-form-field></td>\r\n  </tr></table>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\ntd {\r\n  padding-right: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-form-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Company (disabled)</mat-label>\r\n    <input matInput disabled value=\"Google\">\r\n  </mat-form-field>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>First name</mat-label>\r\n      <input matInput>\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\r\n      <input matInput>\r\n    </mat-form-field></td>\r\n  </tr></table>\r\n\r\n  <p>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Address</mat-label>\r\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Address 2</mat-label>\r\n      <textarea matInput></textarea>\r\n    </mat-form-field>\r\n  </p>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>City</mat-label>\r\n      <input matInput placeholder=\"Ex. San Francisco\">\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>State</mat-label>\r\n      <input matInput placeholder=\"Ex. California\">\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>Postal Code</mat-label>\r\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\r\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n    </mat-form-field></td>\r\n  </tr></table>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\ntd {\r\n  padding-right: 8px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFM0M7O0dBRUc7QUFRSCxNQUFNLE9BQU8sZ0JBQWdCOzhHQUFoQixnQkFBZ0I7a0dBQWhCLGdCQUFnQiw4RUNmN0Isb3dEQTRDQSwrT0QvQlksV0FBVyx1ZEFBRSxrQkFBa0Isa1lBQUUsY0FBYzs7MkZBRTlDLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDRSxvQkFBb0IsY0FHbEIsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgSW5wdXRzIGluIGEgZm9ybVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dC1mb3JtLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydpbnB1dC1mb3JtLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRGb3JtRXhhbXBsZSB7fVxyXG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxyXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxyXG4gICAgPG1hdC1sYWJlbD5Db21wYW55IChkaXNhYmxlZCk8L21hdC1sYWJlbD5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCBkaXNhYmxlZCB2YWx1ZT1cIkdvb2dsZVwiPlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gIDx0YWJsZSBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0cj5cclxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cclxuICAgICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cclxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cclxuICAgICAgPG1hdC1sYWJlbD5Mb25nIExhc3QgTmFtZSBUaGF0IFdpbGwgQmUgVHJ1bmNhdGVkPC9tYXQtbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cclxuICA8L3RyPjwvdGFibGU+XHJcblxyXG4gIDxwPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XHJcbiAgICAgIDxtYXQtbGFiZWw+QWRkcmVzczwvbWF0LWxhYmVsPlxyXG4gICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFeC4gMTAwIE1haW4gU3RcIj4xNjAwIEFtcGhpdGhlYXRyZSBQa3d5PC90ZXh0YXJlYT5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cclxuICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzIDI8L21hdC1sYWJlbD5cclxuICAgICAgPHRleHRhcmVhIG1hdElucHV0PjwvdGV4dGFyZWE+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvcD5cclxuXHJcbiAgPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgY2VsbHNwYWNpbmc9XCIwXCI+PHRyPlxyXG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxyXG4gICAgICA8bWF0LWxhYmVsPkNpdHk8L21hdC1sYWJlbD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIFNhbiBGcmFuY2lzY29cIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cclxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cclxuICAgICAgPG1hdC1sYWJlbD5TdGF0ZTwvbWF0LWxhYmVsPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFeC4gQ2FsaWZvcm5pYVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxyXG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxyXG4gICAgICA8bWF0LWxhYmVsPlBvc3RhbCBDb2RlPC9tYXQtbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCAjcG9zdGFsQ29kZSBtYXhsZW5ndGg9XCI1XCIgcGxhY2Vob2xkZXI9XCJFeC4gOTQxMDVcIiB2YWx1ZT1cIjk0MDQzXCI+XHJcbiAgICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPnt7cG9zdGFsQ29kZS52YWx1ZS5sZW5ndGh9fSAvIDU8L21hdC1oaW50PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxyXG4gIDwvdHI+PC90YWJsZT5cclxuPC9mb3JtPlxyXG4iXX0=