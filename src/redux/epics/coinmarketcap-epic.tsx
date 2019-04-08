import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";

import coinMarketCapActions from "../actions/coinmarketcap-actions";
import coinMarketCap from "../../services/coinmarketcap";

const downloadCoinMarketCap = action$ =>
  action$
    .ofType(coinMarketCapActions.COINMARKETCAP_DOWNLOAD)
    .switchMap(action => {
      return Observable.fromPromise(coinMarketCap.getTicketCoinMarketCap())
        .map(data => coinMarketCapActions.coinMarketCapSuccess({ data }))
        .catch(error =>
          Observable.of(coinMarketCapActions.coinMarketCapFailure({ error }))
        );
    });

export default combineEpics(downloadCoinMarketCap);
