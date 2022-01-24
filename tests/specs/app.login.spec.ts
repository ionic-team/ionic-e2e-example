import {
  Device,
  pause,
  setDevice,
  switchToWeb,
  url,
  waitForLoad,
} from '../helpers';

import Login from '../pageobjects/login.page';

describe('Login', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
    await url('/login');
    await pause(500);
  });

  it('Should login', async () => {
    await Login.login('test', 'test');
  });
});
