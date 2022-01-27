import { Device, pause, restartApp, setDevice, url } from '../helpers';

import SpeakerDetail from '../pageobjects/speaker-detail.page';

describe('Speaker Detail', () => {
  beforeEach(async () => {
    await restartApp();
    await setDevice(Device.Mobile);
    await url('/app/tabs/speakers/speaker-details/3');
    await pause(500);
  });

  it('Should load speaker', async () => {
    const speakerName = await SpeakerDetail.speakerName;
    await expect(await speakerName.getText()).toBe('Donald Duck');
  });
});
