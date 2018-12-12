import React from "react";
import styled from "styled-components";

import "../root.css";

const ICON_LOGO = require("../../assets/images/logo.svg");

const Container = styled.div`
  background: #fff;
  padding: 17px 32px;
`;

const Navbar = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #487aa7;
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

const Header = () => (
  <Container>
    <Navbar>
      <LogoContainer>
        <Link title="Opacity Storage's Logo">
          <Logo src={ICON_LOGO} alt="logo" />
          <CompanyName>Opacity</CompanyName>
        </Link>
      </LogoContainer>
      <LinkContainer>
        <Link href="https://www.opacity.io/" target="_blank">
          Home
        </Link>
      </LinkContainer>
    </Navbar>
  </Container>
);

export default Header;
