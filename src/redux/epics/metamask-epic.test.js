import { of } from "rxjs";

import MetamaskService from "../../services/metamask";
import metamaskActions from "../actions/metamask-actions";
import metamaskEpic from "./metamask-epic";

jest.mock("../../services/metamask", () => ({
  __esModule: true,
  default: {
    fetchDefaultMetamaskAccount: jest.fn(),
    getTransactionNonce: jest.fn(),
    sendTransaction: jest.fn()
  }
}));

test("metamaskAccountEpic on success", done => {
  const cost = 1;
  const gasPrice = 2;
  const ethAddress = "0x1";
  const account = "0x2";

  MetamaskService.fetchDefaultMetamaskAccount.mockResolvedValue(account);

  const action$ = of(
    metamaskActions.createTransaction({
      cost,
      gasPrice,
      ethAddress
    })
  );

  metamaskEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      metamaskActions.paymentPending({
        cost,
        gasPrice,
        to: ethAddress,
        from: account
      })
    );
    done();
  });
});

test("metamaskAccountEpic on failure", done => {
  const cost = 1;
  const gasPrice = 2;
  const ethAddress = "0x1";
  const error = new Error("foobar");

  MetamaskService.fetchDefaultMetamaskAccount.mockRejectedValue(error);

  const action$ = of(
    metamaskActions.createTransaction({
      cost,
      gasPrice,
      ethAddress
    })
  );

  metamaskEpic(action$).subscribe(actions => {
    expect(actions).toEqual(metamaskActions.accountError({ error }));
    done();
  });
});

test("metamaskTransactionEpic on success", done => {
  const cost = 1;
  const gasPrice = 2;
  const nonce = 3;
  const from = "0x1";
  const to = "0x2";

  MetamaskService.getTransactionNonce.mockResolvedValue(nonce);
  MetamaskService.sendTransaction.mockResolvedValue();

  const action$ = of(
    metamaskActions.paymentPending({
      cost,
      gasPrice,
      from,
      to
    })
  );

  metamaskEpic(action$).subscribe(actions => {
    expect(MetamaskService.getTransactionNonce).toBeCalledWith(from);
    expect(MetamaskService.sendTransaction).toBeCalledWith({
      cost,
      to,
      from,
      gasPrice,
      nonce: nonce + 1
    });

    expect(actions).toEqual(metamaskActions.paymentSuccess());
    done();
  });
});

test("metamaskTransactionEpic on failure", done => {
  const cost = 1;
  const gasPrice = 2;
  const nonce = 3;
  const from = "0x1";
  const to = "0x2";
  const error = new Error("foobar");

  MetamaskService.getTransactionNonce.mockRejectedValue(error);
  MetamaskService.sendTransaction.mockRejectedValue(error);

  const action$ = of(
    metamaskActions.paymentPending({
      cost,
      gasPrice,
      from,
      to
    })
  );

  metamaskEpic(action$).subscribe(actions => {
    expect(actions).toEqual(metamaskActions.paymentError({ error }));
    done();
  });
});
