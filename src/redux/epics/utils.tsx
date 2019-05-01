import { from } from "rxjs";

import * as Backend from "../../services/backend";

export const execObservableIfBackendAvailable = (
  hosts,
  availableObsFn,
  unavailableObsFn
) =>
  from(Backend.checkStatus(hosts)).mergeMap((available: any) => {
    return available ? availableObsFn() : unavailableObsFn();
  });
