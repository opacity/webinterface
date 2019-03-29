import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH, SIGNUP_PHASES } from "../../config";

const ICON_RECOVERY = require("../../assets/images/icon_signup_recovery.svg");
const ICON_PIN = require("../../assets/images/icon_signup_pin.svg");
const ICON_PAYMENT = require("../../assets/images/icon_signup_payment.svg");
const ICON_CONFIRM = require("../../assets/images/icon_signup_confirm.svg");

const Container = styled.div`
  display: flex;
  padding: 20px 100px;
  margin-bottom: 70px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

interface PhaseProps {
  isHighlighted?: boolean;
  isActive: boolean;
}

const Phase = styled.div`
  display: flex;
  opacity: ${(props: PhaseProps) => (props.isHighlighted ? 1 : 0.5)};
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: ${(props: PhaseProps) => (props.isActive ? "block" : "none")};
  }
`;

const PhaseInformation = styled.div`
  position: relative;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    text-align: center;
  }
`;

const PhaseIcon = styled.img`
  height: 32px;
  width: 32px;
`;

const PhaseNumber = styled.span`
  bottom: -30px;
  color: ${props => props.theme.title.color};
  font-size: 12px;
  left: 50%;
  position: absolute;
  right: 50%;
  text-align: center;
  transform: translateX(-50%);
  width: 200px;
`;

const Line = styled.hr`
  display: inline-block;
  height: 1px;
  width: 150px;
  border: 0;
  border-top: 1px solid ${props => props.theme.title.color};
  margin: 1em 29px;
  padding: 0;
  @media only screen and (max-width: 1400px) {
    width: 80px;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

const Breadcrumbs = ({ phase }) => (
  <Container>
    <Phase
      isActive={phase === SIGNUP_PHASES.RECORD_RECOVERY_PHRASE}
      isHighlighted={phase >= SIGNUP_PHASES.RECORD_RECOVERY_PHRASE}
    >
      <PhaseInformation>
        <PhaseIcon src={ICON_RECOVERY} />
        <PhaseNumber>1. Record Recovery Phrase</PhaseNumber>
      </PhaseInformation>
      <Line />
    </Phase>
    <Phase
      isActive={phase === SIGNUP_PHASES.RECORD_STORAGE_PIN}
      isHighlighted={phase >= SIGNUP_PHASES.RECORD_STORAGE_PIN}
    >
      <PhaseInformation>
        <PhaseIcon src={ICON_PIN} />
        <PhaseNumber>2. Record Storage Handle and PIN</PhaseNumber>
      </PhaseInformation>
      <Line />
    </Phase>
    <Phase
      isActive={phase === SIGNUP_PHASES.SEND_PAYMENT}
      isHighlighted={phase >= SIGNUP_PHASES.SEND_PAYMENT}
    >
      <PhaseInformation>
        <PhaseIcon src={ICON_PAYMENT} />
        <PhaseNumber>3. Send Payment</PhaseNumber>
      </PhaseInformation>
      <Line />
    </Phase>
    <Phase
      isActive={phase === SIGNUP_PHASES.CONFIRM_PAYMENT}
      isHighlighted={phase >= SIGNUP_PHASES.CONFIRM_PAYMENT}
    >
      <PhaseInformation>
        <PhaseIcon src={ICON_CONFIRM} />
        <PhaseNumber>4. Confirm Payment</PhaseNumber>
      </PhaseInformation>
    </Phase>
  </Container>
);

export default Breadcrumbs;
