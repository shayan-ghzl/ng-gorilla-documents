import { Component } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop with a handle
 */
export class CdkDragDropHandleExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDragDropHandleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkDragDropHandleExample, isStandalone: true, selector: "cdk-drag-drop-handle-example", ngImport: i0, template: "<div class=\"example-box\" cdkDrag>\r\n  I can only be dragged using the handle\r\n\r\n  <div class=\"example-handle\" cdkDragHandle>\r\n    <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\r\n      <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\r\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\r\n    </svg>\r\n  </div>\r\n</div>\r\n", styles: [".example-box {\r\n  width: 200px;\r\n  height: 200px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  border: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.example-box:active {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.example-handle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: #ccc;\r\n  cursor: move;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n"], dependencies: [{ kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: CdkDragHandle, selector: "[cdkDragHandle]", inputs: ["cdkDragHandleDisabled"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDragDropHandleExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-handle-example', standalone: true, imports: [CdkDrag, CdkDragHandle], template: "<div class=\"example-box\" cdkDrag>\r\n  I can only be dragged using the handle\r\n\r\n  <div class=\"example-handle\" cdkDragHandle>\r\n    <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\r\n      <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\r\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\r\n    </svg>\r\n  </div>\r\n</div>\r\n", styles: [".example-box {\r\n  width: 200px;\r\n  height: 200px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  border: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.example-box:active {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.example-handle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: #ccc;\r\n  cursor: move;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFOUQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sd0JBQXdCOzhHQUF4Qix3QkFBd0I7a0dBQXhCLHdCQUF3Qix3RkNickMsdWJBVUEsKzlCRENZLE9BQU8sd2JBQUUsYUFBYTs7MkZBRXJCLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSw4QkFBOEIsY0FHNUIsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDZGtEcmFnLCBDZGtEcmFnSGFuZGxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgRHJhZyZEcm9wIHdpdGggYSBoYW5kbGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWhhbmRsZS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWhhbmRsZS1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0Nka0RyYWcsIENka0RyYWdIYW5kbGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BIYW5kbGVFeGFtcGxlIHt9XHJcbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiIGNka0RyYWc+XHJcbiAgSSBjYW4gb25seSBiZSBkcmFnZ2VkIHVzaW5nIHRoZSBoYW5kbGVcclxuXHJcbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaGFuZGxlXCIgY2RrRHJhZ0hhbmRsZT5cclxuICAgIDxzdmcgd2lkdGg9XCIyNHB4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgPHBhdGggZD1cIk0xMCA5aDRWNmgzbC01LTUtNSA1aDN2M3ptLTEgMUg2VjdsLTUgNSA1IDV2LTNoM3YtNHptMTQgMmwtNS01djNoLTN2NGgzdjNsNS01em0tOSAzaC00djNIN2w1IDUgNS01aC0zdi0zelwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19