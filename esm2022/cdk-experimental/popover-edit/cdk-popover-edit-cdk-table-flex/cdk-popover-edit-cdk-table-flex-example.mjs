import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { CdkTableModule } from '@angular/cdk/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "@angular/cdk-experimental/popover-edit";
import * as i3 from "@angular/forms";
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
 * @title CDK Popover Edit on a flex cdk-table.
 */
export class CdkPopoverEditCdkTableFlexExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkPopoverEditCdkTableFlexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkPopoverEditCdkTableFlexExample, isStandalone: true, selector: "cdk-popover-edit-cdk-table-flex-example", ngImport: i0, template: "<cdk-table class=\"example-table\" editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div style=\"background-color: white;\">\r\n      <form #f=\"ngForm\"\r\n          cdkEditControl\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        Edit b:\r\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n        <br>\r\n        <button type=\"submit\">Confirm</button>\r\n        <button cdkEditRevert>Revert</button>\r\n        <button cdkEditClose>Close</button>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"\r\n        [cdkPopoverEdit]=\"nameEdit\">\r\n      {{element.name}}\r\n      \r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div style=\"background-color: white;\">\r\n          <form #f=\"ngForm\"\r\n              cdkEditControl\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n            Edit a:\r\n            <input [ngModel]=\"element.name\" name=\"name\" required>\r\n            <br>\r\n            <button type=\"submit\">Confirm</button>\r\n            <button cdkEditRevert>Revert</button>\r\n            <button cdkEditClose>Close</button>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *cdkRowHoverContent>\r\n        <button cdkEditOpen>Edit</button>\r\n      </span>\r\n    </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"\r\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\r\n      {{element.weight}}\r\n      \r\n      <span *cdkRowHoverContent>\r\n        <button cdkEditOpen>Edit</button>\r\n      </span>\r\n    </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\r\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\r\n</cdk-table>\r\n", styles: ["/**\r\n * Add basic flex styling so that the cells evenly space themselves in the row.\r\n */\r\n.example-table cdk-row, cdk-header-row, cdk-footer-row {\r\n  display: flex;\r\n}\r\n\r\n.example-table cdk-cell, cdk-header-cell, cdk-footer-cell {\r\n  flex: 1;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: CdkTableModule }, { kind: "component", type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { kind: "directive", type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { kind: "directive", type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { kind: "directive", type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { kind: "directive", type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { kind: "directive", type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { kind: "component", type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }, { kind: "directive", type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { kind: "component", type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { kind: "directive", type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }, { kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i2.CdkPopoverEdit, selector: "[cdkPopoverEdit]:not([cdkPopoverEditTabOut])", inputs: ["cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan", "cdkPopoverEditDisabled"] }, { kind: "directive", type: i2.CdkRowHoverContent, selector: "[cdkRowHoverContent]" }, { kind: "directive", type: i2.CdkEditControl, selector: "form[cdkEditControl]", inputs: ["cdkEditControlClickOutBehavior", "cdkEditControlPreservedFormValue", "cdkEditControlIgnoreSubmitUnlessValid"], outputs: ["cdkEditControlPreservedFormValueChange"] }, { kind: "directive", type: i2.CdkEditRevert, selector: "button[cdkEditRevert]", inputs: ["type"] }, { kind: "directive", type: i2.CdkEditClose, selector: "[cdkEditClose]" }, { kind: "directive", type: i2.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "directive", type: i2.CdkEditOpen, selector: "[cdkEditOpen]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkPopoverEditCdkTableFlexExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-popover-edit-cdk-table-flex-example', standalone: true, imports: [CdkTableModule, CdkPopoverEditModule, FormsModule], template: "<cdk-table class=\"example-table\" editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div style=\"background-color: white;\">\r\n      <form #f=\"ngForm\"\r\n          cdkEditControl\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        Edit b:\r\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n        <br>\r\n        <button type=\"submit\">Confirm</button>\r\n        <button cdkEditRevert>Revert</button>\r\n        <button cdkEditClose>Close</button>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"\r\n        [cdkPopoverEdit]=\"nameEdit\">\r\n      {{element.name}}\r\n      \r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div style=\"background-color: white;\">\r\n          <form #f=\"ngForm\"\r\n              cdkEditControl\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n            Edit a:\r\n            <input [ngModel]=\"element.name\" name=\"name\" required>\r\n            <br>\r\n            <button type=\"submit\">Confirm</button>\r\n            <button cdkEditRevert>Revert</button>\r\n            <button cdkEditClose>Close</button>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *cdkRowHoverContent>\r\n        <button cdkEditOpen>Edit</button>\r\n      </span>\r\n    </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"\r\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\r\n      {{element.weight}}\r\n      \r\n      <span *cdkRowHoverContent>\r\n        <button cdkEditOpen>Edit</button>\r\n      </span>\r\n    </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\r\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\r\n</cdk-table>\r\n", styles: ["/**\r\n * Add basic flex styling so that the cells evenly space themselves in the row.\r\n */\r\n.example-table cdk-row, cdk-header-row, cdk-footer-row {\r\n  display: flex;\r\n}\r\n\r\n.example-table cdk-cell, cdk-header-cell, cdk-footer-cell {\r\n  flex: 1;\r\n}\r\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4L2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWZsZXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBUyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFTbEQsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ2hFLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDOUQsQ0FBQztBQUVGOztHQUVHO0FBUUgsTUFBTSxPQUFPLGlDQUFpQztJQVA5QztRQVFFLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUU1Qix3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBd0IsQ0FBQztRQUMxRCwwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBd0IsQ0FBQztLQWlCdEU7SUFmQyxZQUFZLENBQUMsT0FBd0IsRUFBRSxDQUFTO1FBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ1osT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQXdCLEVBQUUsQ0FBUztRQUNoRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs4R0FyQlUsaUNBQWlDO2tHQUFqQyxpQ0FBaUMsbUdDL0M5Qyx5dEdBaUZBLHFVRHBDWSxjQUFjLG1sQ0FBRSxvQkFBb0IsZzdCQUFFLFdBQVc7OzJGQUVoRCxpQ0FBaUM7a0JBUDdDLFNBQVM7K0JBQ0UseUNBQXlDLGNBR3ZDLElBQUksV0FDUCxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxXQUFXLENBQUM7O0FBMEI5RDs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBMkI7SUFBbEU7O1FBQ0Usb0RBQW9EO1FBQ3BELFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBb0IsWUFBWSxDQUFDLENBQUM7SUFROUQsQ0FBQztJQU5DLGlHQUFpRztJQUNqRyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVLEtBQUksQ0FBQztDQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05nRm9ybSwgRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XHJcbmltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgd2VpZ2h0OiBudW1iZXI7XHJcbiAgc3ltYm9sOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXHJcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxyXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxyXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxyXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxyXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcclxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcclxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxyXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxyXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXHJcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXHJcbiAge3Bvc2l0aW9uOiAxMSwgbmFtZTogJ1NvZGl1bScsIHdlaWdodDogMjIuOTg5Nywgc3ltYm9sOiAnTmEnfSxcclxuICB7cG9zaXRpb246IDEyLCBuYW1lOiAnTWFnbmVzaXVtJywgd2VpZ2h0OiAyNC4zMDUsIHN5bWJvbDogJ01nJ30sXHJcbiAge3Bvc2l0aW9uOiAxMywgbmFtZTogJ0FsdW1pbnVtJywgd2VpZ2h0OiAyNi45ODE1LCBzeW1ib2w6ICdBbCd9LFxyXG4gIHtwb3NpdGlvbjogMTQsIG5hbWU6ICdTaWxpY29uJywgd2VpZ2h0OiAyOC4wODU1LCBzeW1ib2w6ICdTaSd9LFxyXG4gIHtwb3NpdGlvbjogMTUsIG5hbWU6ICdQaG9zcGhvcnVzJywgd2VpZ2h0OiAzMC45NzM4LCBzeW1ib2w6ICdQJ30sXHJcbiAge3Bvc2l0aW9uOiAxNiwgbmFtZTogJ1N1bGZ1cicsIHdlaWdodDogMzIuMDY1LCBzeW1ib2w6ICdTJ30sXHJcbiAge3Bvc2l0aW9uOiAxNywgbmFtZTogJ0NobG9yaW5lJywgd2VpZ2h0OiAzNS40NTMsIHN5bWJvbDogJ0NsJ30sXHJcbiAge3Bvc2l0aW9uOiAxOCwgbmFtZTogJ0FyZ29uJywgd2VpZ2h0OiAzOS45NDgsIHN5bWJvbDogJ0FyJ30sXHJcbiAge3Bvc2l0aW9uOiAxOSwgbmFtZTogJ1BvdGFzc2l1bScsIHdlaWdodDogMzkuMDk4Mywgc3ltYm9sOiAnSyd9LFxyXG4gIHtwb3NpdGlvbjogMjAsIG5hbWU6ICdDYWxjaXVtJywgd2VpZ2h0OiA0MC4wNzgsIHN5bWJvbDogJ0NhJ30sXHJcbl07XHJcblxyXG4vKipcclxuICogQHRpdGxlIENESyBQb3BvdmVyIEVkaXQgb24gYSBmbGV4IGNkay10YWJsZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC1leGFtcGxlJyxcclxuICBzdHlsZVVybHM6IFsnY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC1leGFtcGxlLmNzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0Nka1RhYmxlTW9kdWxlLCBDZGtQb3BvdmVyRWRpdE1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUZsZXhFeGFtcGxlIHtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XHJcbiAgZGF0YVNvdXJjZSA9IG5ldyBFeGFtcGxlRGF0YVNvdXJjZSgpO1xyXG5cclxuICByZWFkb25seSBwcmVzZXJ2ZWROYW1lVmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XHJcbiAgcmVhZG9ubHkgcHJlc2VydmVkV2VpZ2h0VmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XHJcblxyXG4gIG9uU3VibWl0TmFtZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xyXG4gICAgaWYgKCFmLnZhbGlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50Lm5hbWUgPSBmLnZhbHVlLm5hbWU7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdFdlaWdodChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xyXG4gICAgaWYgKCFmLnZhbGlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LndlaWdodCA9IGYudmFsdWUud2VpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGEgc291cmNlIHRvIHByb3ZpZGUgd2hhdCBkYXRhIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdGFibGUuIE5vdGUgdGhhdCB0aGUgZGF0YSBzb3VyY2VcclxuICogY2FuIHJldHJpZXZlIGl0cyBkYXRhIGluIGFueSB3YXkuIEluIHRoaXMgY2FzZSwgdGhlIGRhdGEgc291cmNlIGlzIHByb3ZpZGVkIGEgcmVmZXJlbmNlXHJcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXHJcbiAqIHRoZSB1bmRlcmx5aW5nIGRhdGEuIEluc3RlYWQsIGl0IG9ubHkgbmVlZHMgdG8gdGFrZSB0aGUgZGF0YSBhbmQgc2VuZCB0aGUgdGFibGUgZXhhY3RseSB3aGF0XHJcbiAqIHNob3VsZCBiZSByZW5kZXJlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XHJcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xyXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xyXG5cclxuICAvKiogQ29ubmVjdCBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRhYmxlIHRvIHJldHJpZXZlIG9uZSBzdHJlYW0gY29udGFpbmluZyB0aGUgZGF0YSB0byByZW5kZXIuICovXHJcbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdCgpIHt9XHJcbn1cclxuIiwiPGNkay10YWJsZSBjbGFzcz1cImV4YW1wbGUtdGFibGVcIiBlZGl0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XHJcbiAgPCEtLVxyXG4gICAgVGhpcyBlZGl0IGxlbnMgaXMgc3BlY2lmaWVkIG91dHNpZGUgb2YgdGhlIGNlbGwgYW5kIG11c3QgZXhwbGljaXRseSBkZWNsYXJlXHJcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxyXG4gIC0tPlxyXG4gIDxuZy10ZW1wbGF0ZSAjd2VpZ2h0RWRpdCBsZXQtZWxlbWVudD5cclxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIj5cclxuICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgY2RrRWRpdENvbnRyb2xcclxuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFdlaWdodChlbGVtZW50LCBmKVwiXHJcbiAgICAgICAgICBbY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkV2VpZ2h0VmFsdWVzLmdldChlbGVtZW50KVwiXHJcbiAgICAgICAgICAoY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVDaGFuZ2UpPVwicHJlc2VydmVkV2VpZ2h0VmFsdWVzLnNldChlbGVtZW50LCAkZXZlbnQpXCI+XHJcbiAgICAgICAgRWRpdCBiOlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgW25nTW9kZWxdPVwiZWxlbWVudC53ZWlnaHRcIiBuYW1lPVwid2VpZ2h0XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNka0VkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XHJcbiAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxyXG4gICAgPGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gTm8uIDwvY2RrLWhlYWRlci1jZWxsPlxyXG4gICAgPGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC9jZGstY2VsbD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPCEtLSBOYW1lIENvbHVtbiAtLT5cclxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIm5hbWVcIj5cclxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IE5hbWUgPC9jZGstaGVhZGVyLWNlbGw+XHJcbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiXHJcbiAgICAgICAgW2Nka1BvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCI+XHJcbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cclxuICAgICAgXHJcbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIj5cclxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICBjZGtFZGl0Q29udHJvbFxyXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdE5hbWUoZWxlbWVudCwgZilcIlxyXG4gICAgICAgICAgICAgIFtjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZV09XCJwcmVzZXJ2ZWROYW1lVmFsdWVzLmdldChlbGVtZW50KVwiXHJcbiAgICAgICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cclxuICAgICAgICAgICAgRWRpdCBhOlxyXG4gICAgICAgICAgICA8aW5wdXQgW25nTW9kZWxdPVwiZWxlbWVudC5uYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2RrRWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XHJcbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0T3Blbj5FZGl0PC9idXR0b24+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvY2RrLWNlbGw+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cclxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIndlaWdodFwiPlxyXG4gICAgPGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvY2RrLWhlYWRlci1jZWxsPlxyXG4gICAgPGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxyXG4gICAgICAgIFtjZGtQb3BvdmVyRWRpdF09XCJ3ZWlnaHRFZGl0XCIgW2Nka1BvcG92ZXJFZGl0Q29udGV4dF09XCJlbGVtZW50XCI+XHJcbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxyXG4gICAgICBcclxuICAgICAgPHNwYW4gKmNka1Jvd0hvdmVyQ29udGVudD5cclxuICAgICAgICA8YnV0dG9uIGNka0VkaXRPcGVuPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9jZGstY2VsbD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxyXG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwic3ltYm9sXCI+XHJcbiAgICA8Y2RrLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC9jZGstaGVhZGVyLWNlbGw+XHJcbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC9jZGstY2VsbD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPGNkay1oZWFkZXItcm93ICpjZGtIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9jZGstaGVhZGVyLXJvdz5cclxuICA8Y2RrLXJvdyAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L2Nkay1yb3c+XHJcbjwvY2RrLXRhYmxlPlxyXG4iXX0=