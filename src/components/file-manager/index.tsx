import React from "react";
import { connect } from "react-redux";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import uploadActions from "../../redux/actions/upload-actions";
import finderActions from "../../redux/actions/finder-actions";
import downloadActions from "../../redux/actions/download-actions";
import removeActions from "../../redux/actions/remove-actions";
import folderActions from "../../redux/actions/folder-actions";

import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = (state, props) => {
  const folderName = props.match.params.folderName;
  return {
    currentFolder: folderName ? `/${folderName}` : "/",
    files: state.finder.files,
    folders: state.finder.folders,
    isLoading: state.finder.isLoading,
    masterHandle: state.authentication.masterHandle,
    metadata: state.authentication.metadata,
    storageUsed: state.authentication.storageUsed,
    storageLimit: state.authentication.storageLimit,
    expirationDate: state.authentication.expirationDate
  };
};

const mapDispatchToProps = dispatch => ({
  upload: ({ files, folder, masterHandle }) =>
    dispatch(uploadActions.uploadFiles({ files, folder, masterHandle })),
  download: handle => dispatch(downloadActions.downloadFile({ handle })),
  removeFileByHandle: (name, handle, masterHandle) =>
    dispatch(removeActions.removeFileByHandle({ name, handle, masterHandle })),
  getFileList: masterHandle =>
    dispatch(filesActions.getFileList({ masterHandle })),
  downloadFiles: files => dispatch(downloadActions.downloadFiles({ files })),
  removeFiles: (files, masterHandle) =>
    dispatch(removeActions.removeFiles({ files, masterHandle }))
  createFolder: (masterHandle, folder, name) =>
    dispatch(folderActions.createFolder({ masterHandle, folder, name })),
  removeFolder: (name, folder, masterHandle) =>
    dispatch(folderActions.removeFolder({ name, folder, masterHandle }))
});

const FileManager = ({
  currentFolder,
  isLoading,
  upload,
  files,
  folders,
  getFileList,
  download,
  removeFileByHandle,
  masterHandle,
  metadata,
  storageUsed,
  storageLimit,
  expirationDate,
  downloadFiles,
  removeFiles
  createFolder,
  removeFolder
}) => (
  <DragDropContextProvider backend={HTML5Backend}>
    <FileManagerSlide
      currentFolder={currentFolder}
      isLoading={isLoading}
      files={files}
      folders={folders}
      getFileList={getFileList}
      upload={upload}
      download={download}
      removeFileByHandle={removeFileByHandle}
      masterHandle={masterHandle}
      metadata={metadata}
      storageUsed={storageUsed}
      storageLimit={storageLimit}
      expirationDate={expirationDate}
      downloadFiles={downloadFiles}
      removeFiles={removeFiles}
      createFolder={createFolder}
      removeFolder={removeFolder}
    />
  </DragDropContextProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
