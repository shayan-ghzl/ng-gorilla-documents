import * as i0 from '@angular/core';
import { Component, forwardRef } from '@angular/core';
import * as i1 from '@angular/cdk/stepper';
import { CdkStepperModule, CdkStepper } from '@angular/cdk/stepper';
import { NgTemplateOutlet } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

/** @title A custom CDK stepper without a form */
class CdkCustomStepperWithoutFormExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkCustomStepperWithoutFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkCustomStepperWithoutFormExample, isStandalone: true, selector: "cdk-custom-stepper-without-form-example", ngImport: i0, template: "<example-custom-stepper>\r\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\r\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\r\n</example-custom-stepper>\r\n", styles: [""], dependencies: [{ kind: "component", type: i0.forwardRef(() => CustomStepper), selector: "example-custom-stepper" }, { kind: "ngmodule", type: i0.forwardRef(() => CdkStepperModule) }, { kind: "component", type: i0.forwardRef(() => i1.CdkStep), selector: "cdk-step", inputs: ["stepControl", "label", "errorMessage", "aria-label", "aria-labelledby", "state", "editable", "optional", "completed", "hasError"], outputs: ["interacted"], exportAs: ["cdkStep"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkCustomStepperWithoutFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-custom-stepper-without-form-example', standalone: true, imports: [forwardRef(() => CustomStepper), CdkStepperModule], template: "<example-custom-stepper>\r\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\r\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\r\n</example-custom-stepper>\r\n" }]
        }] });
/** Custom CDK stepper component */
class CustomStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CustomStepper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CustomStepper, isStandalone: true, selector: "example-custom-stepper", providers: [{ provide: CdkStepper, useExisting: CustomStepper }], usesInheritance: true, ngImport: i0, template: "<section class=\"example-container\">\r\n  <header>\r\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\r\n  </header>\r\n\r\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\r\n\r\n  <footer class=\"example-step-navigation-bar\">\r\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\r\n    @for (step of steps; track step; let i = $index) {\r\n      <button\r\n        class=\"example-step\"\r\n        [class.example-active]=\"selectedIndex === i\"\r\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\r\n    }\r\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\r\n  </footer>\r\n</section>\r\n", styles: [".example-container {\r\n  border: 1px solid;\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.example-step-navigation-bar {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-top: 10px;\r\n}\r\n\r\n.example-step {\r\n  background: transparent;\r\n  border: 0;\r\n  margin: 0 10px;\r\n  padding: 10px;\r\n  color: inherit;\r\n}\r\n\r\n.example-step.example-active {\r\n  border-bottom: 1px solid;\r\n  font-weight: 600;\r\n}\r\n\r\n.example-nav-button {\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n}\r\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: CdkStepperModule }, { kind: "directive", type: i1.CdkStepperNext, selector: "button[cdkStepperNext]", inputs: ["type"] }, { kind: "directive", type: i1.CdkStepperPrevious, selector: "button[cdkStepperPrevious]", inputs: ["type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CustomStepper, decorators: [{
            type: Component,
            args: [{ selector: 'example-custom-stepper', providers: [{ provide: CdkStepper, useExisting: CustomStepper }], standalone: true, imports: [NgTemplateOutlet, CdkStepperModule], template: "<section class=\"example-container\">\r\n  <header>\r\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\r\n  </header>\r\n\r\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\r\n\r\n  <footer class=\"example-step-navigation-bar\">\r\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\r\n    @for (step of steps; track step; let i = $index) {\r\n      <button\r\n        class=\"example-step\"\r\n        [class.example-active]=\"selectedIndex === i\"\r\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\r\n    }\r\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\r\n  </footer>\r\n</section>\r\n", styles: [".example-container {\r\n  border: 1px solid;\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.example-step-navigation-bar {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-top: 10px;\r\n}\r\n\r\n.example-step {\r\n  background: transparent;\r\n  border: 0;\r\n  margin: 0 10px;\r\n  padding: 10px;\r\n  color: inherit;\r\n}\r\n\r\n.example-step.example-active {\r\n  border-bottom: 1px solid;\r\n  font-weight: 600;\r\n}\r\n\r\n.example-nav-button {\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n}\r\n"] }]
        }] });

