import { Ionic$ } from '../helpers';
import Page from './page';

class SpeakerList extends Page {
  get speakers() {
    return Ionic$.$$('ion-col');
  }
}

export default new SpeakerList();
