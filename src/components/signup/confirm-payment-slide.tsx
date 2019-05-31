import React, { useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { theme } from "../../config";

import ContentBox from "./content-box";
import Title from "./title";

const ICON_CLIPBOARD = require("../../assets/images/icon_clipboard.svg");

const Content = styled.a`
  text-align: center;
  margin-top: 25px;
  width: auto;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.link.color};
`;

const ClipboardIconWrrapper = styled.div`
  display: flex;
`;

const Label = styled.h3`
  color: ${props => props.theme.label.color};
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  text-align-last: center;
  letter-spacing: 0.7px;
  line-height: normal;
`;

const HandleWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.password.background};
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const fadeout = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const CopiedReminder = styled.span`
  color: ${props => props.theme.label.color};
  font-size: 10px;
  position: absolute;
  right: -100px;
  animation: ${fadeout} 2s ease-in-out 0s forwards;
`;

const Handle = styled.span`
  color: white;
  font-size: 12px;
  overflow-x: auto;
  padding: 10px;

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
`;

const ClipboardIcon = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 0 10px;
  object-fit: contain;
`;

const Wrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const RegisterConfirmPaymentSlide = ({ handle }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <ContentBox>
        <Title>Your Opacity Account is Ready!</Title>
        <Wrapper>
          <Content href="/login">Login now with your Account Handle</Content>
        </Wrapper>
        <Label>Opacity Account Handle</Label>
        <HandleWrapper>
          <Handle>{handle}</Handle>
          <CopyToClipboard text={handle} onCopy={() => setIsCopied(true)}>
            <ClipboardIconWrrapper>
              <ClipboardIcon src={ICON_CLIPBOARD} />
            </ClipboardIconWrrapper>
          </CopyToClipboard>
          {isCopied && <CopiedReminder>Copied to clipboard!</CopiedReminder>}
        </HandleWrapper>
      </ContentBox>
    </ThemeProvider>
  );
};

export default RegisterConfirmPaymentSlide;
