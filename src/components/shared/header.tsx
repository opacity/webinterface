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
    display: block;
  }
`;

const DesktopNavigation = styled.div`
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  @media only screen and (min-width: ${MOBILE_WIDTH}px) {
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

const CloseIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const renderLinks = (type, history) => {
  if (type === HEADER_LANDING_PAGE) {
    return (
      <LinkContainer>
        <Link onClick={() => history.push("/stands-out")}>STANDS OUT</Link>
        <Link onClick={() => history.push("/team-page")}>TEAM</Link>

        <Link href=" https://medium.com/opacity-storage/" target="_blank">
          BLOG
        </Link>
      </LinkContainer>
    );
  } else if (type === HEADER_SCREEEN_CONTAINER) {
    return (
      <LinkContainer>
        <Link onClick={() => history.push("/team-page")}>ABOUT US</Link>
        <Link onClick={() => history.push("/team-page")}>RESOURCES</Link>
        <Link href=" https://medium.com/opacity-storage/" target="_blank">
          BLOG
        </Link>
      </LinkContainer>
    );
  } else if (type === HEADER_TEAM_PAGE) {
    return (
      <LinkContainer>
        <Link onClick={() => history.push("/stands-out")}>THE PLATFORM</Link>
        <Link onClick={() => history.push("/team-page")}>TEAM</Link>
        <Link href=" https://medium.com/opacity-storage/" target="_blank">
          BLOG
        </Link>
      </LinkContainer>
    );
  }
  return null;
};

interface HeaderProps {
  type;
  history;
}

interface HeaderState {
  menuOpen;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  hamburgerClick() {
    this.setState({ menuOpen: true });
  }

  closeClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { type, history } = this.props;
    const { menuOpen } = this.state;
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
            {!menuOpen ? (
              <HamburgerIcon
                src={ICON_HAMBURGER}
                alt="navigation"
                onClick={() => {
                  this.hamburgerClick();
                }}
              />
            ) : null}
            {menuOpen ? (
              <MobileNavigation>
                <CloseIcon
                  src={ICON_CLOSE}
                  alt="close"
                  onClick={() => {
                    this.closeClick();
                  }}
                />
                {renderLinks(type, history)}
              </MobileNavigation>
            ) : null}
            <DesktopNavigation>{renderLinks(type, history)}</DesktopNavigation>
          </Navbar>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withRouter(Header);
