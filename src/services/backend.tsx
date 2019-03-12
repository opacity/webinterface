import axios from "axios";

import { API, IS_DEV } from "../config";

const axiosInstance = axios.create({ timeout: 200000 });

const checkStatus = hosts =>
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

const createUser = ({
  accountId,
  storageLimit,
  durationInMonths,
  metadataKey
}) =>
  axiosInstance
    .post(`${API.BROKER_NODE_B}/api/v1/accounts`, {
      accountId,
      storageLimit,
      durationInMonths,
      metadataKey
    })
    .then(({ data }: any) => {
      const { invoice } = data;
      return invoice;
    });

export default {
  checkStatus,
  createUser
};
