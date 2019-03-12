import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";

import signupActions from "../actions/signup-actions";
import backend from "../../services/backend";

const createAccountEpic = action$ =>
  action$.ofType(signupActions.GET_INVOICE_PENDING).mergeMap(action => {
    // const { privateKey, storagePin } = action.payload;

    const accountId = "abc";
    const storageLimit = 100;
    const durationInMonths = 12;
    const metadataKey = "abc";

    return Observable.fromPromise(
      backend.createAccount({
        accountId,
        storageLimit,
        durationInMonths,
        metadataKey
      })
    )
      .map(invoice => signupActions.paymentPending({ invoice }))
      .catch(error => Observable.of(signupActions.accountError({ error })));
  });

export default combineEpics(createAccountEpic);
