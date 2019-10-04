import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import fileActions from "../../redux/actions/file-actions";
import SharePageSlide from "./share-page-slide";

const mapStateToProps = state => ({
  handle: queryString.parse(state.router.location.hash).handle
});

const mapDispatchToProps = dispatch => ({
  download: handle => dispatch(fileActions.downloadFile({ handle }))
});

const SharePage = ({ handle, download }) => (
  <SharePageSlide handle={handle} download={download} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePage);
