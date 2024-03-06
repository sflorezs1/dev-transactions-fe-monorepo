import React, { useState } from 'react';
import { Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './app.module.scss';
import Logo from './login/devtran-logo.ico';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="transparent" expand={false} className={styles.headerBackground}>
        <Navbar.Brand href="#home" className={styles.title}>DevTransactions</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} className={styles.customToggle} />
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" className={styles.logo} />
        </Navbar.Brand>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement='start' className={styles.offCanvas }>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.offcanvasTitle}>Functionalities</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/download" className={styles.navLink}>Download</Nav.Link>
            <Nav.Link as={Link} to="/edit" className={styles.navLink}>Upload</Nav.Link>
            <NavDropdown title="Request" id="basic-nav-dropdown" className={styles.navLink}>
              <NavDropdown.Item as={Link} to="/change-operator" className={styles.navLink}>Change Operator</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/request-document" className={styles.navLink}>Request document</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/authenticate-document" className={styles.navLink}>Authenticate document</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/university-document" className={styles.navLink}>University Document</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/approvals" className={styles.navLink}>Approvals</Nav.Link>
            <Nav.Link as={Link} to="/group" className={styles.navLink}>Group</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
