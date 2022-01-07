import { Device, pause, setDevice, switchToWeb, url, waitForLoad } from '../helpers';

import SpeakerList from '../pageobjects/speaker-list.page';

describe('Speaker List', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
    await url('/app/tabs/speakers');
    await pause(500);
  });

  it('Should load speakers', async () => {
    const speakers = await SpeakerList.speakers;

    expect(speakers.length).toBe(13);
  });
});
