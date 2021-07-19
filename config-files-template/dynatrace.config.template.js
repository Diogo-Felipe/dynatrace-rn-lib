module.exports = function generateDynatraceConfigFileBuffer(configsObject) {

    if(!configsObject) {
        throw new Error('configsObject is required');
    }

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
                            applicationId '${configsObject.applicationId}'
                            beaconUrl '${configsObject.beaconUrl}'
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
            <string>${configsObject.applicationId}</string>
            <key>DTXBeaconURL</key>
            <string>${configsObject.beaconUrl}</string>
            \`
        }
    }`;

}
