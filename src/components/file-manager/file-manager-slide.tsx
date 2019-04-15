import React from "react";
import styled, { ThemeProvider } from "styled-components";

import {
  HEADER_FILE_MANAGER,
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  theme
} from "../../config";

import Header from "../shared/header";

const ICON_LOGO = require("../../assets/images/logo-login.svg");

const ContainerWrapper = styled.div``;

const Container = styled.div`
  height: 100%;
  max-width: 850px;
  margin-left: 270px;
  background-color: ${props => props.theme.background};
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin-left: 145px;
    max-width: 540px;
  }
  @media only screen and (max-width: 1374px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 1130px) {
    max-width: 500px;
  }
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin: 0px;
    padding: 25px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${props => props.theme.button.background};
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  text-align: center;
  margin: auto;
  border: none;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin: 20px 0 20px 0;
  text-align: right;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

const ButtonMobileWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  right 0;
  margin-bottom: 15px;
  margin-right: 10px;
  background-color: ${props => props.theme.button.background};
  width: 40px;
  height: 40px;
  border-radius: 100px;
  box-shadow: 0 0.5px 4px 0 rgba(0, 0, 0, 0.2), 0 1.5px 2px 0 rgba(0, 0, 0, 0.12), 0 1.5px 1.5px 0 rgba(0, 0, 0, 0.14);
  cursor: pointer;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const TableIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const LeftSideNav = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1110;
  top: 0;
  left: -250px;
  background-color: #cfe3fc;
  overflow-x: hidden;
  transition: 0.5s;
  margin-top: 62px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    width: 125px;
    left: -125px;
  }
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 80%;
    left: 80%;
  }
`;

const LeftSideNavOpen = styled(LeftSideNav)`
  left: 0;
`;

const RightSideNav = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1130;
  top: 0;
  right: -250px;
  background-color: #ffffff;
  overflow-x: hidden;
  transition: 0.5s;
  margin-top: 62px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    right: 100%;
  }
`;

const RightSideNavOpen = styled(RightSideNav)`
  right: 0;
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0px;
`;

const Tr = styled.tr`
  &:hover td {
    background-color: #cfe3fc;
    cursor: pointer;
  }
  th:first-child,
  td:first-child {
    width: 5%;
    text-align: right;
  }
  th:nth-child(2),
  td:nth-child(2) {
    width: 55%;
  }
  @media (max-width: ${MOBILE_WIDTH}px) {
    th:nth-child(3),
    th:nth-child(4),
    td:nth-child(3),
    td:nth-child(4) {
      display: none;
    }
    th:nth-child(2),
    td:nth-child(2) {
      width: 95%;
    }
  }
`;

const Th = styled.th`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
  width: 20%;
  border-bottom: 1px solid #cfd7e6;
  padding: 15px 10px 15px 10px;
`;

const Td = styled.td`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
  width: 20%;
  border-bottom: 1px solid #cfd7e6;
  padding: 15px 10px 15px 10px;
`;

const StorageInfo = styled.div`
  position: absolute;
  bottom: 120px;
  width: 100%;
`;

const StorageTitleWrapper = styled.div`
  width: 138px;
  margin: auto;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    width: 100px;
  }
`;

const StorageTitle = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
`;

const StorageProgressWrapper = styled.div`
  width: 138px;
  height: 10px;
  background-color: #acc5e3;
  margin: auto;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    width: 100px;
  }
`;

const StorageProgress = styled.div`
  background-color: #2e6dde;
  width: 30%;
  height: 10px;
`;

const FileWrapper = styled.div`
  width: 200px;
  margin: auto;
  margin-top: 150px;
`;

const FileIconWrapper = styled.div`
  text-align: center;
`;

const FileIcon = styled.img`
  height: 60px;
  width: 60px;
  text-align: center;
`;

const FileTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
`;

const FileInfo = styled.p`
  margin-top: 15px;
  font-size: 8px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.1px;
  color: #4f5e78;
`;

const FileData = styled.p`
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
`;

const FileButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: ${props => props.theme.button.background};
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  text-align: center;
  margin: auto;
  border: none;
  cursor: pointer;
`;

const FileBackButton = styled.div`
  display: none;
  margin-top: 10px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const FileBackIcon = styled.img`
  height: 17px;
  width: 17px;
  margin-left: 5px;
  float: left;
`;
const FileBackTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
  margin-left: 5px;
  float: left;
`;

const FileManagerSlide = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContainerWrapper>
        <Header type={HEADER_FILE_MANAGER} />
        <LeftSideNavOpen>
          <StorageInfo>
            <StorageTitleWrapper>
              <StorageTitle>30GB/100GB USED</StorageTitle>
            </StorageTitleWrapper>
            <StorageProgressWrapper>
              <StorageProgress />
            </StorageProgressWrapper>
          </StorageInfo>
        </LeftSideNavOpen>
        <RightSideNavOpen>
          <FileBackButton>
            <FileBackIcon src={ICON_LOGO} />
            <FileBackTitle>Back</FileBackTitle>
          </FileBackButton>
          <FileWrapper>
            <FileIconWrapper>
              <FileIcon src={ICON_LOGO} />
            </FileIconWrapper>
            <FileTitle>Proposal Revision #2</FileTitle>
            <FileInfo>MODIFIED</FileInfo>
            <FileData>03/15/2019</FileData>
            <FileInfo>SIZE</FileInfo>
            <FileData>1.8 MB</FileData>
            <FileButton>Download</FileButton>
          </FileWrapper>
        </RightSideNavOpen>
        <Container>
          <Title>All Files</Title>
          <ButtonWrapper>
            <Button>Upload</Button>
          </ButtonWrapper>
          <Table>
            <thead>
              <Tr>
                <Th />
                <Th>Name</Th>
                <Th>Modifed</Th>
                <Th>Size</Th>
              </Tr>
            </thead>
            <tbody>
              <Tr>
                <Td>
                  <TableIcon src={ICON_LOGO} />
                </Td>
                <Td>HR STUFF</Td>
                <Td>01/03/2019</Td>
                <Td>40 FILES</Td>
              </Tr>
              <Tr>
                <Td>
                  <TableIcon src={ICON_LOGO} />
                </Td>
                <Td>STUFF</Td>
                <Td>01/03/2019.</Td>
                <Td>25 FILES</Td>
              </Tr>
              <Tr>
                <Td>
                  <TableIcon src={ICON_LOGO} />
                </Td>
                <Td>Maine</Td>
                <Td>01/03/2019</Td>
                <Td>30 FILES</Td>
              </Tr>
            </tbody>
          </Table>
          <ButtonMobileWrapper />
        </Container>
      </ContainerWrapper>
    </ThemeProvider>
  );
};

export default FileManagerSlide;
