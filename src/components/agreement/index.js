import React, { Component } from "react";
import styled from "styled-components";
import { Markdown } from "react-showdown";

import ScreenContainer from "../shared/screen-container";

import TOS_MARKDOWN from "./terms-of-service.md";
import PRIVACY_POLICY from "./privacy-policy.md";

import { AGREEMENT_TYPES } from "../../config";

class Agreement extends Component {
  state = { text: "" };

  componentDidMount() {
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

  render() {
    const { title } = this.props;
    return (
      <ScreenContainer title={title}>
        <Markdown markup={this.state.text} />
      </ScreenContainer>
    );
  }
}
export default Agreement;
