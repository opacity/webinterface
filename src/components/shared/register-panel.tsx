import React from "react";
import styled, { ThemeProvider } from "styled-components";

import {
  MOBILE_WIDTH,
  theme,
  REGISTER_RECORD_RECOVERY_PHASE,
  REGISTER_RECORD_STORAGE_HANDLE,
  REGISTER_CONFIRM_PAYMENT,
  REGISTER_SEND_PAYMENT
} from "../../config";

const ICON_LOGO = require("../../assets/images/logo.svg");

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px 10px 20px;
  justify-content: space-around;
`;

const Title = styled.h3`
  color: ${props => props.theme.title.color};
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  width: auto;
  min-width: 135px;
  text-align: center;
`;

const Hr = styled.div`
  width: 100%;
  background-color: ${props => props.theme.title.color};
  height: 1.4px;
  margin-top: 15px;
  &.opacity {
    opacity: 0.5;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  display: block;
  margin: auto;
`;

const Item = styled.div`
  &.opacity {
    opacity: 0.5;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    &.hidden {
      display: none;
    }
  }
`;

const RegisterPanel = ({ step }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Item className={step !== REGISTER_RECORD_RECOVERY_PHASE ? "hidden" : ""}>
        <Icon src={ICON_LOGO} alt="state" />
        <Title>1. Record Recovery Phrase</Title>
      </Item>
      <Hr />
      <Item
        className={
          (step !== REGISTER_RECORD_STORAGE_HANDLE ? "hidden" : "") +
          (step === REGISTER_RECORD_RECOVERY_PHASE ? " opacity" : "")
        }
      >
        <Icon src={ICON_LOGO} alt="state" />
        <Title>2. Record Storage Handle and PIN</Title>
      </Item>
      <Hr
        className={step === REGISTER_RECORD_RECOVERY_PHASE ? "opacity" : ""}
      />
      <Item
        className={
          (step !== REGISTER_SEND_PAYMENT ? "hidden" : "") +
          (step === REGISTER_RECORD_RECOVERY_PHASE ? " opacity" : "") +
          (step === REGISTER_RECORD_STORAGE_HANDLE ? " opacity" : "")
        }
      >
        <Icon src={ICON_LOGO} alt="state" />
        <Title>3. Send Payment</Title>
      </Item>
      <Hr
        className={
          (step === REGISTER_RECORD_RECOVERY_PHASE ? "opacity" : "") +
          (step === REGISTER_RECORD_STORAGE_HANDLE ? "opacity" : "")
        }
      />
      <Item
        className={
          (step !== REGISTER_CONFIRM_PAYMENT ? "hidden" : "") +
          (step === REGISTER_RECORD_RECOVERY_PHASE ? " opacity" : "") +
          (step === REGISTER_RECORD_STORAGE_HANDLE ? " opacity" : "") +
          (step === REGISTER_SEND_PAYMENT ? " opacity" : "")
        }
      >
        <Icon src={ICON_LOGO} alt="state" />
        <Title>4. Confirm Payment</Title>
      </Item>
    </Container>
  </ThemeProvider>
);

export default RegisterPanel;
