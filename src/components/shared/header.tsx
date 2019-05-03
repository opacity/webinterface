import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "react-router";

import "../root.css";

import {
  theme,
  MOBILE_WIDTH,
  HEADER_LANDING_PAGE,
  HEADER_SCREEEN_CONTAINER,
  HEADER_TEAM_PAGE
} from "../../config";

const ICON_LOGO = require("../../assets/images/logo.svg");
const ICON_HAMBURGER = require("../../assets/images/hamburger.svg");
const ICON_CLOSE = require("../../assets/images/close.svg");

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
  margin-right: 95px;
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
  width: 28px;
  height: 28px;
  display: none;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: inline-block;
  }
`;

const renderNavigation = (type, history) => {
  if (type === HEADER_LANDING_PAGE) {
    return (
      <LinkContainer>
        <LinkNavigation onClick={() => history.push("/stands-out")}>
          STANDS OUT
        </LinkNavigation>
        <LinkNavigation onClick={() => history.push("/team-page")}>
          TEAM
        </LinkNavigation>

        <LinkNavigation
          href="https://medium.com/opacity-storage/"
          target="_blank"
        >
          BLOG
        </LinkNavigation>
      </LinkContainer>
    );
  } else if (type === HEADER_SCREEEN_CONTAINER) {
    return (
      <LinkContainer>
        <LinkNavigation onClick={() => history.push("/team-page")}>
          ABOUT US
        </LinkNavigation>
        <LinkNavigation onClick={() => history.push("/team-page")}>
          RESOURCES
        </LinkNavigation>
        <LinkNavigation
          href="https://medium.com/opacity-storage/"
          target="_blank"
        >
          BLOG
        </LinkNavigation>
      </LinkContainer>
    );
  } else if (type === HEADER_TEAM_PAGE) {
    return (
      <LinkContainer>
        <LinkNavigation onClick={() => history.push("/stands-out")}>
          THE PLATFORM
        </LinkNavigation>
        <LinkNavigation onClick={() => history.push("/team-page")}>
          TEAM
        </LinkNavigation>
        <LinkNavigation
          href="https://medium.com/opacity-storage/"
          target="_blank"
        >
          BLOG
        </LinkNavigation>
      </LinkContainer>
    );
  }
  return null;
};

interface HeaderProps {
  type;
  history;
  openHamburgerMenu;
  closeHamburgerMenu;
  isHamburgerOpen;
}

class Header extends React.Component<HeaderProps, {}> {
  render() {
    const {
      type,
      history,
      openHamburgerMenu,
      closeHamburgerMenu,
      isHamburgerOpen
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar>
            <LogoContainer>
              <Link
                title="Opacity Storage's Logo"
                onClick={() => history.push("/")}
              >
                <Logo src={ICON_LOGO} alt="logo" />
                <CompanyName>Opacity</CompanyName>
              </Link>
            </LogoContainer>
            {isHamburgerOpen ? (
              <HamburgerIcon
                src={ICON_CLOSE}
                alt="navigation"
                onClick={closeHamburgerMenu}
              />
            ) : (
              <HamburgerIcon
                src={ICON_HAMBURGER}
                alt="navigation"
                onClick={openHamburgerMenu}
              />
            )}
            <DesktopNavigation>
              {renderNavigation(type, history)}
            </DesktopNavigation>
          </Navbar>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withRouter(Header);
