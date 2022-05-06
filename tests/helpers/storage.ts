import { pause } from '.';

export async function clearIndexedDB(dbName: string) {
  await browser.execute((name: string) => {
    indexedDB.deleteDatabase(name);
  }, dbName);

  await browser.execute(() => {
    // Needed to reload the page for the DB to be reloaded
    // for mobile devices
    document.location.reload();
  });

  return pause(500);
}
