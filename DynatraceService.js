import { Dynatrace } from '@dynatrace/react-native-plugin';

export class DynatraceService {

  constructor(componentName) {
    this.componentName = componentName;
  }

  sendRenderComponent() {
    let dynatraceAction = Dynatrace.enterAction(`Render component ${this.componentName}`);
    dynatraceAction.leaveAction();
  }

  sendClickEvent(buttonName) {
    let dynatraceAction = Dynatrace.enterAction(`Click on ${buttonName} from ${this.componentName}`);
    dynatraceAction.leaveAction();
  }

  sendApiFetch(apiName) {
    let dynatraceAction = Dynatrace.enterAction(`API ${apiName} from ${this.componentName} fetched` );
    dynatraceAction.leaveAction();
  }
}
