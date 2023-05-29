import React, { useState } from 'react'
import '../styles/Navbar.scss'

import { Modal } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

import Darkmode from './Darkmode';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <nav>
            <ul className='navList'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About me</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>

            <div className='navControls'>
                <Darkmode />
            </div>

            <i className='mobileMenu' onClick={() => handleShow()}>
                <FontAwesomeIcon icon={faBarsStaggered} size='2x' color={'darkcyan'} />
            </i>

            <Modal className='navModal' show={showModal} fullscreen={true} centered onHide={handleClose}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <ul className='navModal-ul'>
                        <li>
                            <a onClick={() => handleClose()} href='#home'>Home</a>
                        </li>
                        <li>
                            <a onClick={() => handleClose()} href='#about'>About me</a>
                        </li>
                        <li>
                            <a onClick={() => handleClose()} href='#projects'>Projects</a>
                        </li>
                        <li>
                            <a onClick={() => handleClose()} href='#contact'>Contact</a>
                        </li>
                    </ul>

                    <div className='modalDarkmode'>
                        <Darkmode />
                    </div>
                </Modal.Body>
            </Modal>

        </nav>
    )
}

export default Navbar;