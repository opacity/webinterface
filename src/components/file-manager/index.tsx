import React from "react";
import { connect } from "react-redux";

import FileManagerSlide from "./file-manager-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const FileManager = () => <FileManagerSlide />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager);
