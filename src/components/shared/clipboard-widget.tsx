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

const TextContainer = styled.div`
  background-color: #232b40;
  overflow-x: scroll;
  text-align: center;
  width: 380px;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media only screen and (max-width: 567px) {
    width: 100%;
  }
`;

const TextBox = styled.p`
  display: inline-block;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: normal;
  margin: 10px 15px;

  @media only screen and (max-width: 567px) {
    width: auto;
  }

  &::-webkit-scrollbar {
    height: 0px;
    background: transparent;
  }
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
  margin: 40px 0 0 0px;
  text-transform: uppercase;
  width: 289px;
  height: 40px;

  @media only screen and (max-width: 567px) {
    width: 100%;
  }
`;

interface ClipboardWidgetProps {
  text;
  title;
  property;
}

class ClipboardWidget extends Component<ClipboardWidgetProps> {
  state = { isCopied: false };

  render() {
    const { text, title, property } = this.props;

    return (
      <div>
        <Label>{title}</Label>
        <TextContainer>
          <TextBox>{text}</TextBox>
        </TextContainer>
        <CopyToClipboard
          text={text}
          onCopy={() => this.setState({ isCopied: true })}
        >
          <CopyButton>
            <Icon src={ICON_COPY} />
            {this.state.isCopied ? "Copied!" : "Copy " + property}
          </CopyButton>
        </CopyToClipboard>
      </div>
    );
  }
}

export default ClipboardWidget;
