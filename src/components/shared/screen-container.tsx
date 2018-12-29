import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 70px 250px;
  height: 100%;
  @media only screen and (max-width: 776px) {
    padding: 70px 50px;
   }
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 22px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: normal;
  line-height: normal;
  margin: 0;
`;

const Underline = styled.hr`
  border: 0;
  border-top: 1px solid #a995bb;
  display: block;
  height: 1px;
  margin: 6px 0 60px 0;
  padding: 0;
`;

const ScreenContainer = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Underline />
    {children}
  </Container>
);

export default ScreenContainer;
