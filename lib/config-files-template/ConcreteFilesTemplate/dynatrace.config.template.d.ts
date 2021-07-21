import { TemplateInterface } from '../TemplateInterface';
import { ConfigObjectInterface } from '../../configObjects/ConfigObjectInterface';
export declare class DynatraceConfigTemplate implements TemplateInterface {
    configsObject: ConfigObjectInterface;
    constructor(configsObject: ConfigObjectInterface);
    getText(): string;
}
