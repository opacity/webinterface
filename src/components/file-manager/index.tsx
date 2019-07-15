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
    blah: props.match,
    files: state.finder.files,
    folders: state.finder.folders,
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
    dispatch(folderActions.createFolder({ masterHandle, folder, name }))
});

const FileManager = ({
  currentFolder,
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
  blah,
  createFolder
}) => (
  <DragDropContextProvider backend={HTML5Backend}>
    <FileManagerSlide
      blah={blah}
      currentFolder={currentFolder}
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
    />
  </DragDropContextProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
