import React, { useRef } from 'react';
import './contact.scss';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ocljjtg', 'template_kvcfmlf', form.current, 'YEa026RU9xPJXDYfC')
      .then((result) => {
          console.log(result.text);
          alert("Message sent!")
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5><a href="mailto:json.olsen@gmail.com" target="_blank" rel="noreferrer">json.olsen@gmail.com</a></h5>

          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon" />
            <h4>Messenger</h4>
            <h5><a href="https://m.me/jason.olsen.90" target="_blank" rel="noreferrer">Jason Olsen</a></h5>

          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>WhatsApp</h4>
            <h5><a href="https://wa.me/+18057484171" target="_blank" rel="noreferrer">+18057484171</a></h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
