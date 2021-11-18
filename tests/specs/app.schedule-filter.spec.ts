
import * as IonicE2E from '@ionic/e2e';

import ScheduleFilter from '../pageobjects/schedule-filter.page';

describe('schedule filter', () => {
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
    await ScheduleFilter.username.setValue('testuser');
    await ScheduleFilter.submit();

    await expect(ScheduleFilter.error).toHaveText('Incorrect password');
  });
  */
});
