import React from "react";
import { connect } from "react-redux";

import RegisterRecordRecoveryPhraseSlide from "./register-record-recovery-phrase-slide";
import signupActions from "../../redux/actions/signup-actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setPrivateKey: privateKey =>
    dispatch(signupActions.setPrivateKey({ privateKey }))
});

const RegisterRecordRecoveryPhrase = ({ setPrivateKey }) => (
  <RegisterRecordRecoveryPhraseSlide setPrivateKey={setPrivateKey} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterRecordRecoveryPhrase);
