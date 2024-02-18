// FilesDisplaySwitcher.tsx
import React, { useState } from 'react';
import { ButtonGroup, Container, ToggleButton } from 'react-bootstrap';
import FilesGrid from '../files-grid/files-grid';
import FilesRow from '../files-row/FilesRow';
import { File } from '@dev-transactions-fe-monorepo/libs/files';

const FilesDisplaySwitcher: React.FC<{ files: File[] }> = ({ files }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'row'>('grid');

  return (
    <>
      <Container className="d-flex justify-content-end">
        <ButtonGroup className="mb-2">
          <ToggleButton
            id="1"
            type="radio"
            variant="secondary"
            name="viewMode"
            value="grid"
            checked={viewMode === 'grid'}
            onChange={(e) =>
              setViewMode(e.currentTarget.value as 'grid' | 'row')
            }
          >
            <i className="bi bi-grid" />
          </ToggleButton>
          <ToggleButton
            id="2"
            type="radio"
            variant="secondary"
            name="viewMode"
            value="row"
            checked={viewMode === 'row'}
            onChange={(e) =>
              setViewMode(e.currentTarget.value as 'grid' | 'row')
            }
          >
            <i className="bi bi-list" />
          </ToggleButton>
        </ButtonGroup>
      </Container>
      {viewMode === 'grid' ? (
        <FilesGrid files={files} />
      ) : (
        <FilesRow files={files} />
      )}
    </>
  );
};

export default FilesDisplaySwitcher;
