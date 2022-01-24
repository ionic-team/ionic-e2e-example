import { IonicButton, IonicSlides } from "../helpers";
import Page from "./page";

class Tutorial extends Page {
  get slides() {
    return new IonicSlides("swiper");
  }
  get skipButton() {
    return IonicButton.withTitle("Skip");
  }
  get continueButton() {
    return IonicButton.withTitle("Continue");
  }

  async swipeLeft() {
    await this.slides.swipeLeft();
  }

  async swipeRight() {
    await this.slides.swipeRight();
  }

  async skip() {
    await this.skipButton.tap();
  }

  async continue() {
    await this.continueButton.tap();
  }
}

export default new Tutorial();
