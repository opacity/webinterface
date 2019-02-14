import React from "react";
import { connect } from "react-redux";

import RegisterSendPaymentSlide from "./register-send-payment-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const RegisterSendPayment = () => {
  return <RegisterSendPaymentSlide />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterSendPayment);