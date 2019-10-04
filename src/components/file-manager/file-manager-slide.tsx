import _ from "lodash";
import React, { useState, useEffect, useRef } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import { ToastContainer, toast } from "react-toastify";
import { withRouter } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import moment from "moment";

import {
  HEADER_TYPES,
  DESKTOP_WIDTH,
  HEADER_MOBILE_WIDTH,
  FILE_MAX_SIZE,
  theme
} from "../../config";
import { formatGbs } from "../../helpers";

import Header from "../shared/header";
import Button from "../shared/generic/button";
import Breadcrumbs from "./breadcrumbs";
import UploadButton from "./upload-button";
import DragAndDropOverlay from "./drag-and-drop-overlay";
import ShareModal from "./share-modal";
import FolderModal from "./folder-modal";
import RenameModal from "./rename-modal";
import UploadMobileButton from "./upload-mobile-button";
import File from "./file";
import Folder from "./folder";

import { IFile } from "../../models/file";
import { IFolder } from "../../models/folder";

const ICON_FOLDER_ADD = require("../../assets/images/folder_add.svg");

const fileTarget = {
  drop: (props, monitor) => {
    const { uploadFiles, masterHandle, directory } = props;
    let { files } = monitor.getItem();
    const filesLength = files.length;
    if (files.length > 0) {
      files = files.filter(file => file.size <= FILE_MAX_SIZE);
      files.length !== filesLength && alert("Some files are greater then 2GB.");
      files = files.filter(file => file.type !== "");
      uploadFiles({ files, masterHandle, directory, isDirectory: false });
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

const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.background};
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    padding: 10px;
  }
`;

const Checkbox = styled.input.attrs({
  type: "checkbox"
})``;

const ButtonGroup = styled.div``;

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
  display: flex;
  justify-content: space-between;

  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    display: none;
  }
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
  th:nth-child(1),
  td:nth-child(1),
  th:nth-child(2),
  td:nth-child(2) {
    width: 5%;
    text-align: right;
  }
  th:nth-child(3),
  td:nth-child(3) {
    width: 55%;
  }
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    td:nth-child(4),
    td:nth-child(5) {
      display: none;
    }
  }
  @media (max-width: 915px) {
    th:nth-child(3),
    td:nth-child(3) {
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

const ThPointer = styled(Th)`
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

const FolderMobileButton = styled.button`
    display: none;
    position: fixed;
    bottom: 50px;
    right 0;
    margin-bottom: 15px;
    margin-right: 10px;
    background-color: ${props => props.theme.button.background};
    width: 40px;
    height: 40px;
    border-radius: 100px;
    box-shadow: 0 0.5px 4px 0 rgba(0, 0, 0, 0.2), 0 1.5px 2px 0 rgba(0, 0, 0, 0.12), 0 1.5px 1.5px 0 rgba(0, 0, 0, 0.14);
    cursor: pointer;
    z-index: 9990;
    @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
      display: block;
    }
`;

const FolderMobileButtonIcon = styled.img`
  height: 20px;
  width: 20px;
  margin: 10px 0px 0px 10px;
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

interface Handle {
  handle: string;
}

const FileManagerSlide = ({
  createFolder,
  directory,
  downloadFile,
  downloadFiles,
  expirationDate,
  files,
  folders,
  getFileList,
  isLoading,
  masterHandle,
  metadata,
  storageUsed,
  storageLimit,
  removeFolder,
  renameFolder,
  renameFile,
  moveFile,
  moveFolder,
  removeFileByVersion,
  removeFiles,
  uploadFiles
}) => {
  const [orderedFiles, setOrderedFiles] = useState<IFile[]>([]);
  const [orderedFolders, setOrderedFolders] = useState<IFolder[]>([]);
  const [param, setParam] = useState("");
  const [sharedFile, setSharedFile] = useState<IFile | null>(null);
  const [filemanagerFiles, setFilemanagerFiles] = useState<Handle[]>([]);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [oldName, setOldName] = useState("");
  const [renameType, setRenameType] = useState("");
  const [fileModal, setFileModal] = useState<IFile | null>(null);
  const [folderModal, setFolderModal] = useState<IFolder | null>(null);

  const ref = useRef<any>(null);
  const [{ isOver }, drop] = useDrop({
    accept: NativeTypes.FILE,
    drop: ({}, monitor) => {
      let { files } = monitor.getItem();
      const filesLength = files.length;
      if (files.length > 0) {
        files = files.filter(file => file.size <= FILE_MAX_SIZE);
        files.length !== filesLength && alert("Some files are greater then 2GB.");
        uploadFiles({ files, masterHandle, directory });
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });
  drop(ref);

  const sortBy = (param, order) => {
    setParam(param);
    setOrderedFiles(_.orderBy(orderedFiles, param, order));
    setOrderedFolders(_.orderBy(orderedFolders, param, order));
  };

  const selectFile = (file: IFile) => {
    setFilemanagerFiles([...filemanagerFiles, file]);
  };

  const deselectFile = (handle: string) => {
    setFilemanagerFiles(
      filemanagerFiles.filter(file => file.handle !== handle)
    );
  };

  const selectAllFiles = files => {
    setFilemanagerFiles([...orderedFiles]);
  };

  const deselectAllFiles = () => {
    setFilemanagerFiles([]);
  };

  const prepareCreateFolder = (masterHandle, directory, name) => {
    const isExist = folders.find(i => i.name === name);
    !isExist
      ? createFolder({ masterHandle, directory, name })
      : toast(`Folder ${name} already exists.`, {
        autoClose: 3000,
        hideProgressBar: true,
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: name
      });
  };

  useEffect(() => {
    const defaultOrder = "created";
    setOrderedFiles(_.orderBy(files, defaultOrder, "desc"));
    setOrderedFolders(_.orderBy(folders, defaultOrder, "desc"));
    setParam(defaultOrder);
  }, [files, folders]);

  useEffect(() => {
    getFileList({ directory, masterHandle });
  }, [directory]);

  return (
    <DroppableZone ref={ref}>
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
                <Breadcrumbs folder={directory} />
                <ButtonWrapper>
                  <ButtonGroup>
                    <Button
                      width="auto"
                      padding="0 10px"
                      disabled={filemanagerFiles.length === 0}
                      onClick={() => {
                        downloadFiles({ files: filemanagerFiles });
                        setFilemanagerFiles([]);
                      }}
                    >
                      {filemanagerFiles.length === 0
                        ? "Download"
                        : `Download ${
                            filemanagerFiles.length > 1
                              ? `${filemanagerFiles.length} files`
                              : "file"
                          }`}
                    </Button>
                    <Button
                      width="auto"
                      padding="0 10px"
                      margin="0 5px 0"
                      disabled={filemanagerFiles.length === 0}
                      onClick={() => {
                        confirm(
                          "Are you sure you want to delete these files?"
                        ) &&
                          removeFiles({
                            files: filemanagerFiles,
                            masterHandle,
                            directory
                          });
                        setFilemanagerFiles([]);
                      }}
                    >
                      {filemanagerFiles.length === 0
                        ? "Delete"
                        : `Delete ${
                            filemanagerFiles.length > 1
                              ? `${filemanagerFiles.length} files`
                              : "file"
                          }`}
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <FolderButton
                      onClick={() => setShowCreateFolder(!showCreateFolder)}
                    >
                      New Folder
                    </FolderButton>
                    <UploadButton
                      name="Upload folder"
                      isDirectory={true}
                      onSelected={files =>
                        uploadFiles({
                          files,
                          masterHandle,
                          directory,
                          isDirectory: true
                        })
                      }
                    />
                    <UploadButton
                      name="Upload file"
                      isDirectory={false}
                      onSelected={files =>
                        uploadFiles({
                          files,
                          masterHandle,
                          directory,
                          isDirectory: false
                        })
                      }
                    />
                    <FolderModal
                      isOpen={!!showCreateFolder}
                      close={() => setShowCreateFolder(false)}
                      createFolder={name =>
                        prepareCreateFolder(masterHandle, directory, name)
                      }
                    />
                  </ButtonGroup>
                </ButtonWrapper>
              </TopActionsWrapper>
              {!isLoading && (
                <Table>
                  <thead>
                    <Tr>
                      <Th>
                        <Checkbox
                          checked={
                            filemanagerFiles.length > 0 &&
                            filemanagerFiles.length === orderedFiles.length
                          }
                          onChange={e =>
                            e.target.checked
                              ? selectAllFiles(orderedFiles)
                              : deselectAllFiles()
                          }
                        />
                      </Th>
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
                    {orderedFolders.map((folder, i) => (
                      <Folder
                        folder={folder}
                        moveFolder={moveFolder}
                        moveFile={moveFile}
                        directory={directory}
                        masterHandle={masterHandle}
                        removeFolder={removeFolder}
                        setOldName={setOldName}
                        setRenameType={setRenameType}
                        setShowRenameModal={setShowRenameModal}
                        setFolderModal={setFolderModal}
                      />
                    ))}
                    {orderedFiles.map(
                      (file, i) => (
                        <File
                          i={i}
                          file={file}
                          setSharedFile={setSharedFile}
                          removeFileByVersion={removeFileByVersion}
                          directory={directory}
                          masterHandle={masterHandle}
                          downloadFile={downloadFile}
                          setOldName={setOldName}
                          setRenameType={setRenameType}
                          setShowRenameModal={setShowRenameModal}
                          filemanagerFiles={filemanagerFiles}
                          selectFile={selectFile}
                          deselectFile={deselectFile}
                          setFileModal={setFileModal}
                        />
                      )
                    )}
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
                  uploadFiles({
                    files,
                    directory,
                    masterHandle,
                    isDirectory: false
                  })
                }
              />
              <FolderMobileButton
                onClick={() => setShowCreateFolder(!showCreateFolder)}
              >
                <FolderMobileButtonIcon src={ICON_FOLDER_ADD} />
              </FolderMobileButton>
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
          <FolderModal
            isOpen={!!showCreateFolder}
            close={() => setShowCreateFolder(false)}
            createFolder={name =>
              prepareCreateFolder(masterHandle, directory, name)
            }
          />
          <RenameModal
            isOpen={!!showRenameModal}
            close={() => setShowRenameModal(false)}
            oldName={oldName}
            rename={name =>
              renameType === "folder"
                ? renameFolder({ directory, folder: folderModal, name, masterHandle })
                : renameFile({ folder: directory, file: fileModal, name, masterHandle })
            }
          />
        </Container>
      </ThemeProvider>
    </DroppableZone>
  );
};

export default withRouter(FileManagerSlide);
