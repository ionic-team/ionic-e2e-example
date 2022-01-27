import {
  Device,
  pause,
  restartApp,
  setDevice,
  url,
} from '../helpers';

import Login from '../pageobjects/login.page';

describe('Login', () => {
  beforeEach(async () => {
    await restartApp();
    await setDevice(Device.Mobile);
    await url('/login');
    await pause(500);
  });

  it('Should login', async () => {
    await Login.login('test', 'test');
  });
});
