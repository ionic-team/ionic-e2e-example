import { IonicComponent } from './component';
import { Ionic$ } from '..';
import { ElementActionOptions } from '../..';

export class IonicInput extends IonicComponent {
  constructor(selector: string) {
    super(selector);
  }

  async setValue(value: string, { visibilityTimeout = 5000 }: ElementActionOptions = {}) {
    const el = await Ionic$.$(this.selector);
    await el.waitForDisplayed({ timeout: visibilityTimeout });

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

  async getValue({ visibilityTimeout = 5000 }: ElementActionOptions = {}) {
    const el = await Ionic$.$(this.selector);
    await el.waitForDisplayed({ timeout: visibilityTimeout });

    const ionTags = ['ion-input', 'ion-textarea']
    if (ionTags.indexOf(await el.getTagName()) >= 0) {
      const input = await el.$('input,textarea');
      return input.getValue();
    } else {
      return el.getValue();
    }
  }

}