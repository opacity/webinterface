import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import RecordRecoveryPhraseSlide from "./record-recovery-phrase-slide";
import RecordStorageHandleSlide from "./record-storage-handle-slide";
import SendPaymentSlide from "./send-payment-slide";
import ConfirmPaymentSlide from "./confirm-payment-slide";

const ICON_RECOVERY = require("../../assets/images/icon_signup_recovery.svg");
const ICON_PIN = require("../../assets/images/icon_signup_pin.svg");
const ICON_PAYMENT = require("../../assets/images/icon_signup_payment.svg");
const ICON_CONFIRM = require("../../assets/images/icon_signup_confirm.svg");

const PHASES = {
  RECORD_RECOVERY_PHRASE: 1,
  RECORD_STORAGE_PIN: 2,
  SEND_PAYMENT: 3,
  CONFIRM_PAYMENT: 4
};

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

import { theme } from "../../config";

const Breadcrumbs = styled.div`
  display: flex;
  padding: 20px 100px;
`;

const Phase = styled.div`
  display: flex;
`;

const PhaseInformation = styled.div`
  position: relative;
`;

const PhaseIcon = styled.img`
  height: 32px;
  width: 32px;
`;

const PhaseNumber = styled.span`
  bottom: -30px;
  color: ${props => props.theme.title.color};
  font-size: 12px;
  left: 50%;
  position: absolute;
  right: 50%;
  text-align: center;
  transform: translateX(-50%);
  width: 200px;
`;

const Line = styled.hr`
  display: inline-block;
  height: 1px;
  width: 150px;
  border: 0;
  border-top: 1px solid ${props => props.theme.title.color};
  margin: 1em 29px;
  padding: 0;
`;

class CreateAccount extends Component<CreateAccountProps, CreateAccountState> {
  state = {
    phase: PHASES.RECORD_RECOVERY_PHRASE
  };

  render() {
    const { handle, setPrivateKey, setStoragePin } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Breadcrumbs>
            <Phase>
              <PhaseInformation>
                <PhaseIcon src={ICON_RECOVERY} />
                <PhaseNumber>1. Record Recovery Phrase</PhaseNumber>
              </PhaseInformation>
              <Line />
            </Phase>
            <Phase>
              <PhaseInformation>
                <PhaseIcon src={ICON_PIN} />
                <PhaseNumber>2. Record Storage Handle and PIN</PhaseNumber>
              </PhaseInformation>
              <Line />
            </Phase>
            <Phase>
              <PhaseInformation>
                <PhaseIcon src={ICON_PAYMENT} />
                <PhaseNumber>3. Send Payment</PhaseNumber>
              </PhaseInformation>
              <Line />
            </Phase>
            <Phase>
              <PhaseInformation>
                <PhaseIcon src={ICON_CONFIRM} />
                <PhaseNumber>4. Confirm Payment</PhaseNumber>
              </PhaseInformation>
            </Phase>
          </Breadcrumbs>
          {this.state.phase === PHASES.RECORD_RECOVERY_PHRASE && (
            <RecordRecoveryPhraseSlide
              setPrivateKey={privateKey => {
                setPrivateKey(privateKey);
                this.setState({ phase: PHASES.RECORD_STORAGE_PIN });
              }}
            />
          )}
          {this.state.phase === PHASES.RECORD_STORAGE_PIN && (
            <RecordStorageHandleSlide
              handle={handle}
              setStoragePin={storagePin => {
                setStoragePin(storagePin);
                this.setState({ phase: PHASES.SEND_PAYMENT });
              }}
            />
          )}
          {this.state.phase === PHASES.SEND_PAYMENT && <SendPaymentSlide />}
          {this.state.phase === PHASES.CONFIRM_PAYMENT && (
            <ConfirmPaymentSlide />
          )}
        </div>
      </ThemeProvider>
    );
  }
}

export default CreateAccount;
