import { Device, pause, restartApp, setDevice } from '../helpers';

import Map from '../pageobjects/map.page';

describe('Map', () => {
  beforeEach(async () => {
    await restartApp('/app/tabs/map');
    await setDevice(Device.Mobile);
    await pause(500);
  });

  it('Should load map', async () => {
    await expect(Map.map).toBeDisplayed();
  });
});
