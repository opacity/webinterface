import React from "react";
import { connect } from "react-redux";

import uploadActions from "../../redux/actions/upload-actions";
import finderActions from "../../redux/actions/finder-actions";
import downloadActions from "../../redux/actions/download-actions";
import removeActions from "../../redux/actions/remove-actions";
import fileActions from "../../redux/actions/file-actions";
import folderActions from "../../redux/actions/folder-actions";

import FileManagerSlide from "./file-manager-slide";

import dragDropContext from "./dragDropContext";

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
  removeFileByHandle: ({ name, handle, folder, masterHandle }) =>
    dispatch(
      removeActions.removeFileByHandle({ name, handle, folder, masterHandle })
    ),
  getFileList: (folder, masterHandle) =>
    dispatch(finderActions.getFileList({ folder, masterHandle })),
  createFolder: (masterHandle, folder, name) =>
    dispatch(folderActions.createFolder({ masterHandle, folder, name })),
  removeFolder: (name, folder, masterHandle) =>
    dispatch(folderActions.removeFolder({ name, folder, masterHandle })),
  renameFolder: (folder, name, newName, masterHandle) =>
    dispatch(
      folderActions.renameFolder({
        folder,
        name,
        newName,
        masterHandle
      })
    ),
  renameFile: (folder, name, newName, masterHandle) =>
    dispatch(
      fileActions.renameFile({
        folder,
        name,
        newName,
        masterHandle
      })
    ),
  moveFolder: (file, to, currentFolder, masterHandle) =>
    dispatch(fileActions.moveFile({ file, to, currentFolder, masterHandle })),
  moveFile: (folder, to, currentFolder, masterHandle) =>
    dispatch(
      folderActions.moveFolder({ folder, to, currentFolder, masterHandle })
    )
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
  createFolder,
  removeFolder,
  renameFolder,
  renameFile,
  moveFile,
  moveFolder
}) => (
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
    createFolder={createFolder}
    removeFolder={removeFolder}
    renameFolder={renameFolder}
    renameFile={renameFile}
    moveFile={moveFile}
    moveFolder={moveFolder}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(dragDropContext(FileManager));
