import { Device, setDevice, switchToWeb, waitForLoad } from '../helpers';

import SpeakerList from '../pageobjects/speaker-list.page';

describe('speaker list', () => {
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
    await SpeakerList.username.setValue('testuser');
    await SpeakerList.submit();

    await expect(SpeakerList.error).toHaveText('Incorrect password');
  });
  */
});
