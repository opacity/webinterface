import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Markdown from "react-markdown";

import ScreenContainer from "../shared/screen-container";

import { AGREEMENT_TYPES, theme } from "../../config";
import TOS_MARKDOWN from "./terms-of-service.md";
import PRIVACY_POLICY from "./privacy-policy.md";

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

class Agreement extends Component {
  state = { text: "" };

  componentDidMount () {
    const file = (type => {
      switch (type) {
        case AGREEMENT_TYPES.TERMS_OF_SERVICE:
          return TOS_MARKDOWN;
        case AGREEMENT_TYPES.PRIVACY_POLICY:
          return PRIVACY_POLICY;
      }
    })(this.props.type);

    fetch(file)
      .then(resp => resp.text())
      .then(text => this.setState({ text }));
  }

  render () {
    const { title } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ScreenContainer title={title}>
          <AgreementMarkdown source={this.state.text} />
        </ScreenContainer>
      </ThemeProvider>
    );
  }
}
export default Agreement;
