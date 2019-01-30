import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

import { DESKTOP_WIDTH } from "../../config";

const ICON_DOWNLOAD = require("../../assets/images/icon_download.svg");
const ICON_UPLOAD = require("../../assets/images/icon_upload.svg");

const LinkContainer = styled.div`
  display: flex;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    display: block;
  }
`;

const Icon = styled.img`
  height: 30px;
  width: 22px;
`;

const Link = styled.a`
  cursor: pointer;
  align-items: center;
  background-color: #846b99;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  height: 80px;
  justify-content: center;
  letter-spacing: 0.4px;
  line-height: normal;
  margin-right: 20px;
  text-transform: uppercase;
  width: 220px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 15px;
    height: 95px;
  }
`;

const ChoiceSlide = ({ visitUploadFormFn, visitDownloadFormFn, history }) => (
  <ScreenContainer title={"Welcome to Opacity Storage"}>
    <ScreenDescription>
      Please select an option below to access anonymous storage.
    </ScreenDescription>
    <LinkContainer>
      <Link id="upload-btn" onClick={() => history.push("/upload-form")}>
        <Icon src={ICON_UPLOAD} />
        Upload a file
      </Link>
      <Link onClick={() => history.push("/download-form")}>
        <Icon src={ICON_DOWNLOAD} />
        Retrieve a file
      </Link>
    </LinkContainer>
  </ScreenContainer>
);

export default withRouter(ChoiceSlide);
