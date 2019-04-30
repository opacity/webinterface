import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Button from "../shared/button";
import Spinner from "../shared/spinner";

import { DOWNLOAD_STATUSES, DESKTOP_WIDTH, theme } from "../../config";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const ICON_DOWNLOAD = require("../../assets/images/icon_download.svg");

const HandleLabel = styled.h3`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: ${props => props.theme.container.content};
  text-transform: uppercase;
`;

const Icon = styled.img`
  height: 18px;
  width: 20px;
  margin-right: 10px;
`;

const InputContainer = styled.div`
  margin-bottom: 60px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    margin-bottom: 20px;
  }
`;

const HandleTextInput = styled.input.attrs({
  type: "text"
})`
  background-color: ${props => props.theme.input.background};
  padding: 0 10px;
  border: none;
  box-sizing: border-box;
  color: ${props => props.theme.container.content};
  height: 45px;
  max-width: 380px;
  width: 100%;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;

const DownloadButton = styled(Button)`
  align-items: center;
  background-color: ${props => props.theme.button.background};
  border: none;
  color: ${props => props.theme.button.color};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  letter-spacing: 0.4px;
  line-height: normal;
  margin-right: 20px;
  text-transform: uppercase;
  width: 300px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;

interface DownloadFormSlideProps {
  download;
  status;
}

interface DownloadFormState {
  handle;
}

class DownloadFormSlide extends React.Component<
  DownloadFormSlideProps,
  DownloadFormState
> {
  constructor (props) {
    super(props);
    this.state = { handle: "" };
  }

  inputHandler = evt => {
    this.setState({ handle: evt.target.value });
  }

  render () {
    const { download, status } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ScreenContainer title={"Retrieve File"}>
          <ScreenDescription>
            Enter your Opacity handle below to download your file from Opacity.
          </ScreenDescription>
          <InputContainer>
            <label>
              <HandleLabel>Enter Opacity Handle</HandleLabel>
              <HandleTextInput
                id="download-handle-input"
                name="handle"
                onChange={evt => this.inputHandler(evt)}
              />
            </label>
          </InputContainer>
          <div>
            <DownloadButton
              id="download-btn"
              disabled={status === DOWNLOAD_STATUSES.PENDING}
              onClick={() => {
                const handle = this.state.handle;
                if (!handle) {
                  alert("Please input a handle.");
                } else {
                  download(handle);
                }
              }}
            >
              <Icon src={ICON_DOWNLOAD} />
              {status === DOWNLOAD_STATUSES.PENDING
                ? "Retrieving file..."
                : "Retrieve File"}
            </DownloadButton>
            <Spinner
              isActive={status === DOWNLOAD_STATUSES.PENDING}
              className="download-spinner"
            />
          </div>
        </ScreenContainer>
      </ThemeProvider>
    );
  }
}

export default DownloadFormSlide;
