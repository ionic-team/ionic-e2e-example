
import * as IonicE2E from '@ionic/e2e';

import SpeakerDetail from '../pageobjects/speaker-detail.page';

describe('speaker detail', () => {
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
    await SpeakerDetail.username.setValue('testuser');
    await SpeakerDetail.submit();

    await expect(SpeakerDetail.error).toHaveText('Incorrect password');
  });
  */
});
