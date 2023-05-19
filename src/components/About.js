import React from 'react';
import './About.css';
import recentpic from '../photos/recentpic.jpg';

export default function About() {
  return(
    <div>
      <section id="about">
        <div className="row">
        <h2>About Me</h2>
          <img className="profile-pic" src={recentpic} alt="me" />
          <br />
    </div>

        <div>   
          <h3>Scarlet Bowen, Ph.D.</h3>
          <h4>Full Stack Web Developer</h4>
          <p className="aboutMe"> After pursuing careers as a literature faculty member and DEI practitioner, I became interested in applying my analytical training to programming and data analytics. Currently, I am obtaining a certificate in Full Stack Web Development from UC-Irvine. I enjoy bringing development ideas to fruition through problem-solving, clear communication, and inclusive design.</p>
        </div>
      </section>
    </div>
  );
}
