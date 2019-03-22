import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "react-router";

import "../root.css";

import {
  theme,
  HEADER_LANDING_PAGE,
  HEADER_SCREEEN_CONTAINER
} from "../../config";

const ICON_LOGO = require("../../assets/images/logo.svg");

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
  }
  return null;
};

const Header = ({ type, history }) => (
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
        {renderLinks(type, history)}{" "}
      </Navbar>
    </Container>
  </ThemeProvider>
);

export default withRouter(Header);
