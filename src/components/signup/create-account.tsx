import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Breadcrumbs from "./breadcrumbs";
import RecordRecoveryPhraseSlide from "./record-recovery-phrase-slide";
import RecordAccountHandleSlide from "./record-account-handle-slide";
import SendPaymentSlide from "./send-payment-slide";
import ConfirmPaymentSlide from "./confirm-payment-slide";
import ScreenContainer from "../shared/screen-container";
import Header from "../shared/header";

import { HEADER_TYPES, SIGNUP_PHASES, theme } from "../../config";

const Container = styled.div``;

const CreateAccount = ({
  invoice,
  setPrivateKey,
  getInvoice,
  openMetamask,
  privateKey,
  phase
}) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header type={HEADER_TYPES.SCREEN_CONTAINER} />
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
    </Container>
  </ThemeProvider>
);

export default CreateAccount;
