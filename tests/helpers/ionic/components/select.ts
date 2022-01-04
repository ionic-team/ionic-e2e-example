import { pause, waitForElement } from '../..';
import { Ionic$ } from "..";
import { IonicComponent } from "./component";

export class IonicSelect extends IonicComponent {
  constructor(selector: string) {
    super(selector);
  }

  async open() {
    (await this.$).click();
    // Wait for the alert to popup
    await pause(1000);
  }

  async select(n: number) {
    const options = await $$('.select-interface-option');

    return options[n]?.click();
  }

  async cancel() {
    const cancel = await waitForElement('.alert-button-role-cancel');
    cancel.click();
    // Allow alert to close
    await pause(500);
  }

  async ok() {
    const ok = await waitForElement('.alert-button:not(.alert-button-role-cancel)');
    ok.click();
    // Allow alert to close
    await pause(500);
  }
}