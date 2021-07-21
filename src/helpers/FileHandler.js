const fs = require("fs");
const path = require("path");

class FileHandler {
  readFile(filePath) {
    const resolvedFilePath = path.resolve(__dirname, filePath);

    return new Promise((resolve, reject) => {
      fs.readFile(resolvedFilePath, "utf8", (err, data) => {
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

  writeFile(filePath, fileTemplateBuffer) {
    const resolvedFilePath = path.resolve(__dirname, filePath);

    if (fs.existsSync(filePath)) {
      console.log(`File ${path} already exists`);
      return false;
    }

    fs.writeFile(resolvedFilePath, fileTemplateBuffer, (err) => {
      if (err) {
        console.log(`Error writing file ${path}`);
        return false;
      }
      console.log(`File ${resolvedFilePath} written`);
      return true;
    });
  }

  writeTextToFile(filePath, text) {
    const resolvedFilePath = path.resolve(__dirname, filePath);

    return new Promise(function (resolve, reject) {
      fs.writeFile(resolvedFilePath, text, (err) => {
        if (err) {
          reject(err + " Could not write to file: " + path.resolve(filePath));
        }
        resolve(filePath);
      });
    });
  }
}

module.exports = FileHandler;
