import { clearIndexedDB, pause, restartApp, url } from '../helpers';

import Login from '../pageobjects/login.page';

describe('Login', () => {
  beforeEach(async () => {
    await restartApp('/login');
    await clearIndexedDB('_ionicstorage');
    await url('/login');
    await pause(500);
  });

  it('Should login', async () => {
    await Login.login('test', 'test');
  });
});
