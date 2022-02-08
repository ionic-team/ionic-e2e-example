import { clearIndexedDB, getUrl, pause, restartApp, url } from '../helpers';

import Signup from '../pageobjects/signup.page';

describe('Signup', () => {
  beforeEach(async () => {
    await restartApp('/signup');
    await clearIndexedDB('_ionicstorage');
    await url('/signup');
    await pause(500);
  });

  it('Should signup', async () => {
    await Signup.signup('test', 'test');
    await pause(500);
    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });
});
