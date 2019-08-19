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
  moveFile: (file, to, directory, masterHandle) =>
    dispatch(fileActions.moveFile({ file, to, directory, masterHandle })),
  moveFolder: (folder, to, directory, masterHandle) =>
    dispatch(folderActions.moveFolder({ folder, to, directory, masterHandle })),
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
      removeFolder={removeFolder}
      renameFolder={renameFolder}
      renameFile={renameFile}
      moveFile={moveFile}
      moveFolder={moveFolder}
      removeFileByVersion={removeFileByVersion}
      removeFiles={removeFiles}
      uploadFiles={uploadFiles}
    />
  </DndProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
