import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './app.module.scss';
import Logo from './login/devtran-logo.ico';

const Header = () => {
  return (
    <Navbar bg="transparent" expand="lg" className={styles.headerBackground}>
      <Navbar.Brand href="#home" className={styles.logo}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.headerNavRight}>
        <Nav>
          <Nav.Link as={Link} to="/download" className={styles.navLink}>Download</Nav.Link>
          <Nav.Link as={Link} to="/edit" className={styles.navLink}>Upload</Nav.Link>
          <NavDropdown title="Request" id="basic-nav-dropdown" className={styles.navDropdown}>
            <NavDropdown.Item href="#action/3.1">Change Operator</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Request document</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Autenticate document</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">University Document</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/transfer" className={styles.navLink}>Approvals</Nav.Link>
          <Nav.Link as={Link} to="/transfer" className={styles.navLink}>Group</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
