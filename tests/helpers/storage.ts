export async function clearIndexedDB(dbName: string) {
  return browser.execute((name) => {
    indexedDB.deleteDatabase(name);
  }, dbName);
}
