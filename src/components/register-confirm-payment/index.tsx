import React from "react";
import { connect } from "react-redux";

import RegisterConfirmPaymentSlide from "./register-confirm-payment-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const RegisterConfirmPayment = () => <RegisterConfirmPaymentSlide />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterConfirmPayment);
