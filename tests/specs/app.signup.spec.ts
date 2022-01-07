import { Device, getUrl, pause, setDevice, switchToWeb, url, waitForLoad } from '../helpers';

import Signup from '../pageobjects/signup.page';

describe('Signup', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
    await url('/signup');
    await pause(500);
  });

  it('Should signup', async () => {
    await Signup.signup('test', 'test');
    await pause(500);
    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });
});
