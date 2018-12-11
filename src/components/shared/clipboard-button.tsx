import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./button";

const POPUP_TIME = 300;

const ClipboardIcon = styled.span`
  margin-left: 5px;
  margin-right: 10px;
`;

const ClipboardIconWhite = styled.span`
  width: 11.6px;
  height: 12.7px;
  background-color: #ffffff;
  display: inline-block;
  position: relative;
  top:2px;
  right:2px;
`;

const ClipboardIconBlue = styled.span`
  width: 11.6px;
  height: 12.7px;
  background-color: #2e3854;
  display: inline-block;
  position: relative;
  top:2px;
  right:2px;
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
          <ClipboardIcon>
            <ClipboardIconBlue>
              <ClipboardIconBlue>
                <ClipboardIconWhite></ClipboardIconWhite>
              </ClipboardIconBlue>
            </ClipboardIconBlue>
          </ClipboardIcon>

          {!!this.state.popTimeout ? "Copied!" : this.props.children}
        </Button>
      </CopyToClipboard>
    );
  }
}

export default ClipboardBtn;
