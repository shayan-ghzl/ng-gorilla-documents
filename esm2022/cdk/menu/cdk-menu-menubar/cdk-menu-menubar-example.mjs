import { Component } from '@angular/core';
import { CdkMenuItemRadio, CdkMenuItemCheckbox, CdkMenuGroup, CdkMenu, CdkMenuTrigger, CdkMenuItem, CdkMenuBar, } from '@angular/cdk/menu';
import * as i0 from "@angular/core";
/** @title Google Docs Menu Bar. */
export class CdkMenuMenubarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkMenuMenubarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkMenuMenubarExample, isStandalone: true, selector: "cdk-menu-menubar-example", exportAs: ["cdkMenuMenubarExample"], ngImport: i0, template: "<div cdkMenuBar>\r\n  <!-- #docregion file-trigger -->\r\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\r\n  <!-- #enddocregion file-trigger -->\r\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\r\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\r\n</div>\r\n\r\n<ng-template #file>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\r\n    <hr />\r\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new_doc\">\r\n      New <span>&#10148;</span>\r\n    </button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\r\n    <hr />\r\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\r\n      Download <span>&#10148;</span>\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #edit>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\r\n    <hr />\r\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #format >\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <div class=\"example-menu-group\" cdkMenuGroup>\r\n      <button cdkMenuItemCheckbox class=\"example-menu-item\" cdkMenuItemChecked>Bold</button>\r\n      <button cdkMenuItemCheckbox class=\"example-menu-item\">Italic</button>\r\n    </div>\r\n    <hr />\r\n    <div class=\"example-menu-group\" cdkMenuGroup>\r\n      <button cdkMenuItemRadio class=\"example-menu-item\">Small</button>\r\n      <button cdkMenuItemRadio class=\"example-menu-item\" cdkMenuItemChecked>Normal</button>\r\n      <button cdkMenuItemRadio class=\"example-menu-item\">Big</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #new_doc>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\r\n    <hr />\r\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #download>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\r\n  </div>\r\n</ng-template>\r\n", styles: [".example-menu-bar-item {\r\n  cursor: pointer;\r\n  border: none;\r\n\r\n  user-select: none;\r\n  min-width: 34px;\r\n  line-height: 26px;\r\n  padding: 0 16px;\r\n}\r\n\r\n.example-menu-bar-item:hover {\r\n  background-color: rgb(208, 208, 208);\r\n}\r\n\r\n.example-menu {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  min-width: 180px;\r\n  max-width: 280px;\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 6px 0;\r\n}\r\n\r\n.example-menu hr {\r\n  width: 100%;\r\n  color: rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.example-menu .example-menu-group {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-menu .example-menu-item {\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  border: none;\r\n\r\n  user-select: none;\r\n  min-width: 64px;\r\n  line-height: 36px;\r\n  padding: 0 16px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  flex: 1;\r\n}\r\n\r\n.example-menu-item > span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex: 1;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.example-menu .example-menu-item:hover {\r\n  background-color: rgb(208, 208, 208);\r\n}\r\n\r\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\r\n  background-color: rgb(225, 225, 225);\r\n}\r\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\r\n  background-color: rgb(225, 225, 225);\r\n}\r\n.example-menu .example-menu-item:active {\r\n  background-color: rgb(170, 170, 170);\r\n}\r\n\r\n.example-menu-bar-item[aria-expanded='true'],\r\n.example-menu-item[aria-expanded='true'] {\r\n  background-color: rgb(208, 208, 208) !important;\r\n}\r\n"], dependencies: [{ kind: "directive", type: CdkMenuBar, selector: "[cdkMenuBar]", exportAs: ["cdkMenuBar"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition", "cdkMenuTriggerData"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuGroup, selector: "[cdkMenuGroup]", exportAs: ["cdkMenuGroup"] }, { kind: "directive", type: CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { kind: "directive", type: CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkMenuMenubarExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-menubar-example', exportAs: 'cdkMenuMenubarExample', standalone: true, imports: [
                        CdkMenuBar,
                        CdkMenuItem,
                        CdkMenuTrigger,
                        CdkMenu,
                        CdkMenuGroup,
                        CdkMenuItemCheckbox,
                        CdkMenuItemRadio,
                    ], template: "<div cdkMenuBar>\r\n  <!-- #docregion file-trigger -->\r\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\r\n  <!-- #enddocregion file-trigger -->\r\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\r\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\r\n</div>\r\n\r\n<ng-template #file>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\r\n    <hr />\r\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new_doc\">\r\n      New <span>&#10148;</span>\r\n    </button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\r\n    <hr />\r\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\r\n      Download <span>&#10148;</span>\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #edit>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\r\n    <hr />\r\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #format >\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <div class=\"example-menu-group\" cdkMenuGroup>\r\n      <button cdkMenuItemCheckbox class=\"example-menu-item\" cdkMenuItemChecked>Bold</button>\r\n      <button cdkMenuItemCheckbox class=\"example-menu-item\">Italic</button>\r\n    </div>\r\n    <hr />\r\n    <div class=\"example-menu-group\" cdkMenuGroup>\r\n      <button cdkMenuItemRadio class=\"example-menu-item\">Small</button>\r\n      <button cdkMenuItemRadio class=\"example-menu-item\" cdkMenuItemChecked>Normal</button>\r\n      <button cdkMenuItemRadio class=\"example-menu-item\">Big</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #new_doc>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\r\n    <hr />\r\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #download>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\r\n  </div>\r\n</ng-template>\r\n", styles: [".example-menu-bar-item {\r\n  cursor: pointer;\r\n  border: none;\r\n\r\n  user-select: none;\r\n  min-width: 34px;\r\n  line-height: 26px;\r\n  padding: 0 16px;\r\n}\r\n\r\n.example-menu-bar-item:hover {\r\n  background-color: rgb(208, 208, 208);\r\n}\r\n\r\n.example-menu {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  min-width: 180px;\r\n  max-width: 280px;\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 6px 0;\r\n}\r\n\r\n.example-menu hr {\r\n  width: 100%;\r\n  color: rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.example-menu .example-menu-group {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-menu .example-menu-item {\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  border: none;\r\n\r\n  user-select: none;\r\n  min-width: 64px;\r\n  line-height: 36px;\r\n  padding: 0 16px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  flex: 1;\r\n}\r\n\r\n.example-menu-item > span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex: 1;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.example-menu .example-menu-item:hover {\r\n  background-color: rgb(208, 208, 208);\r\n}\r\n\r\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\r\n  background-color: rgb(225, 225, 225);\r\n}\r\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\r\n  background-color: rgb(225, 225, 225);\r\n}\r\n.example-menu .example-menu-item:active {\r\n  background-color: rgb(170, 170, 170);\r\n}\r\n\r\n.example-menu-bar-item[aria-expanded='true'],\r\n.example-menu-item[aria-expanded='true'] {\r\n  background-color: rgb(208, 208, 208) !important;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtbWVudWJhci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL21lbnUvY2RrLW1lbnUtbWVudWJhci9jZGstbWVudS1tZW51YmFyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1tZW51YmFyL2Nkay1tZW51LW1lbnViYXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLE9BQU8sRUFDUCxjQUFjLEVBQ2QsV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLG1CQUFtQixDQUFDOztBQUUzQixtQ0FBbUM7QUFpQm5DLE1BQU0sT0FBTyxxQkFBcUI7OEdBQXJCLHFCQUFxQjtrR0FBckIscUJBQXFCLHlIQzVCbEMscTdGQW9FQSxvdEREakRJLFVBQVUsbUZBQ1YsV0FBVyxzTEFDWCxjQUFjLHNOQUNkLE9BQU8sa0dBQ1AsWUFBWSx1RkFDWixtQkFBbUIscUdBQ25CLGdCQUFnQjs7MkZBR1AscUJBQXFCO2tCQWhCakMsU0FBUzsrQkFDRSwwQkFBMEIsWUFDMUIsdUJBQXVCLGNBR3JCLElBQUksV0FDUDt3QkFDUCxVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxPQUFPO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixnQkFBZ0I7cUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENka01lbnVJdGVtUmFkaW8sXHJcbiAgQ2RrTWVudUl0ZW1DaGVja2JveCxcclxuICBDZGtNZW51R3JvdXAsXHJcbiAgQ2RrTWVudSxcclxuICBDZGtNZW51VHJpZ2dlcixcclxuICBDZGtNZW51SXRlbSxcclxuICBDZGtNZW51QmFyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9tZW51JztcclxuXHJcbi8qKiBAdGl0bGUgR29vZ2xlIERvY3MgTWVudSBCYXIuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLW1lbnUtbWVudWJhci1leGFtcGxlJyxcclxuICBleHBvcnRBczogJ2Nka01lbnVNZW51YmFyRXhhbXBsZScsXHJcbiAgc3R5bGVVcmxzOiBbJ2Nkay1tZW51LW1lbnViYXItZXhhbXBsZS5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJ2Nkay1tZW51LW1lbnViYXItZXhhbXBsZS5odG1sJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENka01lbnVCYXIsXHJcbiAgICBDZGtNZW51SXRlbSxcclxuICAgIENka01lbnVUcmlnZ2VyLFxyXG4gICAgQ2RrTWVudSxcclxuICAgIENka01lbnVHcm91cCxcclxuICAgIENka01lbnVJdGVtQ2hlY2tib3gsXHJcbiAgICBDZGtNZW51SXRlbVJhZGlvLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZGtNZW51TWVudWJhckV4YW1wbGUge31cclxuIiwiPGRpdiBjZGtNZW51QmFyPlxyXG4gIDwhLS0gI2RvY3JlZ2lvbiBmaWxlLXRyaWdnZXIgLS0+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1iYXItaXRlbVwiIGNka01lbnVJdGVtIFtjZGtNZW51VHJpZ2dlckZvcl09XCJmaWxlXCI+RmlsZTwvYnV0dG9uPlxyXG4gIDwhLS0gI2VuZGRvY3JlZ2lvbiBmaWxlLXRyaWdnZXIgLS0+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1iYXItaXRlbVwiIGNka01lbnVJdGVtIFtjZGtNZW51VHJpZ2dlckZvcl09XCJlZGl0XCI+RWRpdDwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtYmFyLWl0ZW1cIiBjZGtNZW51SXRlbSBbY2RrTWVudVRyaWdnZXJGb3JdPVwiZm9ybWF0XCI+Rm9ybWF0PC9idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNmaWxlPlxyXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2hhcmU8L2J1dHRvbj5cclxuICAgIDxociAvPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0gW2Nka01lbnVUcmlnZ2VyRm9yXT1cIm5ld19kb2NcIj5cclxuICAgICAgTmV3IDxzcGFuPiYjMTAxNDg7PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5PcGVuPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5NYWtlIGEgQ29weTwvYnV0dG9uPlxyXG4gICAgPGhyIC8+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbSBbY2RrTWVudVRyaWdnZXJGb3JdPVwiZG93bmxvYWRcIj5cclxuICAgICAgRG93bmxvYWQgPHNwYW4+JiMxMDE0ODs8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZWRpdD5cclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlVuZG88L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlJlZG88L2J1dHRvbj5cclxuICAgIDxociAvPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q3V0PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5Db3B5PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5QYXN0ZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNmb3JtYXQgPlxyXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxyXG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudS1ncm91cFwiIGNka01lbnVHcm91cD5cclxuICAgICAgPGJ1dHRvbiBjZGtNZW51SXRlbUNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbUNoZWNrZWQ+Qm9sZDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNka01lbnVJdGVtQ2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiPkl0YWxpYzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aHIgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnUtZ3JvdXBcIiBjZGtNZW51R3JvdXA+XHJcbiAgICAgIDxidXR0b24gY2RrTWVudUl0ZW1SYWRpbyBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCI+U21hbGw8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjZGtNZW51SXRlbVJhZGlvIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbUNoZWNrZWQ+Tm9ybWFsPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2RrTWVudUl0ZW1SYWRpbyBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCI+QmlnPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbmV3X2RvYz5cclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkRvY3VtZW50PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5Gcm9tIHRlbXBsYXRlPC9idXR0b24+XHJcbiAgICA8aHIgLz5cclxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlNwcmVhZHNoZWV0PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5QcmVzZW50YXRpb248L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkZvcm08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZG93bmxvYWQ+XHJcbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiIGNka01lbnU+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5NaWNyb3NvZnQgV29yZDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+UERGPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5QbGFpbiB0ZXh0PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==