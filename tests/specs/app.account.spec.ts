import { Device, pause, setDevice, switchToWeb, url, waitForLoad } from '../helpers';

import Account from '../pageobjects/account.page';
import Login from '../pageobjects/login.page';

describe('account', () => {
  before(async () => {
    await waitForLoad();
    await url('/login');
    await pause(500);
    await Login.login('test', 'test');
    await pause(500);
    await url('/account');
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
  });

  it('Should open change username alert', async () => {
    await Account.changeUsernameButton.tap();
    await pause(500);
    const input = await Account.changeUsernameAlert.input;
    input.setValue('newusername');
    const okButton = await Account.changeUsernameAlert.button('Ok');
    await okButton.click();
    await url('/login');
    await pause(500);
    await url('/account');
    const usernameLabel = await Account.usernameLabel;
    expect(await usernameLabel.getText()).toBe('newusername');
  });
});
