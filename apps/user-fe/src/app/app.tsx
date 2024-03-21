// src/app/app.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FilesDisplaySwitcher from '../file-display-switcher/FileDisplaySwitcher';
import Login from './login/login';
import _ from 'lodash';
import Chance from 'chance';
import { File } from '@dev-transactions-fe-monorepo/libs/files';
import styles from './app.module.scss';
import Header from './header';
import approvalsPage from './approvals-component/approvalsPage';
import groupPage from './group-component/groupPage';
import operatorPage from './change-operator-component/operatorPage';
import docPage from './request-doc-component/docPage';
import authenticatePage from './authenticate-doc-component/authenticatePage';
import universityPage from './university-component/universityPage';
import registerPage from './register-component/registerPage'

const chance = new Chance();

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
        <Route path="/files/*" element={<div className={styles.loginBackground}><FilesDisplayWithHeader/></div>} />
        {/* <Route path='/approvals' Component={approvalsPage} /> */}
        {/* <Route path='/group' Component={groupPage} /> */}
        <Route path='/change-operator' Component={operatorPage} />
        {/* <Route path='/request-document' Component={docPage} /> */}
        <Route path='/authenticate-document' Component={authenticatePage} />
        {/* <Route path='/university-document' Component={universityPage} /> */}
        <Route path='/register' Component={registerPage} />
      </Routes>
    </Router>
  );
}

const FilesDisplayWithHeader = () => {
  const [files, setFiles] = useState<{ 
    id: string;
    filename: string;
  }[]>([]);
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_DOCUMENT_BRIDGE_URL}/document/all_documents`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        // Assuming the response data is an array of files
        const fetchedFiles = data;
        // Update the files state with the fetched files
        setFiles(fetchedFiles);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <>
      <Header />
      <FilesDisplaySwitcher files={files} />
    </>
  );
};

export default App;
