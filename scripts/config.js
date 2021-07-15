const FileHandler = require("../helpers/FileHandler");
const configsObject = require("../../../dynatrace-destination.config");
const generateDynatraceConfigFileBuffer = require ("../config-files-template/dynatrace.config.template");
const generateMetroConfigFileBuffer = require ("../config-files-template/metro.config.template");

const fileHandler = new FileHandler(configsObject);

fileHandler.writeFile('../../../dynatrace.config.js', generateDynatraceConfigFileBuffer(configsObject));
fileHandler.writeFile('../../../metro.config.js', generateMetroConfigFileBuffer());
