import React, { useState } from 'react';
import styles from './app.module.scss';

const DownloadPopup = ({ handleClose }) => {
  const [selectedDocument, setSelectedDocument] = useState('');
  const [hoveredDocument, setHoveredDocument] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(selectedDocument);
    handleClose(); 
  };

  const handleDocumentClick = (documentName) => {
    setSelectedDocument(documentName);
  };

  const handleDocumentHover = (documentName) => {
    setHoveredDocument(documentName);
  };

  const documentOptions = [
    { id: 1, name: 'Document 1'},
    { id: 2, name: 'Document 2'},
    { id: 3, name: 'Document 3'},
  ];

  return (
    <div className={styles.registrationPopup}>
      <div className={styles.registrationCard}>
        <h2 className={styles.loginActions}>Download a File</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.documentList}>
            {documentOptions.map((document) => (
              <div
                key={document.id}
                className={`${styles.documentBox} ${
                  selectedDocument === document.name ? styles.selected : ''
                } ${
                  hoveredDocument === document.name && selectedDocument !== document.name ? styles.hovered : ''
                }`}
                onClick={() => handleDocumentClick(document.name)}
                onMouseEnter={() => handleDocumentHover(document.name)}
                onMouseLeave={() => setHoveredDocument('')}
              >
                <div className={styles.documentName}>{document.name}</div>
                <label className={styles.documentCheckboxContainer}>
                  <input
                    type="checkbox"
                    className={styles.documentCheckbox}
                    checked={selectedDocument === document.name}
                    onChange={() => handleDocumentClick(document.name)}
                  />
                  <span className={styles.documentCheckmark}></span>
                </label>
              </div>
            ))}
          </div>
          <div className={styles.loginActions}>
            <button type="submit" className={styles.loginButton}>Download</button>
            <button type="button" className={styles.loginButton} onClick={handleClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DownloadPopup;