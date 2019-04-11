import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toArray";

import { push, replace } from "react-router-redux";
import navigationActions from "../actions/navigation-actions";
import uploadActions from "../actions/upload-actions";
import navigationEpic from "./navigation-epic";

import { ActionsObservable } from "redux-observable";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([]);

jest.mock("../../services/backend", () => ({
  checkStatus: () => new Promise((resolve, reject) => resolve(true))
}));

test("navigationEpic goToDownloadForm", done => {
  const action$ = ActionsObservable.of({
    type: navigationActions.VISIT_DOWNLOAD_FORM
  });
  const state$ = null;
  const dependencies$ = {};

  navigationEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(push("/download-form"));
    done();
  });
});

test("navigationEpic goToUploadForm", done => {
  const action$ = ActionsObservable.of({
    type: navigationActions.VISIT_UPLOAD_FORM
  });
  const state$ = null;
  const dependencies$ = {};

  navigationEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(push("/upload-form"));
    done();
  });
});

test("navigationEpic goToUploadStartedStream", done => {
  const action$ = ActionsObservable.of({
    type: uploadActions.PAYMENT_CONFIRMED,
    payload: { handle: "handle" }
  });
  const state$ = null;
  const dependencies$ = {};

  navigationEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(replace("/upload-started"));
    done();
  });
});

test("navigationEpic goToUploadCompleteStream", done => {
  const action$ = ActionsObservable.of({
    type: uploadActions.UPLOAD_SUCCESS
  });
  const state$ = null;
  const dependencies$ = {};

  navigationEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(replace("/upload-complete"));
    done();
  });
});

test("navigationEpic goToPaymentInvoiceStream", done => {
  const action$ = ActionsObservable.of({
    type: uploadActions.INVOICED
  });
  const state$ = null;
  const dependencies$ = {};

  navigationEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(replace("/payment-invoice"));
    done();
  });
});

test("navigationEpic goToPaymentConfirmationStream", done => {
  const action$ = ActionsObservable.of({
    type: uploadActions.PAYMENT_PENDING
  });
  const state$ = null;
  const dependencies$ = {};

  navigationEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(replace("/payment-confirm"));
    done();
  });
});

test("navigationEpic goToErrorPage", done => {
  const action$ = ActionsObservable.of({
    type: navigationActions.ERROR_PAGE
  });
  const state$ = null;
  const dependencies$ = {};

  navigationEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(replace("/error-page"));
    done();
  });
});
