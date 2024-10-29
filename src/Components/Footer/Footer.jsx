import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        NadiaMim
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instagram.com">
          <FaInstagramSquare />
        </a>
        <a href="https://twiter.com">
          <FaSquareTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copyright: Asad Akin, All Rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
