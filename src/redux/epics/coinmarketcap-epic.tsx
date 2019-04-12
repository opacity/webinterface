import { from, of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

import { ofType, combineEpics } from "redux-observable";

import coinMarketCapActions from "../actions/coinmarketcap-actions";
import coinMarketCap from "../../services/coinmarketcap";

const downloadCoinMarketCap = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(coinMarketCapActions.COINMARKETCAP_DOWNLOAD),
    switchMap(() => {
      return from(coinMarketCap.getTicketCoinMarketCap()).pipe(
        map(data => coinMarketCapActions.coinMarketCapSuccess({ data })),
        catchError(error =>
          of(coinMarketCapActions.coinMarketCapFailure({ error }))
        )
      );
    })
  );
export default combineEpics(downloadCoinMarketCap);
