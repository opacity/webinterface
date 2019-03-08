import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { SIGNUP_PHASES, theme } from "../../config";

import Breadcrumbs from "./breadcrumbs";
import RecordRecoveryPhraseSlide from "./record-recovery-phrase-slide";
import RecordStorageHandleSlide from "./record-storage-handle-slide";
import SendPaymentSlide from "./send-payment-slide";
import ConfirmPaymentSlide from "./confirm-payment-slide";
import ScreenContainer from "../shared/screen-container";

interface CreateAccountProps {
  handle;
  cost;
  ethAddress;
  gasPrice;
  setStoragePin;
  setPrivateKey;
}

interface CreateAccountState {
  phase;
}

class CreateAccount extends Component<CreateAccountProps, CreateAccountState> {
  state = {
    phase: SIGNUP_PHASES.RECORD_RECOVERY_PHRASE
  };

  render () {
    const { handle, setPrivateKey, setStoragePin } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ScreenContainer title={"Register on Opacity"}>
          <Breadcrumbs phase={this.state.phase} />
          {this.state.phase === SIGNUP_PHASES.RECORD_RECOVERY_PHRASE && (
            <RecordRecoveryPhraseSlide
              setPrivateKey={privateKey => {
                setPrivateKey(privateKey);
                this.setState({ phase: SIGNUP_PHASES.RECORD_STORAGE_PIN });
              }}
            />
          )}
          {this.state.phase === SIGNUP_PHASES.RECORD_STORAGE_PIN && (
            <RecordStorageHandleSlide
              handle={handle}
              setStoragePin={storagePin => {
                setStoragePin(storagePin);
                this.setState({ phase: SIGNUP_PHASES.SEND_PAYMENT });
              }}
            />
          )}
          {this.state.phase === SIGNUP_PHASES.SEND_PAYMENT && (
            <SendPaymentSlide />
          )}
          {this.state.phase === SIGNUP_PHASES.CONFIRM_PAYMENT && (
            <ConfirmPaymentSlide />
          )}
        </ScreenContainer>
      </ThemeProvider>
    );
  }
}

export default CreateAccount;
