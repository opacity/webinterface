import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Breadcrumbs from "./breadcrumbs";
import SelectPlanSlide from "./select-plan-slide";
import RecordRecoveryPhraseSlide from "./record-recovery-phrase-slide";
import RecordAccountHandleSlide from "./record-account-handle-slide";
import SendPaymentSlide from "./send-payment-slide";
import ConfirmPaymentSlide from "./confirm-payment-slide";
import ScreenContainer from "../shared/screen-container";
import Header from "../shared/header";

import { OPAQUE, HEADER_TYPES, SIGNUP_PHASES } from "../../config";

import { Account, MasterHandle } from "opaque";

const Container = styled.div`
  width: 100%;
`;

const CreateAccount = ({
  isCustom,
  fiatPaymentError,
  fiatPaymentStatus,
  openMetamask,
  payFiat,
  phase,
  accountPaidSuccess,
  plan,
  pollPayment,
  showAddress,
  showMnemonic
}) => {
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [masterHandle, setMasterHandle] = useState<MasterHandle | null>(null);
  const [privateKey, setPrivateKey] = useState("");
  const [invoice, setInvoice] = useState<any>(null);
  const [waitForPaymentFn, setWaitForPaymentFn] = useState(() => false);

  useEffect(
    () => {
      // send them back to the first menomic screen
      // everytime they choose a new plan
      if (plan) {
        showMnemonic();
      }
    },
    [plan]
  );

  useEffect(() => {
    const account = new Account();
    setMnemonic(account.mnemonic);

    const masterHandle: MasterHandle = new MasterHandle(
      {
        account
      },
      {
        uploadOpts: OPAQUE.UPLOAD_OPTIONS,
        downloadOpts: OPAQUE.DOWNLOAD_OPTIONS
      }
    );

    setMasterHandle(masterHandle);
    setPrivateKey(masterHandle.handle);
  }, []);

  useEffect(
    () => {
      if (phase === SIGNUP_PHASES.RECORD_STORAGE_PIN && plan && masterHandle) {
        masterHandle
          .register(plan.durationInMonths, plan.storageInGB)
          .then(({ data: { invoice }, waitForPayment }: any) => {
            setInvoice(invoice);
            setWaitForPaymentFn(() => waitForPayment);
          })
          .catch(console.log);
      }
    },
    [phase]
  );

  return (
    <Container>
      <Header type={HEADER_TYPES.EMPTY} />
      <ScreenContainer
        title={
          plan
            ? `Register on Opacity: ${plan.title} Plan ${plan.storageLimit}`
            : "Register on Opacity"
        }
      >
        <Breadcrumbs phase={phase} />
        {phase === SIGNUP_PHASES.SELECT_PLAN && (
          <SelectPlanSlide isCustom={isCustom} />
        )}
        {phase === SIGNUP_PHASES.RECORD_RECOVERY_PHRASE && (
          <RecordRecoveryPhraseSlide
            mnemonic={mnemonic}
            next={showAddress}
            isCustom={isCustom}
          />
        )}
        {phase === SIGNUP_PHASES.RECORD_STORAGE_PIN && (
          <RecordAccountHandleSlide
            handle={privateKey}
            next={() =>
              plan.opqCost === 0 && plan.usdCost === 0
                ? accountPaidSuccess()
                : pollPayment(waitForPaymentFn)
            }
            back={() => showMnemonic()}
          />
        )}
        {phase === SIGNUP_PHASES.SEND_PAYMENT && (
          <SendPaymentSlide
            opqCost={plan.opqCost}
            fiatPaymentError={fiatPaymentError}
            fiatPaymentStatus={fiatPaymentStatus}
            invoice={invoice}
            openMetamask={openMetamask}
            payFiat={stripeToken =>
              payFiat({ masterHandle, stripeToken, timestamp: Date.now() })
            }
            storageLimit={plan.storageLimit}
            usdCost={
              plan.discountedUsdCost ? plan.discountedUsdCost : plan.usdCost
            }
          />
        )}
        {phase === SIGNUP_PHASES.CONFIRM_PAYMENT && (
          <ConfirmPaymentSlide handle={privateKey} />
        )}
      </ScreenContainer>
    </Container>
  );
};

export default CreateAccount;
