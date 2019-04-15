import actions from "./coinmarketcap-actions";

test("coinmarketcap-action COINMARKETCAP_DOWNLOAD", () => {
  const expected = {
    type: actions.COINMARKETCAP_DOWNLOAD
  };
  expect(actions.coinMarketCapDownload()).toEqual(expected);
});

test("coinmarketcap-action COINMARKETCAP_SUCCESS", () => {
  const data = 0.15;
  const expected = {
    type: actions.COINMARKETCAP_SUCCESS,
    payload: data
  };
  expect(actions.coinMarketCapSuccess({ data })).toEqual(expected);
});

test("coinmarketcap-action COINMARKETCAP_ERROR", () => {
  const error = "err";
  const expected = {
    type: actions.COINMARKETCAP_ERROR,
    payload: error
  };
  expect(actions.coinMarketCapFailure({ error })).toEqual(expected);
});
