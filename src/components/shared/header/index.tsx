import React from "react";
import { connect } from "react-redux";

import HeaderComponent from "./header-component";

const mapStateToProps = state => ({
  authentication: state.authentication.status
});
const mapDispatchToProps = dispatch => ({});

const Header = ({ authentication, type }) => (
  <HeaderComponent authentication={authentication} type={type} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
