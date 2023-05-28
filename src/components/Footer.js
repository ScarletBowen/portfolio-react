import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import github from '../photos/github-mark.png';


export default function Footer() {
    return (
        <footer>
            <div>
                <h3>Contact Information</h3>
                <div className="footer-logos">
                <a target='_blank' rel='noreferrer' href="https://github.com/ScarletBowen">
                    <img className="logo" src={github} alt="github" />
                </a>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/scarlet-bowen-ph-d-232b1b41/">
                    <img className="logo" src="https://freeiconshop.com/wp-content/uploads/edd/linkedin-outline.png" alt="linkedin" />
                </a>
                <a href="mailto:scarlet.bowen@gmail.com">
                    <img className="logo" src="https://i.pinimg.com/originals/1b/3b/ec/1b3bec070f7bb1c007dbaaeafaeb21b7.png" alt="email" />
                </a>
                </div>

                <h4>(720) 289-4690</h4>
                <h5>scarlet.bowen@gmail.com</h5>

                <div className="footer-button">
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/scarlet-bowen-ph-d-232b1b41/">
                    <Button className="resume">View my resume</Button>
                </a>
                </div>
            </div>
        </footer>
    );
}
