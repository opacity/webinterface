import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import Header from "./header";

const Container = styled.div`
  width: 100%;
`;

const Screen = styled.div``;

const PageContainer = ({ children, type }) => {
  const [showScreen, setShowScreen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header setShowScreen={show => setShowScreen(show)} type={type} />
        {showScreen && <Screen>{children}</Screen>}
      </Container>
    </ThemeProvider>
  );
};

export default PageContainer;
