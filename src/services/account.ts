import forge from "node-forge";

export const getAccountId = ({ privateKey, storagePin }) => {
  const md = forge.md.sha256.create();
  md.update(privateKey + storagePin);
  return md.digest().toHex();
};

// TODO: determine new way of generating metadata key
export const getMetadataKey = ({ privateKey, storagePin }) => {
  const md = forge.md.sha256.create();
  md.update(privateKey + storagePin);
  return md.digest().toHex();
};

export default {
  getAccountId,
  getMetadataKey
};
