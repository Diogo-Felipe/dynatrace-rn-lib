#!/usr/bin/env node
"use strict";
const FileHandler = require("../helpers/FileHandler");

const fileHandler = new FileHandler();

try {
  modifyPackageJson();
} catch (error) {
  console.log(
    "Error occurred during package.json modification, please add the dynatraceConfigureDestination script to package.json manually"
  );
}

async function modifyPackageJson() {
  const packageJsonPath = "../../../package.json";
  let packageJson = await fileHandler.readFile(packageJsonPath);
  let packageJsonParsed = JSON.parse(packageJson);
  let configValue =
    "node node_modules/dynatrace-rn-lib/lib/scripts/config.js && node node_modules/@dynatrace/react-native-plugin/lib/scripts/instrument.js";

  if (packageJsonParsed.scripts == undefined) {
    packageJsonParsed.scripts = {};
  }

  if (packageJsonParsed.scripts.dynatraceConfigureDestination === configValue) {
    return;
  } else {
    packageJsonParsed.scripts.dynatraceConfigureDestination = configValue;
    fileHandler.writeTextToFile(
      packageJsonPath,
      JSON.stringify(packageJsonParsed, null, "\t")
    );
  }
}
