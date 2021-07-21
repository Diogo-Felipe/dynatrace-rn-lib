export declare class DynatraceService {
    componentName: string;
    constructor(componentName: string);
    sendRenderComponent(): void;
    sendClickEvent(buttonName: string): void;
    sendApiFetch(apiName: string): void;
}
