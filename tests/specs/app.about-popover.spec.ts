import { Device, setDevice, switchToWeb, waitForLoad } from '../helpers';

import AboutPopover from '../pageobjects/about-popover.page';

describe('about popover', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
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
