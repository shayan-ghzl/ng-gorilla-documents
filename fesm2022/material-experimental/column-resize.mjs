import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i2 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i1 from '@angular/material-experimental/column-resize';
import { MatDefaultEnabledColumnResizeModule, MatColumnResizeModule } from '@angular/material-experimental/column-resize';

const ELEMENT_DATA$2 = [
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
 * @title Default-enabled column resize with a table-based mat-table.
 */
class DefaultEnabledColumnResizeExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$2;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DefaultEnabledColumnResizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DefaultEnabledColumnResizeExample, isStandalone: true, selector: "default-enabled-column-resize-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 example-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\" sticky>\r\n    <th mat-header-cell *matHeaderCellDef [matResizableMaxWidthPx]=\"100\"> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\" sticky>\r\n    <th mat-header-cell *matHeaderCellDef [matResizableMinWidthPx]=\"150\"> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column (not resizable) -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef disableResize> Weight (Not resizable) </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [":host {\r\n  display: block;\r\n  overflow: auto;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatDefaultEnabledColumnResizeModule }, { kind: "directive", type: i1.MatDefaultEnabledColumnResize, selector: "table[mat-table]" }, { kind: "directive", type: i1.MatDefaultResizable, selector: "mat-header-cell:not([disableResize]), th[mat-header-cell]:not([disableResize])", inputs: ["matResizableMinWidthPx", "matResizableMaxWidthPx"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DefaultEnabledColumnResizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'default-enabled-column-resize-example', standalone: true, imports: [MatDefaultEnabledColumnResizeModule, MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 example-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\" sticky>\r\n    <th mat-header-cell *matHeaderCellDef [matResizableMaxWidthPx]=\"100\"> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\" sticky>\r\n    <th mat-header-cell *matHeaderCellDef [matResizableMinWidthPx]=\"150\"> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column (not resizable) -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef disableResize> Weight (Not resizable) </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [":host {\r\n  display: block;\r\n  overflow: auto;\r\n}\r\n"] }]
        }] });

const ELEMENT_DATA$1 = [
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
 * @title Default-enabled column resize with a flex-based mat-table.
 */
class DefaultEnabledColumnResizeFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DefaultEnabledColumnResizeFlexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DefaultEnabledColumnResizeFlexExample, isStandalone: true, selector: "default-enabled-column-resize-flex-example", ngImport: i0, template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 example-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\" sticky>\r\n    <mat-header-cell *matHeaderCellDef [matResizableMaxWidthPx]=\"100\"> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\" sticky>\r\n    <mat-header-cell *matHeaderCellDef [matResizableMinWidthPx]=\"150\"> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column (not resizable) -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef disableResize> Weight (Not resizable) </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n", styles: [":host {\r\n  display: block;\r\n  overflow: auto;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatDefaultEnabledColumnResizeModule }, { kind: "directive", type: i1.MatDefaultEnabledColumnResizeFlex, selector: "mat-table" }, { kind: "directive", type: i1.MatDefaultResizable, selector: "mat-header-cell:not([disableResize]), th[mat-header-cell]:not([disableResize])", inputs: ["matResizableMinWidthPx", "matResizableMaxWidthPx"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DefaultEnabledColumnResizeFlexExample, decorators: [{
            type: Component,
            args: [{ selector: 'default-enabled-column-resize-flex-example', standalone: true, imports: [MatDefaultEnabledColumnResizeModule, MatTableModule], template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 example-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\" sticky>\r\n    <mat-header-cell *matHeaderCellDef [matResizableMaxWidthPx]=\"100\"> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\" sticky>\r\n    <mat-header-cell *matHeaderCellDef [matResizableMinWidthPx]=\"150\"> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column (not resizable) -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef disableResize> Weight (Not resizable) </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n", styles: [":host {\r\n  display: block;\r\n  overflow: auto;\r\n}\r\n"] }]
        }] });

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
 * @title Opt-in column resize with a table-based mat-table.
 */
class OptInColumnResizeExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: OptInColumnResizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: OptInColumnResizeExample, isStandalone: true, selector: "opt-in-column-resize-example", ngImport: i0, template: "<table mat-table columnResize [dataSource]=\"dataSource\" class=\"mat-elevation-z8 example-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\" sticky>\r\n    <th mat-header-cell *matHeaderCellDef resizable [matResizableMaxWidthPx]=\"100\"> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\" sticky>\r\n    <th mat-header-cell *matHeaderCellDef resizable [matResizableMinWidthPx]=\"150\"> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column (not resizable) -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight (Not resizable) </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef resizable> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [":host {\r\n  display: block;\r\n  overflow: auto;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatColumnResizeModule }, { kind: "directive", type: i1.MatColumnResize, selector: "table[mat-table][columnResize]" }, { kind: "directive", type: i1.MatResizable, selector: "mat-header-cell[resizable], th[mat-header-cell][resizable]", inputs: ["matResizableMinWidthPx", "matResizableMaxWidthPx"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: OptInColumnResizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'opt-in-column-resize-example', standalone: true, imports: [MatTableModule, MatColumnResizeModule], template: "<table mat-table columnResize [dataSource]=\"dataSource\" class=\"mat-elevation-z8 example-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\" sticky>\r\n    <th mat-header-cell *matHeaderCellDef resizable [matResizableMaxWidthPx]=\"100\"> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\" sticky>\r\n    <th mat-header-cell *matHeaderCellDef resizable [matResizableMinWidthPx]=\"150\"> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column (not resizable) -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight (Not resizable) </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef resizable> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [":host {\r\n  display: block;\r\n  overflow: auto;\r\n}\r\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DefaultEnabledColumnResizeExample, DefaultEnabledColumnResizeFlexExample, OptInColumnResizeExample };
//# sourceMappingURL=column-resize.mjs.map