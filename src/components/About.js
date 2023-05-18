import React from 'react';

export default function About() {
  return(
      <div>
      <section id="about">
         <div className="row">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
         </div>
         <div className="three columns">
               <h2>About Me</h2>
               <h3>Scarlet Bowen, Full-Stack Web Developer</h3>
              <p className="aboutMe"> After pursuing careers as a faculty member and DEI practitioner, I became interested in bringing an analytical mindset to programming and data analytics. Currently, I am obtaining a certificate in Full Stack Web Development from UC-Irvine. I enjoy bringing ideas to fruition through problem-solving, clear communication, and inclusive design.</p>
         </div>
      </section>
      </div>
   );
}