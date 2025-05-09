import "./Portfolio.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Digital Marketer</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://saeemtalukdar.com/"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://saeemtalukdar.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Blog Site</h3>
          <div className="portfolio_item_cta">
            <a
              style={{ display: 'none' }}
              href="https://github.com/Akin19/FaysalBiswasPortfolio"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://yourmarketingtips.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Demo Portfolio Website</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/Akin19/AnimatedPortfolio"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://vercel.com/asad-akins-projects/animated-portfolio"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>E-commerce Website</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/Akin19/Ecommerce_React"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://ecommerce-react-phi-azure.vercel.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Health Coach</h3>
          <div className="portfolio_item_cta">
            <a
              style={{ display: 'none' }}
              href="https://github.com/Akin19/AnimatedPortfolio"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://thedangerousgentleman.org/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Agency Website</h3>
          <div className="portfolio_item_cta">
            <a
              style={{ display: 'none' }}
              href="https://github.com/Akin19/Portfolio_simple"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://seostationaoyon.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
