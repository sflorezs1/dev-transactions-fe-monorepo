import React, { useState } from 'react';
import styles from './login.module.scss';

const RegistrationPopup = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name, creditCard, address);
    handleClose(); // Close the popup after submitting
  };

  return (
    <div className={styles.registrationPopup}>
      <div className={styles.registrationCard}>
        <h2 className={styles.loginActions}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.registrationForm}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="number"
                placeholder="Identifiación"
                value={creditCard}
                onChange={(e) => setCreditCard(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.loginActions}>
            <button type="submit" className={styles.loginButton}>Register</button>
            <button type="button" className={styles.loginButton} onClick={handleClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPopup;
