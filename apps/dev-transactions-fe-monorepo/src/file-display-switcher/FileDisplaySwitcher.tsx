// FilesDisplaySwitcher.tsx
import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import FilesGrid from '../files-grid/files-grid';
import FilesRow from '../files-row/FilesRow';
import { File } from '@eafit/FileTypes';

const FilesDisplaySwitcher: React.FC<{ files: File[] }> = ({ files }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'row'>('grid');

  return (
    <div>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="1"
          type="radio"
          variant="secondary"
          name="viewMode"
          value="grid"
          checked={viewMode === 'grid'}
          onChange={(e) => setViewMode(e.currentTarget.value as 'grid' | 'row')}
        >
          Grid View
        </ToggleButton>
        <ToggleButton
          id="2"
          type="radio"
          variant="secondary"
          name="viewMode"
          value="row"
          checked={viewMode === 'row'}
          onChange={(e) => setViewMode(e.currentTarget.value as 'grid' | 'row')}
        >
          Row View
        </ToggleButton>
      </ButtonGroup>

      {viewMode === 'grid' ? <FilesGrid files={files} /> : <FilesRow files={files} />}
    </div>
  );
};

export default FilesDisplaySwitcher;