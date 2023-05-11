import React from 'react';
import contactLeft from '../assets/contactLeft.webp'
import '../styles/Contact.css'
function Contact() {
    return (
        <div className='contact'>
          <div className='leftSide' style={{ backgroundImage: `url(${contactLeft})`}}></div>
          <div className='rightSide'></div>
          <h3 id='cont'>Contact Us</h3>
          
          <div id='last'>
            <form id='contact-form' method='POST'>
            <label htmlFor='name'>Full Name</label>
            <input name='name' placeholder='Enter your name' type='text' />
            <label htmlFor='email'>Email</label>
            <input name='email' placeholder='Enter your email' type='email' />
            <label htmlFor='message'>Message</label>
            <textarea rows='6' placeholder='Enter message' name='message'></textarea>
            <button type='submit'>Send Message</button>
            </form>
          </div>
          
        </div>
    );
}

export default Contact;