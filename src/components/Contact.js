import React, {useState} from 'react';
import {validateEmail, validateUsername, validateMessage} from '../utils/helpers.js';

export default function Contact() {

    const [errMessage, setErrMessage] = useState('');

    const checkValidation = (event) => {
        if (event.target.name === "name") {
            if (!validateUsername(event.target.value)) {
                setErrMessage("Please enter a valid name");
            } else {
                setErrMessage("");
            }
        }
        if (event.target.name === "email") {
            if (!validateEmail(event.target.value)) {
                setErrMessage("Please enter a valid email");
            } else {
                setErrMessage("");
            }
        }
        if (event.target.name === "message") {
            if (!validateMessage(event.target.value)) {
                setErrMessage("Please enter a valid message");
            } else {
                setErrMessage("");
            }
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(errMessage === ""){
            // handle form submission
        }
    }

    return (
        <div>
            <h1>Contact Me!</h1>
            <p>Fill out the simple form below to get in touch with me!</p>
            <form className='contactForm' onSubmit={handleSubmit}>
                <input 
                type='text'
                placeholder='Name'
                name='name'
                className='form-input-name'
                onBlur={checkValidation}></input>
                <input 
                type='text'
                placeholder='Email'
                name='email'
                className='form-input-email'
                onBlur={checkValidation}></input>
                <textarea 
                placeholder='Type message here...'
                name='message'
                className='form-input-message'
                onBlur={checkValidation}></textarea>
                <button type="submit" className='formBtn'>Send!</button>
            </form>
            {errMessage && <p className='error-text'>{errMessage}</p>}
        </div>
    )
}
