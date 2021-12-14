import { Device, setDevice, switchToWeb, waitForLoad } from '../helpers';

import SpeakerDetail from '../pageobjects/speaker-detail.page';

describe('speaker detail', () => {
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
    await SpeakerDetail.username.setValue('testuser');
    await SpeakerDetail.submit();

    await expect(SpeakerDetail.error).toHaveText('Incorrect password');
  });
  */
});
