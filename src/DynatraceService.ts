import { Dynatrace } from "@dynatrace/react-native-plugin";

export class DynatraceService {
  componentName: string;

  constructor(componentName: string) {
    this.componentName = componentName;
  }

  sendRenderComponent(): void {
    const dynatraceAction = Dynatrace.enterAction(
      `Render component ${this.componentName}`
    );
    dynatraceAction.leaveAction();
  }

  sendClickEvent(buttonName: string): void {
    const dynatraceAction = Dynatrace.enterAction(
      `Click on ${buttonName} from ${this.componentName}`
    );
    dynatraceAction.leaveAction();
  }

  sendApiFetch(apiName: string): void {
    const dynatraceAction = Dynatrace.enterAction(
      `API ${apiName} from ${this.componentName} fetched`
    );
    dynatraceAction.leaveAction();
  }
}
