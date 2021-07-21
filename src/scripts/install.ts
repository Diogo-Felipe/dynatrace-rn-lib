import { FileHandler } from "../helpers/FileHandler";

const fileHandler = new FileHandler();

try {
  fileHandler.modifyPackageJson();
} catch (error) {
  console.log(
    "Error occurred during package.json modification, please add the dynatraceConfigureDestination script to package.json manually"
  );
}
