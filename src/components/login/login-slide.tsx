import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

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

const RecoverHandleContainer = styled.div`
  background-color: ${props => props.theme.error.color};
`;

const RecoverHandleTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: white;
  margin: auto;
  text-align: center;
`;

const RecoverHandle = styled.p`
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: white;
  margin: auto;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.error.color};
  font-size: 14px;
  margin-top: 0px;
`;

const LoginContainer = styled.div`
  padding: 150px;
  max-width: 600px;
  margin: auto;
  background-color: ${props => props.theme.background};
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    padding: 25px 35px;
  }
`;

interface InputProps {
  hasError?: boolean;
}

const Input = styled.input<InputProps>`
  margin-bottom: 10px;
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

const LoginButton = styled.button`
  margin-top: 15px;
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

const RegisterLink = styled(Link)`
  margin-top: 22px;
  display: block;
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  text-align: center;
  border: 1px solid ${props => props.theme.button.background};
  cursor: pointer;
  text-transform: uppercase;
  background-color: white;
  color: ${props => props.theme.button.background};
  text-decoration: none;
  padding: 10px;
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

const ForgotPasswordLink = styled(Link)`
  flex-direction: row;
  font-size: 16px;
  color: #778291;
`;

const LoginOrRegisterSlide = ({ login, status, recoveryHandle }) => {
  const [privateKey, setPrivateKey] = useState("");
  const [validatePrivateKey, setValidatePrivateKey] = useState(true);

  const handleValidatePrivateKey = value =>
    value.length === 128 ? true : false;

  const handlePrivateKey = value =>
    handleValidatePrivateKey(value)
      ? [setPrivateKey(value), setValidatePrivateKey(true)]
      : [setPrivateKey(value), setValidatePrivateKey(false)];

  const handleLogin = () =>
    handleValidatePrivateKey(privateKey)
      ? login(privateKey)
      : setValidatePrivateKey(false);

  useEffect(() => {
    recoveryHandle && setPrivateKey(recoveryHandle);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.EMPTY} />
        {recoveryHandle && (
          <RecoverHandleContainer>
            <RecoverHandleTitle>Your Account Handle</RecoverHandleTitle>
            <RecoverHandle>{recoveryHandle}</RecoverHandle>
          </RecoverHandleContainer>
        )}
        <LoginContainer>
          <Title>Sign In to Your Account</Title>
          <Underline />
          <Label htmlFor="opacity-login-account-handle">Account Handle</Label>
          <Input
            id="opacity-login-account-handle"
            value={privateKey}
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
          <LoginButton onClick={() => handleLogin()}>Log In</LoginButton>
          <ForgotPasswordLink to="/forgot-page">
            Forgot Account Handle?
          </ForgotPasswordLink>
          <OrRegister>or</OrRegister>
          <RegisterLink to="/sign-up">Create an account</RegisterLink>
        </LoginContainer>
      </Container>
    </ThemeProvider>
  );
};

export default LoginOrRegisterSlide;
