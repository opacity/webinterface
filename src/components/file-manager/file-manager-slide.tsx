import _ from "lodash";
import React, { useState, useEffect, useRef } from "react";
import Tooltip from "react-simple-tooltip";
import { NativeTypes } from "react-dnd-html5-backend";
import { DropTarget, useDrag, useDrop } from "react-dnd";
import { ToastContainer, toast } from "react-toastify";
import { withRouter } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import moment from "moment";

import {
  HEADER_TYPES,
  DESKTOP_WIDTH,
  HEADER_MOBILE_WIDTH,
  DATA_TYPES_ICONS,
  FILE_MAX_SIZE,
  DROP_TYPES,
  theme
} from "../../config";
import { formatBytes, formatGbs } from "../../helpers";

import Header from "../shared/header";
import Breadcrumbs from "./breadcrumbs";
import UploadButton from "./upload-button";
import DragAndDropOverlay from "./drag-and-drop-overlay";
import ShareModal from "./share-modal";
import FolderModal from "./folder-modal";
import RenameModal from "./rename-modal";
import UploadMobileButton from "./upload-mobile-button";

const ICON_DOWNLOAD = require("../../assets/images/download.svg");
const ICON_REMOVE = require("../../assets/images/remove.svg");
const ICON_SHARE = require("../../assets/images/share.svg");
const ICON_FOLDER = require("../../assets/images/folder.svg");
const ICON_RENAME = require("../../assets/images/rename.svg");

const fileTarget = {
  drop: (props, monitor) => {
    const { upload, masterHandle, currentFolder } = props;
    let { files } = monitor.getItem();
    const filesLength = files.length;
    if (files.length > 0) {
      files = files.filter(file => file.size <= FILE_MAX_SIZE);
      files.length !== filesLength && alert("Some files are greater then 2GB.");
      upload({ files, masterHandle, folder: currentFolder });
    }
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

const ActionButton = styled.a`
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

const UsageInfo = styled.h4`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
  margin: 0;
`;

const UsageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
  margin: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: flex-end;
`;

const TopActionsWrapper = styled.div`
  margin: 20px 0 20px 0;
  text-align: right;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
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
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    width: 100%;
    right: 100%;
  }
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
  }
  @media (max-width: 915px) {
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

const TrPointer = styled(Tr)`
  cursor: pointer;
`;

const StorageInfo = styled.div`
  width: 100%;
`;

const StorageTitleWrapper = styled.div`
  width: 138px;
  margin: auto;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${HEADER_MOBILE_WIDTH}px) {
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

const NoFilesContainer = styled.div``;

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
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    display: none;
  }
`;

const NoFilesMobile = styled(NoFiles)`
  display: none;
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    display: block;
  }
