import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, HEADER_MOBILE_WIDTH } from "../../../config";

import Button from "../generic/button";

const ButtonsWrapper = styled.div``;

const CommunityButton = styled(Button)`
  margin-right: 10px;
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    width: 180px;
  }
`;

const CommunityButtonSecondary = styled(CommunityButton)`
  background-color: white;
  color: #2e6dde;
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    margin-top: 30px;
  }
`;

const CommunityLink = styled.a`
  display: inline-block;
`;

interface HeaderButtonsProps {
  authentication;
  logout;
}

const HeaderButtons = ({ authentication, logout }: HeaderButtonsProps) => {
  return (
    <ThemeProvider theme={theme}>
      {authentication ? (
        <ButtonsWrapper>
          <CommunityLink onClick={() => logout()}>
            <CommunityButton>Sign out</CommunityButton>
          </CommunityLink>
        </ButtonsWrapper>
      ) : (
        <ButtonsWrapper>
          <CommunityLink href={"/sign-up"}>
            <CommunityButtonSecondary>Sign up</CommunityButtonSecondary>
          </CommunityLink>
          <CommunityLink href={"/login"}>
            <CommunityButton>Login</CommunityButton>
          </CommunityLink>
        </ButtonsWrapper>
      )}
    </ThemeProvider>
  );
};
export default HeaderButtons;
