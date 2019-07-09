import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

const Container = styled.div`
  padding: 25px;
  background: white;
  margin-bottom: 20px;
  border: 1px solid black;
  color: ${props => props.theme.title.color};
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

const Value = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Invoice = ({ cost, storageLimit }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Row>
        <Title>Total</Title>
        <Value>
          {storageLimit} Storage - ${cost} for 1 year
        </Value>
      </Row>
    </Container>
  </ThemeProvider>
);

export default Invoice;
