import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../header_register';
import styles from './register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

const RegisterPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Add password validation logic here (e.g., check for length, numbers, and symbols)
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        // Handle form submission logic here (e.g., update user password)
        console.log('Password:', password);
      } else {
        alert("Passwords do not match.");
      }
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <div className={styles.loginBackground}>
      <Header />
      <div className={styles.content}>
        <h2 className={styles.pageTitle}>Create Password</h2>
        <FontAwesomeIcon icon={faUserSecret} className={styles.operatorIcon} />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <div className={styles.changeButtonContainer}>
            <Button variant="primary" type="submit">
              Set Password
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;