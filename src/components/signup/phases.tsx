import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

import { PhaseType } from "components/shared/phases";

import SelectPlanSlide from "./select-plan-slide";
import RecordRecoveryPhraseSlide from "./record-recovery-phrase-slide";
import RecordAccountHandleSlide from "./record-account-handle-slide";
import SendPaymentSlide from "./send-payment-slide";
import { MasterHandle } from "opaque";

const ICON_SELECT_PLAN = require("../../assets/images/icon_select_plan.svg");
const ICON_RECOVERY = require("../../assets/images/icon_signup_recovery.svg");
const ICON_PIN = require("../../assets/images/icon_signup_pin.svg");
const ICON_PAYMENT = require("../../assets/images/icon_signup_payment.svg");
const ICON_CONFIRM = require("../../assets/images/icon_signup_confirm.svg");

const SELECT_PLAN: PhaseType = {
  title: "Select a plan",
  icon: ICON_SELECT_PLAN,
  render: ({ isCustom }) => (
    <SelectPlanSlide isCustom={isCustom} />
  )
}
const SELECT_UPGRADE_PLAN: PhaseType = {
  title: "Select a plan",
  icon: ICON_SELECT_PLAN,
  render: ({ masterHandle, isCustom }: { masterHandle: MasterHandle, isCustom: boolean }) => {
    const [info, setInfo] = useState()

    useEffect(() => {
      masterHandle.getAccountInfo().then(info => setInfo(info))
    }, [])

    useEffect(() => {
      console.log(info)
    }, [info])

    return <SelectPlanSlide isCustom={isCustom} filter={plan => plan.storageInGB > 128} />
  }
}
const RECORD_RECOVERY_PHRASE: PhaseType = {
  title: "Record Recovery Phrase",
  icon: ICON_RECOVERY,
  render: ({ mnemonic, showAddress, isCustom }) => (
    <RecordRecoveryPhraseSlide
      mnemonic={mnemonic}
      next={showAddress}
      isCustom={isCustom}
    />
  )
}
const RECORD_STORAGE_PIN: PhaseType = {
  title: "Record Account Handle",
  icon: ICON_PIN,
  render: ({ masterHandle, setInvoice, waitForPaymentFn, setWaitForPaymentFn, privateKey, plan, accountPaidSuccess, pollPayment, showMnemonic }) => {
    useEffect(() => {
      console.log("registering")

      masterHandle
        .register(plan.durationInMonths, plan.storageInGB)
        .then(({ data: { invoice }, waitForPayment }: any) => {
          setInvoice(invoice);
          setWaitForPaymentFn(() => waitForPayment);
        })
        .catch(console.error);
    }, [masterHandle, plan])

		return (
			<RecordAccountHandleSlide
				handle={privateKey}
				next={() =>
					plan.opqCost === 0 && plan.usdCost === 0
						? accountPaidSuccess()
						: pollPayment(waitForPaymentFn)
				}
				back={() => showMnemonic()}
			/>
		)
	}
}
const SEND_PAYMENT: PhaseType = {
  title: "Send Payment",
  icon: ICON_PAYMENT,
  render: ({ plan, fiatPaymentError, fiatPaymentStatus, invoice, openMetamask, masterHandle, payFiat }) => (
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
  )
}
const CONFIRM_PAYMENT: PhaseType = {
  title: "Confirm Payment",
  icon: ICON_CONFIRM,
  render: ({ privateKey, plan }) => (
    <Redirect to={{ pathname: "/thank-you", state: { handle: privateKey, plan } }} />
  )
}

const SignupPhases: PhaseType[] = [
  SELECT_PLAN,
  RECORD_RECOVERY_PHRASE,
  RECORD_STORAGE_PIN,
  SEND_PAYMENT,
  CONFIRM_PAYMENT
];

const UpgradePhases: PhaseType[] = [
  SELECT_UPGRADE_PLAN,
  SEND_PAYMENT,
  CONFIRM_PAYMENT
];

export { SignupPhases, UpgradePhases };
