import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { NativeTypes } from "react-dnd-html5-backend";
import { DropTarget } from "react-dnd";
import { ToastContainer } from "react-toastify";
import moment from "moment";

import { HEADER_TYPES, HEADER_MOBILE_WIDTH, theme } from "../../config";
import { formatBytes } from "../../helpers";

import backend from "../../services/backend";

import Header from "../shared/header";
import UploadButton from "./upload-button";
import DragAndDropOverlay from "./drag-and-drop-overlay";
import UserPanel from "./user-panel";

import ShareModal from "./share-modal";
import UploadMobileButton from "./upload-mobile-button";

const ICON_LOGO = require("../../assets/images/logo-login.svg");

const fileTarget = {
  drop (props, monitor) {
    const { upload, masterHandle } = props;
    const { files } = monitor.getItem();
    upload(files, masterHandle);
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
  padding: 5px 0;
  border: none;
  background: none;
  cursor: pointer;
  color: #687892;
  font-size: 14px;
  margin-right: 10px;
`;

const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.background};
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    padding: 10px;
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

const ButtonWrapper = styled.div`
  margin: 20px 0 20px 0;
  text-align: right;
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    display: none;
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
  border-collapse: collapse;
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
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    th:nth-child(3),
    th:nth-child(4),
    td:nth-child(3),
    td:nth-child(4) {
      display: none;
    }
    th:nth-child(2),
    td:nth-child(2) {
      width: 95%;
      white-space: initial;
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
  name: string;
  handle: string;
  created: string;
  size: number;
}

const FileManagerSlide = ({
  files,
  getFileList,
  upload,
  download,
  removeFileByHandle,
  masterHandle,
  metadataKey,
  metadata,
  connectDropTarget,
  isOver
}) => {
  const [accountData, setAccountData] = useState("");
  const [param, setParam] = useState("created");
  const [order, setOrder] = useState("desc");
  const [sharedFile, setSharedFile] = useState<File | null>(null);

  const account = {
    storageUsed: 25,
    storageLimit: 100
  };

  const compare = (a, b) => {
    if (param === "size" && order === "desc") {
      return b.size - a.size;
    } else if (param === "size" && order === "asc") {
      return a.size - b.size;
    } else if (param === "name" && order === "desc") {
      return b.name.localeCompare(a.name);
    } else if (param === "name" && order === "asc") {
      return a.name.localeCompare(b.name);
    } else if (param === "created" && order === "desc") {
      return b.created - a.created;
    } else if (param === "created" && order === "asc") {
      return a.created - b.created;
    } else {
      return null;
    }
  };

  const sortBy = (param, order) => {
    setParam(param);
    setOrder(order);
  };

  useEffect(() => {
    const publicKey = ""; 
    const signature = "";

    backend
      .getAccountData({ publicKey, signature })
      .then(({ account }) => {
        setAccountData(account);
      })
      .catch(console.log);
  }, [files]);

  useEffect(() => {
    getFileList(masterHandle);
  }, []);

  return (
    <DroppableZone ref={connectDropTarget}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header type={HEADER_TYPES.FILE_MANAGER} />
          <Contents>
            <UserPanel account={account} />
            <TableContainer>
              <Title>All Files</Title>
              <ButtonWrapper>
                <UploadButton
                  onSelected={files => upload(files, masterHandle)}
                />
              </ButtonWrapper>
              <Table>
                <thead>
                  <Tr>
                    <Th />
                    <TableHeader
                      param="name"
                      title="Name"
                      paramArrow={param}
                      sortBy={(param, order) => sortBy(param, order)}
                    />
                    <Th>File Handle</Th>
                    <TableHeader
                      param="created"
                      title="Date"
                      paramArrow={param}
                      sortBy={(param, order) => sortBy(param, order)}
                    />
                    <TableHeader
                      param="size"
                      title="Size"
                      paramArrow={param}
                      sortBy={(param, order) => sortBy(param, order)}
                    />
                    <Th>Actions</Th>
                  </Tr>
                </thead>
                <tbody>
                  {files
                    .sort((a, b) => compare(a, b))
                    .map(({ name, handle, size, created }, i) => (
                      <Tr key={handle ? handle : i}>
                        <Td>
                          <TableIcon src={ICON_LOGO} />
                        </Td>
                        <Td>{name}</Td>
                        <Td>{handle.substring(0, 30)}</Td>
                        <Td>{moment(created).format("MM/DD/YYYY")}</Td>
                        <Td>{formatBytes(size)}</Td>
                        <Td>
                          <ActionButton
                            onClick={() =>
                              setSharedFile({
                                name,
                                handle,
                                created,
                                size: size
                              })
                            }
                          >
                            Share
                          </ActionButton>
                          <ActionButton onClick={() => download(handle)}>
                            Download
                          </ActionButton>
                          <ActionButton
                            onClick={() =>
                              removeFileByHandle(name, handle, masterHandle)
                            }
                          >
                            Delete
                          </ActionButton>
                        </Td>
                      </Tr>
                    ))}
                </tbody>
              </Table>
              <UploadMobileButton
                onSelected={files => upload(files, masterHandle)}
              />
            </TableContainer>
          </Contents>
          <ToastContainer
            pauseOnHover={false}
            draggable={true}
            progressClassName="toast-progress-bar"
            bodyClassName="toast-body"
          />
          {isOver && <DragAndDropOverlay />}
          <ShareModal
            file={sharedFile}
            isOpen={!!sharedFile}
            close={() => setSharedFile(null)}
          />
        </Container>
      </ThemeProvider>
    </DroppableZone>
  );
};

export default DropTarget(NativeTypes.FILE, fileTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))(FileManagerSlide);
