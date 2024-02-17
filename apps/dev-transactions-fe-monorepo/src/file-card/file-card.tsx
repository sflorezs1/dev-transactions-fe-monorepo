// FileCard.tsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import { File } from '@eafit/FileTypes'; // Import the File interface from where you've defined it

interface FileCardProps {
  file: File;
}

const FileCard: React.FC<FileCardProps> = ({ file }) => {
  return (
    <Card style={{ maxWidth: '18rem', marginBottom: '1rem', background: "pink" }}>
      <Card.Body>
        <Card.Title>{file.filename}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{file.type}</Card.Subtitle>
        <Card.Text>
          Extension: {file.extension}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FileCard;
