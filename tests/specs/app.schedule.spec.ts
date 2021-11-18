
import * as IonicE2E from '@ionic/e2e';

import Schedule from '../pageobjects/schedule.page';

describe('schedule', () => {
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
    await Schedule.username.setValue('testuser');
    await Schedule.submit();

    await expect(Schedule.error).toHaveText('Incorrect password');
  });
  */
});
