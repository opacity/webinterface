import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const ICON_DOWNLOAD = require("../../assets/images/icon_download.svg");
const ICON_UPOAD = require("../../assets/images/icon_upload.svg");

const LinkContainer = styled.a`
  display: flex;
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
`;

const ChoiceSlide = ({ visitUploadFormFn, visitDownloadFormFn, history }) => (
  <ScreenContainer title={"Opacity Storage"}>
    <ScreenDescription>
      Welcome to Opacity Storage. Please select one of the options provided
      below.
    </ScreenDescription>
    <LinkContainer>
      <Link onClick={() => history.push("/upload-form")}>
        <Icon src={ICON_UPOAD} />
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
