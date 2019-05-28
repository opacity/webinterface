import _ from "lodash";
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { NativeTypes } from "react-dnd-html5-backend";
import { DropTarget } from "react-dnd";
import { ToastContainer } from "react-toastify";
import moment from "moment";

import { HEADER_TYPES, DESKTOP_WIDTH, MOBILE_WIDTH, theme } from "../../config";
import { formatBytes } from "../../helpers";

import Header from "../shared/header";
import UploadButton from "./upload-button";
import DragAndDropOverlay from "./drag-and-drop-overlay";
import ShareModal from "./share-modal";
import UploadMobileButton from "./upload-mobile-button";

const ICON_DOWNLOAD = require("../../assets/images/download.svg");
const ICON_REMOVE = require("../../assets/images/remove.svg");
const ICON_SHARE = require("../../assets/images/share.svg");

const ICON_JPG = require("../../assets/images/jpg.svg");
const ICON_PNG = require("../../assets/images/png.svg");
const ICON_PDF = require("../../assets/images/pdf.svg");
const ICON_DOC = require("../../assets/images/doc.svg");

const DataTypes = [
  {
    name: ".jpg",
    icon: ICON_JPG
  },
  {
    name: ".pdf",
    icon: ICON_PDF
  },
  {
    name: ".doc",
    icon: ICON_DOC
  },
  {
    name: ".png",
    icon: ICON_PNG
  }
];

const fileTarget = {
  drop(props, monitor) {
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

const TableIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const LeftSideNav = styled.div`
  background-color: #cfe3fc;
  display: flex;
  flex-direction: column-reverse;
  padding: 20px 0;
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

const StorageInfo = styled.div`
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

const NoFiles = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-top: 30px;
  opacity: 0.8;
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
  masterHandle,
  metadataKey,
  metadata,
  connectDropTarget,
  isOver
}) => {
  const [orderedFiles, setOrderedFiles] = useState<File[]>([]);
  const [param, setParam] = useState("");
  const [sharedFile, setSharedFile] = useState<File | null>(null);

  const sortBy = (param, order) => {
    setOrderedFiles(_.orderBy(orderedFiles, param, order));
  };

  const iconType = name => {
    const typeIcon = DataTypes.find(type => {
      return name.includes(type.name);
    });
    return typeIcon ? (
      <TableIcon src={typeIcon.icon} />
    ) : (
      <TableIcon src={ICON_DOC} />
    );
  };

  useEffect(() => {
    const defaultOrder = "created";
    setOrderedFiles(_.orderBy(files, defaultOrder, "desc"));
    setParam(defaultOrder);
  }, [files]);

  useEffect(() => {
    getFileList(masterHandle);
    // masterHandle.getFolderMeta("/").then(({ files }) => {
    // });
  }, []);

  return (
    <DroppableZone ref={connectDropTarget}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header type={HEADER_TYPES.FILE_MANAGER} />
          <Contents>
            <LeftSideNav>
              <StorageInfo>
                <StorageTitleWrapper>
                  <StorageTitle>30GB/100GB USED</StorageTitle>
                </StorageTitleWrapper>
                <StorageProgressWrapper>
                  <StorageProgress />
                </StorageProgressWrapper>
              </StorageInfo>
            </LeftSideNav>
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
                      title="Created Date"
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
                  {orderedFiles.map(({ name, handle, size, created }, i) => (
                    <Tr key={handle ? handle : i}>
                      <Td>{iconType(name)}</Td>
                      <Td>{name}</Td>
                      <Td>{_.truncate(handle, { length: 30 })}</Td>
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
                          <TableIcon src={ICON_SHARE} />
                        </ActionButton>
                        <ActionButton onClick={() => download(handle)}>
                          <TableIcon src={ICON_DOWNLOAD} />
                        </ActionButton>
                      </Td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              {!orderedFiles && (
                <NoFiles>
                  Your File Dashboard is empty. You can upload files by clicking
                  the Upload button on the top right.
                </NoFiles>
              )}
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
