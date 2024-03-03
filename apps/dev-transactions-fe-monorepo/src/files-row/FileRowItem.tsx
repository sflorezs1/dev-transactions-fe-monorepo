import {
  getIconClass,
  File,
  getSubIconClass,
} from '@dev-transactions-fe-monorepo/libs/files';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const FileRowItem: React.FC<{ file: File }> = ({ file }) => {
  const iconClass = getIconClass(file.extension);
  const fullFileName = `${file.filename}${file.extension}`;
  // In the FileRow component
  const subIconClass = getSubIconClass(file.type);

  return (
    <ListGroup.Item
      className="d-flex justify-content-start align-items-center"
      style={{ gap: '10px' }}
    >
      <i className={`bi ${iconClass}`} style={{ fontSize: '1.5rem' }}></i>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id={`tooltip-${file.filename}`}>{fullFileName}</Tooltip>
        }
      >
        <span className="flex-grow-1 text-truncate">{fullFileName}</span>
      </OverlayTrigger>
      <i className={`bi ${subIconClass}`} style={{ fontSize: '1.2rem' }}></i>
    </ListGroup.Item>
  );
};

export default FileRowItem;
