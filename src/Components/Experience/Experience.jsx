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
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend start here */}
        <div className="experience_backend">
          <h3>Backend Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
