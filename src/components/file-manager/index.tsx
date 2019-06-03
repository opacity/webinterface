import React from "react";
import { connect } from "react-redux";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import uploadActions from "../../redux/actions/upload-actions";
import filesActions from "../../redux/actions/files-actions";
import downloadActions from "../../redux/actions/download-actions";
import removeActions from "../../redux/actions/remove-actions";
import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = state => ({
  files: state.files.list,
  masterHandle: state.authentication.masterHandle,
  metadata: state.authentication.metadata
});

const mapDispatchToProps = dispatch => ({
  upload: (files, masterHandle) =>
    dispatch(uploadActions.uploadFiles({ files, masterHandle })),
  download: handle => dispatch(downloadActions.downloadFile({ handle })),
  removeFileByName: (name, handle, masterHandle) =>
    dispatch(removeActions.removeFileByName({ name, handle, masterHandle })),
  removeFileByHandle: (name, handle, masterHandle) =>
    dispatch(removeActions.removeFileByHandle({ name, handle, masterHandle })),
  getFileList: masterHandle =>
    dispatch(filesActions.getFileList({ masterHandle }))
});

const FileManager = ({
  upload,
  files,
  getFileList,
  download,
  removeFileByName,
  removeFileByHandle,
  masterHandle,
  metadata
}) => (
  <DragDropContextProvider backend={HTML5Backend}>
    <FileManagerSlide
      files={files}
      getFileList={getFileList}
      upload={upload}
      download={download}
      removeFileByName={removeFileByName}
      removeFileByHandle={removeFileByHandle}
      masterHandle={masterHandle}
      metadata={metadata}
    />
  </DragDropContextProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
