import React from "react";
import { connect } from "react-redux";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

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
  <DragDropContextProvider backend={HTML5Backend}>
    <FileManagerSlide
      upload={upload}
      download={download}
      accountId={accountId}
    />
  </DragDropContextProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
