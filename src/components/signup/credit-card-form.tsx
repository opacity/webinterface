import React, { useState } from "react";
import styled from "styled-components";
import {
  CardNumberElement,
  CardCVCElement,
  CardExpiryElement,
  injectStripe
} from "react-stripe-elements";

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

const TextInput = styled.input`
  background: white;
  border: 1px solid black;
`;

const InputName = styled.h4``;

const Label = styled.label`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Group = styled.div`
  flex: 1;
`;

const CreditCardForm = ({ cost }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [billingZipCode, setBillingZipCode] = useState("");

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
      </Row>
    </div>
  );
};

export default injectStripe(CreditCardForm);
