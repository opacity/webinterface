import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

import "../root.css";

const ICON_LOGO = require("../../assets/images/logo.svg");

const Container = styled.div`
  background: #fff;
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
`;

const Link = styled.a`
  align-items: center;
  color: #487aa7;
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
    color: #487aa7;
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
  color: #487aa7;
`;

const Header = ({ history }) => (
  <Container>
    <Navbar>
      <LogoContainer>
        <Link title="Opacity Storage's Logo" onClick={() => history.push("/")}>
          <Logo src={ICON_LOGO} alt="logo" />
          <CompanyName>Opacity</CompanyName>
        </Link>
      </LogoContainer>
      <LinkContainer>
        <Link href="https://opacity.io" target="_blank">
          Home
        </Link>
      </LinkContainer>
    </Navbar>
  </Container>
);

export default withRouter(Header);
