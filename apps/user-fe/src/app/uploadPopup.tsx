import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import styles from './app.module.scss';

const UploadPopup = ({ handleClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = () => {
    // logic here!!!!!!
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0].name);
  };

  return (
    <div className={styles.registrationPopup}>
      <div className={styles.registrationCard}>
        <h2 className={styles.loginActions}>Upload a File</h2>
        <div className={styles.uploadButton}>
          <label className={styles.uploadLabel}>
            <input type="file" className={styles.uploadInput} onChange={handleFileChange} />
            <div className={styles.uploadContent}>
              <FaUpload className={styles.uploadIcon} />
              {selectedFile && <div className={styles.selectedFile}>{selectedFile}</div>}
            </div>
          </label>
        </div>
        <div className={styles.loginActions}>
          <button type="button" className={styles.loginButton} onClick={handleClose}>
            Cancel
          </button>
          <button type="button" className={styles.loginButton} onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPopup;
