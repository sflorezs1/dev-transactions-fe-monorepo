// FilesDisplaySwitcher.tsx
import React, { useState } from 'react';
import { ButtonGroup, Container, ToggleButton } from 'react-bootstrap';
import FilesGrid from '../files-grid/files-grid';
import FilesRow from '../files-row/FilesRow';
import { File } from '@dev-transactions-fe-monorepo/libs/files';

const FilesDisplaySwitcher: React.FC<{ files: {
  filename: string;
  id: string;
}[] }> = ({ files }) => {
  return (
    <>
        <FilesGrid files={files} />
    </>
  );
};

export default FilesDisplaySwitcher;
