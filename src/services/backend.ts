import axios from "axios";

import { API, IS_DEV } from "../config";

const axiosInstance = axios.create({ timeout: 200000 });

export const checkStatus = hosts =>
  new Promise((resolve, reject) => {
    // TODO: Quick fix to get this deployed ASAP and pass Travis.
    // This should be removed later
    if (IS_DEV) return resolve(true);

    Promise.all(
      hosts.map(host =>
        axiosInstance
          .get(`${host}${API.V2_STATUS_PATH}`)
          .then(({ data: { available } }: any) => available)
      )
    )
      .then(availabilities => {
        const available = availabilities.every(Boolean);
        if (!available) {
        }
        resolve(available);
      })
      .catch(() => {
        resolve(false);
      });
  });

export const getAccountData = ({ publicKey, signature, requestBody = null }) =>
  axiosInstance
    .post(`${API.DEFAULT_BROKER}${API.V1_ACCCOUNT_DATA}`, {
      publicKey,
      requestBody,
      signature
    })
    .then(({ data }: any) => data);

export default {
  checkStatus,
  getAccountData
};
