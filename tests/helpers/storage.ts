export async function clearIndexedDB(dbName: string) {
  return browser.execute((name) => {
    indexedDB.deleteDatabase(name);
    // Needed to reload the page for the DB to be reloaded
    // for mobile devices
    document.location.reload();
  }, dbName);
}
