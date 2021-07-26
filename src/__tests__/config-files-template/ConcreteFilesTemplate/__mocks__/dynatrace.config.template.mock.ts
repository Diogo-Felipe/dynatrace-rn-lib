export const dynatraceConfigTemplateMock = `module.exports = {
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
                      applicationId 'my-app-id'
                      beaconUrl 'my-url'
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
      <string>my-app-id</string>
      <key>DTXBeaconURL</key>
      <string>my-url</string>
      \`
  }
}`
