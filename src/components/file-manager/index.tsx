import React from "react";
import { connect } from "react-redux";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import uploadActions from "../../redux/actions/upload-actions";
import finderActions from "../../redux/actions/finder-actions";
import downloadActions from "../../redux/actions/download-actions";
import removeActions from "../../redux/actions/remove-actions";
import renameActions from "../../redux/actions/rename-actions";
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
      renameActions.renameFile({
        folder,
        name,
        newName,
        masterHandle
      })
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
  renameFile
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
      createFolder={createFolder}
      removeFolder={removeFolder}
      renameFolder={renameFolder}
      renameFile={renameFile}
    />
  </DragDropContextProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
