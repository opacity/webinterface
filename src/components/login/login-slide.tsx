import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import {
  AUTHENTICATION_STATUSES,
  HEADER_TYPES,
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  theme
} from "../../config";

import Header from "../shared/header";

const Container = styled.div`
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.error.color};
  font-size: 14px;
`;

const LoginContainer = styled.div`
  padding: 150px;
  max-width: 600px;
  margin: auto;
  background-color: ${props => props.theme.background};
  text-align: center;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    padding: 25px 35px;
  }
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin: 90px 30px 0 20px;
  }
`;

interface InputProps {
  hasError?: boolean;
}

const Input = styled.input<InputProps>`
  color: black;
  width: 100%;
  height: 40px;
  border: 0.5px solid
    ${props =>
      props.hasError ? props.theme.error.color : props.theme.input.content};
`;

const Title = styled.h1`
  font-size: ${props => props.theme.container.title.size}px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.title.color};
  margin: auto;
  text-align: center;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    margin-top: 35px;
  }
`;
const Underline = styled.div`
  width: ${props => props.theme.container.title.underline.width}px;
  background-color: ${props => props.theme.container.title.underline.color};
  display: block;
  height: ${props => props.theme.container.title.underline.height}px;
  margin: auto;
  margin-top: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  text-align: left;
  margin: 20px 0 10px 0;
  color: #778291;
`;

const Button = styled.button`
  margin-top: 22px;
  display: block;
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.button.background};
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  text-align: center;
  border: 1px solid ${props => props.theme.button.background};
  cursor: pointer;
  text-transform: uppercase;
`;

const RegisterButton = styled(Button)`
  background-color: white;
  color: ${props => props.theme.button.background};
  border: 1px solid ${props => props.theme.button.background};
`;

const OrRegister = styled.span`
  display: flex;
  flex-direction: row;
  color: #778291;
  margin: 22px;

  :before,
  :after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #778291;
    margin: auto;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const LoginOrRegisterSlide = ({ login, status }) => {
  const [privateKey, setPrivateKey] = useState("");
  const [validatePrivateKey, setValidatePrivateKey] = useState(true);

  const handleValidatePrivateKey = value =>
    value.length === 128 ? true : false;

  const handlePrivateKey = value =>
    handleValidatePrivateKey(value)
      ? [setPrivateKey(value), setValidatePrivateKey(true)]
      : setValidatePrivateKey(false);

  const handleLogin = () =>
    handleValidatePrivateKey(privateKey)
      ? login(privateKey)
      : setValidatePrivateKey(false);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.EMPTY} />
        <LoginContainer>
          <Title>Sign in Opacity</Title>
          <Underline />
          <Label>Account Handle</Label>
          <Input
            onChange={e => handlePrivateKey(e.target.value)}
            hasError={
              status === AUTHENTICATION_STATUSES.LOGIN_FAILURE &&
              !validatePrivateKey
            }
          />
          {status === AUTHENTICATION_STATUSES.LOGIN_FAILURE && (
            <ErrorMessage>
              The Account Handle was not found. Please try again.
            </ErrorMessage>
          )}
          {!validatePrivateKey && (
            <ErrorMessage>
              The account handle does not have the correct length. Please try
              again.
            </ErrorMessage>
          )}
          <Button onClick={() => handleLogin()}>Sign in</Button>
          <OrRegister>or</OrRegister>
          <RegisterButton onClick={() => window.open("/sign-up", "self")}>
            Create an account
          </RegisterButton>
        </LoginContainer>
      </Container>
    </ThemeProvider>
  );
};

export default LoginOrRegisterSlide;
