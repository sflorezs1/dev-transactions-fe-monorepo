// FileCard.tsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import { File, getIconClass, getSubIconClass } from '@eafit/FileTypes'; // Import the File interface from where you've defined it
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';

interface FileCardProps {
  file: File;
}


const FileCard: React.FC<FileCardProps> = ({ file }) => {
  // Combine filename and extension for display and tooltip
  const fullFileName = `${file.filename}.${file.extension}`;
  // In the FileCard component
  const subIconClass = getSubIconClass(file.type);

  const iconClass = getIconClass(file.extension);
  return (
    <Card style={{ textAlign: 'center' }}>
      <Card.Body>
        <div style={{ fontSize: '4rem', marginBottom: '1rem', position: 'relative', display: 'inline-block' }}>
          <i className={`bi ${iconClass}`}></i>
          <i className={`bi ${subIconClass}`} style={{
            fontSize: '1rem',
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            color: 'blue',
            transform: 'translate(50%, 50%)' // Adjust to align it exactly where you want
          }}></i>
        </div>

        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id={`tooltip-${file.filename}`}>{fullFileName}</Tooltip>}
        >
          <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {file.filename}{file.extension}
          </Card.Title>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
};

export default FileCard;
