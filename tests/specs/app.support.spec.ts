import { Device, setDevice, switchToWeb, waitForLoad } from '../helpers';

import Support from '../pageobjects/support.page';

describe('support', () => {
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
    await Support.username.setValue('testuser');
    await Support.submit();

    await expect(Support.error).toHaveText('Incorrect password');
  });
  */
});
