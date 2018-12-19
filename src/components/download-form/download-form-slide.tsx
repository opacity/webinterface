import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";
import Button from "../shared/button";
import Spinner from "../shared/spinner";

import { DOWNLOAD_STATUSES } from "../../config";

const HandleInstructions = styled.p`
  padding-bottom: 150px;
`;

const HandleLabel = styled.span`
  color: #6ea0de;
  font-size: 20px;
  margin-right: 15px;
`;

const HandleTextInput = styled.input`
  border: none;
  border-bottom: #0068ea 1px solid;
  width: 40%;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
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
  constructor(props) {
    super(props);
    this.state = { handle: "" };
  }

  inputHandler = evt => {
    this.setState({ handle: evt.target.value });
  };

  render() {
    const { download, status } = this.props;
    return (
      <ScreenContainer title="Retrieve a File">
        <HandleInstructions>
          Enter your Oyster handle below to access your stored file from the
          Tangle.
        </HandleInstructions>
        <div>
          <label>
            <HandleLabel>Oyster Handle:</HandleLabel>
            <HandleTextInput
              id="download-handle-input"
              name="handle"
              type="text"
              onChange={evt => this.inputHandler(evt)}
            />
          </label>
        </div>
        <div>
          <Button
            id="download-btn"
            className="primary-button"
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
            {status === DOWNLOAD_STATUSES.PENDING
              ? "Retrieving file..."
              : "Retrieve File"}
          </Button>
          <Spinner
            isActive={status === DOWNLOAD_STATUSES.PENDING}
            className="download-spinner"
          />
        </div>
      </ScreenContainer>
    );
  }
}

export default DownloadFormSlide;
