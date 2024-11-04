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
          <h3>Weather App</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/Akin19/Weather-App"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com/Akin19/Weather-App"
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
          <h3>Client Portfolio Website</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/Akin19/FaysalBiswasPortfolio"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://faysalbiswas.netlify.app/"
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
          <h3>Portfolio Website</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/Akin19/Portfolio_developer"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://portfolio-developer-liart.vercel.app/"
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
              href="https://ecommercedemobyakin.netlify.app"
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
          <h3>Animated Portfolio website</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/Akin19/AnimatedPortfolio"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://animated-portfolio-nine-xi.vercel.app/"
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
          <h3>Simple Portfolio Website</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/Akin19/Portfolio_simple"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://portfolio-simple-eight.vercel.app/"
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
