import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GrlFileInputModule } from 'ng-gorilla/file-input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "ng-gorilla/file-input";
import * as i4 from "@angular/material/button";
/**
 * @title Basic File Input
 */
export class FileInputOverviewExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputOverviewExample, isStandalone: true, selector: "file-input-overview-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [maxContentSize]=\"1048576\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload multiple images</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: i3.GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: i3.GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "directive", type: i3.MaxContentSizeValidator, selector: "[maxContentSize][formControlName],[maxContentSize][formControl],[maxContentSize][ngModel]", inputs: ["maxContentSize"] }, { kind: "pipe", type: i3.ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-overview-example', standalone: true, imports: [ReactiveFormsModule, MatFormFieldModule, GrlFileInputModule, MatButtonModule], template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [maxContentSize]=\"1048576\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload multiple images</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25nLWdvcmlsbGEtZG9jdW1lbnRzL25nLWdvcmlsbGEvZmlsZS1pbnB1dC9maWxlLWlucHV0LW92ZXJ2aWV3L2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1nb3JpbGxhLWRvY3VtZW50cy9uZy1nb3JpbGxhL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC1vdmVydmlldy9maWxlLWlucHV0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFM0Q7O0dBRUc7QUFRSCxNQUFNLE9BQU8sd0JBQXdCO0lBUHJDO1FBU0Usb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUU5RDs4R0FKWSx3QkFBd0I7a0dBQXhCLHdCQUF3Qix1RkNoQnJDLHMwQkFlTyw0S0RESyxtQkFBbUIsOGpCQUFFLGtCQUFrQixnbUJBQUUsa0JBQWtCLDJ0QkFBRSxlQUFlOzsyRkFFM0Usd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNFLDZCQUE2QixjQUczQixJQUFJLFdBQ1AsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBHcmxGaWxlSW5wdXRNb2R1bGUgfSBmcm9tICduZy1nb3JpbGxhL2ZpbGUtaW5wdXQnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBCYXNpYyBGaWxlIElucHV0XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZScsXHJcbiAgc3R5bGVVcmxzOiBbJ2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJ2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIEdybEZpbGVJbnB1dE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVJbnB1dE92ZXJ2aWV3RXhhbXBsZSB7XHJcblxyXG4gIGZpbGVGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChbXSwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKTtcclxuXHJcbn1cclxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cclxuXHJcbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1maWxlLWlucHV0XCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgIDxtYXQtbGFiZWw+RG9jdW1lbnRzPC9tYXQtbGFiZWw+XHJcbiAgICA8Z3JsLWZpbGUtaW5wdXQgI2ZpbGVJbnB1dCBbbXVsdGlwbGVdPVwidHJ1ZVwiIFttYXhDb250ZW50U2l6ZV09XCIxMDQ4NTc2XCIgW2Zvcm1Db250cm9sXT1cImZpbGVGb3JtQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIHlvdSBkb2NzIGhlcmVcIj48L2dybC1maWxlLWlucHV0PlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbWF0U3VmZml4IG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBbZ3JsRmlsZUlucHV0QnV0dG9uRm9yXT1cImZpbGVJbnB1dFwiPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgPG1hdC1oaW50PllvdSBjYW4gdXBsb2FkIG11bHRpcGxlIGltYWdlczwvbWF0LWhpbnQ+XHJcbiAgICBAaWYgKGZpbGVGb3JtQ29udHJvbC5oYXNFcnJvcignbWF4Q29udGVudFNpemUnKSkge1xyXG4gICAgPG1hdC1lcnJvcj5UaGUgZmlsZSBzaXplIHNob3VsZCBub3QgYmUgbW9yZSB0aGFuIHt7MTA0ODU3NiB8IGJ5dGVGb3JtYXR9fTwvbWF0LWVycm9yPlxyXG4gICAgfVxyXG4gICAgQGlmIChmaWxlRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJykpIHtcclxuICAgIDxtYXQtZXJyb3I+VGhpcyBmaWVsZCBpcyA8c3Ryb25nPnJlcXVpcmVkPC9zdHJvbmc+PC9tYXQtZXJyb3I+XHJcbiAgICB9XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbjwvZm9ybT4iXX0=