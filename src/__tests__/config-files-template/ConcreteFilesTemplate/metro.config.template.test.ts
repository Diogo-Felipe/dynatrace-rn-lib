import { MetroConfigTemplate } from '../../../config-files-template/ConcreteFilesTemplate/metro.config.template';
import { metroConfigTemplateMock } from './__mocks__/metro.config.template.mock';

describe('MetroConfigTemplate', () => {
  it('should instantiate a MetroConfigTemplate when dynatrace config object is given', () => {
    const config = new MetroConfigTemplate();
    expect(config).toBeTruthy();
  });

  it('getText should return a string with the content of the template', () => {
    const config = new MetroConfigTemplate();

    const text = config.getText().replace(/(\r\n|\n|\r|\s)/gm, "");
    
    expect(typeof text).toBe('string');
    expect(text).toMatch(metroConfigTemplateMock.replace(/(\r\n|\n|\r|\s)/gm, ""));
  });
});