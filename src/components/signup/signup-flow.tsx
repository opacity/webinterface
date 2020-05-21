import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Breadcrumbs from "./breadcrumbs";
import ScreenContainer from "../shared/screen-container";
import Header from "../shared/header";

import { OPAQUE, HEADER_TYPES } from "../../config";

import { Account, MasterHandle } from "opaque";

import Phases from "../../components/shared/phases";

const Container = styled.div`
  width: 100%;
`;

const SignupFlow = ({
  isCustom,
  fiatPaymentError,
  fiatPaymentStatus,
  openMetamask,
  payFiat,
  phases,
  phase,
  accountPaidSuccess,
  plan,
  pollPayment,
  showAddress,
  showMnemonic,
  masterHandle: mh
}) => {
  const [masterHandle, setMasterHandle] = useState<MasterHandle | null>(mh);
  const [invoice, setInvoice] = useState<any>(null);
  const [waitForPaymentFn, setWaitForPaymentFn] = useState(() => () => {});
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [privateKey, setPrivateKey] = useState("");

  useEffect(
    () => {
      // send them back to the first menomic screen
      // everytime they choose a new plan
      if (plan && showMnemonic) {
        showMnemonic();
      }
    },
    [plan]
  );

  useEffect(() => {
    if (!mh) {
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
    }
  }, [mh]);

  return (
    <Container>
      <Header type={HEADER_TYPES.EMPTY} />
      <ScreenContainer
        title={
          plan
            ? `Register Your Plan: Opacity ${plan.title} ${plan.storageLimit}`
            : "Choose your Opacity plan"
        }
      >
        <Breadcrumbs
          phases={phases}
          phase={phase}
        />
        <Phases
          phases={phases}
          phase={phase}
          props={{
            masterHandle,
            mnemonic,
            privateKey,
            invoice,
            setInvoice,
            waitForPaymentFn,
            setWaitForPaymentFn,
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
          }}
        />
      </ScreenContainer>
    </Container>
  );
};

export default SignupFlow;
