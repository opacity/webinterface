import React from "react";
import { connect } from "react-redux";

// import ConfirmPaymentSlide from "./confirm-payment-slide";
// import RecordStorageHandleSlide from "./record-storage-handle-slide";
// import SendPaymentSlide from "./send-payment-slide";
// import RetrievingInvoiceSlide from "./retrieving-invoice-slide";

const CreateAccount = ({
  handle,
  cost,
  ethAddress,
  gasPrice,
  setStoragePin,
  setPrivateKey
}) => <div />;

export default connect()(CreateAccount);
