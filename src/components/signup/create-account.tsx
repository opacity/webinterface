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
  getInvoice;
  invoice;
}

interface CreateAccountState {
  phase;
  privateKey;
}

class CreateAccount extends Component<CreateAccountProps, CreateAccountState> {
  state = {
    phase: SIGNUP_PHASES.RECORD_RECOVERY_PHRASE,
    privateKey: null
  };

  render() {
    const { invoice, getInvoice } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ScreenContainer title={"Register on Opacity"}>
          <Breadcrumbs phase={this.state.phase} />
          {this.state.phase === SIGNUP_PHASES.RECORD_RECOVERY_PHRASE && (
            <RecordRecoveryPhraseSlide
              setPrivateKey={privateKey => {
                this.setState({
                  phase: SIGNUP_PHASES.RECORD_STORAGE_PIN,
                  privateKey
                });
              }}
            />
          )}
          {this.state.phase === SIGNUP_PHASES.RECORD_STORAGE_PIN && (
            <RecordStorageHandleSlide
              handle={this.state.privateKey}
              setStoragePin={storagePin => {
                const { privateKey } = this.state;
                getInvoice({ privateKey, storagePin });
                this.setState({ phase: SIGNUP_PHASES.SEND_PAYMENT });
              }}
            />
          )}
          {this.state.phase === SIGNUP_PHASES.SEND_PAYMENT && (
            <SendPaymentSlide invoice={invoice} />
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
