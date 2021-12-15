import { IonicComponent } from "./component";

export class IonicTextarea extends IonicComponent {
  constructor(selector: string) {
    super(selector);
  }

  setValue(value: string) {
    return browser.execute((selector, value) => {
      const el = document.querySelector(selector);
      console.log('Found element', el, value, selector);
      if (el) {
        (el as any).value = value;
      }
    }, this.selector, value);
  }

  getValue() {
    return browser.execute((selector) => {
      const el = document.querySelector(selector);
      if (el) {
        return (el as any).value;
      }
      return null;
    }, this.selector);
  }
}