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
          <h3>Website Creation & Customization</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Web Design</h4>
                <small className="text-light">Turn your ideas into a responsive and interactive WordPress website.</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Customization</h4>
                <small className="text-light">Update or modify your existing website.</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Theme Development</h4>
                <small className="text-light">Develop a custom WordPress theme.</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Page Builder Expertise</h4>
                <small className="text-light">Elementor, Divi, Beaver Builder, GreenShift</small>
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
          <h3>Maintenance & E-commerce Solutions</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Website Bug Fixing</h4>
                <small className="text-light">Troubleshoot and fix any issues or errors on your WordPress site.</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>WooCommerce Store</h4>
                <small className="text-light">Build business stores or sales funnels that are visually appealing.</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Website Optimization & Speed</h4>
                <small className="text-light">Improve your website’s performance by optimizing speed, images.</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Website Security & Backups</h4>
                <small className="text-light">Protect your website from malware, hacks, and data loss.</small>
              </div>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
