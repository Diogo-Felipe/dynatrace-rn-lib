import {
  Dynatrace,
  ManualStartupConfiguration,
} from "@dynatrace/react-native-plugin";

export class DynatraceInitializer {
  constructor(configsObject) {
    Dynatrace.start(
      new ManualStartupConfiguration(
        configsObject.beaconUrl,
        configsObject.applicationId
      )
    );
  }

  setUser(user) {
    Dynatrace.identifyUser(user);
  }
}
