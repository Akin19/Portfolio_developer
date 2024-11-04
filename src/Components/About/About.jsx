import "./About.css";
import me from "../../assets/me-about.jpg";

import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        {/* About picture starts here */}
        <div className="about_me">
          <div className="about_me_image">
            <img src={me} alt="About Images" />
          </div>
        </div>

        {/* About content */}
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years Of Expeience</small>
            </article>
            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>30+ clients Worldwide</small>
            </article>
            <article className="about_card">
              <GoProjectSymlink className="about_icon" />
              <h5>Project</h5>
              <small>60+ project Done</small>
            </article>
          </div>

          <p>
            A Frontend Developer and SEO expert. I specialize in creating
            responsive, visually engaging websites optimized to rank high on
            search engines. With strong skills in HTML, CSS,JavaScript and
            react, I blend design and SEO strategies to boost visibility and
            deliver great user experiences.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
