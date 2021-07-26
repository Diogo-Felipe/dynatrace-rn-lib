import * as path from 'path';
import { readFile as _readFile, existsSync as _existsSync, writeFile as _writeFile } from 'fs';

import { TemplateInterface } from "../config-files-template/TemplateInterface";

export class FileHandler {
  public readFile(filePath: string): Promise<string> {
    const resolvedFilePath = path.resolve(__dirname, filePath);

    return new Promise((resolve, reject) => {
      _readFile(resolvedFilePath, {encoding: "utf8"}, (err, data) => {
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

    if (_existsSync(filePath)) {
      console.log(`File ${filePath} already exists`);
      return false;
    }

    _writeFile(resolvedFilePath, fileTemplateBuffer.getText(), (err: any) => {
      if (err) {
        console.log(`Error writing file ${filePath}`);
        return false;
      }
      console.log(`File ${resolvedFilePath} written`);
      return true;
    });
  }

  public writeTextToFile(filePath: string, text: string): void {
    const resolvedFilePath = path.resolve(__dirname, filePath);

    _writeFile(resolvedFilePath, text, (err: any) => {
      if (err) {
        console.log(`Error writing file ${filePath}`);
      }
      console.log(`File ${resolvedFilePath} written`);
    });
  }

  async modifyPackageJson(packageJsonPath: string) {
    const packageJson = await this.readFile(packageJsonPath);
    const packageJsonParsed = JSON.parse(packageJson);
    const configValue =
      "node node_modules/dynatrace-rn-lib/lib/scripts/config.js && node node_modules/@dynatrace/react-native-plugin/scripts/instrument.js";

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
