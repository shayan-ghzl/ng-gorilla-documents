import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/input";
/** @title Select with option groups */
export class SelectOptgroupExample {
    constructor() {
        this.pokemonControl = new FormControl('');
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' },
                ],
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' },
                ],
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' },
                ],
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ],
            },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectOptgroupExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectOptgroupExample, isStandalone: true, selector: "select-optgroup-example", ngImport: i0, template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Pokemon</mat-label>\r\n  <mat-select [formControl]=\"pokemonControl\">\r\n    <mat-option>-- None --</mat-option>\r\n    @for (group of pokemonGroups; track group) {\r\n      <mat-optgroup [label]=\"group.name\"\r\n                    [disabled]=\"group.disabled\">\r\n        @for (pokemon of group.pokemon; track pokemon) {\r\n          <mat-option [value]=\"pokemon.value\">{{pokemon.viewValue}}</mat-option>\r\n        }\r\n      </mat-optgroup>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Cars</mat-label>\r\n  <select matNativeControl>\r\n    <optgroup label=\"Swedish Cars\">\r\n      <option value=\"volvo\">volvo</option>\r\n      <option value=\"saab\">Saab</option>\r\n    </optgroup>\r\n    <optgroup label=\"German Cars\">\r\n      <option value=\"mercedes\">Mercedes</option>\r\n      <option value=\"audi\">Audi</option>\r\n    </optgroup>\r\n  </select>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i3.MatOptgroup, selector: "mat-optgroup", inputs: ["label", "disabled"], exportAs: ["matOptgroup"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-optgroup-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule], template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Pokemon</mat-label>\r\n  <mat-select [formControl]=\"pokemonControl\">\r\n    <mat-option>-- None --</mat-option>\r\n    @for (group of pokemonGroups; track group) {\r\n      <mat-optgroup [label]=\"group.name\"\r\n                    [disabled]=\"group.disabled\">\r\n        @for (pokemon of group.pokemon; track pokemon) {\r\n          <mat-option [value]=\"pokemon.value\">{{pokemon.viewValue}}</mat-option>\r\n        }\r\n      </mat-optgroup>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Cars</mat-label>\r\n  <select matNativeControl>\r\n    <optgroup label=\"Swedish Cars\">\r\n      <option value=\"volvo\">volvo</option>\r\n      <option value=\"saab\">Saab</option>\r\n    </optgroup>\r\n    <optgroup label=\"German Cars\">\r\n      <option value=\"mercedes\">Mercedes</option>\r\n      <option value=\"audi\">Audi</option>\r\n    </optgroup>\r\n  </select>\r\n</mat-form-field>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBYWhFLHVDQUF1QztBQU92QyxNQUFNLE9BQU8scUJBQXFCO0lBTmxDO1FBT0UsbUJBQWMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxrQkFBYSxHQUFtQjtZQUM5QjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7b0JBQzlDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO29CQUN4QyxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQztpQkFDakQ7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztvQkFDNUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7b0JBQzFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUN6QzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO29CQUNoRCxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztvQkFDeEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7aUJBQzNDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7b0JBQ2xDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQztLQUNIOzhHQXBDWSxxQkFBcUI7a0dBQXJCLHFCQUFxQixtRkN4QmxDLG9nQ0E4QkEsMkNEUlksa0JBQWtCLDBTQUFFLGVBQWUsb3pCQUFFLFdBQVcsbVZBQUUsbUJBQW1CLGlOQUFFLGNBQWM7OzJGQUVwRixxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcblxyXG5pbnRlcmZhY2UgUG9rZW1vbiB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICB2aWV3VmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFBva2Vtb25Hcm91cCB7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwb2tlbW9uOiBQb2tlbW9uW107XHJcbn1cclxuXHJcbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggb3B0aW9uIGdyb3VwcyAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgTWF0SW5wdXRNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0Z3JvdXBFeGFtcGxlIHtcclxuICBwb2tlbW9uQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgcG9rZW1vbkdyb3VwczogUG9rZW1vbkdyb3VwW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdHcmFzcycsXHJcbiAgICAgIHBva2Vtb246IFtcclxuICAgICAgICB7dmFsdWU6ICdidWxiYXNhdXItMCcsIHZpZXdWYWx1ZTogJ0J1bGJhc2F1cid9LFxyXG4gICAgICAgIHt2YWx1ZTogJ29kZGlzaC0xJywgdmlld1ZhbHVlOiAnT2RkaXNoJ30sXHJcbiAgICAgICAge3ZhbHVlOiAnYmVsbHNwcm91dC0yJywgdmlld1ZhbHVlOiAnQmVsbHNwcm91dCd9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1dhdGVyJyxcclxuICAgICAgcG9rZW1vbjogW1xyXG4gICAgICAgIHt2YWx1ZTogJ3NxdWlydGxlLTMnLCB2aWV3VmFsdWU6ICdTcXVpcnRsZSd9LFxyXG4gICAgICAgIHt2YWx1ZTogJ3BzeWR1Y2stNCcsIHZpZXdWYWx1ZTogJ1BzeWR1Y2snfSxcclxuICAgICAgICB7dmFsdWU6ICdob3JzZWEtNScsIHZpZXdWYWx1ZTogJ0hvcnNlYSd9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0ZpcmUnLFxyXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgcG9rZW1vbjogW1xyXG4gICAgICAgIHt2YWx1ZTogJ2NoYXJtYW5kZXItNicsIHZpZXdWYWx1ZTogJ0NoYXJtYW5kZXInfSxcclxuICAgICAgICB7dmFsdWU6ICd2dWxwaXgtNycsIHZpZXdWYWx1ZTogJ1Z1bHBpeCd9LFxyXG4gICAgICAgIHt2YWx1ZTogJ2ZsYXJlb24tOCcsIHZpZXdWYWx1ZTogJ0ZsYXJlb24nfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdQc3ljaGljJyxcclxuICAgICAgcG9rZW1vbjogW1xyXG4gICAgICAgIHt2YWx1ZTogJ21ldy05Jywgdmlld1ZhbHVlOiAnTWV3J30sXHJcbiAgICAgICAge3ZhbHVlOiAnbWV3dHdvLTEwJywgdmlld1ZhbHVlOiAnTWV3dHdvJ30sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxyXG48bWF0LWZvcm0tZmllbGQ+XHJcbiAgPG1hdC1sYWJlbD5Qb2tlbW9uPC9tYXQtbGFiZWw+XHJcbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInBva2Vtb25Db250cm9sXCI+XHJcbiAgICA8bWF0LW9wdGlvbj4tLSBOb25lIC0tPC9tYXQtb3B0aW9uPlxyXG4gICAgQGZvciAoZ3JvdXAgb2YgcG9rZW1vbkdyb3VwczsgdHJhY2sgZ3JvdXApIHtcclxuICAgICAgPG1hdC1vcHRncm91cCBbbGFiZWxdPVwiZ3JvdXAubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImdyb3VwLmRpc2FibGVkXCI+XHJcbiAgICAgICAgQGZvciAocG9rZW1vbiBvZiBncm91cC5wb2tlbW9uOyB0cmFjayBwb2tlbW9uKSB7XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwicG9rZW1vbi52YWx1ZVwiPnt7cG9rZW1vbi52aWV3VmFsdWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvbWF0LW9wdGdyb3VwPlxyXG4gICAgfVxyXG4gIDwvbWF0LXNlbGVjdD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxyXG48bWF0LWZvcm0tZmllbGQ+XHJcbiAgPG1hdC1sYWJlbD5DYXJzPC9tYXQtbGFiZWw+XHJcbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sPlxyXG4gICAgPG9wdGdyb3VwIGxhYmVsPVwiU3dlZGlzaCBDYXJzXCI+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPnZvbHZvPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxyXG4gICAgPC9vcHRncm91cD5cclxuICAgIDxvcHRncm91cCBsYWJlbD1cIkdlcm1hbiBDYXJzXCI+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxyXG4gICAgPC9vcHRncm91cD5cclxuICA8L3NlbGVjdD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuIl19