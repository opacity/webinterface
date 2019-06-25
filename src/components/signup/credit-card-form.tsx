import React, { useState } from "react";
import styled from "styled-components";
import {
  CardNumberElement,
  CardCVCElement,
  CardExpiryElement,
  injectStripe
} from "react-stripe-elements";
import { CountryDropdown } from "react-country-region-selector";

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

const SubmitOrderButton = styled.button`
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

const CreditCardForm = ({ cost, stripe, payFiat }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [billingZipCode, setBillingZipCode] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const onError = () => {
    alert(
      "Something was wrong with your payment information, please try again."
    );
  };

  const onSubmit = () => {
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
    <div>
      <Row>
        <Group>
          <Label>
            <InputName>First Name</InputName>
            <TextInput
              value={firstName}
              placeholder="First Name"
              onChange={e => setFirstName(e.target.value)}
            />
          </Label>
        </Group>
        <Group>
          <Label>
            <InputName>Last Name</InputName>
            <TextInput
              value={lastName}
              placeholder="Last Name"
              onChange={e => setLastName(e.target.value)}
            />
          </Label>
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
          <Label>
            <InputName>Billing Zip Code</InputName>
            <TextInput
              value={billingZipCode}
              placeholder="Billing Zip Code"
              onChange={e => setBillingZipCode(e.target.value)}
            />
          </Label>
        </Group>
        <Group>
          <Label>
            <InputName>Billing Country</InputName>
            <SelectDropdown
              value={billingCountry}
              priorityOptions={["US"]}
              onChange={val => setBillingCountry(val)}
            />
          </Label>
        </Group>
      </Row>
      <Row>
        <SubmitOrderButton onClick={onSubmit}>Purchase</SubmitOrderButton>
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
    </div>
  );
};

export default injectStripe(CreditCardForm);
