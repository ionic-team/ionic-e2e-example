import {
  Device,
  pause,
  restartApp,
  setDevice,
  url,
} from '../helpers';

import schedulePage from '../pageobjects/schedule.page';

describe('Schedule Filter', () => {
  beforeEach(async () => {
    await restartApp();
    await setDevice(Device.Mobile);
    await url('/app/tabs/schedule');
    await pause(200);
    await schedulePage.filterButton.tap();
    await pause(400);
  });

  it('Should load filters', async () => {
    const items = await $$('page-schedule-filter ion-item');
    expect(items.length).toBe(10);
  });
});
