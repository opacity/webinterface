import React from "react";
import { connect } from "react-redux";

import downloadUploadHistoryActions from "../../redux/actions/download-upload-history-actions";
import DownloadUploadHistoryButton from "./download-upload-history-button";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  beginDownloadUploadHistoryFn: () =>
    dispatch(downloadUploadHistoryActions.beginDownloadUploadHistory())
});

const DownloadUploadHistory = ({ beginDownloadUploadHistoryFn }) => (
  <DownloadUploadHistoryButton download={beginDownloadUploadHistoryFn} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DownloadUploadHistory);
