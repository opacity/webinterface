import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import { HEADER_TYPES, theme, DESKTOP_WIDTH, MOBILE_WIDTH } from "../../config";

import ContentBox from "../signup/content-box";
import Hr from "../signup/hr";
import Title from "../signup/title";
import ScreenContainer from "../shared/screen-container";
import Input from "../shared/generic/input";
import Header from "../shared/header";

const ContainerWrapper = styled.div`
  width: 100%;
`;

const ContinueButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${props => props.theme.button.background};
  border: none;
  color: ${props => props.theme.button.color};
  font-size: 16px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  height: 40px;
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  margin: auto;
  text-align: center;
  width: 245px;

  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin: 25px 0;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px)
    text-align: center;
  }
`;

const InputWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;
const InputColumnWrapper = styled.div`
  flex: 50%;
`;

const Label = styled.h3`
  color: ${props => props.theme.label.color};
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.7px;
  line-height: normal;
`;

interface ForgotPageSlideProps {}

interface ForgotPageSlideState {}

class ForgotPageSlide extends Component<
  ForgotPageSlideProps,
  ForgotPageSlideState
> {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <ContainerWrapper>
          <Header type={HEADER_TYPES.TEAM_PAGE} />
          <ScreenContainer title={"Forgot Account Handle?"}>
            <ContentBox>
              <Title>Recovery Account Handle</Title>
              <Hr />
              <InputWrapper>
                <InputColumnWrapper>
                  <Label>Account PIN</Label>
                  <Input name="storage-pin" />
                </InputColumnWrapper>
              </InputWrapper>
              <ButtonWrapper>
                <ContinueButton>Recover Account Handle</ContinueButton>
              </ButtonWrapper>
            </ContentBox>
          </ScreenContainer>
        </ContainerWrapper>
      </ThemeProvider>
    );
  }
}

export default ForgotPageSlide;
