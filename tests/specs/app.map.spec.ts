
import * as IonicE2E from '@ionic/e2e';

import Map from '../pageobjects/map.page';

describe('map', () => {
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
    await Map.username.setValue('testuser');
    await Map.submit();

    await expect(Map.error).toHaveText('Incorrect password');
  });
  */
});
