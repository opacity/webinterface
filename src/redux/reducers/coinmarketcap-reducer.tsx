import coinMarketCapActions from "../actions/coinmarketcap-action";

const initState = { data: null };

const downloadReducer = (state = initState, action) => {
  switch (action.type) {
    case coinMarketCapActions.COINMARKETCAP_SUCCESS:
      const { data } = action.payload;
      return { ...state, data: data };
    case coinMarketCapActions.COINMARKETCAP_ERROR:
      return { ...state, data: null };

    default:
      return state;
  }
};

export default downloadReducer;
