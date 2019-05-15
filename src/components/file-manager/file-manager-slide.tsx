import _ from "lodash";
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import backend from "../../services/backend";
import { NativeTypes } from "react-dnd-html5-backend";
import { DropTarget } from "react-dnd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

import { HEADER_TYPES, MOBILE_WIDTH, theme } from "../../config";

import Header from "../shared/header";
import UploadButton from "./upload-button";
import DragAndDropOverlay from "./drag-and-drop-overlay";
import UserPanel from "./user-panel";

import * as Metadata from "../../services/metadata";

const ICON_LOGO = require("../../assets/images/logo-login.svg");

const fileTarget = {
  drop (props, monitor) {
    const { upload, accountId } = props;
    const { files } = monitor.getItem();
    upload(files, accountId);
  }
};

const DroppableZone = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: #687892;
  font-size: 14px;
  margin-right: 2px;
`;

const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.background};
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

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0px;
`;

const Tr = styled.tr`
  &:hover td {
    background-color: #cfe3fc;
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
  white-space: nowrap;
`;

const ThPointer = styled(Th)`
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  height: 100%;
`;

const Arrow = styled.span`
  width: 0;
  height: 0;
  position: relative;
  left: 5px;
`;

const ArrowTop = styled(Arrow)`
  top: -10px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #687892;
`;

const ArrowDown = styled(Arrow)`
  top: 10px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #687892;
`;

const TableHeader = ({ param, title, sortBy, paramArrow }) => {
  const [order, setOrder] = useState("desc");

  const changeOrder = () => {
    sortBy(param, order);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  return (
    <ThPointer onClick={() => changeOrder()}>
      {title}
      {paramArrow === param &&
        (order === "desc" ? <ArrowTop /> : <ArrowDown />)}
    </ThPointer>
  );
};

interface File {
  filename: string;
  handle: string;
  createdAt: string;
  size: number;
}

const FileManagerSlide = ({
  upload,
  download,
  accountId,
  metadataKey,
  metadata,
  connectDropTarget,
  isOver
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [accountData, setAccountData] = useState("");
  const [paramArrow, setParamArrow] = useState("");
  const account = {
    storageUsed: 25,
    storageLimit: 100
  };

  const sortBy = (param, order) => {
    setParamArrow(param);
    setFiles(_.orderBy(files, param, order));
  };

  const formatBytes = bytes => {
    if (bytes < 1024) return bytes + " Bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
    else return (bytes / 1073741824).toFixed(3) + " GB";
  };

  useEffect(() => {
    backend
      .getMetadata({ metadataKey })
      .then(({ metadata }) => {
        const decryptedMetadata = Metadata.decrypt(metadataKey, metadata);
        const unorderedFiles = decryptedMetadata ? decryptedMetadata.files : [];
        setFiles(_.orderBy(unorderedFiles, "createdAt", "desc"));
      })
      .catch(console.log);

    const publicKey = "";
    const signature = "";

    backend
      .getAccountData({ publicKey, signature })
      .then(({ account }) => {
        setAccountData(account);
      })
      .catch(console.log);
  }, [metadata]);

  return (
    <DroppableZone innerRef={instance => connectDropTarget(instance)}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header type={HEADER_TYPES.FILE_MANAGER} />
          <Contents>
            <UserPanel account={account} />
            <TableContainer>
              <Title>All Files</Title>
              <ButtonWrapper>
                <UploadButton onSelected={files => upload(files, accountId)} />
              </ButtonWrapper>
              <Table>
                <thead>
                  <Tr>
                    <Th />
                    <TableHeader
                      param="name"
                      title="Name"
                      paramArrow={paramArrow}
                      sortBy={(param, order) => sortBy(param, order)}
                    />
                    <Th>File Handle</Th>
                    <TableHeader
                      param="createdAt"
                      title="Date"
                      paramArrow={paramArrow}
                      sortBy={(param, order) => sortBy(param, order)}
                    />
                    <TableHeader
                      param="size"
                      title="Size"
                      paramArrow={paramArrow}
                      sortBy={(param, order) => sortBy(param, order)}
                    />
                    <Th>Actions</Th>
                  </Tr>
                </thead>
                <tbody>
                  {files.map(({ filename, handle, createdAt, size }) => (
                    <Tr key={handle}>
                      <Td>
                        <TableIcon src={ICON_LOGO} />
                      </Td>
                      <Td>{filename}</Td>
                      <Td>{_.truncate(handle, { length: 30 })}</Td>
                      <Td>{moment(createdAt).format("MM/DD/YYYY")}</Td>
                      <Td>{formatBytes(size)}</Td>
                      <Td>
                        <ActionButton
                          onClick={() => download(handle, filename)}
                        >
                          Download
                        </ActionButton>
                        <ActionButton>Delete</ActionButton>
                      </Td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <ButtonMobileWrapper />
            </TableContainer>
          </Contents>
          <ToastContainer
            pauseOnHover={false}
            draggable={true}
            progressClassName="toast-progress-bar"
            bodyClassName="toast-body"
          />
          {isOver && <DragAndDropOverlay />}
        </Container>
      </ThemeProvider>
    </DroppableZone>
  );
};

export default DropTarget(NativeTypes.FILE, fileTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))(FileManagerSlide);
