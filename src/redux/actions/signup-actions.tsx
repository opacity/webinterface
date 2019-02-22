const SET_PRIVATE_KEY = "opacity/signup/set-private-key";
const SET_STORAGE_PIN = "opacity/signup/set-storage-pin";

const ACTIONS = Object.freeze({
  SET_PRIVATE_KEY,
  SET_STORAGE_PIN,

  setPrivateKey: ({ privateKey }) => ({
    type: SET_PRIVATE_KEY,
    payload: { privateKey }
  }),
  setStoragePin: ({ storagePin }) => ({
    type: SET_STORAGE_PIN,
    payload: { storagePin }
  })
});

export default ACTIONS;
