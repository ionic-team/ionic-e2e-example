import { Device, setDevice, switchToWeb, waitForLoad } from '../utils';

import Map from '../pageobjects/map.page';

describe('map', () => {
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
    await Map.username.setValue('testuser');
    await Map.submit();

    await expect(Map.error).toHaveText('Incorrect password');
  });
  */
});
