import React, { useRef } from "react";
import { withRouter } from "react-router";
import Tooltip from "react-simple-tooltip";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";

import { DROP_TYPES, HEADER_MOBILE_WIDTH } from "../../config";

const ActionButton = styled.a`
  padding: 5px 0;
  border: none;
  background: none;
  cursor: pointer;
  color: #687892;
  font-size: 14px;
  margin-right: 10px;
`;

const TableIcon = styled.img`
  height: 20px;
  width: 20px;
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

const Tr = styled.tr`
  &:hover td {
    background-color: #cfe3fc;
  }
  th:nth-child(1),
  td:nth-child(1),
  th:nth-child(2),
  td:nth-child(2) {
    width: 5%;
  }
  th:nth-child(1),
  td:nth-child(1) {
    text-align: right;
  }
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    td:nth-child(4),
    td:nth-child(5),
    th:nth-child(4),
    th:nth-child(5) {
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

const TrPointer = styled(Tr)`
  cursor: pointer;
`;

const ICON_REMOVE = require("../../assets/images/remove.svg");
const ICON_FOLDER = require("../../assets/images/folder.svg");
const ICON_RENAME = require("../../assets/images/rename.svg");

const Folder = ({
  folder,
  moveFolder,
  moveFile,
  directory,
  masterHandle,
  removeFolder,
  setOldName,
  setRenameType,
  setShowRenameModal,
  setFolderModal,
  history
}) => {
  const { name, location } = folder;
  const ref = useRef<any>(null);
  const [{}, drop] = useDrop({
    accept: [DROP_TYPES.FILE.toString(), DROP_TYPES.FOLDER.toString()],
    drop: ({}, monitor) =>
      monitor.getItem().type === DROP_TYPES.FILE.toString()
        ? moveFile(monitor.getItem().file, name, directory, masterHandle)
        : moveFolder(monitor.getItem().folder, name, directory, masterHandle)
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: DROP_TYPES.FOLDER.toString(), folder },
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
          `/file-manager${directory === "/" ? "" : directory}/${name}`
        )
      }
    >
      <Td />
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
              removeFolder({ name, folder, directory, masterHandle });
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
            setShowRenameModal(true),
            setFolderModal(folder)
          ]}
        >
          <Tooltip content="Rename folder">
            <TableIcon src={ICON_RENAME} />
          </Tooltip>
        </ActionButton>
      </Td>
    </TrPointer>
  );
};
export default withRouter(Folder);
