'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNativePlugin = require('@dynatrace/react-native-plugin');

require("../../../dynatrace-destination.config.js");

class DynatraceService {

  constructor(componentName) {
    this.componentName = componentName;
  }

  sendRenderComponent() {
    let dynatraceAction = reactNativePlugin.Dynatrace.enterAction(`Render component ${this.componentName}`);
    dynatraceAction.leaveAction();
  }

  sendClickEvent(buttonName) {
    let dynatraceAction = reactNativePlugin.Dynatrace.enterAction(`Click on ${buttonName} from ${this.componentName}`);
    dynatraceAction.leaveAction();
  }

  sendApiFetch(apiName) {
    let dynatraceAction = reactNativePlugin.Dynatrace.enterAction(`API ${apiName} from ${this.componentName} fetched`);
    dynatraceAction.leaveAction();
  }
}

exports.DynatraceService = DynatraceService;
