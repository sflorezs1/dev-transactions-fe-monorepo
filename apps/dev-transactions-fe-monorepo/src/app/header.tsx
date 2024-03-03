import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './app.module.scss';
import Logo from './login/devtran-logo.ico'

const Header = () => {
  return (
    <Navbar bg="transparent" expand="lg" className={`${styles.headerBackground}`}>
      <Navbar.Brand href="#home" className={styles.logo}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Navbar.Brand >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link  as={Link} to="/download" className={styles.navLink}>Download</Nav.Link>
          <Nav.Link as={Link} to="/edit" className={styles.navLink}>Edit</Nav.Link>
          <Nav.Link as={Link} to="/transfer" className={styles.navLink}>Transfer</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;