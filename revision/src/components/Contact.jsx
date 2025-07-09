import React from "react";
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;