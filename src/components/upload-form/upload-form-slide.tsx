import React, { Component } from "react";
import styled from "styled-components";
import "react-select/dist/react-select.css";

import { FILE, DESKTOP_WIDTH, MOBILE_WIDTH } from "../../config";
import Button from "../shared/button";
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
  color: #ffffff;
`;

const Link = styled.a.attrs({
  target: "_blank"
})`
  color: #846b99;
  text-decoration: none;
  font-weight: 600;
`;

const Icon = styled.img`
  height: 30px;
  width: 22px;
  margin-right: 10px;
`;

const UploadButton = styled(Button)`
  align-items: center;
  background-color: #846b99;
  border: none;
  color: #ffffff;
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

const InputLabel = styled.span`
  display: inline-block;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #ffffff;
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
  color: #ffffff;
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
  border-top: 1px solid #a995bb;
  display: block;
  height: 1px;
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
  background-color: #161c29;
`;

const StorageFees = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  background-color: #232b40;
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
  color: #ffffff;
`;

const UploadFilename = styled.span`
  flex: 0.75;
  text-align: center;
  overflow: hidden;
  background-color: #232b40;
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
  background-color: #846b99;
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
  constructor(props) {
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

  disableButton(): boolean {
    const fileInput: any = this.refs.fileInput;
    const isFileChosen = fileInput && fileInput.files[0];
    return (
      this.state.isInitializing || !(this.state.isTermsChecked && isFileChosen)
    );
  }

  calculateStorageCost(fileSizeBytes, years) {
    let chunks = Math.ceil(fileSizeBytes / 1024) + 1; // 1 kb for metadata
    let numSectors = Math.ceil(chunks / CHUNKS_IN_SECTOR);
    let costPerYear = numSectors / STORAGE_PEG;
    return costPerYear * years;
  }

  humanFileSize(bytes, si) {
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
  render() {
    const {
      alphaBroker,
      betaBroker,
      retentionYears,
      selectRetentionYears,
      streamUploadFn
    } = this.props;

    return (
      <ScreenContainer title={"Upload File"}>
        <UploadSection>
          <InputLabel>Select Retention Time</InputLabel>
          <RetentionWrapper>
            <UploadColumn>
              <RetentionSlider
                type="range"
                min="0"
                max="10"
                disabled
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
              <select
                id="sel"
                value={retentionYears}
                disabled
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
              </select>
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
              ref="fileInput"
              onChange={event => {
                let file: any = [];
                if (event.target.files) {
                  file = event.target.files[0];
                }
                if (!!file) {
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
              required
            />
          </UploadColumn>
        </FileSelectWrapper>
        <Underline />
        <CostContainer>
          <InputLabel>Cost</InputLabel>
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
              <Link href="/terms-of-service">Terms and Conditions</Link> and{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>
            </CheckboxLabel>
          </CheckboxContainer>
          <UploadButton
            id="start-upload-btn"
            disabled={this.disableButton()}
            type="button"
            onClick={() => {
              const fileInput: any = this.refs.fileInput;
              const file = fileInput.files[0];
              if (!file || file.size > FILE.MAX_FILE_SIZE) {
                alert(
                  `Please select a file under ${FILE.MAX_FILE_SIZE /
                    (1000 * 1000)} MB.`
                );
              } else if (retentionYears === "0") {
                alert(`Please select retention years`);
              } else if (Number(retentionYears) > 1) {
                alert(`For the beta mainnet, max storage years is 1.`);
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
          DISCLAIMER: This is a beta phase and should not be used for important
          data. Uploads cost 1 OPQ per 64 GB. Current filesize limit is{" "}
          {FILE.MAX_FILE_SIZE / 1000000} MB per file.
        </Disclaimer>
      </ScreenContainer>
    );
  }
}

export default UploadSlide;
