export async function clearIndexedDB(dbName: string) {
  return browser.execute((dbName) => {
    indexedDB.deleteDatabase(dbName);
  }, dbName);
}
