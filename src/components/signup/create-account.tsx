import React, { Component } from "react";

import RecordRecoveryPhraseSlide from "./record-recovery-phrase-slide";
import RecordStorageHandleSlide from "./record-storage-handle-slide";
import SendPaymentSlide from "./send-payment-slide";
import ConfirmPaymentSlide from "./confirm-payment-slide";

const PHASES = {
  RECORD_RECOVERY_PHRASE: "RECORD_RECOVERY_PHRASE",
  RECORD_STORAGE_PIN: "RECORD_STORAGE_PIN",
  SEND_PAYMENT: "SEND_PAYMENT",
  CONFIRM_PAYMENT: "CONFIRM_PAYMENT"
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

class CreateAccount extends Component<CreateAccountProps, CreateAccountState> {
  state = {
    phase: PHASES.RECORD_RECOVERY_PHRASE
  };

  render () {
    const { handle, setPrivateKey, setStoragePin } = this.props;
    return (
      <div>
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
        {this.state.phase === PHASES.CONFIRM_PAYMENT && <ConfirmPaymentSlide />}
      </div>
    );
  }
}

export default CreateAccount;
