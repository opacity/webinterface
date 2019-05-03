import React from "react";
import { connect } from "react-redux";

import uploadActions from "../../redux/actions/upload-actions";
import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = state => ({
  accountId: state.authentication.accountId
});

const mapDispatchToProps = dispatch => ({
  upload: (files, accountId) =>
    dispatch(uploadActions.streamUpload({ files, accountId }))
});

const FileManager = ({ upload, accountId }) => (
  <FileManagerSlide upload={upload} accountId={accountId} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
