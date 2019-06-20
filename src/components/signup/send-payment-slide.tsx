import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import CryptoPayment from "./crypto-payment";

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

const SendPaymentSlide = ({ invoice, openMetamask, cost }) => {
  const [activeTab, setActiveTab] = useState(TABS.CRYPTO);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Tabs>
          <Tab
            isActive={activeTab === TABS.CRYPTO}
            onClick={() => setActiveTab(TABS.CRYPTO)}
          >
            Pay with cryptocurrency
          </Tab>
          <Tab
            isActive={activeTab === TABS.FIAT}
            onClick={() => setActiveTab(TABS.FIAT)}
          >
            Pay with USD
          </Tab>
        </Tabs>
        <PaymentInfo>
          {activeTab === TABS.CRYPTO && (
            <CryptoPayment
              invoice={invoice}
              openMetamask={openMetamask}
              cost={cost}
            />
          )}
        </PaymentInfo>
      </Container>
    </ThemeProvider>
  );
};

export default SendPaymentSlide;
