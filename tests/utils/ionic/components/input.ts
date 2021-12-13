import { IonicComponent } from './component';
import { ElementActionOptions } from "@ionic/e2e";
import { Ionic$ } from '..';

export class IonicInput extends IonicComponent {
  constructor(selector: string) {
    super(selector);
  }

  async setValue(selector: string, value: string, { visibilityTimeout = 5000 }: ElementActionOptions = {}) {
    const el = await Ionic$.$(selector);
    await el.waitForDisplayed({ timeout: visibilityTimeout });
    console.log('Got input element', el);

    const ionTags = ['ion-input', 'ion-textarea']
    if (ionTags.indexOf(await el.getTagName()) >= 0) {
      const input = await el.$('input,textarea');
      await input.setValue('');
      await input.setValue(value);
      // return driver.elementSendKeys(input.elementId, value);
    } else {
      return el.setValue(value);
    }
  }

  async getValue(selector: string, value: string, { visibilityTimeout = 5000 }: ElementActionOptions = {}) {
    const el = await Ionic$.$(selector);
    await el.waitForDisplayed({ timeout: visibilityTimeout });
    console.log('Got input element', el);

    const ionTags = ['ion-input', 'ion-textarea']
    if (ionTags.indexOf(await el.getTagName()) >= 0) {
      const input = await el.$('input,textarea');
      return input.getValue();
    } else {
      return el.getValue();
    }
  }

}