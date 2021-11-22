
import { Device, IonicPage, pause, setDevice, url, waitElement, waitForLoad, web } from '@ionic/e2e';

import Schedule from '../pageobjects/schedule.page';

describe.only('schedule', () => {
  before(async () => {
    await waitForLoad();
    await url('/app/tabs/schedule');
  });

  beforeEach(async () => {
    await web();
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
