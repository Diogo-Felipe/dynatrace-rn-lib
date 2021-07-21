"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileHandler_1 = require("../helpers/FileHandler");
var fileHandler = new FileHandler_1.FileHandler();
try {
    fileHandler.modifyPackageJson();
}
catch (error) {
    console.log("Error occurred during package.json modification, please add the dynatraceConfigureDestination script to package.json manually");
}
