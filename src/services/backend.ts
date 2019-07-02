import axios from "axios";

import { API } from "../config";
import { getPayload } from "opaque";

const axiosInstance = axios.create({ timeout: 200000 });

export const createSubscription = ({
  stripeToken,
  masterHandle,
  timestamp
}) => {
  const signedPayload = getPayload({ stripeToken, timestamp }, masterHandle);

  return axiosInstance
    .post(`${API.STORAGE_NODE}${API.V1_SUBSCRIPTIONS_PATH}`, signedPayload)
    .then(({ data: { available } }: any) => available);
};

export default {
  createSubscription
};
