import { Device, setDevice, switchToWeb, waitForLoad } from '../helpers';

import Account from '../pageobjects/account.page';

describe('account', () => {
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
    await Account.username.setValue('testuser');
    await Account.submit();

    await expect(Account.error).toHaveText('Incorrect password');
  });
  */
});
