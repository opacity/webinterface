import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { DESKTOP_WIDTH, MOBILE_WIDTH, theme } from "../../config";

const ICON_LOGO = require("../../assets/images/logo.svg");

const Icon = styled.img`
  height: 250px;
  width: 250px;
  margin: 0 50px 50px 0;
`;

const StorageContainer = styled.div`
  padding: 70px 250px;
  height: 100%;
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};

  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    padding: 25px 35px;
  }
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin: 90px 30px 0 20px;
  }
`;

const Storage = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(1, 28px);
  grid-auto-flow: column;
  grid-auto-columns: auto;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    grid-template-rows: repeat(2, 250px);
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
  margin: auto;
  border: none;
  cursor: pointer;
`;

const Input = styled.input.attrs(({ size }) => ({
  type: "password",

  margin: size || "1em",
  padding: size || "1em"
}))`
  color: black;
  font-size: 1.6em;
  border: 1px solid ${props => props.theme.input.content};
`;

const Container = styled.div`
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    margin: auto;
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

const ButtonWrapper = styled.div`
  text-align: left;
  margin: 20px 0 40px 0;
`;

const TextLabel = styled.h3`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  text-align: left;
`;

const Link = styled.h4`
  font-size: 8px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  text-align: left;
  color: ${props => props.theme.title.color};
`;

const LoginOrRegisterSlide = () => (
  <ThemeProvider theme={theme}>
    <StorageContainer>
      <Storage>
        <Container>
          <Icon src={ICON_LOGO} />
        </Container>
        <Container>
          <Title>Sing in Opacity</Title>
          <Underline />
          <TextLabel>Storage Handle</TextLabel>
          <Input />
          <TextLabel>Storage PIN</TextLabel>
          <Input />
          <ButtonWrapper>
            <Button>SIGN IN</Button>
            <Link>Forgot Sorage Handle?</Link>
          </ButtonWrapper>
        </Container>
      </Storage>
    </StorageContainer>
  </ThemeProvider>
);

export default LoginOrRegisterSlide;
