
import * as IonicE2E from '@ionic/e2e';

import SessionDetail from '../pageobjects/session-detail.page';

describe('session detail', () => {
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
    await SessionDetail.username.setValue('testuser');
    await SessionDetail.submit();

    await expect(SessionDetail.error).toHaveText('Incorrect password');
  });
  */
});
