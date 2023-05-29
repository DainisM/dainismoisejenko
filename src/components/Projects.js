import React from 'react'
import '../styles/Projects.scss'

import img1 from "../assets/images/portfolioImages/TicketGO.png";
import img2 from "../assets/images/portfolioImages/youbankImg.png";
import img3 from "../assets/images/portfolioImages/fedtnessImg.png";
import img4 from "../assets/images/portfolioImages/musicmixMobileImg.png";
import img5 from "../assets/images/portfolioImages/musicmixWebImg.jpg";
import img6 from "../assets/images/portfolioImages/wpfSystemImg.jpg";

import { Col, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const projectsArray = [
        { id: 1, img: img1, title: "TicketGO", link: "https://github.com/DainisM/TicketGO-web", tech: ["ReactJS", "SCSS", "Bootstrap", "Apollo Client", "GraphQL"], description: "This was my school final project. This was a group project with me and 2 other people. My tasks were to create Frontend and create and manage middleware & DB with one more guy. TicketGO was a system with 3 main products - Frontend (Web) written in ReactJS, Backend (Admin) and mobile (Android) applications. The product must be used for ticket sales which will make it possible for the individual venues / festivals to sell tickets to their guests. The product's database, which is MongoDB, is stored in the cloud using MongoDB Atlas and middleware for data management is MongoDB Realm service which uses GraphQL to send/receive data. We did not manage to finish it completely, thats why its incomplete and missing some features/functionality. I am working on it in my free time to make it finished and add some more functionality to it like - payment using Stripe, search function and etc." },
        { id: 2, img: img2, title: "YouBank", link: "https://github.com/P5-Tec/ReactV2", tech: ["ReactJS", "CSS", "Bootstrap", "Framer Motion", "Intl.js"], description: "This was a group project and we needed to make - an mobile app, web app, Rest API and host it all. I was given a task to create this website and helped in creating the API. The idea for this website is that is should introduce users to our mobile banking app. This website was made in React JS and I added small animations/motions to some elements with the help of framer-motion package and intlt for multilanguage support. Also I made a darkmode which users can toggle inbetween light and dark modes. Also I tried to make it responsive for it to look good also in mobile devices." },
        { id: 3, img: img3, title: "Fedtness", link: "https://github.com/Fedtness/FitnessApp", tech: ["React Native", "axios", "API (ASP.Net + Entity Framework)"], description: "This was a group project and we needed to make - an mobile app, simple SPA, Rest API and host it all. I was given a task to create the app and was helping creating the API. The idea was to make a fitness app which can help user with their workouts. Users can choose between different types of workouts, choose exercises for different muscle groups, make their own weekly trainnig plan and much more. This App was made in React Native and data was send/received by API (made in ASP.Net + Entity Framework) which was hosted on IIS server." },
        { id: 4, img: img4, title: "MusicMix - Mobile", link: "https://github.com/DainisM/MusicMix-Online", tech: ["React Native", "axios", "API (Node.js + Express.js)"], description: "This is an mobile application for my previous projects - MusicMix (Web) - that uses the same API (written in Node.js with Express.js) and lets user access and listen to songs and users own playlists and information. The idea (again) was to make an Spotify like mobile app using React Native. Users can find all sort of music by music genre or mood (chill, motivation, workout etc.), find all songs and some info about artist/band and of course create and listen to his own playlists to which users can add or remove songs from." },
        { id: 5, img: img5, title: "MusicMix - Web", link: "https://github.com/DainisM/MusicMix-web-app", tech: ["ReactJS", "CSS", "Bootstrap", "axios", "API (Node.js + Express.js)"], description: "My idea was to make a web app that can be used to listen to music - like Spotify. My web app needs to store and sort all songs in playlists for easy user experience just like Spotify does. Users need to create and then login with an account to be able to browse and listen to music. Users can browse music sorted into playlists, search for songs or artists and create their own playlist to later save their liked songs into them. One of the purposes was to learn and try ReactJS. I did chosen to work with ReactJS because I had some experience with JavaScript before and in my opinion ReactJS is very popular JavaScript library. I choose to go with Node.js + Express.js to make my REST API." },
        { id: 6, img: img6, title: "WPF_Ticket_System", link: "https://github.com/DainisM/WPF_Ticket_System", tech: ["C#", "WPF"], description: "This was my very first big/complete system project that I worked on ealy into my education. I worked in the group of 3 people and we had to develop complete system with 3 different products: Web, Windows and Android applications. I was tasked with the objective to make a Windows app which I did make with WPF in C#. The task was to implement these 3 new systems and to replace the old approach with Excel documents for the ticket system. The app must be able to register and control new and existing tickets sorted by the date received. The app must show technician who is working on it, ticket status, checkpoints, when it´s done it also need to show pickup time and etc." }
    ];

    return (
        <section id='projects'>
            <Container>
                <h1>Projects</h1>
                <h3>Here are some of the projects I have made. Some of the projects were made in groups with others and are part of the complete systems, but what you see here is made by me. They are sorted with newest ones first.</h3>
                {projectsArray.map(project => (
                    <Row key={project.id} className={`ProjectBox ${project.id % 2 ? "" : "flex-row-reverse"}`} >
                        <Col md={6}><img src={project.img} /></Col>
                        <Col md={6} className='ProjectBox-info'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className='ProjectBox-tech'>
                                {project.tech.map((t) => <p key={t}>{t}</p>)}
                            </div>

                            <div className='ProjectBox-link'>
                                <a target='_blank' rel="noreferrer" href={project.link}>Code <FontAwesomeIcon icon={faGithub} size='xl' /></a>
                            </div>

                        </Col>
                    </Row>
                ))
                }
            </Container >
        </section >
    )
}

export default Projects;