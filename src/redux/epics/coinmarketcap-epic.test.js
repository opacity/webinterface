import { of } from "rxjs";
import * as CoinMarketCapService from "../../services/coinmarketcap";

import coinmMarketCapActions from "../actions/coinmarketcap-actions";
import coinMarketCapEpic from "./coinmarketcap-epic";

import configureMockStore from "redux-mock-store";

jest.mock("../../services/coinmarketcap", () => ({
  getTicketCoinMarketCap: jest.fn(() => Promise.resolve("foobar"))
}));

test("downloadCoinMarketCap on success", done => {
  CoinMarketCapService.getTicketCoinMarketCap.mockImplementation(() =>
    Promise.resolve("foobar")
  );

  const action$ = of(coinmMarketCapActions.coinMarketCapDownload());
  coinMarketCapEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      coinmMarketCapActions.coinMarketCapSuccess({ data: "foobar" })
    );
    done();
  });
});

test("downloadCoinMarketCap on error", done => {
  CoinMarketCapService.getTicketCoinMarketCap.mockImplementation(() =>
    Promise.reject("foobar")
  );

  const action$ = of(coinmMarketCapActions.coinMarketCapDownload());
  coinMarketCapEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      coinmMarketCapActions.coinMarketCapFailure({ error: "foobar" })
    );
    done();
  });
});
