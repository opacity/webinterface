import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Button from "./button";

import { MOBILE_WIDTH, theme } from "../../config";

const ICON_COPY = require("../../assets/images/icon_copy.svg");

const Icon = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  background-color: ${props => props.theme.container.content};
  overflow: auto;
  text-align: center;
  width: 380px;
  margin-bottom: 40px;

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

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const TextBox = styled.p`
  display: inline-block;
  box-sizing: border-box;
  color: ${props => props.theme.button.color};
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: normal;
  margin: 10px 15px;
  white-space: nowrap;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
  }

  &::-webkit-scrollbar {
    height: 0px;
    background: transparent;
  }
`;

const Label = styled.h3<any>`
  margin: 40px 0 11px 0;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: ${props => props.theme.container.content};
  text-transform: uppercase;
  text-align: ${props => (props.align ? props.align : "left")};
`;

const CopyButton = styled(Button)<any>`
  border: none;
  cursor: pointer;
  align-items: center;
  background-color: ${props => props.theme.button.background};
  color: ${props => props.theme.button.color};
  display: flex;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  justify-content: center;
  line-height: normal;
  text-transform: uppercase;
  width: 289px;
  height: 40px;
  margin: ${props => (props.align ? "auto" : "initial")};

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const ActivateButton = styled(Button)<any>`
  border: none;
  cursor: pointer;
  align-items: center;
  background-color: ${props => props.theme.button.background};
  color: ${props => props.theme.button.color};
  display: flex;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  justify-content: center;
  line-height: normal;
  text-transform: uppercase;
  width: 289px;
  height: 40px;
  margin: ${props => (props.align ? "auto" : "initial")};

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const DeactivateButton = styled(Button)<any>`
border: none;
cursor: pointer;
align-items: center;
background-color: ${props => props.theme.button.deactivate.background};
color: ${props => props.theme.button.color};
display: flex;
font-size: 14px;
font-stretch: normal;
font-style: normal;
font-weight: bold;
justify-content: center;
line-height: normal;
text-transform: uppercase;
width: 289px;
height: 40px;
margin: 0px ${props => (props.align ? "auto" : "initial")} 20px ${props => (props.align ? "auto" : "initial")};

@media only screen and (max-width: ${MOBILE_WIDTH}px) {
  width: 100%;
}
`;

const PublicClipboardWidget = ({ text, title, isPublicFile }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isPublic, setIsPublic] = useState(isPublicFile);

  const togglePublicSharing = () => {
    // WIP backend code for public sharing
    // **************

    setIsPublic(!isPublic);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Label align="center">{title}</Label>

        { !isPublic &&
            <ActivateButton align="center" onClick={() => togglePublicSharing()}>Share File Publicly</ActivateButton>
        }

        { isPublic &&
            <>
                <TextContainer>
                    <TextBox>{text}</TextBox>
                </TextContainer>

                <DeactivateButton align="center" onClick={() => togglePublicSharing()}>Revoke File</DeactivateButton>
                <CopyToClipboard text={text} onCopy={() => setIsCopied(true)}>
                    <CopyButton align="center">
                    <Icon src={ICON_COPY} />
                    {isCopied ? "Copied!" : "Copy URL"}
                    </CopyButton>
                </CopyToClipboard>
            </>
        }
      </div>
    </ThemeProvider>
  );
};

export default PublicClipboardWidget;
