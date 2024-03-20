import React, { useState } from 'react';
import { Navbar, Offcanvas, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDownload, FaUpload } from 'react-icons/fa';
import styles from './app.module.scss';
import Logo from './login/devtran-logo.ico';
import DownloadPopup from './downloadPopup';
import UploadPopup from './uploadPopup';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showUploadPopup, setShowUploadPopup] = useState(false);

  const handleDownloadClick = () => setShowDownloadPopup(true);
  const handleUploadClick = () => setShowUploadPopup(true);

  const handleCloseDownloadPopup = () => setShowDownloadPopup(false);
  const handleCloseUploadPopup = () => setShowUploadPopup(false);

  return (
    <>
      <Navbar bg="transparent" expand={false} className={styles.headerBackground}>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} className={styles.customToggle} />
        <div className={`logo-title-container ${styles.logoTitleContainer}`}>
          <Navbar.Brand href="/files">
            <img src={Logo} alt="Logo" className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Brand href="/files" className={styles.title}>DevTransactions</Navbar.Brand>
        </div>
        <div className="ml-auto"> 
        <Button variant="light" className={styles.buttonDownload} onClick={handleDownloadClick}>
          <FaDownload /> Download
        </Button>
        <Button variant="light" className= {styles.buttonUpload} onClick={handleUploadClick}>
          <FaUpload /> Upload
        </Button>
        </div>
      </Navbar>
      {showDownloadPopup && <DownloadPopup handleClose={handleCloseDownloadPopup} />}
      {showUploadPopup && <UploadPopup handleClose={handleCloseUploadPopup} />}

      <Offcanvas show={show} onHide={handleClose} placement='start' className={styles.offCanvas }>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.offcanvasTitle}>Functionalities</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
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
