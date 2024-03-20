import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../header_menu';
import styles from './university.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';


const universityPage = () => {
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if ( documentType) {
      const confirmed = window.confirm(`Request ${documentType}?`);
      if (confirmed) {
        // Handle form submission logic here
        console.log('Document Type:', documentType);
      } else {
        console.log("Document request canceled.");
      }
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <div className={styles.loginBackground}>
      <Header />
      <div className={styles.content}>
        <h2 className={styles.pageTitle}>Request Document to University</h2>
        <FontAwesomeIcon icon={faUniversity} className={styles.operatorIcon} />
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="documentType">
            <Form.Label>Document to request</Form.Label>
            <Form.Control
              as="select"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
            >
              <option value="">Select document</option>
              <option>University Registration</option>
              <option>Credits</option>
              <option>Transcript</option>
              <option>Syllabus</option>
              <option>Fees</option>
            </Form.Control>
          </Form.Group>

          <div className={styles.changeButtonContainer}>
            <Button variant="primary" type="submit">
              Request Document
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default universityPage;