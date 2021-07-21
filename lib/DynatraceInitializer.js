"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynatraceInitializer = void 0;
var react_native_plugin_1 = require("@dynatrace/react-native-plugin");
var DynatraceInitializer = /** @class */ (function () {
    function DynatraceInitializer(configsObject) {
        react_native_plugin_1.Dynatrace.start(new react_native_plugin_1.ManualStartupConfiguration(configsObject.beaconUrl, configsObject.applicationId));
    }
    DynatraceInitializer.prototype.setUser = function (user) {
        react_native_plugin_1.Dynatrace.identifyUser(user);
    };
    return DynatraceInitializer;
}());
exports.DynatraceInitializer = DynatraceInitializer;
