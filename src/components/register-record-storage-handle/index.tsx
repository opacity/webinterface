import React from "react";
import { connect } from "react-redux";

import RegisterRecordStorageHandleSlide from "./register-record-storage-handle-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const RegisterRecordStorageHandle = () => (
  <RegisterRecordStorageHandleSlide handle="handle" />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterRecordStorageHandle);
