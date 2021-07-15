const fs = require("fs");
const path = require("path");

class FileHandler {

  constructor(configsObject){

    if(configsObject.applicationId && configsObject.beaconUrl){
      this.configsObject = configsObject;
    }else{
      throw new Error("Please provide the applicationId and beaconUrl");
    }

  }

  writeFile(filePath, fileTemplateBuffer){

    const resolvedFilePath = path.resolve(__dirname, filePath);

    if(fs.existsSync(filePath)){
      console.log(`File ${path} already exists`);
      return false;
    }

    fs.writeFile(resolvedFilePath, fileTemplateBuffer);
  }



}

module.exports = FileHandler;
