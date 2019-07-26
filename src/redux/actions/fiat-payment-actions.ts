const PAY_FIAT = "opacity/fiat-payment/pay-fiat";
const PAY_FIAT_SUCCESS = "opacity/fiat-payment/pay-fiat-success";
const PAY_FIAT_FAILURE = "opacity/fiat-payment/pay-fiat-failure";

const ACTIONS = Object.freeze({
  PAY_FIAT,
  PAY_FIAT_SUCCESS,
  PAY_FIAT_FAILURE,

  payFiat: ({ stripeToken, masterHandle, timestamp }) => ({
    type: PAY_FIAT,
    payload: { stripeToken, masterHandle, timestamp }
  }),
  payFiatSuccess: () => ({
    type: PAY_FIAT_SUCCESS
  }),
  payFiatFailure: ({ error }) => ({
    type: PAY_FIAT_FAILURE,
    payload: { error }
  })
});

export default ACTIONS;
