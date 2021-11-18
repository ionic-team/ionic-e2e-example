
import * as IonicE2E from '@ionic/e2e';

import SpeakerList from '../pageobjects/speaker-list.page';

describe('speaker list', () => {
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
    await SpeakerList.username.setValue('testuser');
    await SpeakerList.submit();

    await expect(SpeakerList.error).toHaveText('Incorrect password');
  });
  */
});
