import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import downloadActions from "../../redux/actions/download-actions";
import Main from "./main";

const mapStateToProps = state => ({
  handle: queryString.parse(state.router.location.search).handle
});

const mapDispatchToProps = dispatch => ({
  download: handle => dispatch(downloadActions.downloadFile({ handle }))
});

const SharePage = ({ handle, download }) => (
  <Main handle={handle} download={download} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePage);
