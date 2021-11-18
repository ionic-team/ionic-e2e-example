
import * as IonicE2E from '@ionic/e2e';

import About from '../pageobjects/about.page';

describe('about', () => {
  before(async () => {
    await IonicE2E.waitForLoad();
  });

  beforeEach(async () => {
    await IonicE2E.setDevice(IonicE2E.Device.Mobile);
    await IonicE2E.web();
  });

  /*
  Test specs here:

  it('Should perform action', async () => {
    await About.username.setValue('testuser');
    await About.submit();

    await expect(About.error).toHaveText('Incorrect password');
  });
  */
});
