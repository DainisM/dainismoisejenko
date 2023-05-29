import React from 'react'
import "../styles/Footer.scss"

import { Col, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={6} className='footerc'>
                        Dainis Moisejenko © {(new Date().getFullYear())}
                    </Col>
                    <Col md={6} className='footerLinks'>
                        <a aria-label='linkedin' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/dainis-moisejenko'> <FontAwesomeIcon icon={faLinkedin} color={"darkcyan"} size='2x' /> </a>
                        <a aria-label='github' target='_blank' rel="noreferrer" href='https://github.com/DainisM' > <FontAwesomeIcon icon={faGithub} color={"darkcyan"} size='2x' /> </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;