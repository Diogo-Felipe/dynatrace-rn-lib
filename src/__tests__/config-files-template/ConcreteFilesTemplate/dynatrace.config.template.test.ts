import { DynatraceConfigTemplate } from '../../../config-files-template/ConcreteFilesTemplate/dynatrace.config.template';
import { DynatraceConfig } from '../../__mocks__/configsObject.mock';
import { dynatraceConfigTemplateMock } from './__mocks__/dynatrace.config.template.mock';

describe('DynatraceConfigTemplate', () => {
  it('should instantiate a DynatraceConfigTemplate when dynatrace config object is given', () => {
    const config = new DynatraceConfigTemplate(DynatraceConfig);
    expect(config).toBeTruthy();
  });

  it('getText should return a string with the content of the template', () => {
    const config = new DynatraceConfigTemplate(DynatraceConfig);

    const text = config.getText().replace(/(\r\n|\n|\r|\s)/gm, "");

    expect(typeof text).toBe('string');
    expect(text).toMatch(dynatraceConfigTemplateMock.replace(/(\r\n|\n|\r|\s)/gm, ""));
  });
});