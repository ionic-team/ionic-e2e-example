import { Ionic$ } from "..";
import { ElementActionOptions } from "../..";
import { IonicComponent } from "./component";

export interface OpenMenuOptions extends ElementActionOptions {
  delayForAnimation?: boolean;
}

export class IonicMenu extends IonicComponent {
  constructor(selector?: string) {
    super(selector || 'ion-menu');
  }

  get menuButton() {
    return Ionic$.$('.ion-page:not(.ion-page-hidden) ion-menu-button');
  }

  async open({ delayForAnimation = true, visibilityTimeout = 5000 }: OpenMenuOptions = {}) {
    await this.menuButton.waitForDisplayed({ timeout: visibilityTimeout });
    await this.menuButton.click();

    // Let the menu animate open/closed
    if (delayForAnimation) {
      await driver.pause(500);
    }
  }
}