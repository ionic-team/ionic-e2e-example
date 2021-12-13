import { Device, setDevice, switchToWeb, waitForLoad } from '../utils';

import Signup from '../pageobjects/signup.page';

describe('signup', () => {
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
    await Signup.username.setValue('testuser');
    await Signup.submit();

    await expect(Signup.error).toHaveText('Incorrect password');
  });
  */
});
