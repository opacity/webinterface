import React from "react";
import { connect } from "react-redux";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import uploadActions from "../../redux/actions/upload-actions";
import downloadActions from "../../redux/actions/download-actions";
import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = state => ({
  masterHandle: state.authentication.masterHandle,
  metadataKey: state.authentication.metadataKey,
  metadata: state.authentication.metadata
});

const mapDispatchToProps = dispatch => ({
  upload: (files, masterHandle) =>
    dispatch(uploadActions.uploadFiles({ files, masterHandle })),
  download: (handle, filename) =>
    dispatch(downloadActions.downloadFile({ handle, filename }))
});

const FileManager = ({
  upload,
  download,
  masterHandle,
  metadataKey,
  metadata
}) => (
  <DragDropContextProvider backend={HTML5Backend}>
    <FileManagerSlide
      upload={upload}
      download={download}
      masterHandle={masterHandle}
      metadataKey={metadataKey}
      metadata={metadata}
    />
  </DragDropContextProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
