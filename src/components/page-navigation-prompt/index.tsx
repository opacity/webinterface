import React from "react";
import { connect } from "react-redux";

import Prompt from "./prompt";

const mapStateToProps = state => ({
  upload: state.upload
});
const mapDispatchToProps = dispatch => ({});

const PageNavigationPrompt = ({ upload }) => (
  <Prompt
    when={upload.invoice && ["UPLOADING", "ATTACHING_META"].includes(upload.uploadState)}
    message={(location, action) => {
      return action !== "REPLACE"
        ? "You have started an upload, are you sure you want to cancel your upload?"
        : null
    } }
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(PageNavigationPrompt);
