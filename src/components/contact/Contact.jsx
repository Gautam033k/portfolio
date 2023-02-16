import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
// import { SiMessenger } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rn2fbvf',
        'template_s8ooyme',
        form.current,
        'Xg_ury3HuE6fnlG8a'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>te.gautham033@gmail.com</h5>
            <a
              href="mailto:gowtham2001k@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              send a message{' '}
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+919677404234</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9677404234"
              target="_blank"
              rel="noreferrer"
            >
              send a message{' '}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            // cols="25"
            rows="7"
            placeholder="your Message "
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
