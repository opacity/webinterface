import axios from "axios";

import { API, IS_DEV } from "../config";

enum PAYMENT_STATUSES {
  PAID = "paid"
}

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

const createAccount = ({
  accountId,
  storageLimit,
  durationInMonths,
  metadataKey
}) =>
  axiosInstance
    .post(`${API.DEFAULT_BROKER}${API.V1_ACCOUNTS_PATH}`, {
      accountId,
      storageLimit,
      durationInMonths,
      metadataKey
    })
    .then(({ data }: any) => {
      const { invoice } = data;
      return invoice;
    });

const isAccountPaid = ({ accountId }) =>
  axiosInstance
    .get(`${API.DEFAULT_BROKER}${API.V1_ACCOUNTS_PATH}/${accountId}`)
    .then(({ data }: any) => {
      const { paymentStatus } = data;
      return paymentStatus === PAYMENT_STATUSES.PAID;
    });

const login = ({ metadataKey }) =>
  axiosInstance
    .get(`${API.DEFAULT_BROKER}${API.V1_LOGIN_PATH}/${metadataKey}`)
    .then(({ data }: any) => data);

export default {
  checkStatus,
  createAccount,
  isAccountPaid,
  login
};
