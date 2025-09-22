import "./Services.css";
import { FaCheck } from "react-icons/fa6";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="services_head">
            <h3>Wordpress Website</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Custom WordPress theme development or customization</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Fully responsive design for all devices</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Integration with essential plugins (SEO, security, contact forms)</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Customizing and Redesigning of WordPress.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Crypto, E-commerce, Blogging, Trucking / Logistics and Business
                WordPress Website.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Speed and SEO optimized ( CEO Certified ).</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Complete E-Commerce Store Setup.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Live Chat, Social Media, Royalty Free images, News Letters.</p>
            </li>
          </ul>
        </article>
        {/* UI/UX ends here */}

        <article className="service">
          <div className="services_head">
            <h3>Content & Website Management</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Page and blog content upload</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Product upload and updates for WooCommerce stores.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Layout and styling updates.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Image optimization for faster loading</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Regular website checks and minor fixes</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Monthly reporting on updates and performance</p>
            </li>

          </ul>
        </article>

        {/* web design ends here */}

        <article className="service">
          <div className="services_head">
            <h3>Maintenance & Support</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>WordPress core, theme, and plugin updates.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Website speed optimization and performance tuning.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Regular backups and restore points.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Security monitoring and malware removal.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Troubleshooting errors or website issues.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Priority support for urgent fixes.</p>
            </li>
        
          </ul>
        </article>

        {/* Content writing ends here */}
      </div>
    </section>
  );
};

export default Services;
