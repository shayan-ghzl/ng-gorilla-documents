import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/** @title Implicit main content with two sidenavs */
export class SidenavPositionExample {
    constructor() {
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidenavPositionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SidenavPositionExample, isStandalone: true, selector: "sidenav-position-example", ngImport: i0, template: "@if (shouldRun) {\r\n  <mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\r\n    <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\r\n    Implicit main content\r\n  </mat-sidenav-container>\r\n} @else {\r\n  <div>Please open on Stackblitz to see result</div>\r\n}\r\n", styles: [".example-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidenavPositionExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-position-example', standalone: true, imports: [MatSidenavModule], template: "@if (shouldRun) {\r\n  <mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\r\n    <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\r\n    Implicit main content\r\n  </mat-sidenav-container>\r\n} @else {\r\n  <div>Please open on Stackblitz to see result</div>\r\n}\r\n", styles: [".example-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LXBvc2l0aW9uL3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1wb3NpdGlvbi9zaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7QUFFM0QscURBQXFEO0FBUXJELE1BQU0sT0FBTyxzQkFBc0I7SUFQbkM7UUFRRSxjQUFTLEdBQUcsMENBQTBDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkY7OEdBRlksc0JBQXNCO2tHQUF0QixzQkFBc0Isb0ZDWG5DLDhXQVNBLHlLREFZLGdCQUFnQjs7MkZBRWYsc0JBQXNCO2tCQVBsQyxTQUFTOytCQUNFLDBCQUEwQixjQUd4QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRTaWRlbmF2TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuXHJcbi8qKiBAdGl0bGUgSW1wbGljaXQgbWFpbiBjb250ZW50IHdpdGggdHdvIHNpZGVuYXZzICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFNpZGVuYXZNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZW5hdlBvc2l0aW9uRXhhbXBsZSB7XHJcbiAgc2hvdWxkUnVuID0gLyhefC4pKHN0YWNrYmxpdHp8d2ViY29udGFpbmVyKS4oaW98Y29tKSQvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpO1xyXG59XHJcbiIsIkBpZiAoc2hvdWxkUnVuKSB7XHJcbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XHJcbiAgICA8bWF0LXNpZGVuYXYgb3BlbmVkIG1vZGU9XCJzaWRlXCI+U3RhcnQgY29udGVudDwvbWF0LXNpZGVuYXY+XHJcbiAgICA8bWF0LXNpZGVuYXYgb3BlbmVkIG1vZGU9XCJzaWRlXCIgcG9zaXRpb249XCJlbmRcIj5FbmQgY29udGVudDwvbWF0LXNpZGVuYXY+XHJcbiAgICBJbXBsaWNpdCBtYWluIGNvbnRlbnRcclxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxufSBAZWxzZSB7XHJcbiAgPGRpdj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cclxufVxyXG4iXX0=