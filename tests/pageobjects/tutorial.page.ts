import { waitElement } from '@ionic/e2e';
import Page from './page';

class Tutorial extends Page {
  get swiper() { return waitElement('swiper'); }
}

export default new Tutorial();
