import React from 'react'
import '../styles/Home.scss'

import { Col, Container, Row } from 'react-bootstrap';

import API_img from "../assets/images/stackImages/API.png";
import C_sharp_img from "../assets/images/stackImages/C_Sharp.png"
import Databases_img from "../assets/images/stackImages/Databases.png"
import Frameworks_img from "../assets/images/stackImages/FrameWorks.png"
import Frontend_img from "../assets/images/stackImages/FrontEnd.png"
import Utilities_img from "../assets/images/stackImages/Utilities.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <section id='home'>
            <Container>
                <Row>
                    <Col className='home-img' md={6}></Col>
                    <Col md={6} className='home-text'>
                        <h1>Data Technician specialising in programming <FontAwesomeIcon icon={faHandSpock} color={"darkcyan"} /></h1>
                        <p>Hi, I'm Dainis Moisejenko. Enthusiastic and curious programmer with flair for Full Stack development based in Copenhagen, Denmark.</p>
                    </Col>
                </Row>
                <Row className='skills'>
                    <Col md={2} style={{ margin: 'auto' }}>
                        <p className='techStack'>Tech Stack</p>
                    </Col>
                    <Col md={10}>
                        <ul className='stackList'>
                            <li className='stackList-item'><img src={Frontend_img} title='HTML & CSS & JS' alt='HTML & CSS & JS' /></li>
                            <li className='stackList-item'><img src={Frameworks_img} title='ReactJS & React Native' alt='ReactJS & React Native' /></li>
                            <li className='stackList-item'><img src={API_img} title='REST API - NodeJS & GraphQL' alt='REST API - NodeJS & GraphQL' /></li>
                            <li className='stackList-item'><img src={C_sharp_img} title='C# & ASP.NET + Entity Framework' alt='C# & ASP.NET + Entity Framework' /></li>
                            <li className='stackList-item'><img src={Databases_img} title='SQL & MongoDB' alt='SQL & MongoDB' /></li>
                            <li className='stackList-item'><img src={Utilities_img} title='Utilities - DevOps & Agile & Git & GitHub' alt='Utilities - DevOps & Agile & Git & GitHub' /></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Home;