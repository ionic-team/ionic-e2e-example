import { Device, pause, setDevice, switchToWeb, url, waitForLoad } from '../helpers';

import Map from '../pageobjects/map.page';

describe('map', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
    await url('/app/tabs/map');
    await pause(500);
  });

  it('Should load map', async () => {
    await expect(Map.map).toBeDisplayed();
  });
});
