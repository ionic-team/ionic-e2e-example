import { clearIndexedDB, pause, restartApp, url } from '../helpers';

import Support from '../pageobjects/support.page';

describe('Support', () => {
  beforeEach(async () => {
    await restartApp('/support');
    await clearIndexedDB('_ionicstorage');
    await url('/support');
    await pause(500);
  });

  it('Should submit support request', async () => {
    await pause(5000);
    const input = Support.messageInput;
    await input.setValue('I am very happy with the app');
    await Support.submitMessage();

    const toast = await Support.toast;
    await expect(await toast.getText()).toBe(
      'Your support request has been sent.'
    );
  });
});
