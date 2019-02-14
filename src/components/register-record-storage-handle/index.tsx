import React from "react";
import { connect } from "react-redux";

import RegisterRecordStorageHandleSlide from "./register-record-storage-handle-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const RegisterRecordStorageHandle = () => {
  return <RegisterRecordStorageHandleSlide />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterRecordStorageHandle);