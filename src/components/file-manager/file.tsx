import _ from "lodash";
import React, { useRef } from "react";
import Tooltip from "react-simple-tooltip";
import { useDrag } from "react-dnd";
import moment from "moment";
import styled from "styled-components";

import {
  DATA_TYPES_ICONS,
  DROP_TYPES,
  HEADER_MOBILE_WIDTH
} from "../../config";
import { formatBytes } from "../../helpers";

const ICON_DOWNLOAD = require("../../assets/images/download.svg");
const ICON_REMOVE = require("../../assets/images/remove.svg");
const ICON_SHARE = require("../../assets/images/share.svg");
const ICON_RENAME = require("../../assets/images/rename.svg");

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

const Checkbox = styled.input.attrs({
  type: "checkbox"
})``;

const File = ({
  i,
  file,
  setSharedFile,
  removeFileByVersion,
  directory,
  masterHandle,
  downloadFile,
  setOldName,
  setRenameType,
  setShowRenameModal,
  filemanagerFiles,
  selectFile,
  deselectFile,
  setFileModal
}) => {
  const { name, handle, version, size, created } = file;
  const ref = useRef<any>(null);
  const [{ isDragging }, drag] = useDrag({
    item: { file, type: DROP_TYPES.FILE.toString() },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
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

  drag(ref);

  const opacity = isDragging ? 0.4 : 1;
  return (
    <Tr key={name ? name : i} ref={ref} style={{ opacity }}>
      <Td>
        <Checkbox
          checked={filemanagerFiles.map(f => f.handle).includes(handle)}
          onChange={e =>
            e.target.checked
              ? selectFile({
                name,
                handle,
                size,
                created,
                version
              })
              : deselectFile(handle)
          }
        />
      </Td>
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
              version,
              created,
              size
            })
          }
        >
          <Tooltip content="Share file">
            <TableIcon src={ICON_SHARE} />
          </Tooltip>
        </ActionButton>
        <ActionButton onClick={() => downloadFile({ handle })}>
          <Tooltip content="Download file">
            <TableIcon src={ICON_DOWNLOAD} />
          </Tooltip>
        </ActionButton>
        <ActionButton
          onClick={() =>
            confirm("Do you really want to delete this file?") &&
            removeFileByVersion({
              name,
              version,
              directory,
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
            setShowRenameModal(true),
            setFileModal(file)
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

export default File;
