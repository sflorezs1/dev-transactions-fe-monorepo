// FilesRow.tsx
import { File } from '@eafit/FileTypes';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import FileRowItem from './FileRowItem';

const FilesRow: React.FC<{ files: File[] }> = ({ files }) => {
  return (
    <ListGroup>
      {files.map((file, index) => (
          <FileRowItem file={file}/>
      ))}
    </ListGroup>
  );
};

export default FilesRow;
