import { IonicButton, IonicTextarea, IonicToast } from '../helpers';
import Page from './page';

class Support extends Page {
  get messageInput() { return new IonicTextarea('ion-textarea[name="supportQuestion"]'); }
  get submitButton() { return IonicButton.withTitle('Submit'); }
  get toast() { return new IonicToast(); }

  submitMessage() {
    return this.submitButton.tap();
  }
}

export default new Support();
