import { SessionFlagsConfig } from '../../config/wdio.shared.config';
import { clearIndexedDB } from '../storage';
import WebView, { CONTEXT_REF } from '../webview';

export * from './android';
export * from './ios';

export enum Device {
  Mobile = 'mobile',
}

export async function waitForLoad() {
  if (isWeb()) {
    return;
  }
  await WebView.waitForWebsiteLoaded();
}

export async function switchToNative() {
  if (isWeb()) {
    return;
  }

  await WebView.switchToContext(CONTEXT_REF.NATIVE);
}

export async function switchToWeb() {
  if (isWeb()) {
    return;
  }

  await WebView.switchToContext(CONTEXT_REF.WEBVIEW);
}

export function getContexts() {
  if (isWeb()) {
    return ['WEBVIEW'];
  }

  return driver.getContexts();
}

export function getContext() {
  if (isWeb()) {
    return 'WEBVIEW';
  }

  return driver.getContext();
}

export async function url(newUrl: string) {
  const currentUrl = await browser.getUrl();

  if (newUrl[0] === '/') {
    // Simulate baseUrl by grabbing the current url and navigating relative
    // to that
    try {
      const fullUrl = new URL(newUrl, currentUrl);
      return browser.url(fullUrl.href);
    } catch (e) {}
  }

  return browser.url(newUrl);
}

export function pause(ms: number) {
  return driver.pause(ms);
}

export function hideKeyboard() {
  return driver.hideKeyboard();
}

export function onWeb(fn: () => Promise<void>) {
  if (isWeb()) {
    return fn();
  }
}

export function onIOS(fn: () => Promise<void>) {
  if (isIOS()) {
    return fn();
  }
}
export function onAndroid(fn: () => Promise<void>) {
  if (isAndroid()) {
    return fn();
  }
}

export function isIOS() {
  return driver.isIOS;
}

export function isAndroid() {
  return driver.isAndroid;
}

export function isWeb() {
  return !driver.isMobile;
}

export function setDevice(device: Device) {
  if (!isWeb()) {
    return Promise.resolve();
  }

  switch (device) {
    case Device.Mobile: {
      return driver.setWindowSize(375, 812);
    }
  }
}

export async function setLocation(lat: number, lng: number) {
  if (isWeb()) {
    // Not available on web
    return;
  }

  return driver.setGeoLocation({
    latitude: '' + lat,
    longitude: '' + lat,
    altitude: '94.23',
  });
}

export async function restartApp() {
  // if ((driver.config as SessionFlagsConfig).firstAppStart && !isWeb()) {
  //   await driver.reset();
  // }

  // // Set the firstAppstart to false to say that the following test can be reset
  // (driver.config as SessionFlagsConfig).firstAppStart = false;

  if (isWeb()) {
    await url('/tutorial');
  }
  await clearIndexedDB('_ionicstorage');
}
