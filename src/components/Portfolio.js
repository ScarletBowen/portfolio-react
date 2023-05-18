import React from 'react';
import Project from './Project';
import { Container, Row, Col } from 'react-bootstrap';
import techblog from '../photos/techblog.png';
import moviemood from '../photos/moviemood.png';
import socialmedia from '../photos/socialmedia.png';

const Portfolio = () => (
  <div className="projects text-center">
    <h1>My recent work</h1>
    <Container>
      <Row>
        <Col md='4'>
          <Project
            name={'Tech Blog'}
            technology={'This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. '}
            description={'a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well'}
            link={'https://desolate-depths-78640.herokuapp.com/'}
            repo={'https://github.com/ScarletBowen/Tech-Blog'}
            image={techblog}
          />
        </Col>
        <Col md='4'>
          <Project
            name={'Movie Mood--a collaborative project'}
            technology={'Uses third-party API to access movie data.  This application uses HTML, CSS, and Javascript.'}
            description={'a web application that allows a user to find 3 movie recommendations after they have selected what mood they are feeling.'}
            link={'https://corradoj02.github.io/Movie-Mood/'}
            repo={'https://github.com/corradoj02/Movie-Mood'}
            image={moviemood}
          />
        </Col>
        <Col md='4'>
          <Project
            name={'Social Media API'}
            technology={'This is a back-end application that uses MongoDB and the Mongoose ODM to interact with a NoSQL database.'}
            description={'an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.'}
            link={'https://drive.google.com/file/d/1G8SAQWXwZSsnTBPRepuKRwBt9g5lYBEz/view'}
            repo={'https://github.com/ScarletBowen/social-media-MongoDB'}
            image={socialmedia}
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Portfolio;
       