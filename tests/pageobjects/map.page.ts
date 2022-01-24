import { Ionic$ } from '../helpers';
import Page from './page';

class Map extends Page {
  get map() {
    return Ionic$.$('.map-canvas');
  }
}

export default new Map();
