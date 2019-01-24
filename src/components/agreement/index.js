import React, { Component } from "react";
import styled from "styled-components";
import Markdown from "react-markdown";

import ScreenContainer from "../shared/screen-container";

import { AGREEMENT_TYPES } from "../../config";
import TOS_MARKDOWN from "./terms-of-service.md";
import PRIVACY_POLICY from "./privacy-policy.md";

const AgreementMarkdownComponent = (props) => (
  <div>
    <Markdown {...props} />
  </div>
);

// temp solution
const AgreementMarkdown = styled(AgreementMarkdownComponent)`
  color: white;

  a[href] {
    color: #846b99;
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
      <ScreenContainer title={title}>
        <AgreementMarkdown source={this.state.text} />
      </ScreenContainer>
    );
  }
}
export default Agreement;
