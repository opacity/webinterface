import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import "../root.css";

import { DESKTOP_WIDTH, theme } from "../../config";
import { NONAME } from "dns";

const ICON_LOGO = require("../../assets/images/logo.svg");

const Container = styled.div`
  background: ${props => props.theme.header.background};
  padding: 17px 32px;
`;

const Navbar = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;
  max-width: 950px;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
`;
const LinkContainer = styled.div`
  align-items: center;
  display: flex;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    display: none;
  }
`;
const MobileLinkContainer = styled.div`
  display: none;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    display: block;
  }
`;
const MobileNavigation = styled.div`
  display: none;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 69px;
    right: 0;
    background-color: ${props => props.theme.header.background};
    text-align: center;

    span a {
      padding: 17px 32px;
    }
  }
`;

const Link = styled.a`
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
  margin-right: 65px;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  &:last {
    margin-right: 20px;
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

const Hamburger = styled.img`
  width: 30px;
  height: 30px;
`;

const NavigationContainer = styled.span`
  display: flex;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    display: none;
  }
`;

const Navigation = ({ style }) => (
  <NavigationContainer style={style}>
    <Link href="https://opacity.io" target="_blank">
      About Us
    </Link>
    <Link href="https://opacity.io" target="_blank">
      Resource
    </Link>
    <Link href="https://opacity.io" target="_blank">
      Blog
    </Link>
  </NavigationContainer>
);

interface State {
  hideMobileNavigation: boolean;
}

interface Props {
  history: any;
}

class Header extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hideMobileNavigation: false
    };
  }
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props;
    const { hideMobileNavigation } = this.state;
    const navigationStyle = hideMobileNavigation
      ? { display: "block" }
      : { display: "none" };
    const hamburgerIcon = hideMobileNavigation ? ICON_LOGO : ICON_LOGO;
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
            <LinkContainer>
              <Navigation style={{}} />
            </LinkContainer>
            <MobileLinkContainer>
              <Hamburger
                src={hamburgerIcon}
                alt="logo"
                onClick={() =>
                  this.setState({
                    hideMobileNavigation: !this.state.hideMobileNavigation
                  })
                }
              />
              <MobileNavigation style={navigationStyle}>
                <Navigation style={navigationStyle} />
              </MobileNavigation>
            </MobileLinkContainer>
          </Navbar>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withRouter(Header);
