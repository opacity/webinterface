import React from "react";
import styled from "styled-components";

import "../root.css";

const ICON_LOGO = require("../../assets/images/logo.svg");

const Container = styled.div`
  background: #fff;
  border-bottom: 1px solid black;
  padding: 17px 32px;
`;

const Navbar = styled.div`
  height: 100%;
  display: flex;
`;

const LogoContainer = styled.div``;

const LogoLink = styled.a`
  display: inline-block;
`;

const Logo = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
  background: green;
`;

const CompanyName = styled.span`
  font-family: ProximaNova;
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
        <LogoLink title="Opacity Storage's Logo">
          <Logo src={ICON_LOGO} alt="logo" />
          <CompanyName>Opacity</CompanyName>
        </LogoLink>
      </LogoContainer>
    </Navbar>
  </Container>
);

export default Header;
