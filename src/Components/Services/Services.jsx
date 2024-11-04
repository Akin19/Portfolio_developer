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
              <p>100% Responsive Wordpress Design.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Delivering Fully editable modern responsive designs.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Custom and Professional WordPress Website Creation.</p>
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
            <h3>Web Development using MERN stack</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Fully Customized website.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Basic , Advance and Professional feature like 1 ,5 and 10 page
                website.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Adapts to all screen sizes, from desktops to mobile devices, for
                a consistent user experience.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>User Authentication and Authorization.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>API Integration.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Real-Time Features.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Database Management and Scalability.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Enhanced User Interface and Experience.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>SEO-Friendly Architecture.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Scalable Hosting and Deployment.</p>
            </li>
          </ul>
        </article>

        {/* web design ends here */}

        <article className="service">
          <div className="services_head">
            <h3>Youtube SEO</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Keyword Optimization.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Engaging Titles and Descriptions.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Update Tags and Hashtags.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Custom Thumbnails.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Closed Captions and Subtitles.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Make Playlists and Video Series.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Optimized End Screens and Cards.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Analize Channel and Video Metadata.</p>
            </li>
          </ul>
        </article>

        {/* Content writing ends here */}
      </div>
    </section>
  );
};

export default Services;
