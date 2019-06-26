import React, { useState } from "react";
import styled from "styled-components";
import {
  CardNumberElement,
  CardCVCElement,
  CardExpiryElement,
  injectStripe
} from "react-stripe-elements";
import { CountryDropdown } from "react-country-region-selector";
import { Form, Field } from "react-final-form";

const CardNumberInput = styled(CardNumberElement)`
  background: white;
  border: 1px solid black;
`;

const CardCVCInput = styled(CardCVCElement)`
  background: white;
  border: 1px solid black;
`;

const CardExpiryInput = styled(CardExpiryElement)`
  background: white;
  border: 1px solid black;
`;

const TextInput = styled.input.attrs({
  type: "text"
})`
  background: white;
  border: 1px solid black;
`;

const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  padding: 2px;
`;

const SelectDropdown = styled(CountryDropdown)`
  border: 1px solid black;
  background: white;
  height: 36px;
  font-size: 11px;
`;

const InputName = styled.h4`
  display: inline-block;
`;

const SubmitOrderButton = styled.button.attrs({
  type: "submit"
})`
  cursor: pointer;
  flex: 1;
  border: 1px solid black;
  height: 50px;

  &:focus {
    outline: 0;
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
`;

const Group = styled.div`
  flex: 1;
`;

const required = value => (value ? undefined : "Required");
// const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
// const minValue = min => value =>
// isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
// const composeValidators = (...validators) => value =>
// validators.reduce((error, validator) => error || validator(value), undefined)

const CreditCardForm = ({ cost, stripe, payFiat }) => {
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const onError = () => {
    alert(
      "Something was wrong with your payment information, please try again."
    );
  };

  const onSubmit = values => {
    const { firstName, lastName, billingZipCode, billingCountry } = values;
    stripe
      .createToken({
        name: `${firstName} ${lastName}`,
        address_zip: billingZipCode,
        address_country: billingCountry
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
                    <TextInput {...input} placeholder="First Name" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </Label>
                )}
              </Field>
            </Group>
            <Group>
              <Field name="lastName" validate={required}>
                {({ input, meta }) => (
                  <Label>
                    <InputName>Last Name</InputName>
                    <TextInput {...input} placeholder="Last Name" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </Label>
                )}
              </Field>
            </Group>
          </Row>
          <Row>
            <Group>
              <Label>
                <InputName>Card Number</InputName>
                <CardNumberInput />
              </Label>
            </Group>
          </Row>
          <Row>
            <Group>
              <Label>
                <InputName>CVC</InputName>
                <CardCVCInput />
              </Label>
            </Group>
            <Group>
              <Label>
                <InputName>Expiration Date</InputName>
                <CardExpiryInput />
              </Label>
            </Group>
          </Row>
          <Row>
            <Group>
              <Field name="billingZipCode" validate={required}>
                {({ input, meta }) => (
                  <Label>
                    <InputName>Billing Zip Code</InputName>
                    <TextInput {...input} placeholder="Billing Zip Code" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </Label>
                )}
              </Field>
            </Group>
            <Group>
              <Field name="billingCountry" validate={required}>
                {({ input, meta }) => (
                  <Label>
                    <InputName>Billing Country</InputName>
                    <SelectDropdown {...input} priorityOptions={["US"]} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </Label>
                )}
              </Field>
            </Group>
          </Row>
          <Row>
            <SubmitOrderButton>Purchase</SubmitOrderButton>
          </Row>
          <Row>
            <AgreementLabel>
              <Checkbox
                checked={isTermsChecked}
                onChange={e => setIsTermsChecked(e.target.checked)}
              />
              <InputName>I agree to the Terms and Conditions</InputName>
            </AgreementLabel>
          </Row>
        </form>
      )}
    />
  );
};

export default injectStripe(CreditCardForm);
