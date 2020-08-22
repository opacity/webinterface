import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import {
	HEADER_TYPES,
	DESKTOP_WIDTH,
  theme
} from "../../config";

import Header from "../shared/header";

const Container = styled.div`
  width: 100%;
`;

const SwapContainer = styled.div`
  padding: 150px;
  max-width: 600px;
  margin: auto;
  background-color: ${props => props.theme.background};
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    padding: 25px 35px;
  }
`;

const Swap = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.EMPTY} />

				<SwapContainer>
					<p>Swap facere omnis ea totam sit accusamus amet vel eum. Eveniet quas est sunt sit. Inventore enim sunt ut amet.</p>
					<p>Dolores assumenda assumenda consequatur officia magnam deserunt eligendi odio. Occaecati eum rerum error eaque. Aut aperiam dolores similique mollitia molestiae. Animi doloremque et ullam sequi nam asperiores optio fugiat.</p>
					<p>Iusto itaque facilis eos est veritatis consequatur. Eaque rem in eaque. Quas in non quas ut et a. Iusto consequuntur nesciunt molestiae eveniet accusantium dolor quia velit. Ut sit magni ut rerum dolorum enim.</p>
				</SwapContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Swap;
