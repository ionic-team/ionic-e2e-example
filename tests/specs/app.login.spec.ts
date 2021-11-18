
import * as IonicE2E from '@ionic/e2e';

import Login from '../pageobjects/login.page';

describe('login', () => {
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
    await Login.username.setValue('testuser');
    await Login.submit();

    await expect(Login.error).toHaveText('Incorrect password');
  });
  */
});
