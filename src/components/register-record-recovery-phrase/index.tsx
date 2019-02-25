import React from "react";
import { connect } from "react-redux";

import RegisterRecordRecoveryPhraseSlide from "./register-record-recovery-phrase-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const RegisterRecordRecoveryPhrase = () => (
  <RegisterRecordRecoveryPhraseSlide />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterRecordRecoveryPhrase);
