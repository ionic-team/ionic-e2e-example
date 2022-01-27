import { Device, pause, restartApp, setDevice } from '../helpers';

import Schedule from '../pageobjects/schedule.page';

describe('Schedule', () => {
  beforeEach(async () => {
    await restartApp('/app/tabs/schedule');
    await setDevice(Device.Mobile);
    await pause(500);
  });

  it('Should switch to favorites', async () => {
    const favoritesButton = await Schedule.segment.button('Favorites');
    if (favoritesButton) {
      await (await favoritesButton.$).waitForDisplayed();
      await favoritesButton.tap();
    } else {
      throw new Error('Favorites button not found');
    }
    const listHeader = await (await Schedule.content.$).$('ion-list-header');
    await listHeader.waitForDisplayed();
    await expect(listHeader).toHaveText('No Sessions Found');
  });
});
