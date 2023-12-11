/**
 ******************************************************************************
 * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
 ******************************************************************************
 */
export const EXAMPLE_COMPONENTS = {
    "file-input-error-state-matcher": {
        "packagePath": "material/file-input/file-input-error-state-matcher",
        "title": "File Input with a custom ErrorStateMatcher",
        "componentName": "FileInputErrorStateMatcherExample",
        "files": [
            "file-input-error-state-matcher-example.ts",
            "./file-input-error-state-matcher-example.html",
            "./file-input-error-state-matcher-example.css"
        ],
        "selector": "file-input-error-state-matcher-example",
        "additionalComponents": [],
        "primaryFile": "file-input-error-state-matcher-example.ts",
        "importPath": "material/file-input"
    },
    "file-input-overview": {
        "packagePath": "material/file-input/file-input-overview",
        "title": "Basic File Inputs",
        "componentName": "FileInputOverviewExample",
        "files": [
            "file-input-overview-example.ts",
            "file-input-overview-example.html",
            "file-input-overview-example.css"
        ],
        "selector": "file-input-overview-example",
        "additionalComponents": [],
        "primaryFile": "file-input-overview-example.ts",
        "importPath": "material/file-input"
    }
};
export async function loadExample(id) {
    switch (id) {
        case 'file-input-error-state-matcher':
            return import('@angular/components-examples/material/file-input');
        case 'file-input-overview':
            return import('@angular/components-examples/material/file-input');
        default:
            return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBcUJILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFnQztJQUM3RCxnQ0FBZ0MsRUFBRTtRQUNoQyxhQUFhLEVBQUUsb0RBQW9EO1FBQ25FLE9BQU8sRUFBRSw0Q0FBNEM7UUFDckQsZUFBZSxFQUFFLG1DQUFtQztRQUNwRCxPQUFPLEVBQUU7WUFDUCwyQ0FBMkM7WUFDM0MsK0NBQStDO1lBQy9DLDhDQUE4QztTQUMvQztRQUNELFVBQVUsRUFBRSx3Q0FBd0M7UUFDcEQsc0JBQXNCLEVBQUUsRUFBRTtRQUMxQixhQUFhLEVBQUUsMkNBQTJDO1FBQzFELFlBQVksRUFBRSxxQkFBcUI7S0FDcEM7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixhQUFhLEVBQUUseUNBQXlDO1FBQ3hELE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsZUFBZSxFQUFFLDBCQUEwQjtRQUMzQyxPQUFPLEVBQUU7WUFDUCxnQ0FBZ0M7WUFDaEMsa0NBQWtDO1lBQ2xDLGlDQUFpQztTQUNsQztRQUNELFVBQVUsRUFBRSw2QkFBNkI7UUFDekMsc0JBQXNCLEVBQUUsRUFBRTtRQUMxQixhQUFhLEVBQUUsZ0NBQWdDO1FBQy9DLFlBQVksRUFBRSxxQkFBcUI7S0FDcEM7Q0FDRixDQUFDO0FBQ0YsTUFBTSxDQUFDLEtBQUssVUFBVSxXQUFXLENBQUMsRUFBVTtJQUMxQyxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssZ0NBQWdDO1lBQ3ZDLE9BQU8sTUFBTSxDQUFDLGtEQUFrRCxDQUFDLENBQUM7UUFDaEUsS0FBSyxxQkFBcUI7WUFDNUIsT0FBTyxNQUFNLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUM5RDtZQUNKLE9BQU8sU0FBUyxDQUFDO0tBQ2Q7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogRE8gTk9UIE1BTlVBTExZIEVESVQgVEhJUyBGSUxFLiBUSElTIEZJTEUgSVMgQVVUT01BVElDQUxMWSBHRU5FUkFURUQuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpdmVFeGFtcGxlIHtcclxuICAvKiogVGl0bGUgb2YgdGhlIGV4YW1wbGUuICovXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICAvKiogTmFtZSBvZiB0aGUgZXhhbXBsZSBjb21wb25lbnQuICovXHJcbiAgY29tcG9uZW50TmFtZTogc3RyaW5nO1xyXG4gIC8qKiBTZWxlY3RvciB0byBtYXRjaCB0aGUgY29tcG9uZW50IG9mIHRoaXMgZXhhbXBsZS4gKi9cclxuICBzZWxlY3Rvcjogc3RyaW5nO1xyXG4gIC8qKiBOYW1lIG9mIHRoZSBwcmltYXJ5IGZpbGUgb2YgdGhpcyBleGFtcGxlLiAqL1xyXG4gIHByaW1hcnlGaWxlOiBzdHJpbmc7XHJcbiAgLyoqIExpc3Qgb2YgZmlsZXMgd2hpY2ggYXJlIHBhcnQgb2YgdGhlIGV4YW1wbGUuICovXHJcbiAgZmlsZXM6IHN0cmluZ1tdO1xyXG4gIC8qKiBQYXRoIHRvIHRoZSBkaXJlY3RvcnkgY29udGFpbmluZyB0aGUgZXhhbXBsZS4gKi9cclxuICBwYWNrYWdlUGF0aDogc3RyaW5nO1xyXG4gIC8qKiBMaXN0IG9mIGFkZGl0aW9uYWwgY29tcG9uZW50cyB3aGljaCBhcmUgcGFydCBvZiB0aGUgZXhhbXBsZS4gKi9cclxuICBhZGRpdGlvbmFsQ29tcG9uZW50czogc3RyaW5nW107XHJcbiAgLyoqIFBhdGggZnJvbSB3aGljaCB0byBpbXBvcnQgdGhlIHhhbXBsZS4gKi9cclxuICBpbXBvcnRQYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFWEFNUExFX0NPTVBPTkVOVFM6IHtbaWQ6IHN0cmluZ106IExpdmVFeGFtcGxlfSA9IHtcbiAgXCJmaWxlLWlucHV0LWVycm9yLXN0YXRlLW1hdGNoZXJcIjoge1xuICAgIFwicGFja2FnZVBhdGhcIjogXCJtYXRlcmlhbC9maWxlLWlucHV0L2ZpbGUtaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlclwiLFxuICAgIFwidGl0bGVcIjogXCJGaWxlIElucHV0IHdpdGggYSBjdXN0b20gRXJyb3JTdGF0ZU1hdGNoZXJcIixcbiAgICBcImNvbXBvbmVudE5hbWVcIjogXCJGaWxlSW5wdXRFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGVcIixcbiAgICBcImZpbGVzXCI6IFtcbiAgICAgIFwiZmlsZS1pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUudHNcIixcbiAgICAgIFwiLi9maWxlLWlucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sXCIsXG4gICAgICBcIi4vZmlsZS1pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuY3NzXCJcbiAgICBdLFxuICAgIFwic2VsZWN0b3JcIjogXCJmaWxlLWlucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZVwiLFxuICAgIFwiYWRkaXRpb25hbENvbXBvbmVudHNcIjogW10sXG4gICAgXCJwcmltYXJ5RmlsZVwiOiBcImZpbGUtaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLnRzXCIsXG4gICAgXCJpbXBvcnRQYXRoXCI6IFwibWF0ZXJpYWwvZmlsZS1pbnB1dFwiXG4gIH0sXG4gIFwiZmlsZS1pbnB1dC1vdmVydmlld1wiOiB7XG4gICAgXCJwYWNrYWdlUGF0aFwiOiBcIm1hdGVyaWFsL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC1vdmVydmlld1wiLFxuICAgIFwidGl0bGVcIjogXCJCYXNpYyBGaWxlIElucHV0c1wiLFxuICAgIFwiY29tcG9uZW50TmFtZVwiOiBcIkZpbGVJbnB1dE92ZXJ2aWV3RXhhbXBsZVwiLFxuICAgIFwiZmlsZXNcIjogW1xuICAgICAgXCJmaWxlLWlucHV0LW92ZXJ2aWV3LWV4YW1wbGUudHNcIixcbiAgICAgIFwiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLmh0bWxcIixcbiAgICAgIFwiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLmNzc1wiXG4gICAgXSxcbiAgICBcInNlbGVjdG9yXCI6IFwiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlXCIsXG4gICAgXCJhZGRpdGlvbmFsQ29tcG9uZW50c1wiOiBbXSxcbiAgICBcInByaW1hcnlGaWxlXCI6IFwiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLnRzXCIsXG4gICAgXCJpbXBvcnRQYXRoXCI6IFwibWF0ZXJpYWwvZmlsZS1pbnB1dFwiXG4gIH1cbn07XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRXhhbXBsZShpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgc3dpdGNoIChpZCkge1xuICBjYXNlICdmaWxlLWlucHV0LWVycm9yLXN0YXRlLW1hdGNoZXInOlxucmV0dXJuIGltcG9ydCgnQGFuZ3VsYXIvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9maWxlLWlucHV0Jyk7XG4gIGNhc2UgJ2ZpbGUtaW5wdXQtb3ZlcnZpZXcnOlxucmV0dXJuIGltcG9ydCgnQGFuZ3VsYXIvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9maWxlLWlucHV0Jyk7XG4gICAgZGVmYXVsdDpcbnJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn0iXX0=