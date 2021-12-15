import { Device, pause, setDevice, switchToWeb, url, waitForLoad } from '../helpers';

import Support from '../pageobjects/support.page';

describe('support', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
    await url('/support');
    await pause(2000);
  });

  it('Should submit support request', async () => {
    pause(1000);
    const input = await Support.messageInput;
    await input.setValue('I am very happy with the app');
    await Support.submitMessage();
    pause(10000);

    const toast = await Support.toast;
    await expect(await toast.getText()).toBe('Your support request has been sent.');
  });
});
