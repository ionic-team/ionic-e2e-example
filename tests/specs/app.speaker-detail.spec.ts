import {
  Device,
  pause,
  setDevice,
  switchToWeb,
  url,
  waitForLoad,
} from '../helpers';

import SpeakerDetail from '../pageobjects/speaker-detail.page';

describe('Speaker Detail', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
    await url('/app/tabs/speakers/speaker-details/3');
    await pause(500);
  });

  it('Should load speaker', async () => {
    const speakerName = await SpeakerDetail.speakerName;
    await expect(await speakerName.getText()).toBe('Donald Duck');
  });
});
