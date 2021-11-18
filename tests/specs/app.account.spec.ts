
import * as IonicE2E from '@ionic/e2e';

import Account from '../pageobjects/account.page';

describe('account', () => {
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
    await Account.username.setValue('testuser');
    await Account.submit();

    await expect(Account.error).toHaveText('Incorrect password');
  });
  */
});
