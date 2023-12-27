import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileValidator, GrlFileInputModule } from 'ng-gorilla/file-input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/forms";
import * as i3 from "ng-gorilla/file-input";
import * as i4 from "@angular/material/button";
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title File Input with a custom ErrorStateMatcher */
export class FileInputErrorStateMatcherExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required, FileValidator.maxContentSize(1048576)]);
        this.matcher = new MyErrorStateMatcher();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputErrorStateMatcherExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputErrorStateMatcherExample, isStandalone: true, selector: "file-input-error-state-matcher-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [formControl]=\"fileFormControl\" [errorStateMatcher]=\"matcher\"></grl-file-input>\r\n    <button matSuffix type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: i3.GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: i3.GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "pipe", type: i3.ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputErrorStateMatcherExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-error-state-matcher-example', standalone: true, imports: [MatFormFieldModule, ReactiveFormsModule, GrlFileInputModule, MatButtonModule], encapsulation: ViewEncapsulation.None, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [formControl]=\"fileFormControl\" [errorStateMatcher]=\"matcher\"></grl-file-input>\r\n    <button matSuffix type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbmctZ29yaWxsYS1kb2N1bWVudHMvbmctZ29yaWxsYS9maWxlLWlucHV0L2ZpbGUtaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci9maWxlLWlucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1nb3JpbGxhLWRvY3VtZW50cy9uZy1nb3JpbGxhL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyL2ZpbGUtaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsV0FBVyxFQUdYLG1CQUFtQixFQUNuQixVQUFVLEVBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFMUUsa0VBQWtFO0FBQ2xFLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBWSxDQUFDLE9BQTJCLEVBQUUsSUFBd0M7UUFDaEYsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Q0FDRjtBQUVELHdEQUF3RDtBQVN4RCxNQUFNLE9BQU8saUNBQWlDO0lBUjlDO1FBVUMsb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5HLFlBQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7S0FDckM7OEdBTFksaUNBQWlDO2tHQUFqQyxpQ0FBaUMsa0dDOUI5Qyx3eUJBZU8sNEtEWUssa0JBQWtCLGdtQkFBRSxtQkFBbUIsOGpCQUFFLGtCQUFrQiwraEJBQUUsZUFBZTs7MkZBRzNFLGlDQUFpQztrQkFSN0MsU0FBUzsrQkFDRSx3Q0FBd0MsY0FHdEMsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLGlCQUN4RSxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1Hcm91cERpcmVjdGl2ZSxcclxuICBOZ0Zvcm0sXHJcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICBWYWxpZGF0b3JzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgRmlsZVZhbGlkYXRvciwgR3JsRmlsZUlucHV0TW9kdWxlIH0gZnJvbSAnbmctZ29yaWxsYS9maWxlLWlucHV0JztcclxuXHJcbi8qKiBFcnJvciB3aGVuIGludmFsaWQgY29udHJvbCBpcyBkaXJ0eSwgdG91Y2hlZCwgb3Igc3VibWl0dGVkLiAqL1xyXG5leHBvcnQgY2xhc3MgTXlFcnJvclN0YXRlTWF0Y2hlciBpbXBsZW1lbnRzIEVycm9yU3RhdGVNYXRjaGVyIHtcclxuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBpc1N1Ym1pdHRlZCA9IGZvcm0gJiYgZm9ybS5zdWJtaXR0ZWQ7XHJcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkIHx8IGlzU3VibWl0dGVkKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHRpdGxlIEZpbGUgSW5wdXQgd2l0aCBhIGN1c3RvbSBFcnJvclN0YXRlTWF0Y2hlciAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZpbGUtaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBHcmxGaWxlSW5wdXRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlIHtcclxuXHJcbiBmaWxlRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woW10sIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBGaWxlVmFsaWRhdG9yLm1heENvbnRlbnRTaXplKDEwNDg1NzYpXSk7XHJcblxyXG4gIG1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpO1xyXG59XHJcbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XHJcblxyXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZmlsZS1pbnB1dFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICA8bWF0LWxhYmVsPkRvY3VtZW50czwvbWF0LWxhYmVsPlxyXG4gICAgPGdybC1maWxlLWlucHV0ICNmaWxlSW5wdXQgW211bHRpcGxlXT1cInRydWVcIiBbZm9ybUNvbnRyb2xdPVwiZmlsZUZvcm1Db250cm9sXCIgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj48L2dybC1maWxlLWlucHV0PlxyXG4gICAgPGJ1dHRvbiBtYXRTdWZmaXggdHlwZT1cImJ1dHRvblwiIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBbZ3JsRmlsZUlucHV0QnV0dG9uRm9yXT1cImZpbGVJbnB1dFwiPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgPG1hdC1oaW50PllvdSBjYW4gdXBsb2FkIGp1c3QgYSBzaW5nbGUgaW1hZ2U8L21hdC1oaW50PlxyXG4gICAgQGlmIChmaWxlRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ21heENvbnRlbnRTaXplJykpIHtcclxuICAgIDxtYXQtZXJyb3I+VGhlIGZpbGUgc2l6ZSBzaG91bGQgbm90IGJlIG1vcmUgdGhhbiB7ezEwNDg1NzYgfCBieXRlRm9ybWF0fX08L21hdC1lcnJvcj5cclxuICAgIH1cclxuICAgIEBpZiAoZmlsZUZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpKSB7XHJcbiAgICA8bWF0LWVycm9yPlRoaXMgZmllbGQgaXMgPHN0cm9uZz5yZXF1aXJlZDwvc3Ryb25nPjwvbWF0LWVycm9yPlxyXG4gICAgfVxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG48L2Zvcm0+Il19