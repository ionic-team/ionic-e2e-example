import { IonicContent, IonicMenu, IonicSegment } from '../helpers'
import Page from './page';

class Schedule extends Page {
  get menu() { return new IonicMenu(); }
  get segment() { return new IonicSegment('ion-segment'); }
  get content() { return new IonicContent('ion-content'); }

  async openMenu() {
    return this.menu.open();
  }
}

export default new Schedule();
