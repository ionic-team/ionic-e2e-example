import { Device, pause, restartApp, setDevice } from '../helpers';

import schedulePage from '../pageobjects/schedule.page';

describe('Schedule Filter', () => {
  beforeEach(async () => {
    await restartApp('/app/tabs/schedule');
    await setDevice(Device.Mobile);
    await pause(200);
    await schedulePage.filterButton.tap();
    await pause(400);
  });

  it('Should load filters', async () => {
    const items = await $$('page-schedule-filter ion-item');
    expect(items.length).toBe(10);
  });
});
