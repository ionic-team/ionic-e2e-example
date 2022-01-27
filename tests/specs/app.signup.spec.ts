import {
  Device,
  getUrl,
  pause,
  restartApp,
  setDevice,
  url,
} from '../helpers';

import Signup from '../pageobjects/signup.page';

describe('Signup', () => {
  beforeEach(async () => {
    await restartApp();
    await setDevice(Device.Mobile);
    await url('/signup');
    await pause(500);
  });

  it('Should signup', async () => {
    await Signup.signup('test', 'test');
    await pause(500);
    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });
});
