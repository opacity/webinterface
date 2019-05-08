import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Markdown from "react-markdown";

import ScreenContainer from "../shared/screen-container";
import Header from "../shared/header";

import { HEADER_TYPES, AGREEMENT_TYPES, theme } from "../../config";
import TOS_MARKDOWN from "./terms-of-service.md";
import PRIVACY_POLICY from "./privacy-policy.md";

const Container = styled.div``;

const AgreementMarkdownComponent = props => (
  <div>
    <Markdown {...props} />
  </div>
);

// temp solution
const AgreementMarkdown = styled(AgreementMarkdownComponent)`
  color: ${props => props.theme.title.color};

  a[href] {
    color: ${props => props.theme.title.color};
  }
`;

const Contents = ({ type, title, isLoggedIn }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const file = (type => {
      switch (type) {
        case AGREEMENT_TYPES.PRIVACY_POLICY:
          return PRIVACY_POLICY;
        default:
          return TOS_MARKDOWN;
      }
    })(type);

    fetch(file)
      .then(resp => resp.text())
      .then(text => setText(text));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.SCREEN_CONTAINER} />
        <ScreenContainer title={title}>
          <AgreementMarkdown source={text} />
        </ScreenContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Contents;
