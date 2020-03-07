import React, { useMemo } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Breadcrumbs from "./breadcrumbs";
import ConfirmPaymentSlide from "./confirm-payment-slide";
import ScreenContainer from "../shared/screen-container";
import Header from "../shared/header";

import { HEADER_TYPES, SIGNUP_PHASES } from "../../config";
import { SignupPhases } from "./phases";

const Container = styled.div`
  width: 100%;
`;

const ThankYou = withRouter(({ location }) => {
  const plan = useMemo(() => location.state && location.state.plan, [location]);
  const privateKey = useMemo(() => location.state && location.state.handle, [location]);

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
        <Breadcrumbs phases={SignupPhases} phase={SIGNUP_PHASES.CONFIRM_PAYMENT} />
        <ConfirmPaymentSlide handle={privateKey} />
      </ScreenContainer>
    </Container>
  );
});

export default ThankYou;
