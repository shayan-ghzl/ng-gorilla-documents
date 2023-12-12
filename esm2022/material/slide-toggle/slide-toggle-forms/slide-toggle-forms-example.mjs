import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule, } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/slide-toggle";
import * as i3 from "@angular/material/button";
/**
 * @title Slide-toggle with forms
 */
export class SlideToggleFormsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isChecked = true;
        this.formGroup = this._formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue],
        });
    }
    alertFormValues(formGroup) {
        alert(JSON.stringify(formGroup.value, null, 2));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleFormsExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SlideToggleFormsExample, isStandalone: true, selector: "slide-toggle-forms-example", ngImport: i0, template: "<p>Slide Toggle using a simple NgModel.</p>\r\n\r\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\r\n\r\n<p>Slide Toggle inside of a Template-driven form</p>\r\n\r\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\r\n\r\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\r\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\r\n\r\n  <button mat-raised-button type=\"submit\">Save Settings</button>\r\n</form>\r\n\r\n<p>Slide Toggle inside of a Reactive form</p>\r\n\r\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\r\n\r\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\r\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\r\n\r\n  <p>Form Group Status: {{formGroup.status}}</p>\r\n\r\n  <button mat-raised-button type=\"submit\">Save Settings</button>\r\n</form>\r\n", styles: [".example-form mat-slide-toggle {\r\n  margin: 8px 0;\r\n  display: block;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "directive", type: i2.MatSlideToggleRequiredValidator, selector: "mat-slide-toggle[required][formControlName],             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]" }, { kind: "component", type: i2.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: _MatSlideToggleRequiredValidatorModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-forms-example', standalone: true, imports: [
                        MatSlideToggleModule,
                        FormsModule,
                        _MatSlideToggleRequiredValidatorModule,
                        MatButtonModule,
                        ReactiveFormsModule,
                    ], template: "<p>Slide Toggle using a simple NgModel.</p>\r\n\r\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\r\n\r\n<p>Slide Toggle inside of a Template-driven form</p>\r\n\r\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\r\n\r\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\r\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\r\n\r\n  <button mat-raised-button type=\"submit\">Save Settings</button>\r\n</form>\r\n\r\n<p>Slide Toggle inside of a Reactive form</p>\r\n\r\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\r\n\r\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\r\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\r\n\r\n  <p>Form Group Status: {{formGroup.status}}</p>\r\n\r\n  <button mat-raised-button type=\"submit\">Save Settings</button>\r\n</form>\r\n", styles: [".example-form mat-slide-toggle {\r\n  margin: 8px 0;\r\n  display: block;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1mb3Jtcy9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsc0NBQXNDLEdBQ3ZDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBY0gsTUFBTSxPQUFPLHVCQUF1QjtJQU9sQyxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQU43QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNsQyxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO1NBQzNDLENBQUMsQ0FBQztJQUU2QyxDQUFDO0lBRWpELGVBQWUsQ0FBQyxTQUFvQjtRQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OEdBWFUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsc0ZDeEJwQyxpa0NBeUJBLDJJRFJJLG9CQUFvQixzakJBQ3BCLFdBQVcsby9CQUNYLHNDQUFzQyw4QkFDdEMsZUFBZSwyTkFDZixtQkFBbUI7OzJGQUdWLHVCQUF1QjtrQkFibkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FHMUIsSUFBSSxXQUNQO3dCQUNQLG9CQUFvQjt3QkFDcEIsV0FBVzt3QkFDWCxzQ0FBc0M7d0JBQ3RDLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHtcclxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuICBfTWF0U2xpZGVUb2dnbGVSZXF1aXJlZFZhbGlkYXRvck1vZHVsZSxcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBTbGlkZS10b2dnbGUgd2l0aCBmb3Jtc1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIF9NYXRTbGlkZVRvZ2dsZVJlcXVpcmVkVmFsaWRhdG9yTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGUge1xyXG4gIGlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgZm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgZW5hYmxlV2lmaTogJycsXHJcbiAgICBhY2NlcHRUZXJtczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZV0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cclxuXHJcbiAgYWxlcnRGb3JtVmFsdWVzKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeShmb3JtR3JvdXAudmFsdWUsIG51bGwsIDIpKTtcclxuICB9XHJcbn1cclxuIiwiPHA+U2xpZGUgVG9nZ2xlIHVzaW5nIGEgc2ltcGxlIE5nTW9kZWwuPC9wPlxyXG5cclxuPG1hdC1zbGlkZS10b2dnbGUgWyhuZ01vZGVsKV09XCJpc0NoZWNrZWRcIj5TbGlkZSBUb2dnbGUgQ2hlY2tlZDoge3tpc0NoZWNrZWR9fTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuXHJcbjxwPlNsaWRlIFRvZ2dsZSBpbnNpZGUgb2YgYSBUZW1wbGF0ZS1kcml2ZW4gZm9ybTwvcD5cclxuXHJcbjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCIgI2Zvcm09XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwiYWxlcnRGb3JtVmFsdWVzKGZvcm0uZm9ybSlcIj5cclxuXHJcbiAgPG1hdC1zbGlkZS10b2dnbGUgbmdNb2RlbCBuYW1lPVwiZW5hYmxlV2lmaVwiPkVuYWJsZSBXaWZpPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gIDxtYXQtc2xpZGUtdG9nZ2xlIG5nTW9kZWwgbmFtZT1cImFjY2VwdFRlcm1zXCIgcmVxdWlyZWQ+QWNjZXB0IFRlcm1zIG9mIFNlcnZpY2U8L21hdC1zbGlkZS10b2dnbGU+XHJcblxyXG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgU2V0dGluZ3M8L2J1dHRvbj5cclxuPC9mb3JtPlxyXG5cclxuPHA+U2xpZGUgVG9nZ2xlIGluc2lkZSBvZiBhIFJlYWN0aXZlIGZvcm08L3A+XHJcblxyXG48Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImFsZXJ0Rm9ybVZhbHVlcyhmb3JtR3JvdXApXCIgbmdOYXRpdmVWYWxpZGF0ZT5cclxuXHJcbiAgPG1hdC1zbGlkZS10b2dnbGUgZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlV2lmaVwiPkVuYWJsZSBXaWZpPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cImFjY2VwdFRlcm1zXCI+QWNjZXB0IFRlcm1zIG9mIFNlcnZpY2U8L21hdC1zbGlkZS10b2dnbGU+XHJcblxyXG4gIDxwPkZvcm0gR3JvdXAgU3RhdHVzOiB7e2Zvcm1Hcm91cC5zdGF0dXN9fTwvcD5cclxuXHJcbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBTZXR0aW5nczwvYnV0dG9uPlxyXG48L2Zvcm0+XHJcbiJdfQ==