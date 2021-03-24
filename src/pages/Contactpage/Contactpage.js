import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaFacebook} from 'react-icons/fa';
import emailjs from 'emailjs-com'
import "./_Contactpage.scss";
export const Contactpage = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wnwm47p', 'template_nsyztxe', e.target, 'user_2W99Wig2i13fMGnLhwgzN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <div className="container">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Send me a message</h3>
          <p className="text">
            Feel free to get in touch with me anything related to Web
            Development. You can just say Hi, I will get back to you soon.
          </p>
          <div className="info">
            <div className="information">
              <p>21 Rue Barbès Ivry Sur Seine</p>
            </div>
            <div className="information">
              <p>yassine.eljide12@gmail.com</p>
            </div>
            <div className="information">
              <p>+336716764245</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with me:</p>
            <div className="social-icons">
              <Link to={{ pathname: "https://github.com/Yassine-ElJide" }} target="_blank">
                <FaGithub/>
              </Link>
              <Link to="/" target="_blank">
                <FaInstagram/>
              </Link>
              <Link to="/" target="_blank">
                <FaFacebook/>
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form onSubmit={sendEmail}>
            <h3 className="title">Contact Me</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Username"
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder="Message"
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn" onSubmit={sendEmail} />
          </form>
        </div>
      </div>
    </div>
  );
};
