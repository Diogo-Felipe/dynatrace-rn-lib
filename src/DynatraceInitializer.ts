import {
  Dynatrace,
  ManualStartupConfiguration,
} from "@dynatrace/react-native-plugin";
import { ConfigObjectInterface } from "./configObjects/ConfigObjectInterface";

export class DynatraceInitializer {
  constructor(configsObject: ConfigObjectInterface) {
    Dynatrace.start(
      new ManualStartupConfiguration(
        configsObject.beaconUrl,
        configsObject.applicationId
      )
    );
  }

  setUser(user: string): void {
    Dynatrace.identifyUser(user);
  }
}
