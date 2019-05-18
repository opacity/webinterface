import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import "../root.css";

import {
  theme,
  MOBILE_WIDTH,
  HEADER_MOBILE_WIDTH,
  HEADER_TYPES
} from "../../config";

import Button from "./generic/button";
import HamburgerMenu from "./hamburger-menu";

const ICON_LOGO = require("../../assets/images/logo.svg");
const ICON_HAMBURGER = require("../../assets/images/hamburger.svg");

const Container = styled.div`
  background: ${props => props.theme.header.background};
  padding: 17px 32px;
  position: static;
  top: 0;
  left: 0;
  right: 0;
`;

const ExternalLink = styled.a`
  align-items: center;
  color: ${props => props.theme.header.color};
  cursor: pointer;
  display: flex;
  padding: 0 30px;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.4px;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 20px;
    margin: 25px;
  }
`;

const StyledLink = styled(Link)`
  align-items: center;
  color: ${props => props.theme.header.color};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.4px;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
`;

const StyledLinkNavigation = styled(StyledLink)`
  padding: 0 30px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 20px;
    margin: 25px;
  }
`;

const Navbar = styled.div`
  display: flex;
  height: 40px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
`;

const StyledLinkContainer = styled.div`
  align-items: center;
  display: flex;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    align-items: baseline;
    padding-left: 15px;
  }
`;

const DesktopNavigation = styled.div`
  margin-top: 5px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

// const StyledLink = styled(StyledLink)`
// @media only screen and (max-width: ${MOBILE_WIDTH}px) {
// font-size: 20px;
// margin: 25px;
// }
// `;

const Logo = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`;

const CompanyName = styled.span`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: ${props => props.theme.header.color};
`;

const HamburgerIcon = styled.img`
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: none;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: inline-block;
  }
`;

const CommunityWrapper = styled.div`
  display: flex;
`;

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

interface HeaderProps {
  type: string;
  isLoggedIn?: boolean;
}

const Header = ({ type, isLoggedIn }: HeaderProps) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const renderButtons = () => {
    if (isLoggedIn) {
      return (
        <CommunityWrapper>
          <StyledLink to={"/file-manager"}>
            <CommunityButton>Dashboard</CommunityButton>
          </StyledLink>
          <StyledLink to={"/logout"}>
            <CommunityButton>Logout</CommunityButton>
          </StyledLink>
        </CommunityWrapper>
      );
    } else {
      return (
        <CommunityWrapper>
          <StyledLink to={"/sign-up"}>
            <CommunityButtonSecondary>Sign up</CommunityButtonSecondary>
          </StyledLink>
          <StyledLink to={"/login"}>
            <CommunityButton>Login</CommunityButton>
          </StyledLink>
        </CommunityWrapper>
      );
    }
  };

  const renderNavigation = () => {
    switch (type) {
      case HEADER_TYPES.LANDING_PAGE:
        return (
          <StyledLinkContainer>
            <StyledLinkNavigation to="/stands-out">
              STANDS OUT
            </StyledLinkNavigation>
            <StyledLinkNavigation to="/team-page">TEAM</StyledLinkNavigation>

            <ExternalLink href="//medium.com/opacity-storage/" target="_blank">
              BLOG
            </ExternalLink>
            {renderButtons()}
          </StyledLinkContainer>
        );
      case HEADER_TYPES.SCREEN_CONTAINER:
        return (
          <StyledLinkContainer>
            <StyledLinkNavigation to="/team-page">
              ABOUT US
            </StyledLinkNavigation>
            <StyledLinkNavigation to="/team-page">
              RESOURCES
            </StyledLinkNavigation>
            <ExternalLink href="//medium.com/opacity-storage/" target="_blank">
              BLOG
            </ExternalLink>
          </StyledLinkContainer>
        );
      case HEADER_TYPES.TEAM_PAGE:
        return (
          <StyledLinkContainer>
            <StyledLinkNavigation to="/stands-out">
              THE PLATFORM
            </StyledLinkNavigation>
            <StyledLinkNavigation to="/team-page">TEAM</StyledLinkNavigation>
            <ExternalLink href="//medium.com/opacity-storage/" target="_blank">
              BLOG
            </ExternalLink>
            {renderButtons()}
          </StyledLinkContainer>
        );
      case HEADER_TYPES.FILE_MANAGER:
        return (
          <StyledLinkContainer>
            <StyledLinkNavigation to="/logout">Logout</StyledLinkNavigation>
          </StyledLinkContainer>
        );
      case HEADER_TYPES.EMPTY:
        return <StyledLinkContainer />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar>
          <LogoContainer>
            <StyledLink title="Opacity Storage's Logo" to="/">
              <Logo src={ICON_LOGO} alt="logo" />
              <CompanyName>Opacity</CompanyName>
            </StyledLink>
          </LogoContainer>
          <HamburgerIcon
            src={ICON_HAMBURGER}
            alt="navigation"
            onClick={() => setIsHamburgerOpen(true)}
          />
          <DesktopNavigation>{renderNavigation()}</DesktopNavigation>
          <HamburgerMenu
            isOpen={isHamburgerOpen}
            close={() => setIsHamburgerOpen(false)}
          >
            {renderNavigation()}
          </HamburgerMenu>
        </Navbar>
      </Container>
    </ThemeProvider>
  );
};

export default Header;
