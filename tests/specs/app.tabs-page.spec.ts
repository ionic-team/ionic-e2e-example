import { Device, setDevice, switchToWeb, waitForLoad } from '../utils';

import TabsPage from '../pageobjects/tabs-page.page';

describe('tabs page', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
  });

  /*
  Test specs here:

  it('Should perform action', async () => {
    await TabsPage.username.setValue('testuser');
    await TabsPage.submit();

    await expect(TabsPage.error).toHaveText('Incorrect password');
  });
  */
});
