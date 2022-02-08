import { clearIndexedDB, pause, restartApp, url } from '../helpers';

import Map from '../pageobjects/map.page';

describe('Map', () => {
  beforeEach(async () => {
    await restartApp('/app/tabs/map');
    await clearIndexedDB('_ionicstorage');
    await url('/app/tabs/map');
    await pause(500);
  });

  it('Should load map', async () => {
    await expect(Map.map).toBeDisplayed();
  });
});
