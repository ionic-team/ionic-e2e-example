
import * as IonicE2E from '@ionic/e2e';

import Signup from '../pageobjects/signup.page';

describe('signup', () => {
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
    await Signup.username.setValue('testuser');
    await Signup.submit();

    await expect(Signup.error).toHaveText('Incorrect password');
  });
  */
});
