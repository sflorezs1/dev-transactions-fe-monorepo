import React, { useState } from 'react';
import { Navbar, Offcanvas, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './login/devtran-logo.ico';
import styles from './files.module.scss'

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
        <div className={`logo-title-container ${styles.logoTitleContainer}`}>
          <Navbar.Brand >
            <img src={Logo} alt="Logo" className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Brand  className={styles.title}>DevTransactions</Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
