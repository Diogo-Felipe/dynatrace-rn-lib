"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetroConfigTemplate = void 0;
var MetroConfigTemplate = /** @class */ (function () {
    function MetroConfigTemplate() {
    }
    MetroConfigTemplate.prototype.getText = function () {
        return "/**\n    * Metro configuration for React Native\n    * https://github.com/facebook/react-native\n    *\n    * @format\n    */\n    \n    module.exports = {\n      transformer: {\n        babelTransformerPath: require.resolve('@dynatrace/react-native-plugin/lib/dynatrace-transformer'),\n        getTransformOptions: async () => ({\n          transform: {\n            experimentalImportSupport: false,\n            inlineRequires: false,\n          },\n        }),\n      },\n      reporter: require('@dynatrace/react-native-plugin/lib/dynatrace-reporter'),\n    };";
    };
    return MetroConfigTemplate;
}());
exports.MetroConfigTemplate = MetroConfigTemplate;
