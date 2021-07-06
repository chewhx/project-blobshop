import localforage from "localforage";

const useIndexedDb = () => {
  localforage.config({
    driver: localforage.INDEXEDDB,
    name: "blobshop",
    version: 2.0,
    storeName: "localblobs", // Should be alphanumeric, with underscores.
    description: "No description",
  });

  const addItem = (key, value) => {
    localforage.setItem(key, value).catch((err) => console.log(err));
  };

  const getItem = async (key) => {
    try {
      const value = await localforage.getItem(key);
      return value;
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = async (key) => {
    try {
      await localforage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllItems = async () => {
    try {
      const res = [];
      await localforage.iterate((value, key, iterationNumber) => {
        res.push([key, value]);
      });
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const clearAllItems = async () => {
    try {
      await localforage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  return {
    addItem,
    removeItem,
    getItem,
    getAllItems,
    clearAllItems,
  };
};

export default useIndexedDb;
