import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../header_register';
import styles from './register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import * as fernet from 'fernet';
import { redirect } from 'react-router-dom';

// Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character
const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})');

const RegisterPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const urlParams = new URLSearchParams(window.location.search).get('params');

  if (!urlParams) redirect('/login');

  const params: {
    name: string;
    email: string;
    national_id: number;
  } = JSON.parse(atob(urlParams as string));

  const handleSubmit = (event) => {
    event.preventDefault();

    const response = fetch(`${import.meta.env.VITE_USER_BRIDGE_URL}/user/complete_register`, {
      body: JSON.stringify({
        email: params.email,
        password,
      }), 
    })
  };

  return (
    <div className={styles.loginBackground}>
      <Header />
      <div className={styles.content}>
        <h2 className={styles.pageTitle}>Create Password</h2>
        <FontAwesomeIcon icon={faUserSecret} className={styles.operatorIcon} />
        <span>Hello, {params.name}! <br /></span>
        <span>Provide a secure password to finish your register</span>
        <div className={styles.formContainer}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={params.email}
                readOnly
                disabled

              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isValid={passwordRegex.test(password)}
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isValid={passwordRegex.test(confirmPassword) && password === confirmPassword}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Set Password
            </Button>
          </Form>
        </div>
        <b>Password Requirements:</b>
        <ul>
          <li id="lowercase">At least one lowercase letter</li>
          <li id="uppercase">At least one uppercase letter</li>
          <li id="number">At least one digit</li>
          <li id="special">At least one special character (! @ # $ % ^ & *)</li>
          <li id="length">Minimum of 8 characters</li>
        </ul>
        </div>
    </div>
  );
};

export default RegisterPage;