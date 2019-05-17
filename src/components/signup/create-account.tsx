import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import Breadcrumbs from "./breadcrumbs";
import RecordRecoveryPhraseSlide from "./record-recovery-phrase-slide";
import RecordAccountHandleSlide from "./record-account-handle-slide";
import SendPaymentSlide from "./send-payment-slide";
import ConfirmPaymentSlide from "./confirm-payment-slide";
import ScreenContainer from "../shared/screen-container";
import Header from "../shared/header";

import { HEADER_TYPES, SIGNUP_PHASES, theme } from "../../config";

import { Account, MasterHandle } from "opaque";

const Container = styled.div`
  width: 100%;
`;

const uploadOpts = {
  autostart: true,
  endpoint: "http://3.19.75.128:3000",
  params: {
    blockSize: 64 * 1024, // 256 KiB encryption blocks
    partSize: 10 * 1024 * 1024
  }
};

const downloadOpts = {
  endpoint: "http://3.19.75.128:3000"
};

const CreateAccount = ({ showAddress, pollPayment, openMetamask, phase }) => {
  const [invoice, setInvoice] = useState("");
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [waitForPaymentFn, setWaitForPaymentFn] = useState(() => false);
  const [privateKey, setPrivateKey] = useState("");

  useEffect(() => {
    const account = new Account();
    setMnemonic(account.mnemonic);

    const masterHandle: MasterHandle = new MasterHandle(
      {
        account
      },
      {
        uploadOpts,
        downloadOpts
      }
    );

    setPrivateKey(masterHandle.handle);

    masterHandle
      .register()
      .then(({ data: { invoice }, waitForPayment }: any) => {
        setInvoice(invoice);
        setWaitForPaymentFn(waitForPayment);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.SCREEN_CONTAINER} />
        <ScreenContainer title={"Register on Opacity"}>
          <Breadcrumbs phase={phase} />
          {phase === SIGNUP_PHASES.RECORD_RECOVERY_PHRASE && (
            <RecordRecoveryPhraseSlide mnemonic={mnemonic} next={showAddress} />
          )}
          {phase === SIGNUP_PHASES.RECORD_STORAGE_PIN && (
            <RecordAccountHandleSlide
              handle={privateKey}
              next={() => pollPayment(waitForPaymentFn)}
            />
          )}
          {phase === SIGNUP_PHASES.SEND_PAYMENT && (
            <SendPaymentSlide invoice={invoice} openMetamask={openMetamask} />
          )}
          {phase === SIGNUP_PHASES.CONFIRM_PAYMENT && (
            <ConfirmPaymentSlide handle={privateKey} />
          )}
        </ScreenContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CreateAccount;
