import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import "react-select/dist/react-select.css";

import {
  FILE,
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  EXCHANGE_LINK,
  theme
} from "../../config";
import Button from "../shared/button";
import OutboundLink from "../shared/outbound-link";
import Spinner from "../shared/spinner";
import ScreenContainer from "../shared/screen-container";

const ICON_FOLDER = require("../../assets/images/icon_folder.svg");
const ICON_UPLOAD = require("../../assets/images/icon_upload.svg");

const DEFAULT_FILE_INPUT_TEXT = "No file selected";
const DEFAULT_FILE_INPUT_SIZE = 0;
const DEFAULT_FILE_INPUT_COST = 0;
const DEFAULT_HUMAN_FILE_SIZE = 0;
const CHUNKS_IN_SECTOR = 1000000;
const STORAGE_PEG = 64;

const CheckboxContainer = styled.div`
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input.attrs({
  type: "checkbox"
})`
  margin-right: 10px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    height: 20px;
    width: 20px;
    position: relative;
    top: 5px;
  }
`;

const CheckboxLabel = styled.label`
  margin-top: -5px;
  color: ${props => props.theme.container.content};
`;

const Icon = styled.img`
  height: 30px;
  width: 22px;
  margin-right: 10px;
`;

const UploadButton = styled(Button)`
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
  &:disabled {
    background-color: #888888;
    cursor: not-allowed;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const FileSelectWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    margin-top: 0px;
  }
`;

const RetentionWrapper = styled.form`
  display: flex;
  justify-content: space-between;
`;

const FolderIcon = styled.img`
  width: 15px;
`;

const CostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TokenReminder = styled.span`
  margin-left: 10px;
  color: ${props => props.theme.container.content};
  font-size: 12px;
`;

const InputLabel = styled.span`
  display: inline-block;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: ${props => props.theme.container.content};
  text-transform: uppercase;
  @media only screen and (max-width: 567px) {
    margin: 20px 0;
  }
`;

const UploadInputContainer = styled.div`
  width: 380px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const Disclaimer = styled.div`
  font-size: 12px;
  color: ${props => props.theme.container.content};
  margin-top: 15px;
`;

const UploadButtonContainer = styled.div`
  overflow: hidden;
  width: 100%;
  padding-top: 25px;
`;

const UploadColumn = styled.div`
  width: 380px;
  padding-right: 10px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    padding-right: 0px;
  }
`;

const UploadColumnCenter = styled(UploadColumn)`
  @media only screen and (max-width: 567px) {
    text-align: center;
  }
`;

const Underline = styled.hr`
  border: 0;
  border-top: ${props => props.theme.title.underline.height}px solid
    ${props => props.theme.title.underline.color};
  display: block;
  height: ${props => props.theme.title.underline.height}px;
  margin: 45px 0 40px 0;
  padding: 0;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    margin-top: 14px;
    margin-bottom: 0px;
  }
`;

const UploadSection = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const RetentionSlider = styled.input`
  max-width: 380px;
  width: 100%;
  -webkit-appearance: none;
  background-color: ${props => props.theme.slider.defaultColor};
  height: 1px;
  border: none;
  border-radius: 4px;
  margin-top: 15px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${props => props.theme.slider.hoverColor};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: ${props => props.theme.slider.hoverColor};
    border: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    opacity: 1;
  }
`;

const StorageFees = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  background-color: ${props => props.theme.input.background};
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const StorageCost = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.container.content};
`;

const UploadFilename = styled.span`
  flex: 0.75;
  text-align: center;
  overflow: hidden;
  background-color: ${props => props.theme.input.background};
  color: ${props => props.theme.container.content};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    flex: 1;
  }
`;

const UploadFolder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: ${props => props.theme.title.underline.color};
`;

const SelectYears = styled.select`
  background-color: ${props => props.theme.input.background};
  height: 25px;
  line-height: 26px;
  margin: 0 10px 0 0;
  padding-left: 15px;
  text-align: center;
  width: 40px;
  color: ${props => props.theme.container.content};
  border: none;
  border-radius: 0;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  margin-left: 10px;
`;

interface UploadSlideProps {
  alphaBroker;
  betaBroker;
  retentionYears;
  selectRetentionYears;
  streamUploadFn;
}

interface UploadSlideState {
  fileName;
  fileSize;
  storageCost;
  humanFileSize;
  isTermsChecked: boolean;
  isInitializing: boolean; // TODO: Enum this.
}

class UploadSlide extends Component<UploadSlideProps, UploadSlideState> {
  fileInput: HTMLInputElement | null = null;

  constructor (props) {
    super(props);

    this.state = {
      fileName: DEFAULT_FILE_INPUT_TEXT,
      fileSize: DEFAULT_FILE_INPUT_SIZE,
      storageCost: DEFAULT_FILE_INPUT_COST,
      humanFileSize: DEFAULT_HUMAN_FILE_SIZE,
      isTermsChecked: false,
      isInitializing: false
    };
  }

  disableButton (): boolean {
    const fileInput: any = this.fileInput;
    const isFileChosen = fileInput && fileInput.files[0];
    return (
      this.state.isInitializing || !(this.state.isTermsChecked && isFileChosen)
    );
  }

  calculateStorageCost (fileSizeBytes, years) {
    let chunks = Math.ceil(fileSizeBytes / 1024) + 1; // 1 kb for metadata
    let numSectors = Math.ceil(chunks / CHUNKS_IN_SECTOR);
    let costPerYear = numSectors / STORAGE_PEG;
    return costPerYear * years;
  }

