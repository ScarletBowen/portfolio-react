import React from 'react';
export default function Footer() {
    return (
      <footer>
      <div>
        <h3>Contact Information</h3>
        <a target='_blank' href="https://github.com/ScarletBowen"><img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt="github" /></a>
       {" "}
       <a target='_blank' href="https://www.linkedin.com/in/scarlet-bowen-ph-d-232b1b41/"><img className="logo" src="https://freeiconshop.com/wp-content/uploads/edd/linkedin-outline.png" alt="linkedin" /></a>
       {" "}
        <a href="mailto:scarlet.bowen@gmail.com"><img className="logo" src="https://i.pinimg.com/originals/1b/3b/ec/1b3bec070f7bb1c007dbaaeafaeb21b7.png" alt="email" /></a>

        <br />
       <br />

        <h4>(720) 289-4690</h4>
        <h5>scarlet.bowen@gmail.com</h5>

        <a target='_blank' href="https://www.linkedin.com/in/scarlet-bowen-ph-d-232b1b41/"><Button className="resume">View my resume</Button></a>
    </div>
    </footer>
    );
  }
