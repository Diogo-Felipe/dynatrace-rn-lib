const fs = require("fs");
const path = require("path");

import { TemplateInterface } from "../config-files-template/TemplateInterface";

export class FileHandler {
  public readFile(filePath: string): Promise<string> {
    const resolvedFilePath = path.resolve(__dirname, filePath);

    return new Promise((resolve, reject) => {
      fs.readFile(resolvedFilePath, "utf8", (err: string, data: string) => {
        if (err) {
          reject(
            err + "Could not read the file: " + path.resolve(resolvedFilePath)
          );
        } else {
          console.log(data);
          resolve(data);
        }
      });
    });
  }

  public writeFile(filePath: string, fileTemplateBuffer: TemplateInterface) {
    const resolvedFilePath = path.resolve(__dirname, filePath);

    if (fs.existsSync(filePath)) {
      console.log(`File ${path} already exists`);
      return false;
    }

    fs.writeFile(resolvedFilePath, fileTemplateBuffer.getText(), (err: any) => {
      if (err) {
        console.log(`Error writing file ${path}`);
        return false;
      }
      console.log(`File ${resolvedFilePath} written`);
      return true;
    });
  }

  public writeTextToFile(filePath: string, text: string): void {
    const resolvedFilePath = path.resolve(__dirname, filePath);

    fs.writeFile(resolvedFilePath, text, (err: any) => {
      if (err) {
        console.log(`Error writing file ${path}`);
      }
      console.log(`File ${resolvedFilePath} written`);
    });
  }

  async modifyPackageJson() {
    const packageJsonPath = "../../../package.json";
    const packageJson = await this.readFile(packageJsonPath);
    const packageJsonParsed = JSON.parse(packageJson);
    const configValue =
      "node node_modules/dynatrace-rn-lib/lib/scripts/config.js && node node_modules/@dynatrace/react-native-plugin/lib/scripts/instrument.js";

    if (packageJsonParsed.scripts === undefined) {
      packageJsonParsed.scripts = {};
    }

    if (
      packageJsonParsed.scripts.dynatraceConfigureDestination === configValue
    ) {
      return;
    } else {
      packageJsonParsed.scripts.dynatraceConfigureDestination = configValue;
      this.writeTextToFile(
        packageJsonPath,
        JSON.stringify(packageJsonParsed, null, "\t")
      );
    }
  }
}
