export async function clearIndexedDB(dbName: string) {
  await browser.execute((name) => {
    indexedDB.deleteDatabase(name);
    // Needed to reload the page for the DB to be reloaded
    // for mobile devices
    document.location.reload();
  }, dbName);
}
