import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import {
  AUTHENTICATION_STATUSES,
  HEADER_SCREEEN_CONTAINER,
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  theme
} from "../../config";

import Header from "../shared/header";

const ICON_LOGO = require("../../assets/images/logo-login.svg");

const LoginContainer = styled.div`
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.error.color};
  font-size: 14px;
`;

const Icon = styled.img`
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    margin: 0px;
    height: 150px;
    width: 150px;
  }
`;

const StorageContainer = styled.div`
  padding: 150px;
  height: 100%;
  max-width: 950px;
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

const Storage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
  }
`;

interface InputProps {
  hasError?: boolean;
}

const Input = styled.input<InputProps>`
  color: black;
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border: 0.5px solid
    ${props =>
      props.hasError ? props.theme.error.color : props.theme.input.content};
`;

const Container = styled.div`
  flex: 1;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    text-align: center;
  }
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
  text-align: left;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    margin-top: 35px;
  }
`;
const Underline = styled.div`
  margin-top: 10px;
  width: ${props => props.theme.container.title.underline.width}px;
  background-color: ${props => props.theme.container.title.underline.color};
  display: block;
  height: ${props => props.theme.container.title.underline.height}px;
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  text-align: left;
  margin: 20px 0 0 0;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const Button = styled.button`
  width: 171px;
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
  border: none;
  cursor: pointer;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const Link = styled.a`
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  text-align: left;
  color: ${props => props.theme.title.color};
`;

const ForgotStorage = styled(Link)`
  margin-top: 15px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const Content = styled.div`
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  text-align: left;
  color: ${props => props.theme.container.content};
  margin: 15px 10px 10px 10px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    margin-left: 0px;
  }
`;

interface LoginOrRegisterSlideProps {
  login;
  status;
}

interface LoginOrRegisterSlideState {
  privateKey;
  storagePin;
}

class LoginOrRegisterSlide extends Component<
  LoginOrRegisterSlideProps,
  LoginOrRegisterSlideState
> {
  state = {
    privateKey: "",
    storagePin: ""
  };

  render () {
    const { login, status } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <LoginContainer>
          <Header type={HEADER_SCREEEN_CONTAINER} />
          <StorageContainer>
            <Storage>
              <Container>
                <Icon src={ICON_LOGO} />
              </Container>
              <Container>
                <Title>Sign in Opacity</Title>
                <Underline />
                <Label>Account Handle</Label>
                <Input
                  onChange={e => this.setState({ privateKey: e.target.value })}
                  hasError={status === AUTHENTICATION_STATUSES.LOGIN_FAILURE}
                />
                <Label>Storage PIN</Label>
                <Input
                  type="password"
                  onChange={e => this.setState({ storagePin: e.target.value })}
                  hasError={status === AUTHENTICATION_STATUSES.LOGIN_FAILURE}
                />
                {status === AUTHENTICATION_STATUSES.LOGIN_FAILURE && (
                  <ErrorMessage>
                    The Account Handle or Storage PIN do not match up. Please
                    try again.
                  </ErrorMessage>
                )}
                <ButtonWrapper>
                  <Button
                    onClick={() =>
                      login(this.state.privateKey, this.state.storagePin)
                    }
                  >
                    SIGN IN
                  </Button>
                  <Content>
                    (Or <Link href="/sign-up">click here to register</Link>)
                  </Content>
                </ButtonWrapper>
                <ForgotStorage>Forgot Account Handle?</ForgotStorage>
              </Container>
            </Storage>
          </StorageContainer>
        </LoginContainer>
      </ThemeProvider>
    );
  }
}

export default LoginOrRegisterSlide;
