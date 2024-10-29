import CTA from "./CTA";
import "./Header.css";
import me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nadia Mim</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={me} alt="ME" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
