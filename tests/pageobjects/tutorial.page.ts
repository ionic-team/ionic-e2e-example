import { IonicButton, IonicSwiper } from '@ionic/e2e';
import Page from './page';

class Tutorial extends Page {
  get swiper() { return new IonicSwiper('swiper'); }
  get skipButton() { return IonicButton.withTitle('Skip'); }
  get continueButton() { return IonicButton.withTitle('Continue'); }

  async swipeLeft() {
    return this.swiper.swipeLeft();
  }

  async swipeRight() {
    return this.swiper.swipeRight();
  }

  async skip() {
    return this.skipButton.tap();
  }

  async continue() {
    await this.continueButton.tap();
  }
}

export default new Tutorial();
