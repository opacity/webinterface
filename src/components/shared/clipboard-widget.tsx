import React, { Component } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Button from "./button";

const ICON_COPY = require("../../assets/images/icon_copy.svg");

const Icon = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`;

const TextBox = styled.p`
  align-items: center;
  background-color: #232b40;
  color: #ffffff;
  display: flex;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  height: 25px;
  justify-content: center;
  letter-spacing: normal;
  line-height: normal;
  width: 380px;
`;

const Label = styled.h3`
  margin: 0 0 11px 0;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #ffffff;
  text-transform: uppercase;
`;

const CopyButton = styled(Button)`
  border: none;
  cursor: pointer;
  align-items: center;
  background-color: #846b99;
  color: #ffffff;
  display: flex;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  justify-content: center;
  line-height: normal;
  margin: 60px 0 0 0px;
  text-transform: uppercase;
  width: 289px;
  height: 40px;
`;

interface ClipboardWidgetProps {
  text;
}

class ClipboardWidget extends Component<ClipboardWidgetProps> {
  state = { isCopied: false };

  render() {
    const { text } = this.props;

    return (
      <div>
        <Label>Opacity Handle</Label>
        <TextBox>{text}</TextBox>
        <CopyToClipboard
          text={text}
          onCopy={() => this.setState({ isCopied: true })}>
          <CopyButton>
            <Icon src={ICON_COPY} />
            {this.state.isCopied ? "Copied!" : "Copy Address"}
          </CopyButton>
        </CopyToClipboard>
      </div>
    );
  }
}

export default ClipboardWidget;
