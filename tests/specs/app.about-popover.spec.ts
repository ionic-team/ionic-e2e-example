
import * as IonicE2E from '@ionic/e2e';

import AboutPopover from '../pageobjects/about-popover.page';

describe('about popover', () => {
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
    await AboutPopover.username.setValue('testuser');
    await AboutPopover.submit();

    await expect(AboutPopover.error).toHaveText('Incorrect password');
  });
  */
});