/** @title A custom CDK linear stepper with forms */
class CdkLinearStepperWithFormExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.firstFormGroup = this._formBuilder.group({
            firstControl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondControl: ['', Validators.required],
        });
    }
    toggleLinearity() {
        this.isLinear = !this.isLinear;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkLinearStepperWithFormExample, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkLinearStepperWithFormExample, isStandalone: true, selector: "cdk-linear-stepper-with-form-example", ngImport: i0, template: "<example-custom-linear-stepper [linear]=\"isLinear\">\r\n  <cdk-step [stepControl]=\"firstFormGroup\">\r\n    <label for=\"stepOneInput\">Step 1 input</label>\r\n    <form [formGroup]=\"firstFormGroup\">\r\n      <input placeholder=\"Input\" formControlName=\"firstControl\" id=\"stepOneInput\" required>\r\n    </form>\r\n  </cdk-step>\r\n  <cdk-step [stepControl]=\"secondFormGroup\">\r\n    <label for=\"stepTwoInput\">Step 2 input</label>\r\n    <form [formGroup]=\"secondFormGroup\">\r\n      <input placeholder=\"Input\" formControlName=\"secondControl\" id=\"stepTwoInput\" required>\r\n    </form>\r\n  </cdk-step>\r\n</example-custom-linear-stepper>\r\n<button class=\"example-toggle-linear-button\" (click)=\"toggleLinearity()\">\r\n  {{isLinear ? 'Disable linear mode' : 'Enable linear mode'}}\r\n</button>\r\n", styles: [".example-toggle-linear-button {\r\n  margin-left: 10px;\r\n}\r\n"], dependencies: [{ kind: "component", type: i0.forwardRef(() => CustomLinearStepper), selector: "example-custom-linear-stepper" }, { kind: "ngmodule", type: i0.forwardRef(() => CdkStepperModule) }, { kind: "component", type: i0.forwardRef(() => i1.CdkStep), selector: "cdk-step", inputs: ["stepControl", "label", "errorMessage", "aria-label", "aria-labelledby", "state", "editable", "optional", "completed", "hasError"], outputs: ["interacted"], exportAs: ["cdkStep"] }, { kind: "ngmodule", type: i0.forwardRef(() => FormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1$1.ɵNgNoValidate), selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i0.forwardRef(() => i1$1.DefaultValueAccessor), selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.NgControlStatusGroup), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.RequiredValidator), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: i0.forwardRef(() => ReactiveFormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1$1.FormGroupDirective), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(() => i1$1.FormControlName), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkLinearStepperWithFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-linear-stepper-with-form-example', standalone: true, imports: [
                        forwardRef(() => CustomLinearStepper),
                        CdkStepperModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<example-custom-linear-stepper [linear]=\"isLinear\">\r\n  <cdk-step [stepControl]=\"firstFormGroup\">\r\n    <label for=\"stepOneInput\">Step 1 input</label>\r\n    <form [formGroup]=\"firstFormGroup\">\r\n      <input placeholder=\"Input\" formControlName=\"firstControl\" id=\"stepOneInput\" required>\r\n    </form>\r\n  </cdk-step>\r\n  <cdk-step [stepControl]=\"secondFormGroup\">\r\n    <label for=\"stepTwoInput\">Step 2 input</label>\r\n    <form [formGroup]=\"secondFormGroup\">\r\n      <input placeholder=\"Input\" formControlName=\"secondControl\" id=\"stepTwoInput\" required>\r\n    </form>\r\n  </cdk-step>\r\n</example-custom-linear-stepper>\r\n<button class=\"example-toggle-linear-button\" (click)=\"toggleLinearity()\">\r\n  {{isLinear ? 'Disable linear mode' : 'Enable linear mode'}}\r\n</button>\r\n", styles: [".example-toggle-linear-button {\r\n  margin-left: 10px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }] });
/** Custom CDK linear stepper component */
class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CustomLinearStepper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CustomLinearStepper, isStandalone: true, selector: "example-custom-linear-stepper", providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }], usesInheritance: true, ngImport: i0, template: "<section class=\"example-container\">\r\n  <header>\r\n    <h2>Step {{selectedIndex + 1}}/{{steps.length}}</h2>\r\n  </header>\r\n\r\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\r\n\r\n  <footer class=\"example-step-navigation-bar\">\r\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\r\n    @for (step of steps; track step; let i = $index) {\r\n      <button\r\n        class=\"example-step\"\r\n        [class.example-active]=\"selectedIndex === i\"\r\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\r\n    }\r\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\r\n  </footer>\r\n</section>\r\n", styles: [".example-container {\r\n  border: 1px solid;\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.example-step-navigation-bar {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-top: 10px;\r\n}\r\n\r\n.example-step {\r\n  background: transparent;\r\n  border: 0;\r\n  margin: 0 10px;\r\n  padding: 10px;\r\n  color: inherit;\r\n}\r\n\r\n.example-step.example-active {\r\n  border-bottom: 1px solid;\r\n  font-weight: 600;\r\n}\r\n\r\n.example-nav-button {\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n}\r\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: CdkStepperModule }, { kind: "directive", type: i1.CdkStepperNext, selector: "button[cdkStepperNext]", inputs: ["type"] }, { kind: "directive", type: i1.CdkStepperPrevious, selector: "button[cdkStepperPrevious]", inputs: ["type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CustomLinearStepper, decorators: [{
            type: Component,
            args: [{ selector: 'example-custom-linear-stepper', providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }], standalone: true, imports: [NgTemplateOutlet, CdkStepperModule], template: "<section class=\"example-container\">\r\n  <header>\r\n    <h2>Step {{selectedIndex + 1}}/{{steps.length}}</h2>\r\n  </header>\r\n\r\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\r\n\r\n  <footer class=\"example-step-navigation-bar\">\r\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\r\n    @for (step of steps; track step; let i = $index) {\r\n      <button\r\n        class=\"example-step\"\r\n        [class.example-active]=\"selectedIndex === i\"\r\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\r\n    }\r\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\r\n  </footer>\r\n</section>\r\n", styles: [".example-container {\r\n  border: 1px solid;\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.example-step-navigation-bar {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-top: 10px;\r\n}\r\n\r\n.example-step {\r\n  background: transparent;\r\n  border: 0;\r\n  margin: 0 10px;\r\n  padding: 10px;\r\n  color: inherit;\r\n}\r\n\r\n.example-step.example-active {\r\n  border-bottom: 1px solid;\r\n  font-weight: 600;\r\n}\r\n\r\n.example-nav-button {\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n}\r\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkCustomStepperWithoutFormExample, CdkLinearStepperWithFormExample, CustomLinearStepper, CustomStepper };
//# sourceMappingURL=stepper.mjs.map