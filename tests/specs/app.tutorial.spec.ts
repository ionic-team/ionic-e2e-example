
import * as IonicE2E from '@ionic/e2e';
import { clearIndexedDB, pause, tapButton, swipeLeft, getUrl, url, setDevice, web } from '@ionic/e2e';

import Tutorial from '../pageobjects/tutorial.page';

describe('tutorial', () => {
  before(async () => {
    await IonicE2E.waitForLoad();
  });

  beforeEach(async () => {
    await web();
    await url('/');
    await setDevice(IonicE2E.Device.Mobile);
    await clearIndexedDB('_ionicstorage');
  });

  it('Should load swiper', async () => {
    await expect(Tutorial.swiper).toBeDisplayed();
  });

  it('Should get to schedule', async () => {
    await swipeLeft();
    await swipeLeft();
    await swipeLeft();

    await tapButton('Continue');

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });

  it('Should skip to schedule', async () => {
    await tapButton('Skip');

    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });
});