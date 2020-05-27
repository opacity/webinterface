import React, { useState, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";

import { FIAT_PAYMENT_STATUSES, theme } from "../../config";

import CryptoPayment from "./crypto-payment";
import FiatPayment from "./fiat-payment";

const Container = styled.div`
  text-align: center;
`;

const Tabs = styled.div`
  display: flex;
`;

interface TabProps {
  isActive: boolean;
}

const Tab = styled.div<TabProps>`
  display: flex;
  flex: 1;
  cursor: pointer;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom: ${props =>
    props.isActive ? `2px solid ${props.theme.title.color}` : "none"};
  color: ${props => (props.isActive ? props.theme.title.color : "lightgrey")};
`;

const PaymentInfo = styled.div`
  padding-top: 20px;
`;

enum TABS {
  CRYPTO,
  FIAT
}

const SendPaymentSlide = ({
  opqCost,
  fiatPaymentError,
  fiatPaymentStatus,
  invoice,
  openMetamask,
  payFiat,
  storageLimit,
  usdCost
}: {
  opqCost,
  fiatPaymentError?,
  fiatPaymentStatus?,
  invoice,
  openMetamask,
  payFiat?,
  storageLimit,
  usdCost?
}) => {
  const [activeTab, setActiveTab] = useState(TABS.CRYPTO);

  const selectTab = (tab, status) => {
    const submittingFiatPayment =
      activeTab === TABS.FIAT &&
      ![FIAT_PAYMENT_STATUSES.IDLE, FIAT_PAYMENT_STATUSES.ERROR].includes(
        status
      );
    if (!submittingFiatPayment) {
      setActiveTab(tab);
    }
  };

  const includeFiat = useMemo(() => payFiat && usdCost, [payFiat, usdCost]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Tabs>
          <Tab
            isActive={activeTab === TABS.CRYPTO}
            onClick={() => selectTab(TABS.CRYPTO, fiatPaymentStatus)}
          >
            Pay with cryptocurrency
          </Tab>
          { includeFiat && (
            <Tab
              isActive={activeTab === TABS.FIAT}
              onClick={() => selectTab(TABS.FIAT, fiatPaymentStatus)}
            >
              Pay with USD
            </Tab>
          ) }
        </Tabs>
        <PaymentInfo>
          {activeTab === TABS.CRYPTO && (
            <CryptoPayment
              invoice={invoice}
              openMetamask={openMetamask}
              cost={opqCost}
              storageLimit={storageLimit}
            />
          )}
          {includeFiat && activeTab === TABS.FIAT && (
            <FiatPayment
              cost={usdCost}
              storageLimit={storageLimit}
              payFiat={payFiat}
              paymentStatus={fiatPaymentStatus}
              paymentError={fiatPaymentError}
            />
          )}
        </PaymentInfo>
      </Container>
    </ThemeProvider>
  );
};

export default SendPaymentSlide;
