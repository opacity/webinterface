import React from "react";
import { connect } from "react-redux";

import StandsOutSlide from "./stands-out-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const StandsOut = () => {
  return <StandsOutSlide />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandsOut);
