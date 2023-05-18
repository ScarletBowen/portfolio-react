import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Resume() {
  return (
    <Row>
      <Col md={4} className="text-center">
        <h1>Resume</h1>
        <img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/2166/2166822.svg" alt="logo" />
        <h1 className="isBlue">Front End</h1>
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


          