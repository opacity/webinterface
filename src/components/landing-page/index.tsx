import React from "react";
import { connect } from "react-redux";

import LandingPageSlide from "./landing-page-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const LandingPage = () => <LandingPageSlide />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
