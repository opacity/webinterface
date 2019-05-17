import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

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

const Navbar = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
`;

const LinkContainer = styled.div`
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

const Link = styled.a`
  align-items: center;
  padding: 0 30px;
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

const LinkNavigation = styled(Link)`
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 20px;
    margin: 25px;
  }
`;

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

const CommunityWrapper = styled.div``;

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
          <CommunityLink href={"/file-manager"}>
            <CommunityButton>Dashboard</CommunityButton>
          </CommunityLink>
          <CommunityLink href={"/logout"}>
            <CommunityButton>Logout</CommunityButton>
          </CommunityLink>
        </CommunityWrapper>
      );
    } else {
      return (
        <CommunityWrapper>
          <CommunityLink href={"/sign-up"}>
            <CommunityButtonSecondary>Sign up</CommunityButtonSecondary>
          </CommunityLink>
          <CommunityLink href={"/login"}>
            <CommunityButton>Login</CommunityButton>
          </CommunityLink>
        </CommunityWrapper>
      );
    }
  };

  const renderNavigation = () => {
    switch (type) {
      case HEADER_TYPES.LANDING_PAGE:
        return (
          <LinkContainer>
            <LinkNavigation href="/stands-out">STANDS OUT</LinkNavigation>
            <LinkNavigation href="/team-page">TEAM</LinkNavigation>

            <LinkNavigation
              href="https://medium.com/opacity-storage/"
              target="_blank"
            >
              BLOG
            </LinkNavigation>
            {renderButtons()}
          </LinkContainer>
        );
      case HEADER_TYPES.SCREEN_CONTAINER:
        return (
          <LinkContainer>
            <LinkNavigation href="/team-page">ABOUT US</LinkNavigation>
            <LinkNavigation href="/team-page">RESOURCES</LinkNavigation>
            <LinkNavigation
              href="https://medium.com/opacity-storage/"
              target="_blank"
            >
              BLOG
            </LinkNavigation>
          </LinkContainer>
        );
      case HEADER_TYPES.TEAM_PAGE:
        return (
          <LinkContainer>
            <LinkNavigation href="/stands-out">THE PLATFORM</LinkNavigation>
            <LinkNavigation href="/team-page">TEAM</LinkNavigation>
            <LinkNavigation
              href="https://medium.com/opacity-storage/"
              target="_blank"
            >
              BLOG
            </LinkNavigation>
            {renderButtons()}
          </LinkContainer>
        );
      case HEADER_TYPES.FILE_MANAGER:
        return (
          <LinkContainer>
            <LinkNavigation href="/logout">Logout</LinkNavigation>
          </LinkContainer>
        );
      case HEADER_TYPES.EMPTY:
        return <LinkContainer />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar>
          <LogoContainer>
            <Link title="Opacity Storage's Logo" href="/">
              <Logo src={ICON_LOGO} alt="logo" />
              <CompanyName>Opacity</CompanyName>
            </Link>
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
