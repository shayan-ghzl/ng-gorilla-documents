import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * @title Basic File Inputs
 */
export class FileInputOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FileInputOverviewExample, isStandalone: true, selector: "file-input-overview-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>shayan Favorite food</mat-label>\r\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>shayan Leave a comment</mat-label>\r\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-overview-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>shayan Favorite food</mat-label>\r\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>shayan Leave a comment</mat-label>\r\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZmlsZS1pbnB1dC9maWxlLWlucHV0LW92ZXJ2aWV3L2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC1vdmVydmlldy9maWxlLWlucHV0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTNDOztHQUVHO0FBUUgsTUFBTSxPQUFPLHdCQUF3Qjs4R0FBeEIsd0JBQXdCO2tHQUF4Qix3QkFBd0IsdUZDZnJDLDhiQVdBLHFNREVZLFdBQVcsdWRBQUUsa0JBQWtCLDBTQUFFLGNBQWM7OzJGQUU5Qyx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UsNkJBQTZCLGNBRzNCLElBQUksV0FDUCxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIEJhc2ljIEZpbGUgSW5wdXRzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZScsXHJcbiAgc3R5bGVVcmxzOiBbJ2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJ2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlSW5wdXRPdmVydmlld0V4YW1wbGUge31cclxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cclxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cclxuICAgIDxtYXQtbGFiZWw+c2hheWFuIEZhdm9yaXRlIGZvb2Q8L21hdC1sYWJlbD5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiBQaXp6YVwiIHZhbHVlPVwiU3VzaGlcIj5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cclxuICAgIDxtYXQtbGFiZWw+c2hheWFuIExlYXZlIGEgY29tbWVudDwvbWF0LWxhYmVsPlxyXG4gICAgPHRleHRhcmVhIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIEl0IG1ha2VzIG1lIGZlZWwuLi5cIj48L3RleHRhcmVhPlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZm9ybT5cclxuIl19