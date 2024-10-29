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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo
            culpa eos facere ab delectus. Cumque ea eveniet similique impedit,
            maxime ipsum placeat! Harum, atque neque unde eum necessitatibus
            animi?
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
