import React from "react";
import { ThemeProvider } from "styled-components";
import { Elements, StripeProvider } from "react-stripe-elements";

import { theme, STRIPE_API_KEY } from "../../config";

import ContentBox from "./content-box";
import Hr from "./hr";
import Title from "./title";
import CreditCardForm from "./credit-card-form";

const FiatPayment = ({ cost, payFiat }) => {
  return (
    <StripeProvider apiKey={STRIPE_API_KEY}>
      <ThemeProvider theme={theme}>
        <ContentBox>
          <Title>Pay with your debit or credit card</Title>
          <Hr />
          <Elements>
            <CreditCardForm cost={cost} payFiat={payFiat} />
          </Elements>
        </ContentBox>
      </ThemeProvider>
    </StripeProvider>
  );
};

export default FiatPayment;
