import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { injectStripe, CardElement } from "react-stripe-elements";
import { CountryDropdown } from "react-country-region-selector";
import { Form, Field } from "react-final-form";

import OutboundLink from "../shared/outbound-link";
import Invoice from "./invoice";

import { FIAT_PAYMENT_STATUSES, theme, MOBILE_WIDTH } from "../../config";

interface IInputProps {
  invalid: boolean;
}

const TextInput = styled.input.attrs<IInputProps>({
  type: "text",
  autoCapitalize: "words"
})`
  background: white;
  border-radius: 3px;
  border: 1px solid
    ${props => (props.invalid ? props.theme.error.color : "transparent")};
  font-family: "Lato", sans-serif;
  font-size: 16px;
  padding: 10px;

  &:disabled {
    color: #cfd7df;
  }
`;

const Checkbox = styled.input.attrs<IInputProps>({
  type: "checkbox"
})`
  border: 1px solid
    ${props => (props.invalid ? props.theme.error.color : "transparent")};
  padding: 2px;
`;

const countryDropdown = styled(CountryDropdown);
const SelectDropdown = countryDropdown<IInputProps>`
  appearance: none;
  background: white;
  border: 1px solid
    ${props => (props.invalid ? props.theme.error.color : "transparent")};
  border-radius: 1px;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  height: 100%;
  max-width: 225px;
  outline: none;
  padding: 10px;

  &:disabled {
    color: #cfd7df;
  }
`;

const InputName = styled.h4`
  display: inline-block;
`;

const AgreementText = styled.span`
  font-size: 13px;
  margin-left: 3px;
`;

const ellipsis = keyframes`
  to {
    width: 15px;
  }
`;

const Ellipsis = styled.span`
  display: inline-block;
  width: 20px;

  &:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ${ellipsis} steps(4, end) 2000ms infinite;
    content: "…";
    width: 0px;
  }
`;
interface ISubmitOrderButtonProps {
  disabled: boolean;
}

const SubmitOrderButton = styled.button.attrs<ISubmitOrderButtonProps>({
  type: "submit"
})`
  background-color: ${props => props.theme.button.background};
  border: none;
  color: ${props => props.theme.button.color};
  cursor: pointer;
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  padding: 12px;

  &:focus {
    outline: 0;
  }

  &:disabled {
    background-color: ${props => props.theme.button.disabled.background};
    border: ${props => props.theme.button.disabled.border};
    color: ${props => props.theme.button.disabled.color};
  }
`;

const SubmitSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  text-align: left;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const AgreementLabel = styled.label`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px)
    flex-direction: column;
  }
`;

const Group = styled.div`
  flex: 1;
  padding: 2px;
  text-align: left;
`;

const ErrorMessage = styled.span`
  color: #ff3860;
  font-size: 0.8rem;
  margin: 5px 0 0 0;
`;

const required = value => (value ? undefined : "This field cannot be blank");

const CreditCardForm = ({
  cost,
  storageLimit,
  stripe,
  onSubmit,
  error,
  status
}) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  useEffect(
    () => {
      if (status === FIAT_PAYMENT_STATUSES.ERROR) {
        setIsSubmitDisabled(false);
      }
    },
    [status]
  );

  const onStripeError = () => {
    setIsSubmitDisabled(false);
    alert(
      "Something was wrong with your payment information, please try again."
    );
  };

  const submit = values => {
    const { firstName, lastName, billingCountry } = values;

    setIsSubmitDisabled(true);
    stripe
      .createToken({
        type: "card",
        name: `${firstName} ${lastName}`,
        address_country: billingCountry
      })
      .then(result => {
        if (result.error) {
          onStripeError();
        } else {
          const {
            token: { id: token }
          } = result;
          onSubmit(token);
        }
      })
      .catch(e => {
        onStripeError();
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Form
        onSubmit={submit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Group>
                <Field name="firstName" validate={required}>
                  {({ input, meta }) => (
                    <Label>
                      <InputName>First Name</InputName>
                      <TextInput
                        {...input}
                        disabled={isSubmitDisabled}
                        placeholder="First Name"
                        invalid={meta.touched && meta.error}
                      />
                    </Label>
                  )}
                </Field>
              </Group>
              <Group>
                <Field name="lastName" validate={required}>
                  {({ input, meta }) => (
                    <Label>
                      <InputName>Last Name</InputName>
                      <TextInput
                        {...input}
                        disabled={isSubmitDisabled}
                        placeholder="Last Name"
                        invalid={meta.touched && meta.error}
                      />
                    </Label>
                  )}
                </Field>
              </Group>
            </Row>
            <Row>
              <Group>
                <Label>
                  <InputName>Card Details</InputName>
                  <CardElement
                    disabled={isSubmitDisabled}
                    style={{
                      base: {
                        fontSize: "16px",
                        fontWeight: "normal",
                        fontFamily: '"Lato", sans-serif'
                      }
                    }}
                    classes={{
                      base: "stripe-cc-input",
                      invalid: "stripe-cc-input-error"
                    }}
                  />
                </Label>
              </Group>
            </Row>
            <Row>
              <Group>
                <Field name="billingCountry" validate={required}>
                  {({ input, meta }) => (
                    <Label>
                      <InputName>Billing Country</InputName>
                      <SelectDropdown
                        {...input}
                        disabled={isSubmitDisabled}
                        priorityOptions={["US"]}
                        valueType="short"
                        invalid={meta.touched && meta.error ? 1 : 0}
                      />
                    </Label>
                  )}
                </Field>
              </Group>
            </Row>
            <Row>
              <SubmitSection>
                <Invoice cost={cost} storageLimit={storageLimit} />
                <SubmitOrderButton disabled={invalid || isSubmitDisabled}>
                  {isSubmitDisabled ? "Processing" : "Purchase"}
                  {isSubmitDisabled && <Ellipsis />}
                </SubmitOrderButton>
                {error && (
                  <ErrorMessage>
                    We were unable to process your payment. Please try again
                    later.
                  </ErrorMessage>
                )}
              </SubmitSection>
            </Row>
            <Row>
              <Field name="isTermsChecked" validate={required} type="checkbox">
                {({ input, meta }) => (
                  <Group>
                    <AgreementLabel>
                      <Checkbox
                        {...input}
                        invalid={meta.touched && meta.error}
                      />
                      <AgreementText>
                        I agree to the{" "}
                        <OutboundLink href="/terms-of-service">
                          Terms and Conditions
                        </OutboundLink>
                      </AgreementText>
                    </AgreementLabel>
                    {meta.touched &&
                      meta.error && (
                        <ErrorMessage>
                          Please check this box if you want to proceed.
                        </ErrorMessage>
                      )}
                  </Group>
                )}
              </Field>
            </Row>
          </form>
        )}
      />
    </ThemeProvider>
  );
};

export default injectStripe(CreditCardForm);
