import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toArray";

import coinmMrketCapActions from "../actions/coinmarketcap-actions";
import coinMarketCapEpic from "./coinmarketcap-epic";

import { ActionsObservable } from "redux-observable";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([]);

test("coinMarketCapEpic download", () => {
  const state = {
    data: null
  };
  const store = mockStore(state);
  const action = ActionsObservable.of({
    type: coinmMrketCapActions.COINMARKETCAP_DOWNLOAD
  });
  coinMarketCapEpic(action, store)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual([coinmMrketCapActions.coinMarketCapSuccess()]);
    });
});
