
import * as IonicE2E from '@ionic/e2e';
import { pause, setDevice, url, waitForLoad, web } from '@ionic/e2e';

import About from '../pageobjects/about.page';

describe('about', () => {
  before(async () => {
    await waitForLoad();
    await url('/app/tabs/about');
  });

  beforeEach(async () => {
    await setDevice(IonicE2E.Device.Mobile);
    await web();
    await pause(500);
  });

  it('Should switch location', async () => {
    const location = await About.locationSelect;

    await location.open();
    await location.select(1);
    await location.ok();
    const austinImage = await About.austinImage;
    await expect((await austinImage.getCSSProperty('opacity')).value).toEqual(1);

    await location.open();
    await location.select(2);
    await location.ok();
    const chicagoImage = await About.chicagoImage;
    await expect((await chicagoImage.getCSSProperty('opacity')).value).toEqual(1);

    await location.open();
    await location.select(3);
    await location.ok();
    const seattleImage = await About.seattleImage;
    await expect((await seattleImage.getCSSProperty('opacity')).value).toEqual(1);
  });
});
