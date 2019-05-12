import CryptoJS from "crypto-js";

export const encrypt = (metadataKey, metadata) => {
  return CryptoJS.AES.encrypt(JSON.stringify(metadata), metadataKey).toString();
};

export const decrypt = (metadataKey, metadata) => {
  const decrypted = CryptoJS.AES.decrypt(metadata, metadataKey);
  const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
  return JSON.parse(jsonString);
};

export default {
  encrypt,
  decrypt
};
