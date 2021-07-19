#!/usr/bin/env node
"use strict";
const FileHandler = require("../helpers/FileHandler");

const fileHandler = new FileHandler();

modifyPackageJson();

function modifyPackageJson() {
  const packageJsonPath = "../../../package.json"
  let packageJson = fileHandler.readFile(packageJsonPath);
  console.log(packageJson);
  let packageJsonParsed = JSON.parse(packageJson);
  let configValue = "node node_modules/dynatrace-rn-lib/scripts/config.js && node node_modules/@dynatrace/react-native-plugin/scripts/instrument.js";

  if (packageJsonParsed.scripts == undefined) {
    packageJsonParsed.scripts = {};
  }

  if (packageJsonParsed.scripts.dynatraceConfigureDestination === configValue) {
    return;
  } else {
    packageJsonParsed.scripts.dynatraceConfigureDestination = configValue;
    writeTextToFile(packageJsonPath, JSON.stringify(packageJsonParsed, null, "\t"));
  }

}