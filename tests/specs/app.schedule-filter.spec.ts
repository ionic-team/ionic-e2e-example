import { Device, setDevice, switchToWeb, waitForLoad } from '../utils';

import ScheduleFilter from '../pageobjects/schedule-filter.page';

describe('schedule filter', () => {
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
    await ScheduleFilter.username.setValue('testuser');
    await ScheduleFilter.submit();

    await expect(ScheduleFilter.error).toHaveText('Incorrect password');
  });
  */
});
