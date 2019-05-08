import React, { Component } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { theme, DESKTOP_WIDTH, MOBILE_WIDTH } from "../../config";

import ContentBox from "./content-box";
import Content from "./content";
import Hr from "./hr";
import Title from "./title";
import ContinueButton from "./continue-button";
import Input from "../shared/generic/Input";

const ICON_CLIPBOARD = require("../../assets/images/icon_clipboard.svg");

const ContentBold = styled(Content)`
  margin-top: 25px;
  font-weight: bold;
  min-height: 28px;
  text-transform: uppercase;
`;

const ClipboardIconWrrapper = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin: 25px 0;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px)
    text-align: center;
  }
`;

const InputWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;
const InputColumnWrapper = styled.div`
  flex: 50%;
`;

const Label = styled.h3`
  color: ${props => props.theme.label.color};
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
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

interface RecordAccountHandleProps {
  handle;
  setStoragePin;
}

interface RecordAccountHandleState {
  storagePin;
  retypedStoragePin;
  isCopied;
}

class RecordAccountHandleSlide extends Component<
  RecordAccountHandleProps,
  RecordAccountHandleState
> {
  state = {
    storagePin: "",
    retypedStoragePin: "",
    isCopied: false
  };

  save (storagePin) {
    const { setStoragePin } = this.props;
    setStoragePin(storagePin);
  }

  render () {
    const { handle } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <ContentBox>
          <Title>
            IMPORTANT: Save Your Private Opacity Account Handle and PIN
          </Title>
          <Hr />
          <Content>
            Your Opacity Account Handle is the key to your account. It is
            important that you keep it safe and private. This key will allow
            anyone that has it to access your storage account. It should not be
            shared with anyone that you do not wish to have access to your data.
          </Content>
          <ContentBold>
            Your privacy and security is in your hands. Keep these numbers safe.
          </ContentBold>
          <Label>Here is your Opacity Account Handle</Label>
          <HandleWrapper>
            <Handle>{handle}</Handle>
            <CopyToClipboard
              text={handle}
              onCopy={() => this.setState({ isCopied: true })}
            >
              <ClipboardIconWrrapper>
                <ClipboardIcon src={ICON_CLIPBOARD} />
              </ClipboardIconWrrapper>
            </CopyToClipboard>
            {this.state.isCopied && (
              <CopiedReminder>Copied to clipboard!</CopiedReminder>
            )}
          </HandleWrapper>
          <InputWrapper>
            <InputColumnWrapper>
              <Label>Choose Account PIN</Label>
              <Input
                name="storage-pin"
                onChange={e => this.setState({ storagePin: e.target.value })}
              />
            </InputColumnWrapper>
            <InputColumnWrapper>
              <Label>Re-Type Account PIN</Label>
              <Input
                name="retyped-storage-pin"
                onChange={e =>
                  this.setState({ retypedStoragePin: e.target.value })
                }
              />
            </InputColumnWrapper>
          </InputWrapper>
          <Content>
            Before you continue, make sure you have copied your Account Handle
            and safely recorded your PIN. Without this information, you will not
            be able to access your account. Opacity does not have access to this
            information and will not be able to recover it for you.
          </Content>
          <ButtonWrapper>
            <ContinueButton
              onClick={() => {
                const { storagePin, retypedStoragePin, isCopied } = this.state;

                storagePin.length !== 0 &&
                storagePin === retypedStoragePin &&
                isCopied
                  ? this.save(this.state.storagePin)
                  : alert(
                    "Please make sure to copy your account handle and input matching PINs before proceeding."
                    );
              }}
            >
              Continue
            </ContinueButton>
          </ButtonWrapper>
        </ContentBox>
      </ThemeProvider>
    );
  }
}

export default RecordAccountHandleSlide;
