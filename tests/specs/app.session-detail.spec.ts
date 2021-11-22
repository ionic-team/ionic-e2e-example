import * as IonicE2E from '@ionic/e2e';
import { Device, pause, setDevice, url, waitForLoad, web } from '@ionic/e2e';

import Schedule from '../pageobjects/schedule.page';
import SessionDetail from '../pageobjects/session-detail.page';

describe('session detail', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await url('/app/tabs/schedule/session/1');
    await web();
    await setDevice(Device.Mobile);
    await pause(500);
  });

  it('Should load first session', async () => {
    const title = await SessionDetail.sessionTitle;
    await expect(await title.getText()).toBe('Breakfast');
  });

  it('Should favorite session', async () => {
    const button = await SessionDetail.favoriteButton;
    await button.tap();
    const backButton = await SessionDetail.backButton;
    await backButton.tap();

    const favoritesButton = await Schedule.segment.button('Favorites');
    await (await favoritesButton.$).waitForDisplayed();
    await favoritesButton.tap();
    const item = await (await Schedule.content.$).$('ion-item');
    const h3 = await item.$('h3');
    await expect(h3).toHaveText('Breakfast');
  });
});
