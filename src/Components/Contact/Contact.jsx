import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_15pfrvu", "template_45t794l", form.current, {
        publicKey: "97dODCwT5XGxBJSFS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container  contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>gmasad.swe@gmail.com</h5>
            <a href="mailto:gmasad.swe@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className="contact_option-icon" />
            <h4>Messanger</h4>
            <h5>Asaduzzman Akin</h5>
            <a href="https://m.me/nadiamimProfileLink" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+8801765042763</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801765042763"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End of Contact Option */}

        <form action="" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
            id=""
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
