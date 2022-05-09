import { clearIndexedDB, pause, restartApp, url } from '../helpers';

import About from '../pageobjects/about.page';

describe('About', () => {
  beforeEach(async () => {
    await restartApp('/app/tabs/about');
    // await clearIndexedDB('_ionicstorage');
    await url('/app/tabs/about');
    await pause(500);
  });

  it('Should switch location', async () => {
    const location = await About.locationSelect;

    await location.open();
    await location.select(1);
    await location.ok();
    const austinImage = await About.austinImage;
    await pause(500);
    await expect((await austinImage.getCSSProperty('opacity')).value).toEqual(
      1
    );

    await location.open();
    await location.select(2);
    await location.ok();
    const chicagoImage = await About.chicagoImage;
    await pause(500);
    await expect((await chicagoImage.getCSSProperty('opacity')).value).toEqual(
      1
    );

    await location.open();
    await location.select(3);
    await location.ok();
    const seattleImage = await About.seattleImage;
    await pause(500);
    await expect((await seattleImage.getCSSProperty('opacity')).value).toEqual(
      1
    );
  });
});
