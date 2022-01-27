import { Device, pause, restartApp, setDevice } from '../helpers';

import Login from '../pageobjects/login.page';

describe('Login', () => {
  beforeEach(async () => {
    await restartApp('/login');
    await setDevice(Device.Mobile);
    await pause(500);
  });

  it('Should login', async () => {
    await Login.login('test', 'test');
  });
});
