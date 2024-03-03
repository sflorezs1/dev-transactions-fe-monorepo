// src/app/app.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FilesDisplaySwitcher from '../file-display-switcher/FileDisplaySwitcher';
import Login from './login/login';
import _ from 'lodash';
import Chance from 'chance';
import { File } from '@dev-transactions-fe-monorepo/libs/files';
import styles from './files-style/file-module.scss';

const chance = new Chance();

// Example files array
const files: File[] = _.times(10, () => ({
  filename: chance.name(),
  type: chance.pickone([
    'Identification',
    'Bank Statement',
    'Utility Bill',
    'Insurance Policy',
    'Employment Contract',
    'Rental Agreement',
    'Tax Return',
  ]),
  extension: chance.pickone([
    '.pdf',
    '.json',
    '.docx',
    '.txt',
    '.xlsx',
    '.pptx',
    '.mp3',
    '.mp4',
    '.jpg',
    '.png',
  ]),
}));

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/files" element={<div className={styles.loginBackground}><FilesDisplaySwitcher files={files} /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
