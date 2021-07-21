import { TemplateInterface } from '../config-files-template/TemplateInterface';
export declare class FileHandler {
    readFile(filePath: string): Promise<string>;
    writeFile(filePath: string, fileTemplateBuffer: TemplateInterface): false | undefined;
    writeTextToFile(filePath: string, text: string): Promise<unknown>;
    modifyPackageJson(): Promise<void>;
}
