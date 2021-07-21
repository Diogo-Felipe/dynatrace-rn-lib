"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynatraceConfigTemplate = void 0;
var DynatraceConfigTemplate = /** @class */ (function () {
    function DynatraceConfigTemplate(configsObject) {
        if (!configsObject) {
            throw new Error('configsObject is required');
        }
        this.configsObject = configsObject;
    }
    DynatraceConfigTemplate.prototype.getText = function () {
        return "module.exports = {\n            react : {\n                debug : true,\n                \n                lifecycle : {\n                    /**\n                     * Decide if you want to see Update Cycles as well\n                     */\n                    includeUpdate: false,\n        \n                    /**\n                     * Filter for Instrumenting Lifecycle of Components / True = Will be instrumented\n                     */\n                    instrument: (filename) => {\n                        return false;\n                    }\n                },\n        \n                input : {\n                    /**\n                     * Allows you to filter the instrumentation for touch events, refresh events and picker events in certain files\n                     * True = Will be instrumented\n                     */\n                    instrument: (filename) => {\n                        return false;\n                    }\n                }\n            },\n            android : {\n                // Those configs are copied 1:1\n                config : `\n                dynatrace {\n                    configurations {\n                        defaultConfig {\n                            autoStart {\n                                applicationId '" + this.configsObject.applicationId + "'\n                                beaconUrl '" + this.configsObject.beaconUrl + "'\n                            }\n                        }\n                    }\n                }\n                `\n            },\n            ios : {\n                // Those configs are copied 1:1\n                config : `\n                <key>DTXApplicationID</key>\n                <string>" + this.configsObject.applicationId + "</string>\n                <key>DTXBeaconURL</key>\n                <string>" + this.configsObject.beaconUrl + "</string>\n                `\n            }\n        }";
    };
    return DynatraceConfigTemplate;
}());
exports.DynatraceConfigTemplate = DynatraceConfigTemplate;
