import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";
import Header from "../shared/header";
import RenewComponent from "./renew";

import { HEADER_TYPES } from "../../config";

const Container = styled.div`
  width: 100%;
`;

const RenewSlide = () => {
  return (
    <Container>
      <Header type={HEADER_TYPES.EMPTY} />
      <ScreenContainer title="Renew Your Opacity account">
        <RenewComponent />
      </ScreenContainer>
    </Container>
  );
};

export default RenewSlide;
