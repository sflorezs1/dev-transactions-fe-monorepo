import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../header_menu';
import styles from './doc.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToFile } from '@fortawesome/free-solid-svg-icons';

const DocPage = () => {
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [userRequest, setUserRequest] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (userRequest && documentName && documentType) {
      const confirmed = window.confirm(`Are you sure you want to request ${documentType} for ${userRequest}?`);
      if (confirmed) {
        // Handle form submission logic here
        console.log('Document Name:', documentName);
        console.log('Document Type:', documentType);
        console.log('User Request:', userRequest);
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
        <h2 className={styles.pageTitle}>Request Document</h2>
        <FontAwesomeIcon icon={faArrowRightToFile} className={styles.operatorIcon} />
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="documentType">
          <Form.Label>User to request</Form.Label>
          <Form.Control
            as="select"
            value={userRequest}
            onChange={(e) => setUserRequest(e.target.value)}
          >
            <option value="">Select user to request</option>
            <option> user1</option>
          </Form.Control>
        </Form.Group>
          <Form.Group controlId="documentName">
            <Form.Label>Document Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter document name"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="documentType">
            <Form.Label>Document Type</Form.Label>
            <Form.Control
              as="select"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
            >
              <option value="">Select document type</option>
              <option value="Passport">Passport</option>
              <option value="Driver's License">Driver's License</option>
              <option value="ID Card">ID Card</option>
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

export default DocPage;
