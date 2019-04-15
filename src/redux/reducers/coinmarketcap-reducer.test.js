import coinMarketCap from "./coinmarketcap-reducer";
import coinMarketCapAction from "../actions/coinmarketcap-actions";

const initState = { data: null };

test("coinmarketcap-reducer COINMARKETCAP_SUCCESS", () => {
  const action = {
    type: coinMarketCapAction.COINMARKETCAP_SUCCESS,
    payload: { data: "data" }
  };
  const expected = {
    data: "data"
  };
  expect(coinMarketCap(initState, action)).toEqual(expected);
});

test("coinmarketcap-reducer COINMARKETCAP_ERROR", () => {
  const action = {
    type: coinMarketCapAction.DOWNLOAD_ERROR,
    payload: { error: "error" }
  };
  expect(coinMarketCap(initState, action)).toEqual(initState);
});
