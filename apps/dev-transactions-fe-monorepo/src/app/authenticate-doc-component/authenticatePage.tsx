import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../header_menu';
import styles from './authenticate.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';

const authenticatePage = () => {
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if ( documentType) {
      const confirmed = window.confirm(`Are you sure you want to Authentiate ${documentType}?`);
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
      
        <h2 className={styles.pageTitle}>Authenticate a Document</h2>
        <FontAwesomeIcon icon={faFileCircleCheck} className={styles.operatorIcon} />
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="documentType">
            <Form.Label>Document to authenticate</Form.Label>
            <Form.Control
              as="select"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
            >
              <option value="">Select document</option>
              <option>doc-1</option>
              <option>doc-2</option>
              <option>doc-3</option>
            </Form.Control>
          </Form.Group>

          <div className={styles.changeButtonContainer}>
            <Button variant="primary" type="submit">
              Request Authentication
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default authenticatePage;