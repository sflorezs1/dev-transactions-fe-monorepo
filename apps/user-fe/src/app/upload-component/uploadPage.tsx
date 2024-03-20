
import React, { useState } from 'react';
import Header from '../header';
import styles from './upload.module.scss';
import { Card, Button } from 'react-bootstrap';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div className={styles.loginBackground}>
      <Header />
      <div className={styles.content}>
        <Card className={`${styles.card} ${styles.cardContent}`}>
          <Card.Body>
            <Card.Title>Upload a File</Card.Title>
            <div className={styles.formGroup}>
              <input type="file" onChange={handleFileChange} />
            </div>
            <Button variant="primary" onClick={handleUpload}>Upload</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UploadPage;