import React from "react";
import { connect } from "react-redux";

import ForgotPageSlide from "./forgot-page-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const ForgotPage = () => <ForgotPageSlide />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPage);
