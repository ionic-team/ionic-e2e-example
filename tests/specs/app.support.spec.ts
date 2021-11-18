
import * as IonicE2E from '@ionic/e2e';

import Support from '../pageobjects/support.page';

describe('support', () => {
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
    await Support.username.setValue('testuser');
    await Support.submit();

    await expect(Support.error).toHaveText('Incorrect password');
  });
  */
});
