import React from 'react';
import Project from './Project';
import { Container, Row, Col } from 'react-bootstrap';
import techblog from '../photos/techblog.png';
import moviemood from '../photos/moviemood.png';
import socialmedia from '../photos/socialmedia.png';
import projectpilot from '../photos/projectpilot.png';
import weather from '../photos/weather.png';
import codingquiz from '../photos/codingquiz.png';

const Portfolio = () => (
  <div className="projects text-center">
    <h1>My Recent Work</h1>
    <Container>
      <Row>
        <Col md='4'>
          <Project
            name={'Tech Blog'}
            technology={'This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. '}
            description={'This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.'}
            link={'https://desolate-depths-78640.herokuapp.com/'}
            repo={'https://github.com/ScarletBowen/Tech-Blog'}
            image={techblog}
          />
        </Col>
        <Col md='4'>
          <Project
            name={'Movie Mood--a collaborative project'}
            technology={'This application uses third-party APIs to access movie data.  This application uses HTML, CSS, and Javascript.'}
            description={'A web application that allows a user to find 3 movie recommendations after they have selected what mood they are feeling.'}
            link={'https://corradoj02.github.io/Movie-Mood/'}
            repo={'https://github.com/corradoj02/Movie-Mood'}
            image={moviemood}
          />
        </Col>
        <Col md='4'>
          <Project
            name={'Social Media API'}
            technology={'This is a back-end application that uses MongoDB and the Mongoose ODM to interact with a NoSQL database.'}
            description={'This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.'}
            link={'https://drive.google.com/file/d/1G8SAQWXwZSsnTBPRepuKRwBt9g5lYBEz/view'}
            repo={'https://github.com/ScarletBowen/social-media-MongoDB'}
            image={socialmedia}
          />
        </Col>
      
      <Col md='4'>
          <Project
            name={'Project Pilot--a collaborative project'}
            technology={'This is a full-stack application that uses Bootstrap, Node.js, Express.js, MySQL, Sequelize, and Handlebars.js.'}
            description={'Designed for freelancers, this application allows users to track their projects, clients, and hours worked.'}
            link={'coming soon'}
            repo={'https://github.com/tcmiller30/project-pilot'}
            image={projectpilot}
          />
        </Col>
     
      <Col md='4'>
          <Project
            name={'Weather Planner'}
            technology={'This application uses a third-party API to access weather data, using HTML, CSS, and Javascript.'}
            description={'A weather dashboard that runs in the browser and features dynamically updated HTML and CSS.'}
            link={'https://scarletbowen.github.io/Weather-Planner/'}
            repo={'https://github.com/ScarletBowen/Weather-Planner'}
            image={weather}
          />
        </Col>
   
      <Col md='4'>
      <Project
        name={'Coding Quiz'}
        technology={'This application uses HTML, CSS, and Javascript.'}
        description={'A timed coding quiz with multiple-choice questions. The application stores user scores in local storage and retrieves the cumulative high score when the game is over.'}
        link={' https://scarletbowen.github.io/Code-Quiz/'}
        repo={'https://github.com/ScarletBowen/Code-Quiz'}
        image={codingquiz}
      />
    </Col>
  </Row>
    </Container>
  </div>
);

export default Portfolio;
       