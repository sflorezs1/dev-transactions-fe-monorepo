import React, { useState } from 'react';
import styles from './download.module.scss';
import Header from '../header';
import {Card, Button} from 'react-bootstrap';

const DownloadPage = () => {
  const [selectedDocument, setSelectedDocument] = useState('');

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
  };

  const handleDownload = () => {
    console.log("Downloading", selectedDocument);
  };

  return (
    <div className={styles.loginBackground}>
      <Header />
      <div className={styles.content}>
        <Card className={`${styles.card} ${styles.cardContent}`}>
          <Card.Body>
            <Card.Title>Download a Document</Card.Title>
            <div className={styles.formGroup}>
              <label htmlFor="document">Select a document to download:</label>
              <select id="document" value={selectedDocument} onChange={handleDocumentChange}>
                <option value="">Select a document</option>
                <option value="document1.pdf">Document 1</option>
                <option value="document2.pdf">Document 2</option>
                <option value="document3.pdf">Document 3</option>
              </select>
            </div>
            <Button variant="primary" onClick={handleDownload}>Download</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DownloadPage;