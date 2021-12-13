import { Device, setDevice, switchToWeb, waitForLoad } from '../utils';

import Login from '../pageobjects/login.page';

describe('login', () => {
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
    await Login.username.setValue('testuser');
    await Login.submit();

    await expect(Login.error).toHaveText('Incorrect password');
  });
  */
});
