import React from "react";
import { connect } from "react-redux";

import uploadActions from "../../redux/actions/upload-actions";
import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  upload: (file, accountId) =>
    dispatch(uploadActions.streamUpload({ file, accountId }))
});

const FileManager = ({ upload }) => <FileManagerSlide upload={upload} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
