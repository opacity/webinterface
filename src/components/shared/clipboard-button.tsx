import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./button";

const POPUP_TIME = 300;

const ClipboardIconContainer = styled.span`
  margin-left: 5px;
  margin-right: 10px;
`;

const ClipboardIcon = styled.span`
  width: 11.6px;
  height: 12.7px;
  display: inline-block;
  position: relative;
`;

const ClipboardIconWhite = styled(ClipboardIcon)`
  background-color: #ffffff;
  top: 2px;
  right: 2px;
`;

const ClipboardIconBlueFirst = styled(ClipboardIcon)`
  background-color: #2e3854;
  top: -1px;
  right: -23px;
`;

const ClipboardIconBlueSecond = styled(ClipboardIcon)`
  background-color: #2e3854;
  top: -2px;
  right: -13px;
`;

interface ClipboardBtnProps {
  text;
}

class ClipboardBtn extends React.Component<ClipboardBtnProps> {
  state = { popTimeout: undefined };

  render() {
    return (
      <CopyToClipboard
        text={this.props.text}
        onCopy={() => {
          window.clearTimeout(this.state.popTimeout);
          const popTimeout = window.setTimeout(
            () => this.setState({ popTimeout: undefined }),
            POPUP_TIME
          );
          this.setState({ popTimeout });
        }}
      >
        <Button className="clipboard-button">
          <ClipboardIconContainer>
            <ClipboardIconBlueFirst/>
            <ClipboardIconBlueSecond/>
            <ClipboardIconWhite/>
          </ClipboardIconContainer>

          {!!this.state.popTimeout ? "Copied!" : this.props.children}
        </Button>
      </CopyToClipboard>
    );
  }
}

export default ClipboardBtn;
