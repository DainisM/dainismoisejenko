import React from 'react'
import "../styles/Contact.scss"

import { Col, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id='contact'>
            <Container>
                <h1>Contact</h1>
                <h3>Don't be shy! Contact me now!</h3>
                <Row className='contact-box'>
                    <Col md={6} className='contact_info-box'>
                        <span><FontAwesomeIcon icon={faMapLocation} color={"darkcyan"} size='2x' /></span>
                        <div className='contact_info'>
                            <h4>Location</h4>
                            <p>Copenhagen, Denmark</p>
                        </div>
                    </Col>
                    <Col md={6} className='contact_info-box'>
                        <span><FontAwesomeIcon icon={faEnvelope} color={"darkcyan"} size='2x' /></span>
                        <div className='contact_info'>
                            <h4>Mail</h4>
                            <a href='mailto: moisejenko11@gmail.com'><p>moisejenko11@gmail.com</p></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;