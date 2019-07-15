import React from "react";
import { connect } from "react-redux";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import uploadActions from "../../redux/actions/upload-actions";
import filesActions from "../../redux/actions/files-actions";
import downloadActions from "../../redux/actions/download-actions";
import removeActions from "../../redux/actions/remove-actions";
import foldersActions from "../../redux/actions/folders-actions";

import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = state => ({
  files: state.files.list,
  masterHandle: state.authentication.masterHandle,
  metadata: state.authentication.metadata,
  storageUsed: state.authentication.storageUsed,
  storageLimit: state.authentication.storageLimit,
  expirationDate: state.authentication.expirationDate
});

const mapDispatchToProps = dispatch => ({
  upload: ({ files, folder, masterHandle }) =>
    dispatch(uploadActions.uploadFiles({ files, folder, masterHandle })),
  download: handle => dispatch(downloadActions.downloadFile({ handle })),
  removeFileByHandle: (name, handle, masterHandle) =>
    dispatch(removeActions.removeFileByHandle({ name, handle, masterHandle })),
  getFileList: (folder, masterHandle) =>
    dispatch(filesActions.getFileList({ folder, masterHandle })),
  createFolder: (masterHandle, folder, name) =>
    dispatch(foldersActions.createFolder({ masterHandle, folder, name }))
});

const FileManager = ({
  upload,
  files,
  getFileList,
  download,
  removeFileByHandle,
  masterHandle,
  metadata,
  storageUsed,
  storageLimit,
  expirationDate,
  createFolder
}) => (
  <DragDropContextProvider backend={HTML5Backend}>
    <FileManagerSlide
      files={files}
      getFileList={getFileList}
      upload={upload}
      download={download}
      removeFileByHandle={removeFileByHandle}
      masterHandle={masterHandle}
      metadata={metadata}
      storageUsed={storageUsed}
      storageLimit={storageLimit}
      expirationDate={expirationDate}
      createFolder={createFolder}
    />
  </DragDropContextProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
