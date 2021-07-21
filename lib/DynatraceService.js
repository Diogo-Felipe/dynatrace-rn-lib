"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynatraceService = void 0;
var react_native_plugin_1 = require("@dynatrace/react-native-plugin");
var DynatraceService = /** @class */ (function () {
    function DynatraceService(componentName) {
        this.componentName = componentName;
    }
    DynatraceService.prototype.sendRenderComponent = function () {
        var dynatraceAction = react_native_plugin_1.Dynatrace.enterAction("Render component " + this.componentName);
        dynatraceAction.leaveAction();
    };
    DynatraceService.prototype.sendClickEvent = function (buttonName) {
        var dynatraceAction = react_native_plugin_1.Dynatrace.enterAction("Click on " + buttonName + " from " + this.componentName);
        dynatraceAction.leaveAction();
    };
    DynatraceService.prototype.sendApiFetch = function (apiName) {
        var dynatraceAction = react_native_plugin_1.Dynatrace.enterAction("API " + apiName + " from " + this.componentName + " fetched");
        dynatraceAction.leaveAction();
    };
    return DynatraceService;
}());
exports.DynatraceService = DynatraceService;
