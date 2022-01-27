import {
  Device,
  pause,
  restartApp,
  setDevice,
  url,
} from '../helpers';

import Map from '../pageobjects/map.page';

describe('Map', () => {
  beforeEach(async () => {
    await restartApp();
    await setDevice(Device.Mobile);
    await url('/app/tabs/map');
    await pause(500);
  });

  it('Should load map', async () => {
    await expect(Map.map).toBeDisplayed();
  });
});