`;

const StorageProgressWrapper = styled.div`
  width: 138px;
  height: 10px;
  background-color: #acc5e3;
  margin: auto;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${HEADER_MOBILE_WIDTH}px) {
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

const FolderButton = styled.button`
  min-width: 120px
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
  margin: 0 10px;
  border: none;
  cursor: pointer;
  }
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

interface Folder {
  name: string;
  location: string;
}

interface File {
  name: string;
  handle: string;
  created: string;
  size: number;
}

const FileManagerSlide = ({
  currentFolder,
  isLoading,
  history,
  files,
  folders,
  getFileList,
  upload,
  download,
  removeFileByHandle,
  masterHandle,
  metadata,
  storageUsed,
  storageLimit,
  expirationDate,
  connectDropTarget,
  isOver,
  createFolder,
  removeFolder,
  renameFile,
  renameFolder,
  moveFile,
  moveFolder
}) => {
  const [orderedFiles, setOrderedFiles] = useState<File[]>([]);
  const [orderedFolders, setOrderedFolders] = useState<Folder[]>([]);
  const [param, setParam] = useState("");
  const [sharedFile, setSharedFile] = useState<File | null>(null);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [oldName, setOldName] = useState("");
  const [renameType, setRenameType] = useState("");

  const sortBy = (param, order) => {
    setParam(param);
    setOrderedFiles(_.orderBy(orderedFiles, param, order));
    setOrderedFolders(_.orderBy(orderedFolders, param, order));
  };

  const iconType = name => {
    const typeIcon = DATA_TYPES_ICONS.find(type => {
      return name.includes(type.name);
    });
    return typeIcon ? (
      <TableIcon src={typeIcon.icon} />
    ) : (
      <TableIcon src={DATA_TYPES_ICONS[0].icon} />
    );
  };

  const prepareCreateFolder = (masterHandle, currentFolder, name) => {
    const isExist = folders.find(i => i.name === name);
    !isExist
      ? createFolder(masterHandle, currentFolder, name)
      : toast(`Folder ${name} is found. `, {
        autoClose: 3000,
        hideProgressBar: true,
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: name
      });
  };

  const Folder = ({ name, location }) => {
    const ref = useRef<any>(null);
    const [{}, drop] = useDrop({
      accept: [DROP_TYPES.FILE, DROP_TYPES.FOLDER],
      drop: ({}, monitor) =>
        monitor.getItem().type === DROP_TYPES.FILE
          ? moveFolder(
            monitor.getItem().name,
            name,
            currentFolder,
            masterHandle
            )
          : moveFile(monitor.getItem().name, name, currentFolder, masterHandle)
    });

    const [{ isDragging }, drag] = useDrag({
      item: { type: DROP_TYPES.FOLDER, name },
      collect: (monitor: any) => ({
        isDragging: monitor.isDragging()
      })
    });

    drag(drop(ref));

    const opacity = isDragging ? 0.4 : 1;

    return (
      <TrPointer
        style={{ opacity }}
        ref={ref}
        key={location}
        onClick={() =>
          history.push(
            `/file-manager${currentFolder === "/" ? "" : currentFolder}/${name}`
          )
        }
      >
        <Td>
          <TableIcon src={ICON_FOLDER} />
        </Td>
        <Td>{name}</Td>
        <Td />
        <Td />
        <Td />
        <Td>
          <ActionButton
            onClick={e => {
              e.stopPropagation();
              confirm("Do you really want to delete this folder?") &&
                removeFolder(name, currentFolder, masterHandle);
            }}
          >
            <Tooltip content="Delete folder">
              <TableIcon src={ICON_REMOVE} />
            </Tooltip>
          </ActionButton>
          <ActionButton
            onClick={e => [
              e.stopPropagation(),
              setOldName(name),
              setRenameType("folder"),
              setShowRenameModal(true)
            ]}
          >
            <Tooltip content="Rename folder">
              <TableIcon src={ICON_REMOVE} />
            </Tooltip>
          </ActionButton>
        </Td>
      </TrPointer>
    );
  };

  const File = ({ name, i, handle, size, created }) => {
    const ref = useRef<any>(null);
    const [{ isDragging }, drag] = useDrag({
      item: { name, type: DROP_TYPES.FILE },
      collect: monitor => ({
        isDragging: monitor.isDragging()
      })
    });

    drag(ref);

    const opacity = isDragging ? 0.4 : 1;

    return (
      <Tr key={name ? name : i} ref={ref} style={{ opacity }}>
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
            <Tooltip content="Share file">
              <TableIcon src={ICON_SHARE} />
            </Tooltip>
          </ActionButton>
          <ActionButton onClick={() => download(handle)}>
            <Tooltip content="Download file">
              <TableIcon src={ICON_DOWNLOAD} />
            </Tooltip>
          </ActionButton>
          <ActionButton
            onClick={() =>
              confirm("Do you really want to delete this file?") &&
              removeFileByHandle({
                name,
                handle,
                folder: currentFolder,
                masterHandle
              })
            }
          >
            <Tooltip content="Delete file">
              <TableIcon src={ICON_REMOVE} />
            </Tooltip>
          </ActionButton>
          <ActionButton
            onClick={e => [
              e.stopPropagation(),
              setOldName(name),
              setRenameType("file"),
              setShowRenameModal(true)
            ]}
          >
            <Tooltip content="Rename file">
              <TableIcon src={ICON_RENAME} />
            </Tooltip>
          </ActionButton>
        </Td>
      </Tr>
    );
  };

  useEffect(() => {
    const defaultOrder = "created";
    setOrderedFiles(_.orderBy(files, defaultOrder, "desc"));
    setOrderedFolders(_.orderBy(folders, defaultOrder, "desc"));
    setParam(defaultOrder);
  }, [files, folders]);

  useEffect(() => {
    getFileList(currentFolder, masterHandle);
  }, [currentFolder]);

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
              <TitleWrapper>
                <Title>All Files</Title>
                <UsageWrapper>
                  <UsageInfo>
                    {formatGbs(storageUsed)} out of {formatGbs(storageLimit)}{" "}
                    used
                  </UsageInfo>
                  <UsageInfo>
                    Active until: {moment(expirationDate).format("MMM D, YYYY")}
                  </UsageInfo>
                </UsageWrapper>
              </TitleWrapper>
              <TopActionsWrapper>
                <Breadcrumbs folder={currentFolder} />
                <ButtonWrapper>
                  <FolderButton
                    onClick={() => setShowCreateFolder(!showCreateFolder)}
                  >
                    New Folder
                  </FolderButton>
                  <UploadButton
                    onSelected={files =>
                      upload({ files, masterHandle, folder: currentFolder })
                    }
                  />
                  <FolderModal
                    isOpen={!!showCreateFolder}
                    close={() => setShowCreateFolder(false)}
                    createFolder={name =>
                      prepareCreateFolder(masterHandle, currentFolder, name)
                    }
                  />
                </ButtonWrapper>
              </TopActionsWrapper>
              {!isLoading && (
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
                    {orderedFolders.map(({ name, location }, i) => (
                      <Folder name={name} location={location} />
                    ))}
                    {orderedFiles.map(({ name, handle, size, created }, i) => (
                      <File
                        name={name}
                        i={i}
                        handle={handle}
                        size={size}
                        created={created}
                      />
                    ))}
                  </tbody>
                </Table>
              )}
              {!isLoading && !folders.length && !files.length && (
                <NoFilesContainer>
                  <NoFiles>
                    Your folder is empty. You can upload files by clicking the
                    Upload button on the top right.
                  </NoFiles>
                  <NoFilesMobile>
                    Your folder is empty. You can upload files by clicking the
                    Upload button on the bottom right.
                  </NoFilesMobile>
                </NoFilesContainer>
              )}
              <UploadMobileButton
                onSelected={files =>
                  upload({ files, folder: currentFolder, masterHandle })
                }
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
          <RenameModal
            isOpen={!!showRenameModal}
            close={() => setShowRenameModal(false)}
            oldName={oldName}
            rename={name =>
              renameType === "folder"
                ? renameFolder(currentFolder, oldName, name, masterHandle)
                : renameFile(currentFolder, oldName, name, masterHandle)
            }
          />
        </Container>
      </ThemeProvider>
    </DroppableZone>
  );
};

export default DropTarget(NativeTypes.FILE, fileTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))(withRouter(FileManagerSlide));
