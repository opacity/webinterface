import React from "react";
import { connect } from "react-redux";

import uploadActions from "../../redux/actions/upload-actions";
import UploadSlide from "./upload-form-slide";

const mapStateToProps = state => ({
  alphaBroker: state.upload.alphaBroker,
  betaBroker: state.upload.betaBroker,
  retentionYears: state.upload.retentionYears
});
const mapDispatchToProps = dispatch => ({
  selectRetentionYears: value =>
    dispatch(uploadActions.selectRetentionYears(value)),
  streamUploadFn: (file, retentionYears, brokers) =>
    dispatch(uploadActions.streamUpload({ file, retentionYears, brokers }))
});

const UploadForm = ({
  initializeUploadFn,
  streamUploadFn,
  alphaBroker,
  betaBroker,
  retentionYears,
  selectRetentionYears
}) => (
  <UploadSlide
    streamUploadFn={streamUploadFn}
    alphaBroker={alphaBroker}
    betaBroker={betaBroker}
    retentionYears={retentionYears}
    selectRetentionYears={selectRetentionYears}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
