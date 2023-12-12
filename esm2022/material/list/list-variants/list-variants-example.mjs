import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
/**
 * @title List variants
 */
export class ListVariantsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListVariantsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ListVariantsExample, isStandalone: true, selector: "list-variants-example", ngImport: i0, template: "<h3>Single line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>This is the title</span>\r\n  </mat-list-item>\r\n  <mat-list-item>Also the title</mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Two line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span>Second line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    Second line\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Three line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line</span>\r\n    <span matListItemLine>Third line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line. This line will truncate.</span>\r\n    <span>Third line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line. This line will truncate.</span>\r\n    Third line\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Three line list with secondary text wrapping</h3>\r\n<mat-list class=\"example-list-wrapping\">\r\n  <mat-list-item lines=\"3\">\r\n    <span matListItemTitle>Title</span>\r\n    <span\r\n      >Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\r\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\r\n    </span>\r\n  </mat-list-item>\r\n  <mat-list-item lines=\"3\">\r\n    <span matListItemTitle>Title</span>\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n  </mat-list-item>\r\n</mat-list>\r\n", styles: [".example-list-wrapping {\r\n  max-width: 500px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListVariantsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-variants-example', standalone: true, imports: [MatListModule], template: "<h3>Single line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>This is the title</span>\r\n  </mat-list-item>\r\n  <mat-list-item>Also the title</mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Two line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span>Second line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    Second line\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Three line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line</span>\r\n    <span matListItemLine>Third line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line. This line will truncate.</span>\r\n    <span>Third line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line. This line will truncate.</span>\r\n    Third line\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Three line list with secondary text wrapping</h3>\r\n<mat-list class=\"example-list-wrapping\">\r\n  <mat-list-item lines=\"3\">\r\n    <span matListItemTitle>Title</span>\r\n    <span\r\n      >Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\r\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\r\n    </span>\r\n  </mat-list-item>\r\n  <mat-list-item lines=\"3\">\r\n    <span matListItemTitle>Title</span>\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n  </mat-list-item>\r\n</mat-list>\r\n", styles: [".example-list-wrapping {\r\n  max-width: 500px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12YXJpYW50cy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXZhcmlhbnRzL2xpc3QtdmFyaWFudHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC12YXJpYW50cy9saXN0LXZhcmlhbnRzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXJEOztHQUVHO0FBUUgsTUFBTSxPQUFPLG1CQUFtQjs4R0FBbkIsbUJBQW1CO2tHQUFuQixtQkFBbUIsaUZDYmhDLHlyRUE2REEsaUhEbERZLGFBQWE7OzJGQUVaLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSx1QkFBdUIsY0FHckIsSUFBSSxXQUNQLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBMaXN0IHZhcmlhbnRzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpc3QtdmFyaWFudHMtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXZhcmlhbnRzLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC12YXJpYW50cy1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdExpc3RNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdFZhcmlhbnRzRXhhbXBsZSB7fVxyXG4iLCI8aDM+U2luZ2xlIGxpbmUgbGlzdHM8L2gzPlxyXG48bWF0LWxpc3Q+XHJcbiAgPG1hdC1saXN0LWl0ZW0+XHJcbiAgICA8c3BhbiBtYXRMaXN0SXRlbVRpdGxlPlRoaXMgaXMgdGhlIHRpdGxlPC9zcGFuPlxyXG4gIDwvbWF0LWxpc3QtaXRlbT5cclxuICA8bWF0LWxpc3QtaXRlbT5BbHNvIHRoZSB0aXRsZTwvbWF0LWxpc3QtaXRlbT5cclxuPC9tYXQtbGlzdD5cclxuXHJcbjxoMz5Ud28gbGluZSBsaXN0czwvaDM+XHJcbjxtYXQtbGlzdD5cclxuICA8bWF0LWxpc3QtaXRlbT5cclxuICAgIDxzcGFuIG1hdExpc3RJdGVtVGl0bGU+VGl0bGU8L3NwYW4+XHJcbiAgICA8c3BhbiBtYXRMaXN0SXRlbUxpbmU+U2Vjb25kIGxpbmU8L3NwYW4+XHJcbiAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gIDxtYXQtbGlzdC1pdGVtPlxyXG4gICAgPHNwYW4gbWF0TGlzdEl0ZW1UaXRsZT5UaXRsZTwvc3Bhbj5cclxuICAgIDxzcGFuPlNlY29uZCBsaW5lPC9zcGFuPlxyXG4gIDwvbWF0LWxpc3QtaXRlbT5cclxuICA8bWF0LWxpc3QtaXRlbT5cclxuICAgIDxzcGFuIG1hdExpc3RJdGVtVGl0bGU+VGl0bGU8L3NwYW4+XHJcbiAgICBTZWNvbmQgbGluZVxyXG4gIDwvbWF0LWxpc3QtaXRlbT5cclxuPC9tYXQtbGlzdD5cclxuXHJcbjxoMz5UaHJlZSBsaW5lIGxpc3RzPC9oMz5cclxuPG1hdC1saXN0PlxyXG4gIDxtYXQtbGlzdC1pdGVtPlxyXG4gICAgPHNwYW4gbWF0TGlzdEl0ZW1UaXRsZT5UaXRsZTwvc3Bhbj5cclxuICAgIDxzcGFuIG1hdExpc3RJdGVtTGluZT5TZWNvbmQgbGluZTwvc3Bhbj5cclxuICAgIDxzcGFuIG1hdExpc3RJdGVtTGluZT5UaGlyZCBsaW5lPC9zcGFuPlxyXG4gIDwvbWF0LWxpc3QtaXRlbT5cclxuICA8bWF0LWxpc3QtaXRlbT5cclxuICAgIDxzcGFuIG1hdExpc3RJdGVtVGl0bGU+VGl0bGU8L3NwYW4+XHJcbiAgICA8c3BhbiBtYXRMaXN0SXRlbUxpbmU+U2Vjb25kIGxpbmUuIFRoaXMgbGluZSB3aWxsIHRydW5jYXRlLjwvc3Bhbj5cclxuICAgIDxzcGFuPlRoaXJkIGxpbmU8L3NwYW4+XHJcbiAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gIDxtYXQtbGlzdC1pdGVtPlxyXG4gICAgPHNwYW4gbWF0TGlzdEl0ZW1UaXRsZT5UaXRsZTwvc3Bhbj5cclxuICAgIDxzcGFuIG1hdExpc3RJdGVtTGluZT5TZWNvbmQgbGluZS4gVGhpcyBsaW5lIHdpbGwgdHJ1bmNhdGUuPC9zcGFuPlxyXG4gICAgVGhpcmQgbGluZVxyXG4gIDwvbWF0LWxpc3QtaXRlbT5cclxuPC9tYXQtbGlzdD5cclxuXHJcbjxoMz5UaHJlZSBsaW5lIGxpc3Qgd2l0aCBzZWNvbmRhcnkgdGV4dCB3cmFwcGluZzwvaDM+XHJcbjxtYXQtbGlzdCBjbGFzcz1cImV4YW1wbGUtbGlzdC13cmFwcGluZ1wiPlxyXG4gIDxtYXQtbGlzdC1pdGVtIGxpbmVzPVwiM1wiPlxyXG4gICAgPHNwYW4gbWF0TGlzdEl0ZW1UaXRsZT5UaXRsZTwvc3Bhbj5cclxuICAgIDxzcGFuXHJcbiAgICAgID5TZWNvbmRhcnkgbGluZSB0aGF0IHdpbGwgd3JhcCBiZWNhdXNlIHRoZSBsaXN0IGxpbmVzIGlzIGV4cGxpY2l0bHkgc2V0IHRvIDMgbGluZXMuIFRleHRcclxuICAgICAgaW5zaWRlIG9mIGEgYG1hdExpc3RJdGVtVGl0bGVgIG9yIGBtYXRMaXN0SXRlbUxpbmVgIHdpbGwgbmV2ZXIgd3JhcC5cclxuICAgIDwvc3Bhbj5cclxuICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgPG1hdC1saXN0LWl0ZW0gbGluZXM9XCIzXCI+XHJcbiAgICA8c3BhbiBtYXRMaXN0SXRlbVRpdGxlPlRpdGxlPC9zcGFuPlxyXG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXRcclxuICAgIGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvXHJcbiAgICBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cclxuICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXRcclxuICAgIG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3RcclxuICA8L21hdC1saXN0LWl0ZW0+XHJcbjwvbWF0LWxpc3Q+XHJcbiJdfQ==