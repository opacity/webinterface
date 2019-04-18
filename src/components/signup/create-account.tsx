import React from "react";
import { ThemeProvider } from "styled-components";
import { SIGNUP_PHASES, theme } from "../../config";

import Breadcrumbs from "./breadcrumbs";
import RecordRecoveryPhraseSlide from "./record-recovery-phrase-slide";
import RecordAccountHandleSlide from "./record-account-handle-slide";
import SendPaymentSlide from "./send-payment-slide";
import ConfirmPaymentSlide from "./confirm-payment-slide";
import ScreenContainer from "../shared/screen-container";

const CreateAccount = ({
  invoice,
  setPrivateKey,
  getInvoice,
  openMetamask,
  privateKey,
  phase
}) => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Register on Opacity"}>
      <Breadcrumbs phase={phase} />
      {phase === SIGNUP_PHASES.RECORD_RECOVERY_PHRASE && (
        <RecordRecoveryPhraseSlide
          setPrivateKey={privateKey => setPrivateKey(privateKey)}
        />
      )}
      {phase === SIGNUP_PHASES.RECORD_STORAGE_PIN && (
        <RecordAccountHandleSlide
          handle={privateKey}
          setStoragePin={storagePin => getInvoice(privateKey, storagePin)}
        />
      )}
      {phase === SIGNUP_PHASES.SEND_PAYMENT && (
        <SendPaymentSlide invoice={invoice} openMetamask={openMetamask} />
      )}
      {phase === SIGNUP_PHASES.CONFIRM_PAYMENT && <ConfirmPaymentSlide />}
    </ScreenContainer>
  </ThemeProvider>
);

export default CreateAccount;
