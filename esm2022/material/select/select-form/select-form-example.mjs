import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/input";
/**
 * @title Select in a form
 */
export class SelectFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectFormExample, isStandalone: true, selector: "select-form-example", ngImport: i0, template: "<form>\r\n  <h4>mat-select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite food</mat-label>\r\n    <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\r\n      @for (food of foods; track food) {\r\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n      }\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p> Selected food: {{selectedValue}} </p>\r\n  <h4>native html select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite car</mat-label>\r\n    <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\r\n      <option value=\"\" selected></option>\r\n      @for (car of cars; track car) {\r\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\r\n      }\r\n    </select>\r\n  </mat-form-field>\r\n  <p> Selected car: {{selectedCar}} </p>\r\n</form>\r\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-form-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule], template: "<form>\r\n  <h4>mat-select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite food</mat-label>\r\n    <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\r\n      @for (food of foods; track food) {\r\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n      }\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p> Selected food: {{selectedValue}} </p>\r\n  <h4>native html select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite car</mat-label>\r\n    <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\r\n      <option value=\"\" selected></option>\r\n      @for (car of cars; track car) {\r\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\r\n      }\r\n    </select>\r\n  </mat-form-field>\r\n  <p> Selected car: {{selectedCar}} </p>\r\n</form>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZm9ybS9zZWxlY3QtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1mb3JtL3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBWTNDOztHQUVHO0FBT0gsTUFBTSxPQUFPLGlCQUFpQjtJQU45QjtRQVVFLFVBQUssR0FBVztZQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7UUFFRixTQUFJLEdBQVU7WUFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUNwQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztZQUNsQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztTQUMzQyxDQUFDO0tBQ0g7OEdBZlksaUJBQWlCO2tHQUFqQixpQkFBaUIsK0VDekI5Qix5ekJBdUJBLDJDREFZLFdBQVcsa3JDQUFFLGtCQUFrQiwwU0FBRSxlQUFlLG1yQkFBRSxjQUFjOzsyRkFFL0QsaUJBQWlCO2tCQU43QixTQUFTOytCQUNFLHFCQUFxQixjQUVuQixJQUFJLFdBQ1AsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbnRlcmZhY2UgRm9vZCB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICB2aWV3VmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIENhciB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICB2aWV3VmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBTZWxlY3QgaW4gYSBmb3JtXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlbGVjdC1mb3JtLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWZvcm0tZXhhbXBsZS5odG1sJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdElucHV0TW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZvcm1FeGFtcGxlIHtcclxuICBzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWRDYXI6IHN0cmluZztcclxuXHJcbiAgZm9vZHM6IEZvb2RbXSA9IFtcclxuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxyXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXHJcbiAgICB7dmFsdWU6ICd0YWNvcy0yJywgdmlld1ZhbHVlOiAnVGFjb3MnfSxcclxuICBdO1xyXG5cclxuICBjYXJzOiBDYXJbXSA9IFtcclxuICAgIHt2YWx1ZTogJ3ZvbHZvJywgdmlld1ZhbHVlOiAnVm9sdm8nfSxcclxuICAgIHt2YWx1ZTogJ3NhYWInLCB2aWV3VmFsdWU6ICdTYWFiJ30sXHJcbiAgICB7dmFsdWU6ICdtZXJjZWRlcycsIHZpZXdWYWx1ZTogJ01lcmNlZGVzJ30sXHJcbiAgXTtcclxufVxyXG4iLCI8Zm9ybT5cclxuICA8aDQ+bWF0LXNlbGVjdDwvaDQ+XHJcbiAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBmb29kPC9tYXQtbGFiZWw+XHJcbiAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIiBuYW1lPVwiZm9vZFwiPlxyXG4gICAgICBAZm9yIChmb29kIG9mIGZvb2RzOyB0cmFjayBmb29kKSB7XHJcbiAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cImZvb2QudmFsdWVcIj57e2Zvb2Qudmlld1ZhbHVlfX08L21hdC1vcHRpb24+XHJcbiAgICAgIH1cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxwPiBTZWxlY3RlZCBmb29kOiB7e3NlbGVjdGVkVmFsdWV9fSA8L3A+XHJcbiAgPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XHJcbiAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBjYXI8L21hdC1sYWJlbD5cclxuICAgIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ2FyXCIgbmFtZT1cImNhclwiPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ+PC9vcHRpb24+XHJcbiAgICAgIEBmb3IgKGNhciBvZiBjYXJzOyB0cmFjayBjYXIpIHtcclxuICAgICAgICA8b3B0aW9uIFt2YWx1ZV09XCJjYXIudmFsdWVcIj57e2Nhci52aWV3VmFsdWV9fTwvb3B0aW9uPlxyXG4gICAgICB9XHJcbiAgICA8L3NlbGVjdD5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxwPiBTZWxlY3RlZCBjYXI6IHt7c2VsZWN0ZWRDYXJ9fSA8L3A+XHJcbjwvZm9ybT5cclxuIl19