import { ManualStartupConfiguration } from '@dynatrace/react-native-plugin';
const configsObject = require("../../dynatrace-destination.config.js");

export class DynatraceInitializer {
  
  constructor() {
    Dynatrace.start(new ManualStartupConfiguration(configsObject.beaconUrl, configsObject.applicationId));
  }

  setUser(user) {
    Dynatrace.identifyUser(user);
  }
}
