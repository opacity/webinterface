import React from "react";
import { connect } from "react-redux";

import RegisterRecordStorageHandleSlide from "./register-record-storage-handle-slide";
import signupActions from "../../redux/actions/signup-actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setStoragePin: storagePin =>
    dispatch(signupActions.setStoragePin({ storagePin }))
});

const RegisterRecordStorageHandle = ({ setStoragePin }) => (
  <RegisterRecordStorageHandleSlide
    handle="handle"
    setStoragePin={setStoragePin}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterRecordStorageHandle);
