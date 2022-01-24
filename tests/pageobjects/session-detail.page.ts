import { Ionic$, IonicButton } from '../helpers';
import Page from './page';

class SessionDetail extends Page {
  get sessionTitle() {
    return Ionic$.$('h1');
  }
  get backButton() {
    return new IonicButton('ion-back-button');
  }
  get favoriteButton() {
    return new IonicButton('ion-buttons > ion-button:nth-child(1)');
  }
  get shareButton() {
    return new IonicButton('ion-buttons > ion-button:nth-child(2)');
  }
}

export default new SessionDetail();
