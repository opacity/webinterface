import React from "react";
import { connect } from "react-redux";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import uploadActions from "../../redux/actions/upload-actions";
import discardActions from "../../redux/actions/discard-actions";
import downloadActions from "../../redux/actions/download-actions";
import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = state => ({
  accountId: state.authentication.accountId,
  metadataKey: state.authentication.metadataKey,
  metadata: state.authentication.metadata
});

const mapDispatchToProps = dispatch => ({
  upload: (files, accountId) =>
    dispatch(uploadActions.uploadFiles({ files, accountId })),
  discard: handle => dispatch(discardActions.streamDiscard({ handle })),
  download: (handle, filename) =>
    dispatch(downloadActions.downloadFile({ handle, filename }))
});

const FileManager = ({
  upload,
  download,
  accountId,
  metadataKey,
  metadata
}) => (
  <DragDropContextProvider backend={HTML5Backend}>
    <FileManagerSlide
      upload={upload}
      discard={discard}
      download={download}
      accountId={accountId}
      metadataKey={metadataKey}
      metadata={metadata}
    />
  </DragDropContextProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
