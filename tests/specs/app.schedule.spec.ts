import { Device, pause, setDevice, url, waitForElement, waitForLoad, switchToWeb } from '../utils';

import Schedule from '../pageobjects/schedule.page';

describe('schedule', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await switchToWeb();
    await url('/app/tabs/schedule');
    await setDevice(Device.Mobile);
    await pause(500);
  });

  it('Should switch to favorites', async () => {
    const favoritesButton = await Schedule.segment.button('Favorites');
    await (await favoritesButton.$).waitForDisplayed();
    await favoritesButton.tap();
    const listHeader = await (await Schedule.content.$).$('ion-list-header');
    await listHeader.waitForDisplayed();
    await expect(listHeader).toHaveText('No Sessions Found');
  });
});
