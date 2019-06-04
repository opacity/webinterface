import React from "react";
import styled from "styled-components";

const PAY_WITH_METAMASK_IMG = require("../../assets/images/pay_with_metamask.png");

const Button = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
`;

const Image = styled.img`
  width: 180px;
`;

const MetamaskButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Image src={PAY_WITH_METAMASK_IMG} />
  </Button>
);

export default MetamaskButton;
