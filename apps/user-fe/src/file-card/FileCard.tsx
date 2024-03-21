// FileCard.tsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';

interface FileCardProps {
  file: {
    filename: string;
    id: string;
  };
}

const FileCard: React.FC<FileCardProps> = ({ file }) => {
  // Combine filename and extension for display and tooltip
  const fullFileName = `${file.filename}`;
  // In the FileCard component

  return (
    <Card style={{ textAlign: 'center' }}>
      <Card.Body>
        <div
          style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            position: 'relative',
            display: 'inline-block',
          }}
        >
        </div>
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`tooltip-${file.filename}`}>{fullFileName}</Tooltip>
          }
        >
          <Card.Title
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {file.filename}
          </Card.Title>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
};

export default FileCard;
