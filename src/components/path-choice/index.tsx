import React from "react";
import { connect } from "react-redux";

import ChoiceSlide from "../path-choice/choice-slide";
import navigationActions from "../../redux/actions/navigation-actions";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  visitUploadFormFn: () => dispatch(navigationActions.visitUploadForm()),
  visitDownloadFormFn: () => dispatch(navigationActions.visitDownloadForm())
});

const PathChoice = ({ visitUploadFormFn, visitDownloadFormFn }) => (
  <ChoiceSlide
    visitUploadFormFn={visitUploadFormFn}
    visitDownloadFormFn={visitDownloadFormFn}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PathChoice);
