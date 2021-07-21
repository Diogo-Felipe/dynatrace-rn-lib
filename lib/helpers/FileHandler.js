"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHandler = void 0;
var fs = require("fs");
var path = require("path");
var FileHandler = /** @class */ (function () {
    function FileHandler() {
    }
    FileHandler.prototype.readFile = function (filePath) {
        var resolvedFilePath = path.resolve(__dirname, filePath);
        return new Promise(function (resolve, reject) {
            fs.readFile(resolvedFilePath, "utf8", function (err, data) {
                if (err) {
                    reject(err + "Could not read the file: " + path.resolve(resolvedFilePath));
                }
                else {
                    console.log(data);
                    resolve(data);
                }
            });
        });
    };
    FileHandler.prototype.writeFile = function (filePath, fileTemplateBuffer) {
        var resolvedFilePath = path.resolve(__dirname, filePath);
        if (fs.existsSync(filePath)) {
            console.log("File " + path + " already exists");
            return false;
        }
        fs.writeFile(resolvedFilePath, fileTemplateBuffer.getText(), function (err) {
            if (err) {
                console.log("Error writing file " + path);
                return false;
            }
            console.log("File " + resolvedFilePath + " written");
            return true;
        });
    };
    FileHandler.prototype.writeTextToFile = function (filePath, text) {
        var resolvedFilePath = path.resolve(__dirname, filePath);
        fs.writeFile(resolvedFilePath, text, function (err) {
            if (err) {
                console.log("Error writing file " + path);
            }
            console.log("File " + resolvedFilePath + " written");
        });
    };
    FileHandler.prototype.modifyPackageJson = function () {
        return __awaiter(this, void 0, void 0, function () {
            var packageJsonPath, packageJson, packageJsonParsed, configValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        packageJsonPath = "../../../package.json";
                        return [4 /*yield*/, this.readFile(packageJsonPath)];
                    case 1:
                        packageJson = _a.sent();
                        packageJsonParsed = JSON.parse(packageJson);
                        configValue = "node node_modules/dynatrace-rn-lib/lib/scripts/config.js && node node_modules/@dynatrace/react-native-plugin/lib/scripts/instrument.js";
                        if (packageJsonParsed.scripts === undefined) {
                            packageJsonParsed.scripts = {};
                        }
                        if (packageJsonParsed.scripts.dynatraceConfigureDestination === configValue) {
                            return [2 /*return*/];
                        }
                        else {
                            packageJsonParsed.scripts.dynatraceConfigureDestination = configValue;
                            this.writeTextToFile(packageJsonPath, JSON.stringify(packageJsonParsed, null, "\t"));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return FileHandler;
}());
exports.FileHandler = FileHandler;
