import WebView, { CONTEXT_REF } from '../webview';

export * from './android';
export * from './ios';

export enum Device {
  Mobile = 'mobile'
}

export function waitForLoad() {
  if (isWeb()) {
    return;
  }
  return WebView.waitForWebsiteLoaded();
}

export function switchToNative() {
  if (isWeb()) {
    return;
  }

  return WebView.switchToContext(CONTEXT_REF.NATIVE);
}

export function switchToWeb() {
  if (isWeb()) {
    return;
  }

  return WebView.switchToContext(CONTEXT_REF.WEBVIEW);
}

export function getContexts() {
  if (isWeb()) {
    return ["WEBVIEW"];
  }

  return driver.getContexts();
}

export function getContext() {
  if (isWeb()) {
    return "WEBVIEW";
  }

  return driver.getContext();
}

export async function url(url: string) {
  const currentUrl = await browser.getUrl();

  console.log('Current url', currentUrl);

  if (url[0] === '/') {
    // Simulate baseUrl by grabbing the current url and navigating relative
    // to that
    try {
      const fullUrl = new URL(url, currentUrl);
      return browser.url(fullUrl.href);
    } catch (e) {
    }
  }

  return browser.url(url);
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
  console.log('IS MOBILE?', driver.isMobile);
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

  return driver.setGeoLocation({ latitude: '' + lat, longitude: '' + lat, altitude: "94.23" });
}