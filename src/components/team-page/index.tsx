import React from "react";
import { connect } from "react-redux";

import TeamPageSlide from "./team-page-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const TeamPage = () => <TeamPageSlide />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamPage);
