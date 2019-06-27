import React, { useState } from "react";
import styled from "styled-components";
import { injectStripe } from "react-stripe-elements";
import { CountryDropdown } from "react-country-region-selector";
import { Form, Field } from "react-final-form";
import CreditCardInput from "react-credit-card-input";

import OutboundLink from "../shared/outbound-link";

interface IInputProps {
  invalid: boolean;
}

const TextInput = styled.input.attrs<IInputProps>({
  type: "text"
})`
  background: white;
  border-radius: 3px;
  border: 1px solid ${props => (props.invalid ? "#ff3860" : "transparent")};
  font-size: 16px;
  padding: 10px;
`;

const Checkbox = styled.input.attrs<IInputProps>({
  type: "checkbox"
})`
  padding: 2px;
  border: 1px solid ${props => (props.invalid ? "#ff3860" : "transparent")};
`;

const SelectDropdown = styled(CountryDropdown)`
  border: 1px solid
    ${(props: IInputProps) => (props.invalid ? "#ff3860" : "transparent")};
  background: white;
  height: 36px;
  font-size: 15px;
  appearance: none;
  padding: 11px;
  height: 100%;
  max-width: 225px;

  &::placeholder {
    color: blue;
  }
`;

const InputName = styled.h4`
  display: inline-block;
`;

const AgreementText = styled.span`
  font-size: 13px;
  margin-left: 3px;
`;

interface ISubmitOrderButtonProps {
  disabled: boolean;
}

const SubmitOrderButton = styled.button.attrs<ISubmitOrderButtonProps>({
  type: "submit"
})`
  cursor: pointer;
  flex: 1;
  height: 50px;
  background-color: ${props => props.theme.button.background};
  color: ${props => props.theme.button.color};
  font-size: 15px;
  font-weight: 600;
  border: none;

  &:focus {
    outline: 0;
  }

  &:disabled {
    background-color: ${props => props.theme.button.disabled.background};
    color: ${props => props.theme.button.disabled.color};
    border: ${props => props.theme.button.disabled.border};
  }
`;

const Label = styled.label`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const AgreementLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Group = styled.div`
  flex: 1;
  padding: 2px;
  text-align: left;
`;

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  margin: 5px 0 0 0;
  color: #ff3860;
`;

const required = value => (value ? undefined : "Required");
// const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
// const minValue = min => value =>
// isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
// const composeValidators = (...validators) => value =>
// validators.reduce((error, validator) => error || validator(value), undefined)

const CreditCardForm = ({ cost, stripe, payFiat }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const onError = () => {
    alert(
      "Something was wrong with your payment information, please try again."
    );
  };

  const onSubmit = values => {
    console.log("xxxxxxxxx: ", values);
    const { firstName, lastName, billingZipCode, billingCountry } = values;
    stripe
      .createToken({
        type: "card",
        name: `${firstName} ${lastName}`,
        address_zip: billingZipCode,
        address_country: billingCountry,
        cardNumber,
        cardCvc,
        cardExpiry
      })
      .then(result => {
        if (result.error) {
          onError();
        } else {
          const {
            token: { id: token }
          } = result;
          payFiat({ token, cost });
        }
      })
      .catch(e => {
        onError();
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
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
                      placeholder="First Name"
                      invalid={meta.touched && meta.error}
                    />
                    {meta.touched &&
                      meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
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
                      placeholder="Last Name"
                      invalid={meta.touched && meta.error}
                    />
                    {meta.touched &&
                      meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Label>
                )}
              </Field>
            </Group>
          </Row>
          <Row>
            <Group>
              <Label>
                <InputName>Card Details</InputName>
                <CreditCardInput
                  cardNumberInputProps={{
                    value: cardNumber,
                    onChange: e => setCardNumber(e.target.value)
                  }}
                  cardExpiryInputProps={{
                    value: cardExpiry,
                    onChange: e => setCardExpiry(e.target.value)
                  }}
                  cardCVCInputProps={{
                    value: cardCvc,
                    onChange: e => setCardCvc(e.target.value)
                  }}
                  fieldClassName="input"
                />
              </Label>
            </Group>
          </Row>
          <Row>
            <Group>
              <Field name="billingZipCode" validate={required}>
                {({ input, meta }) => (
                  <Label>
                    <InputName>Billing Zip Code</InputName>
                    <TextInput
                      {...input}
                      placeholder="Billing Zip Code"
                      invalid={meta.touched && meta.error}
                    />
                    {meta.touched &&
                      meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Label>
                )}
              </Field>
            </Group>
            <Group>
              <Field name="billingCountry" validate={required}>
                {({ input, meta }) => (
                  <Label>
                    <InputName>Billing Country</InputName>
                    <SelectDropdown
                      {...input}
                      priorityOptions={["US"]}
                      invalid={meta.touched && meta.error ? 1 : 0}
                    />
                    {meta.touched &&
                      meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Label>
                )}
              </Field>
            </Group>
          </Row>
          <Row>
            <SubmitOrderButton disabled={invalid}>Purchase</SubmitOrderButton>
          </Row>
          <Row>
            <Field name="isTermsChecked" validate={required}>
              {({ input, meta }) => (
                <Group>
                  <AgreementLabel>
                    <Checkbox
                      {...input}
                      type="checkbox"
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
  );
};

export default injectStripe(CreditCardForm);
