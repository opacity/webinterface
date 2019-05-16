import CryptoJS from "crypto-js";

const metadataGenerator = () => ({ files: [] });

export const encrypt = (metadataKey, metadata) => {
  return CryptoJS.AES.encrypt(JSON.stringify(metadata), metadataKey).toString();
};

export const decrypt = (metadataKey, metadata) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(metadata, metadataKey);
    const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(jsonString);
  } catch (e) {
    return metadataGenerator();
  }
};

export default {
  encrypt,
  decrypt
};
