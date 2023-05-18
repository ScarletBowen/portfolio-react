import React from 'react';
import browser from '../photos/browser.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Resume.css';

export default function Resume() {
  return (
    <Row>
      <Row>
        <Col className="text-center">
          <h1 className="title">Resume</h1>
        </Col>
      </Row>
      <Col md={4} className="text-center">
        <img className="logo" src={browser} alt="browser" />
        <h1>Front End</h1>
        <p>
          HTML5, CSS3
          <br />
          <br />
          Scripts (client-side):
          <br />
          JavaScript, jQuery, React.js
          <br />
          AJAX, RESTful API’s
          <br />
          <br />
          UI frameworks:
          <br />
          Bootstrap, React UI Components
        </p>
      </Col>

      <Col md={4} className="text-center">
        <img className="logo" src="https://static.thenounproject.com/png/9658-200.png" alt="icon" />
        <h1 className="isBlue">Database</h1>
        <p>
          MySQL, MongoDB
        </p>
      </Col>

      <Col md={4} className="text-center">
        <img className="logo" src="https://static.thenounproject.com/png/3190581-200.png" alt="icon" />
        <h1 className="isBlue">Back End</h1>
        <p>
          Scripts (server-side):
          <br />
          Node.js, Express.js
          <br />
          <br />
          Node Package Managers:
          <br />
          Express, Sequelize, Express-handlebars,
          <br />
          Mongoose, Axios
        </p>
      </Col>
    </Row>
  );
}


          