import { IonicButton, IonicContent, IonicMenu, IonicSegment } from '../helpers'
import Page from './page';

class Schedule extends Page {
  get menu() { return new IonicMenu(); }
  get filterButton() { return new IonicButton('ion-buttons[slot="end"] > ion-button:nth-child(2)') }
  get segment() { return new IonicSegment('ion-segment'); }
  get content() { return new IonicContent('ion-content'); }

  async openMenu() {
    return this.menu.open();
  }
}

export default new Schedule();
