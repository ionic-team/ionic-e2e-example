import { IonicButton, IonicSlides } from '../helpers';
import Page from './page';

class Tutorial extends Page {
  get slides() {
    return new IonicSlides('swiper');
  }
  get skipButton() {
    return IonicButton.withTitle('Skip');
  }
  get continueButton() {
    return IonicButton.withTitle('Continue');
  }

  async swipeLeft() {
    return this.slides.swipeLeft();
  }

  async swipeRight() {
    return this.slides.swipeRight();
  }

  async skip() {
    return this.skipButton.tap();
  }

  async continue() {
    return this.continueButton.tap();
  }
}

export default new Tutorial();
