import { Ionic$ } from '../helpers';
import Page from './page';

class SpeakerDetail extends Page {
  get speakerName() {
    return Ionic$.$('h2');
  }
}

export default new SpeakerDetail();
