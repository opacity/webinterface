import React from "react";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import uploadActions from "../../redux/actions/upload-actions";
import finderActions from "../../redux/actions/finder-actions";
import downloadActions from "../../redux/actions/download-actions";
import removeActions from "../../redux/actions/remove-actions";
import fileActions from "../../redux/actions/file-actions";
import folderActions from "../../redux/actions/folder-actions";

import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = (state, props) => {
  const folderName = props.match.params.folderName;
  return {
    directory: folderName ? `/${folderName}` : "/",
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
  uploadFiles: ({ files, directory, masterHandle }) =>
    dispatch(uploadActions.uploadFiles({ files, directory, masterHandle })),
  downloadFile: ({ handle }) =>
    dispatch(downloadActions.downloadFile({ handle })),
  removeFileByVersion: ({ name, version, directory, masterHandle }) =>
    dispatch(
      removeActions.removeFileByVersion({
        name,
        version,
        directory,
        masterHandle
      })
    ),
  getFileList: (folder, masterHandle) =>
    dispatch(finderActions.getFileList({ folder, masterHandle })),
  downloadFiles: files => dispatch(downloadActions.downloadFiles({ files })),
  removeFiles: ({ files, masterHandle, folder }) =>
    dispatch(removeActions.removeFiles({ files, masterHandle, folder })),
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
  moveFile: (file, to, currentFolder, masterHandle) =>
    dispatch(fileActions.moveFile({ file, to, currentFolder, masterHandle })),
  moveFolder: (folder, to, currentFolder, masterHandle) =>
    dispatch(
      folderActions.moveFolder({ folder, to, currentFolder, masterHandle })
  getFileList: ({ directory, masterHandle }) =>
    dispatch(finderActions.getFileList({ directory, masterHandle })),
  downloadFiles: ({ files }) =>
    dispatch(downloadActions.downloadFiles({ files })),
  removeFiles: ({ files, masterHandle, directory }) =>
    dispatch(removeActions.removeFiles({ files, masterHandle, directory })),
  createFolder: ({ masterHandle, directory, name }) =>
    dispatch(folderActions.createFolder({ masterHandle, directory, name })),
  removeFolder: ({ folder, name, directory, masterHandle }) =>
    dispatch(
      folderActions.removeFolder({ folder, name, directory, masterHandle })

    )
});

const FileManager = ({
  createFolder,
  directory,
  downloadFile,
  downloadFiles,
  expirationDate,
  files,
  folders,
  getFileList,
  isLoading,
  masterHandle,
  metadata,
  removeFileByVersion,
  removeFiles,
  removeFolder,
  renameFolder,
  renameFile,
  moveFile,
  moveFolder,
  downloadFiles,
  removeFiles,
  storageLimit,
  storageUsed,
  uploadFiles
}) => (
  <DndProvider backend={HTML5Backend}>
    <FileManagerSlide
      createFolder={createFolder}
      directory={directory}
      downloadFile={downloadFile}
      downloadFiles={downloadFiles}
      expirationDate={expirationDate}
      files={files}
      folders={folders}
      getFileList={getFileList}
      isLoading={isLoading}
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
      downloadFiles={downloadFiles}
      removeFileByVersion={removeFileByVersion}
      removeFiles={removeFiles}
      removeFolder={removeFolder}
      storageLimit={storageLimit}
      storageUsed={storageUsed}
      uploadFiles={uploadFiles}
    />
  </DndProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
