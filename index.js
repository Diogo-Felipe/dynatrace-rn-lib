'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNativePlugin = require('@dynatrace/react-native-plugin');

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

const configsObject = require("../../dynatrace-destination.config.js");

class DynatraceInitializer {
  
  constructor() {
    Dynatrace.start(new reactNativePlugin.ManualStartupConfiguration(configsObject.beaconUrl, configsObject.applicationId));
  }

  setUser(user) {
    Dynatrace.identifyUser(user);
  }
}

exports.DynatraceInitializer = DynatraceInitializer;
exports.DynatraceService = DynatraceService;
