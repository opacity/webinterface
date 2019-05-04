import axios from "axios";

import { THIRD_PARTY } from "../config";

const axiosInstance = axios.create({ timeout: 200000 });

const getTicketCoinMarketCap = () =>
  axiosInstance.get(`${THIRD_PARTY.COINMARKETCAP}`).then(({ data }: any) => {
    return data;
  });

export default {
  getTicketCoinMarketCap
};
