import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../header_menu';
import styles from './approvals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleCheck } from '@fortawesome/free-solid-svg-icons';

const approvalPage = () => {
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if ( documentType) {
      const confirmed = window.confirm(`Are you sure you want to approve ${documentType}?`);
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
      
        <h2 className={styles.pageTitle}> Pending Approvals</h2>
        <FontAwesomeIcon icon={faPersonCircleCheck} className={styles.operatorIcon} />
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="documentType">
            <Form.Label>Approvals list</Form.Label>
            <Form.Control
              as="select"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
            >
              <option value="">Select Approval</option>
              <option>Request document for ...</option>
              <option>Request CC for ...</option>
              <option>doc-3</option>
            </Form.Control>
          </Form.Group>

          <div className={styles.changeButtonContainer}>
            <Button variant="primary" type="submit">
              Approve
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default approvalPage;