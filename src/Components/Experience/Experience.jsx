import "./Experience.css";
import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        {/* Frontend starts here */}
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Wordpress</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            {/* <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4></h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* Backend start here */}
        <div className="experience_backend">
          <h3>Youtube SEO</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Keyword Research</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Optimized Titles and Descriptions</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Thumbnails</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Captions and Subtitles</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Engagement Metrics</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>End Screens and Cards</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
