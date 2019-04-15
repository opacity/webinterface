const COINMARKETCAP_DOWNLOAD = "opacity/coinmarketcap/download";
const COINMARKETCAP_SUCCESS = "opacity/coinmarketcap/success";
const COINMARKETCAP_ERROR = "opacity/coinmarketcap/error";

const ACTIONS = Object.freeze({
  // coinMarketCap download
  COINMARKETCAP_DOWNLOAD,
  COINMARKETCAP_SUCCESS,
  COINMARKETCAP_ERROR,

  // coinMarketCap actions
  coinMarketCapDownload: () => ({
    type: COINMARKETCAP_DOWNLOAD
  }),

  coinMarketCapSuccess: ({ data }) => ({
    type: COINMARKETCAP_SUCCESS,
    payload: data
  }),

  coinMarketCapFailure: ({ error }) => ({
    type: COINMARKETCAP_ERROR,
    payload: error
  })
});

export default ACTIONS;
