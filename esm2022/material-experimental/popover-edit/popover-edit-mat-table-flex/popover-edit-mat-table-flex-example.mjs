import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPopoverEditModule } from '@angular/material-experimental/popover-edit';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material-experimental/popover-edit";
import * as i4 from "@angular/cdk-experimental/popover-edit";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/**
 * @title Material Popover Edit on a flex Material data-table
 */
export class PopoverEditMatTableFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
    }
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditMatTableFlexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PopoverEditMatTableFlexExample, isStandalone: true, selector: "popover-edit-mat-table-flex-example", ngImport: i0, template: "<mat-table class=\"example-table\" editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [matEditLensPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (matEditLensPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        <div mat-edit-content>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"nameEdit\">\r\n      {{element.name}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [matEditLensPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n              (matEditLensPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n            <h2 mat-edit-title>Name</h2>\r\n            <div mat-edit-content>\r\n              <mat-form-field>\r\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n              <button mat-button matEditClose>Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\r\n      {{element.weight}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n      </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n/*.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  width: 25%;\r\n}*/\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i3.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i3.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i3.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i3.MatEditRevert, selector: "button[matEditRevert]" }, { kind: "directive", type: i3.MatEditClose, selector: "[matEditClose]" }, { kind: "directive", type: i3.MatEditOpen, selector: "[matEditOpen]" }, { kind: "directive", type: i4.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditMatTableFlexExample, decorators: [{
            type: Component,
            args: [{ selector: 'popover-edit-mat-table-flex-example', standalone: true, imports: [
                        MatTableModule,
                        FormsModule,
                        MatPopoverEditModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatButtonModule,
                        MatIconModule,
                    ], template: "<mat-table class=\"example-table\" editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [matEditLensPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (matEditLensPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        <div mat-edit-content>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"nameEdit\">\r\n      {{element.name}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [matEditLensPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n              (matEditLensPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n            <h2 mat-edit-title>Name</h2>\r\n            <div mat-edit-content>\r\n              <mat-form-field>\r\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n              <button mat-button matEditClose>Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\r\n      {{element.weight}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n      </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n/*.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  width: 25%;\r\n}*/\r\n"] }]
        }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1mbGV4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZmxleC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWZsZXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS1mbGV4L3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZmxleC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFTLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7O0FBU3ZELE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUNoRSxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzlELENBQUM7QUFFRjs7R0FFRztBQWdCSCxNQUFNLE9BQU8sOEJBQThCO0lBZjNDO1FBZ0JFLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUU1Qix3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBd0IsQ0FBQztRQUMxRCwwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBd0IsQ0FBQztLQWlCdEU7SUFmQyxZQUFZLENBQUMsT0FBd0IsRUFBRSxDQUFTO1FBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ1osT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQXdCLEVBQUUsQ0FBUztRQUNoRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs4R0FyQlUsOEJBQThCO2tHQUE5Qiw4QkFBOEIsK0ZDM0QzQywwM0dBcUZBLHNPRG5DSSxjQUFjLGdoQ0FDZCxXQUFXLHM2Q0FDWCxvQkFBb0IsNDRCQUNwQixrQkFBa0IseU9BQ2xCLGNBQWMsMFdBQ2QsZUFBZSx3VUFDZixhQUFhOzsyRkFHSiw4QkFBOEI7a0JBZjFDLFNBQVM7K0JBQ0UscUNBQXFDLGNBR25DLElBQUksV0FDUDt3QkFDUCxjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3FCQUNkOztBQTBCSDs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBMkI7SUFBbEU7O1FBQ0Usb0RBQW9EO1FBQ3BELFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBb0IsWUFBWSxDQUFDLENBQUM7SUFROUQsQ0FBQztJQU5DLGlHQUFpRztJQUNqRyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVLEtBQUksQ0FBQztDQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQge05nRm9ybSwgRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7TWF0UG9wb3ZlckVkaXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xyXG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgd2VpZ2h0OiBudW1iZXI7XHJcbiAgc3ltYm9sOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXHJcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxyXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxyXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxyXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxyXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcclxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcclxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxyXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxyXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXHJcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXHJcbiAge3Bvc2l0aW9uOiAxMSwgbmFtZTogJ1NvZGl1bScsIHdlaWdodDogMjIuOTg5Nywgc3ltYm9sOiAnTmEnfSxcclxuICB7cG9zaXRpb246IDEyLCBuYW1lOiAnTWFnbmVzaXVtJywgd2VpZ2h0OiAyNC4zMDUsIHN5bWJvbDogJ01nJ30sXHJcbiAge3Bvc2l0aW9uOiAxMywgbmFtZTogJ0FsdW1pbnVtJywgd2VpZ2h0OiAyNi45ODE1LCBzeW1ib2w6ICdBbCd9LFxyXG4gIHtwb3NpdGlvbjogMTQsIG5hbWU6ICdTaWxpY29uJywgd2VpZ2h0OiAyOC4wODU1LCBzeW1ib2w6ICdTaSd9LFxyXG4gIHtwb3NpdGlvbjogMTUsIG5hbWU6ICdQaG9zcGhvcnVzJywgd2VpZ2h0OiAzMC45NzM4LCBzeW1ib2w6ICdQJ30sXHJcbiAge3Bvc2l0aW9uOiAxNiwgbmFtZTogJ1N1bGZ1cicsIHdlaWdodDogMzIuMDY1LCBzeW1ib2w6ICdTJ30sXHJcbiAge3Bvc2l0aW9uOiAxNywgbmFtZTogJ0NobG9yaW5lJywgd2VpZ2h0OiAzNS40NTMsIHN5bWJvbDogJ0NsJ30sXHJcbiAge3Bvc2l0aW9uOiAxOCwgbmFtZTogJ0FyZ29uJywgd2VpZ2h0OiAzOS45NDgsIHN5bWJvbDogJ0FyJ30sXHJcbiAge3Bvc2l0aW9uOiAxOSwgbmFtZTogJ1BvdGFzc2l1bScsIHdlaWdodDogMzkuMDk4Mywgc3ltYm9sOiAnSyd9LFxyXG4gIHtwb3NpdGlvbjogMjAsIG5hbWU6ICdDYWxjaXVtJywgd2VpZ2h0OiA0MC4wNzgsIHN5bWJvbDogJ0NhJ30sXHJcbl07XHJcblxyXG4vKipcclxuICogQHRpdGxlIE1hdGVyaWFsIFBvcG92ZXIgRWRpdCBvbiBhIGZsZXggTWF0ZXJpYWwgZGF0YS10YWJsZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWZsZXgtZXhhbXBsZScsXHJcbiAgc3R5bGVVcmxzOiBbJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZmxleC1leGFtcGxlLmNzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAncG9wb3Zlci1lZGl0LW1hdC10YWJsZS1mbGV4LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNYXRUYWJsZU1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0UG9wb3ZlckVkaXRNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJFZGl0TWF0VGFibGVGbGV4RXhhbXBsZSB7XHJcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xyXG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcclxuXHJcbiAgcmVhZG9ubHkgcHJlc2VydmVkTmFtZVZhbHVlcyA9IG5ldyBXZWFrTWFwPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xyXG4gIHJlYWRvbmx5IHByZXNlcnZlZFdlaWdodFZhbHVlcyA9IG5ldyBXZWFrTWFwPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xyXG5cclxuICBvblN1Ym1pdE5hbWUoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcclxuICAgIGlmICghZi52YWxpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5uYW1lID0gZi52YWx1ZS5uYW1lO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXRXZWlnaHQoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcclxuICAgIGlmICghZi52YWxpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC53ZWlnaHQgPSBmLnZhbHVlLndlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXHJcbiAqIGNhbiByZXRyaWV2ZSBpdHMgZGF0YSBpbiBhbnkgd2F5LiBJbiB0aGlzIGNhc2UsIHRoZSBkYXRhIHNvdXJjZSBpcyBwcm92aWRlZCBhIHJlZmVyZW5jZVxyXG4gKiB0byBhIGNvbW1vbiBkYXRhIGJhc2UsIEV4YW1wbGVEYXRhYmFzZS4gSXQgaXMgbm90IHRoZSBkYXRhIHNvdXJjZSdzIHJlc3BvbnNpYmlsaXR5IHRvIG1hbmFnZVxyXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxyXG4gKiBzaG91bGQgYmUgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4ge1xyXG4gIC8qKiBTdHJlYW0gb2YgZGF0YSB0aGF0IGlzIHByb3ZpZGVkIHRvIHRoZSB0YWJsZS4gKi9cclxuICBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQZXJpb2RpY0VsZW1lbnRbXT4oRUxFTUVOVF9EQVRBKTtcclxuXHJcbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xyXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxQZXJpb2RpY0VsZW1lbnRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcblxyXG4gIGRpc2Nvbm5lY3QoKSB7fVxyXG59XHJcbiIsIjxtYXQtdGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCIgZWRpdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiPlxyXG4gIDwhLS1cclxuICAgIFRoaXMgZWRpdCBsZW5zIGlzIHNwZWNpZmllZCBvdXRzaWRlIG9mIHRoZSBjZWxsIGFuZCBtdXN0IGV4cGxpY2l0bHkgZGVjbGFyZVxyXG4gICAgaXRzIGNvbnRleHQuIEl0IGNvdWxkIGJlIHJldXNlZCBpbiBtdWx0aXBsZSBjZWxscy5cclxuICAtLT5cclxuICA8bmctdGVtcGxhdGUgI3dlaWdodEVkaXQgbGV0LWVsZW1lbnQ+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXHJcbiAgICAgICAgICBtYXRFZGl0TGVuc1xyXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0V2VpZ2h0KGVsZW1lbnQsIGYpXCJcclxuICAgICAgICAgIFttYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZV09XCJwcmVzZXJ2ZWRXZWlnaHRWYWx1ZXMuZ2V0KGVsZW1lbnQpXCJcclxuICAgICAgICAgIChtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZUNoYW5nZSk9XCJwcmVzZXJ2ZWRXZWlnaHRWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cclxuICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgW25nTW9kZWxdPVwiZWxlbWVudC53ZWlnaHRcIiBuYW1lPVwid2VpZ2h0XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cclxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XHJcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOby4gPC9tYXQtaGVhZGVyLWNlbGw+XHJcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L21hdC1jZWxsPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxyXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxyXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcclxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIj5cclxuICAgICAge3tlbGVtZW50Lm5hbWV9fVxyXG5cclxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjbmFtZUVkaXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xyXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdE5hbWUoZWxlbWVudCwgZilcIlxyXG4gICAgICAgICAgICAgIFttYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZV09XCJwcmVzZXJ2ZWROYW1lVmFsdWVzLmdldChlbGVtZW50KVwiXHJcbiAgICAgICAgICAgICAgKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cclxuICAgICAgICAgICAgPGgyIG1hdC1lZGl0LXRpdGxlPk5hbWU8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFtuZ01vZGVsXT1cImVsZW1lbnQubmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtYWN0aW9ucz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdENsb3NlPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbWF0LWNlbGw+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cclxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxyXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxyXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJ3ZWlnaHRFZGl0XCIgW21hdFBvcG92ZXJFZGl0Q29udGV4dF09XCJlbGVtZW50XCI+XHJcbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxyXG5cclxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9tYXQtY2VsbD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxyXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XHJcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC9tYXQtaGVhZGVyLWNlbGw+XHJcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC9tYXQtY2VsbD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9tYXQtaGVhZGVyLXJvdz5cclxuICA8bWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L21hdC1yb3c+XHJcbjwvbWF0LXRhYmxlPlxyXG4iXX0=