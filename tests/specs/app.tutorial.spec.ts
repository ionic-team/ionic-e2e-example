import { clearIndexedDB, pause, getUrl, url, setDevice, switchToWeb, Device, waitForLoad } from '../utils';

import Tutorial from '../pageobjects/tutorial.page';

describe('tutorial', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await switchToWeb();
    await url('/tutorial');
    await setDevice(Device.Mobile);
    await clearIndexedDB('_ionicstorage');
  });

  it('Should load swiper', async () => {
    console.log('SWIPER DISPLAY TEST');
    await expect(await Tutorial.swiper.$).toBeDisplayed();
  });

  it('Should get to schedule', async () => {
    console.log('SWIPER SCHEDULE TEST');
    await Tutorial.swiper.swipeLeft();
    await Tutorial.swiper.swipeLeft();
    await Tutorial.swiper.swipeLeft();

    await Tutorial.continue();

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });

  it('Should skip to schedule', async () => {
    console.log('SWIPER SKIP TEST');
    await Tutorial.skip();

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });
});