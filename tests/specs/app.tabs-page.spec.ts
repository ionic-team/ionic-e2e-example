
import * as IonicE2E from '@ionic/e2e';

import TabsPage from '../pageobjects/tabs-page.page';

describe('tabs page', () => {
  before(async () => {
    await IonicE2E.waitForLoad();
  });

  beforeEach(async () => {
    await IonicE2E.setDevice(IonicE2E.Device.Mobile);
    await IonicE2E.web();
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
