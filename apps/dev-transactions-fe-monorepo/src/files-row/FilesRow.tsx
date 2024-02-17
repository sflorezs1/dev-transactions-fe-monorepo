// FilesRow.tsx
import { File } from '@eafit/FileTypes';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const FilesRow: React.FC<{ files: File[] }> = ({ files }) => {
  return (
    <ListGroup>
      {files.map((file, index) => (
        <ListGroup.Item key={index}>
          {file.filename} - {file.type} - {file.extension}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default FilesRow;
