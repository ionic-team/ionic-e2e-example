import { IonicComponent } from "./component";

import { TapButtonOptions } from './button';
import { Ionic$ } from "..";
import { IonicButton } from ".";

export class IonicAlert extends IonicComponent {
  constructor(selector?: string | WebdriverIO.Element) {
    super(selector ?? 'ion-alert');
  }

  async button(buttonTitle: string) {
    return $(this.selector).$(`button=${buttonTitle}`);
  }
}