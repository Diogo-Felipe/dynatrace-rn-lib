import { TemplateInterface } from "../TemplateInterface";
import { ConfigObjectInterface } from "../../configObjects/ConfigObjectInterface";

export class DynatraceConfigTemplate implements TemplateInterface {
  configsObject: ConfigObjectInterface;

  constructor(configsObject: ConfigObjectInterface) {
    if (!configsObject) {
      throw new Error("configsObject is required");
    }
    this.configsObject = configsObject;
  }

  public getText(): string {
    return `module.exports = {
            react : {
                debug : true,
                
                lifecycle : {
                    /**
                     * Decide if you want to see Update Cycles as well
                     */
                    includeUpdate: false,
        
                    /**
                     * Filter for Instrumenting Lifecycle of Components / True = Will be instrumented
                     */
                    instrument: (filename) => {
                        return false;
                    }
                },
        
                input : {
                    /**
                     * Allows you to filter the instrumentation for touch events, refresh events and picker events in certain files
                     * True = Will be instrumented
                     */
                    instrument: (filename) => {
                        return false;
                    }
                }
            },
            android : {
                // Those configs are copied 1:1
                config : \`
                dynatrace {
                    configurations {
                        defaultConfig {
                            autoStart {
                                applicationId '${this.configsObject.applicationId}'
                                beaconUrl '${this.configsObject.beaconUrl}'
                            }
                        }
                    }
                }
                \`
            },
            ios : {
                // Those configs are copied 1:1
                config : \`
                <key>DTXApplicationID</key>
                <string>${this.configsObject.applicationId}</string>
                <key>DTXBeaconURL</key>
                <string>${this.configsObject.beaconUrl}</string>
                \`
            }
        }`;
  }
}
