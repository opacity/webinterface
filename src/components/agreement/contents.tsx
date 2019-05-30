import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Markdown from "react-markdown";

import ScreenContainer from "../shared/screen-container";
import Header from "../shared/header";

import { HEADER_TYPES, AGREEMENT_TYPES, theme } from "../../config";
import TOS_MARKDOWN from "./terms-of-service.md";
import PRIVACY_POLICY from "./privacy-policy.md";
import CODE_REVIEW_LICENSE from "./code-review-license.md";

const Container = styled.div`
  width: 100%;
`;

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
        case AGREEMENT_TYPES.CODE_REVIEW_LICENSE:
          return CODE_REVIEW_LICENSE;
        default:
          return TOS_MARKDOWN;
      }
    })(type);

    fetch(file)
      .then(resp => resp.text())
      .then(text => setText(text))
      .catch(() =>
        setText("There was a problem with the file. Please try again later!")
      );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.EMPTY} />
        <ScreenContainer title={title}>
          <AgreementMarkdown source={text} />
        </ScreenContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Contents;
