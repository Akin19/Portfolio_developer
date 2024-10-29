import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <FaFacebook />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <BiLogoInstagramAlt />
      </a>
    </div>
  );
};

export default HeaderSocials;
