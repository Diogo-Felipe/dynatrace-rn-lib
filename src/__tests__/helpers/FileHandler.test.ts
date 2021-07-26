import { FileHandler } from '../../helpers/FileHandler';
import { MetroConfigTemplate } from '../../config-files-template/ConcreteFilesTemplate/metro.config.template';
import { metroConfigTemplateMock } from '../config-files-template/ConcreteFilesTemplate/__mocks__/metro.config.template.mock';

describe('FileHandler', () => {
  it('should be able to read a file', async () => {
    const fileHandler = new FileHandler();
    const filePath = '../__tests__/helpers/__mocks__/test.txt';

    const fileContent = await fileHandler.readFile(filePath);

    expect(fileContent).toEqual('this is a normal test file');
  });

  it('should be able to write a file from a template', async () => {
    const fileHandler = new FileHandler();

    const filePath = '../__tests__/helpers/__mocks__/witeTest.txt';
    await fileHandler.writeFile(filePath, new MetroConfigTemplate());

    const fileContent = await fileHandler.readFile(filePath);
    const parsedFileContent = fileContent.replace(/(\r\n|\n|\r|\s)/gm, "");

    expect(parsedFileContent).toEqual(metroConfigTemplateMock.replace(/(\r\n|\n|\r|\s)/gm, ""));
  });

  it('should modify the package json', async () => {
    const configValue = "node node_modules/dynatrace-rn-lib/lib/scripts/config.js && node node_modules/@dynatrace/react-native-plugin/scripts/instrument.js";

    const fileHandler = new FileHandler();

    const filePath = '../__tests__/helpers/__mocks__/package.mock.json';
    fileHandler.modifyPackageJson(filePath);

    const fileContent = await fileHandler.readFile(filePath);
    const packageJsonParsed = JSON.parse(fileContent);

    expect(packageJsonParsed.scripts.dynatraceConfigureDestination).toEqual(configValue);

  });
});