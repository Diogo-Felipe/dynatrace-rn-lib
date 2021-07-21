import { FileHandler } from "../helpers/FileHandler";
import { ConfigObjectInterface } from "../configObjects/ConfigObjectInterface";
import { DynatraceConfigTemplate } from "../config-files-template/ConcreteFilesTemplate/dynatrace.config.template";
import { MetroConfigTemplate } from "../config-files-template/ConcreteFilesTemplate/metro.config.template";

const configsObject: ConfigObjectInterface = require("../../../../dynatrace-destination.config");

const fileHandler = new FileHandler();

const dynatraceConfigTemplate = new DynatraceConfigTemplate(configsObject);
const metroConfigTemplate = new MetroConfigTemplate();

fileHandler.writeFile(
  "../../../../dynatrace.config.js",
  dynatraceConfigTemplate
);

fileHandler.writeFile("../../../../metro.config.js", metroConfigTemplate);
