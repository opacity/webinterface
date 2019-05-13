import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import Main from "./main";

const mapStateToProps = state => ({
  handle: queryString.parse(state.router.location.search).handle
});

const mapDispatchToProps = dispatch => ({});

const SharePage = ({ handle }) => <Main handle={handle} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePage);
