import React from "react";
import { connect } from "react-redux";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import uploadActions from "../../redux/actions/upload-actions";
import filesActions from "../../redux/actions/files-actions";
import downloadActions from "../../redux/actions/download-actions";
import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = state => ({
  files: state.files.list,
  masterHandle: state.authentication.masterHandle,
  metadataKey: state.authentication.metadataKey,
  metadata: state.authentication.metadata
});

const mapDispatchToProps = dispatch => ({
  upload: (files, masterHandle) =>
    dispatch(uploadActions.uploadFiles({ files, masterHandle })),
  download: handle => dispatch(downloadActions.downloadFile({ handle })),
  getFileList: masterHandle =>
    dispatch(filesActions.getFileList({ masterHandle }))
});

const FileManager = ({
  upload,
  files,
  getFileList,
  download,
  masterHandle,
  metadataKey,
  metadata
}) => (
  <DragDropContextProvider backend={HTML5Backend}>
    <FileManagerSlide
      files={files}
      getFileList={getFileList}
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
