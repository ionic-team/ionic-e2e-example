import {
  Device,
  pause,
  restartApp,
  setDevice,
  url,
} from '../helpers';

import SpeakerList from '../pageobjects/speaker-list.page';

describe('Speaker List', () => {
  beforeEach(async () => {
    await restartApp();
    await setDevice(Device.Mobile);
    await url('/app/tabs/speakers');
    await pause(500);
  });

  it('Should load speakers', async () => {
    const speakers = await SpeakerList.speakers;

    expect(speakers.length).toBe(13);
  });
});
