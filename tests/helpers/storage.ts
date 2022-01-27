export async function clearIndexedDB(dbName: string) {
  await browser.execute((name) => {
    indexedDB.deleteDatabase(name);
  }, dbName);
}
