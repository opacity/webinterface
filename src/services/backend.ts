import axios from "axios";

import { API, IS_DEV } from "../config";
import { getPayload } from "opaque";

const axiosInstance = axios.create({ timeout: 200000 });

export const createSubscription = ({ token, masterHandle }) => {
  const signedPayload = getPayload({ token }, masterHandle);

  return axiosInstance
    .post(`${host}${API.V1_SUBSCRIPTIONS_PATH}`, signedPayload)
    .then(({ data: { available } }: any) => available);
};

export default {
  createSubscription
};
