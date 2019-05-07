import React from "react";
import { connect } from "react-redux";

import uploadActions from "../../redux/actions/upload-actions";
import downloadActions from "../../redux/actions/download-actions";
import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = state => ({
  accountId: state.authentication.accountId
});

const mapDispatchToProps = dispatch => ({
  upload: (files, accountId) =>
    dispatch(uploadActions.streamUpload({ files, accountId })),
  download: handle => dispatch(downloadActions.streamDownload({ handle }))
});

const FileManager = ({ upload, download, accountId }) => (
  <FileManagerSlide upload={upload} download={download} accountId={accountId} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