  humanFileSize (bytes, si) {
    let thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
      return bytes + " B";
    }
    let units = si
      ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
      : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let u = -1;
    do {
      bytes /= thresh;
      ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + " " + units[u];
  }

  render () {
    const {
      alphaBroker,
      betaBroker,
      retentionYears,
      selectRetentionYears,
      streamUploadFn
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <ScreenContainer title={"Upload File"}>
          <UploadSection>
            <InputLabel>Select Retention Time</InputLabel>
            <RetentionWrapper>
              <UploadColumn>
                <RetentionSlider
                  type="range"
                  min="0"
                  max="10"
                  disabled={true}
                  value={retentionYears}
                  onChange={event => {
                    let retentionYears = event.target.value;
                    selectRetentionYears(retentionYears);
                    this.setState({
                      storageCost: this.calculateStorageCost(
                        this.state.fileSize,
                        retentionYears
                      )
                    });
                  }}
                />
              </UploadColumn>
              <UploadColumnCenter>
                <SelectYears
                  value={retentionYears}
                  disabled={true}
                  onChange={event => {
                    let retentionYears = event.target.value;
                    selectRetentionYears(retentionYears);
                    this.setState({
                      storageCost: this.calculateStorageCost(
                        this.state.fileSize,
                        retentionYears
                      )
                    });
                  }}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </SelectYears>
                <InputLabel>Years of retention</InputLabel>
              </UploadColumnCenter>
            </RetentionWrapper>
          </UploadSection>
          <FileSelectWrapper>
            <UploadColumn>
              <InputLabel>Select a file</InputLabel>
              <UploadInputContainer>
                <label htmlFor="upload-input" className="file-input-label">
                  <UploadFilename>{this.state.fileName}</UploadFilename>
                  <UploadFolder>
                    <FolderIcon src={ICON_FOLDER} alt="folder" />
                  </UploadFolder>
                </label>
              </UploadInputContainer>
              <input
                name="upload"
                id="upload-input"
                ref={el => {
                  this.fileInput = el;
                }}
                onChange={event => {
                  let file: any = [];
                  if (event.target.files) {
                    file = event.target.files[0];
                  }
                  if (file) {
                    this.setState({
                      fileName: file.name,
                      fileSize: file.size,
                      humanFileSize: this.humanFileSize(file.size, true),
                      storageCost: this.calculateStorageCost(
                        file.size,
                        retentionYears
                      )
                    });
                  } else {
                    this.setState({
                      fileName: DEFAULT_FILE_INPUT_TEXT,
                      fileSize: DEFAULT_FILE_INPUT_SIZE,
                      humanFileSize: DEFAULT_FILE_INPUT_SIZE,
                      storageCost: DEFAULT_FILE_INPUT_COST
                    });
                  }
                }}
                type="file"
                required={true}
              />
            </UploadColumn>
          </FileSelectWrapper>
          <Underline />
          <CostContainer>
            <div>
              <InputLabel>Cost</InputLabel>
              <TokenReminder>
                Need OPQ? Purchase some{" "}
                <OutboundLink href={EXCHANGE_LINK}>here</OutboundLink>
              </TokenReminder>
            </div>
            <StorageFees>
              <StorageCost> {this.state.storageCost} OPQ</StorageCost>
            </StorageFees>
          </CostContainer>
          <UploadButtonContainer>
            <CheckboxContainer>
              <CheckboxLabel htmlFor="terms-checkbox">
                <CheckboxInput
                  id="terms-checkbox"
                  value="checked"
                  onChange={e =>
                    this.setState({ isTermsChecked: e.target.checked })
                  }
                  checked={this.state.isTermsChecked}
                />
                I agree to the{" "}
                <OutboundLink href="/terms-of-service">
                  Terms and Conditions
                </OutboundLink>{" "}
                and{" "}
                <OutboundLink href="/privacy-policy">
                  Privacy Policy
                </OutboundLink>
              </CheckboxLabel>
            </CheckboxContainer>
            <UploadButton
              id="start-upload-btn"
              disabled={this.disableButton()}
              type="button"
              onClick={() => {
                const fileInput: any = this.fileInput;
                const file = fileInput.files[0];
                if (!file || file.size > FILE.MAX_FILE_SIZE) {
                  alert(
                    `Please select a file under ${FILE.MAX_FILE_SIZE /
                      (1000 * 1000)} MB.`
                  );
                } else if (retentionYears === "0") {
                  alert("Please select retention years");
                } else if (Number(retentionYears) > 1) {
                  alert("For the beta mainnet, max storage years is 1.");
                } else {
                  const brokers = { alpha: alphaBroker, beta: betaBroker };
                  streamUploadFn(file, retentionYears, brokers);
                }
              }}
            >
              <Icon src={ICON_UPLOAD} />
              {this.state.isInitializing
                ? "Initializing Upload..."
                : "Upload File"}
            </UploadButton>
            <Spinner
              isActive={this.state.isInitializing}
              className="download-spinner"
            />
          </UploadButtonContainer>
          <Disclaimer>
            DISCLAIMER: This is a beta phase and should not be used for
            important data. Uploads cost 1 OPQ per 64 GB. Current filesize limit
            is {FILE.MAX_FILE_SIZE / 1000000} MB per file.
          </Disclaimer>
        </ScreenContainer>
      </ThemeProvider>
    );
  }
}

export default UploadSlide;
