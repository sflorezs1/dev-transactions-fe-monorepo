import React, { useState } from 'react';
import styles from './login.module.scss';
import Logo from '../../public/devtran-logo.ico'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className={styles.loginBackground}>
      <div className={styles.title}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        DevTransactions
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h2 className={styles.loginTitle}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <i className="bi bi-envelope-fill"></i>
              <input
                type="email"
                id="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <i className="bi bi-lock-fill"></i>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={styles.rememberMe}>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            <div className={styles.loginActions}>
              <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
            </div>

            <div className={styles.loginActions}>
              <button type="submit" className={styles.loginButton}>Login</button>
            </div>
            <div>
              <span>Don't have an account? </span>
              <a href="#" className={styles.registerLink}>Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;