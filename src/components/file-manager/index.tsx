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
  uploadFiles: ({ files, directory, masterHandle, isDirectory }) =>
    dispatch(
      uploadActions.uploadFiles({ files, directory, masterHandle, isDirectory })
    ),
  download: handle => dispatch(downloadActions.downloadFile({ handle })),
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
  storageLimit,
  storageUsed,
  uploadFiles
}) => (
  <DragDropContextProvider backend={HTML5Backend}>
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
      removeFileByVersion={removeFileByVersion}
      removeFiles={removeFiles}
      removeFolder={removeFolder}
      storageLimit={storageLimit}
      storageUsed={storageUsed}
      uploadFiles={uploadFiles}
    />
  </DragDropContextProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
