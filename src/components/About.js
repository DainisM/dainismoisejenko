import React from 'react'
import '../styles/About.scss'

import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <section id='about'>
            <Container>
                <h1>About me</h1>
                <Row>
                    <p>I´m looking for an opportunity to start my career as Software Developer in one of these roles - <b>Junior Frontend | FullStack | Web</b> developer. I´m newly graduated Data Technician specialising in programming and have skills/knowledge in programming, databases, problem solving and ability to learn new technologies quickly.</p>
                    <p>I love to learn and write code and experiment with a lot of new exciting things. My ambitions are to learn new skills/technologies and hone existing ones so that in near future I can become a real specialist that can solve complex tasks.</p>
                    <p>I have experience from my almost 5-year apprenticeship at School Practice Center (SKP Ballerup) where I have worked with web and mobile full stack development starting from planning, designing, coding and implementing various tasks both in groups and independently.</p>
                    <p>As for my personal qualifications I would say that I possess natural curiosity for variety of thing and I think I'm pretty quick learner. Besides that I would define myself as a hardworking and patient individual.</p>
                </Row>
                <Row className='skills_hobbies-box'>
                    <Col md={6}>
                        <h3>Code & Tools</h3>
                        <h4>Languages</h4>
                        <p>HTML, CSS, JavaScript, C#, Python</p>
                        <h4>Frameworks</h4>
                        <p>ReactJS, ReactNative, ASP.NET, Entity Framework, Bootstrap</p>
                        <h4>Data</h4>
                        <p>SQL, MongoDb, REST API - Node.js + Express.js, GraphQL</p>
                        <h4>Design</h4>
                        <p>A bit of Photoshop, Figma</p>
                        <h4>Utilities & Methodologies</h4>
                        <p>Git, GitHub, npm, basics of - DevOps, SCRUM, Agile, ITIL</p>
                        <h4>Things I have tried/learning now</h4>
                        <p>Java, MaterialUI, Tailwind CSS, Redux, RTK Query, TypeScript</p>
                    </Col>
                    <Col md={6}>
                        <h3>My hobbies</h3>
                        <p>I am a gamer starting from the 90's game consoles, as a kid, to computers nowadays. Recently started to get into Sim Racing.</p>
                        <p>A car enthusiast - thats me. I like cars & motorcycles and everything about them, like motorsport (especially drifting), tuning and all the other shenanigans.</p>
                        <p>Big travel lover (car road trips included), I would like to travel all around the world to see many different places and learn more about them while doing so.</p>
                        <p>Fishing is also one of my hobbies that I like when I feel like I need a time to relax a bit.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;