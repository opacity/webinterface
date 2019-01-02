import React, { Component } from "react";
import styled from "styled-components";
import { Markdown } from "react-showdown";

import TOS_MARKDOWN from "./terms-of-service.md";
import ScreenContainer from "../shared/screen-container";

class TermsOfService extends Component {
  state = { text: "" };

  componentDidMount() {
    fetch(TOS_MARKDOWN)
      .then(resp => resp.text())
      .then(text => this.setState({ text }));
  }

  render() {
    return (
      <ScreenContainer title={"Terms of Service"}>
        <Markdown markup={this.state.text} />
      </ScreenContainer>
    );
  }
}
export default TermsOfService;
