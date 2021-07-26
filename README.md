# fv-dynatrace-lib

Natura lib to instrument RN applications with Dynatrace.

---

## Getting Started [WIP**]

**WIP**: This lib is still under development and yet is not at npm. So you will need to point the repo URL at you package.json.

### Installing

While this lib is still under development, you can install it locally by cloning this repo and running `npm install`.

```
npm install fv-dynatrace-lib
```

Installing the lib will generate a script into your package.json.

```json
"dynatraceConfigureDestination": "node node_modules/dynatrace-rn-lib/lib/scripts/config.js && node node_modules/@dynatrace/react-native-plugin/scripts/instrument.js"
```

This script will configure the lib and instrument your app, but just after you have following the next steps.

---

### Configure

All you will need ro configure the lib is a `dynatrace-destination.config.js` file in your project root.

This file will be used to configure the lib and must be as follows:

```js
module.exports = {
  applicationId: 'myApplicationId',
  beaconUrl: 'myBeaconUrl',
};
```

The `applicationId` and `myBeaconUrl` values can be found in the Dynatrace App Center.

After this, run:

```
yarn dynatraceConfigureDestination
```

---
### Usage

This lib is all about classes and methods, so, there two principal modules that must be instantiated in your project: `DynatraceInitializer` and `DynatraceService`.

First of all, you will need to use the DynatraceInitializer to create start the communication with the Dynatrace API and identify you user.

To instantiate the DynatraceInitializer, you will need to pass the configuration object as a parameter for its constructor.

```js
import { DynatraceInitializer } from 'dynatrace-rn-lib';
import dynatraceConfig from '../dynatrace-destination.config';

const dynatraceInitializer = new DynatraceInitializer(dynatraceConfig)
dynatraceInitializer.setUser("myUserID")
```

With the user identified, you can start the DynatraceService in your components and send events to the Dynatrace API.

```js
import { DynatraceService } from 'dynatrace-rn-lib';

...
  constructor(props: Props) {
    ...

    this.dynatraceService = new DynatraceService('My component name');
  }

  componentDidMount() {
    this.dynatraceService.sendRenderComponent();
  }

  handleClick(event: any) {
    this.dynatraceService.sendClickEvent("click at button");
  }

  fetchAPI() {
    this.dynatraceService.sendApiFetch('my api name');
  }

```

---
## contributing
### Installing
Clone the repository in a directory of your preference.

Install node dependencies needed to the project execute:
```
yarn install
```
---

### Developing

It is important to follow some good practices when developing:

- All the work is done in the `src` directory via typescript files.
- All testing files must be placed in the `__test__` directory.
- All testing files must follow the same directory structure as the source files.
- If necessary to connect component, try always depending on typescript interfaces over concrete objects.
- Try to avoid using `any` type.

---
### Building

Before building, make sure to run the following commands:

```
yarn format
yarn lint
```

If, for some reason, the code did not pass the linting, correct the code and follow:

```
yarn build
```
