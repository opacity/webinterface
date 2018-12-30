import React from "react";
import { connect } from "react-redux";

import Prompt from "./prompt";

const mapStateToProps = state => ({
  upload: state.upload
});
const mapDispatchToProps = dispatch => ({});

const PageNavigationPrompt = ({ upload }) => (
  <Prompt
    when={upload.invoice && upload.uploadState == "UPLOADING"}
    message={_ => "You have started an upload, are you sure you want to cancel your upload?"}
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(PageNavigationPrompt);
