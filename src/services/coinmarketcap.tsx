import axios from "axios";

import { API } from "../config";

const axiosInstance = axios.create({ timeout: 200000 });

const getTicketCoinMarketCap = () =>
  axiosInstance.get(`${API.COINMARKETCAP}`).then(({ data }: any) => {
    return data;
  });

export default {
  getTicketCoinMarketCap
};
