import axios from "axios";

import { API, FRONT_END_URL } from "../config";
import { getPayload } from "opaque";

const axiosInstance = axios.create({ timeout: 200000 });

export const createSubscription = ({ token, masterHandle }) => {
  const signedPayload = getPayload({ token }, masterHandle);

  return axiosInstance
    .post(`${FRONT_END_URL}${API.V1_SUBSCRIPTIONS_PATH}`, signedPayload)
    .then(({ data: { available } }: any) => available);
};

export default {
  createSubscription
};
