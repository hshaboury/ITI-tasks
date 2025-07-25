import React from 'react'
import SectionHeader from './SectionHeader'
import PortfolioCard from './PortfolioCard'
import "../App.css"

import img1 from "./assets/pic1.jpg";
import img2 from "./assets/pic2.jpg";
import img3 from "./assets/pic3.jpg";
import img4 from "./assets/pic4.jpg";
import img5 from "./assets/pic5.jpg";
import img6 from "./assets/pic6.jpg";
const Portfolio = () => {
  return (
      <section className="portfolio">
          <div className="container">
              <SectionHeader title={"portfolio"} />
              <div className="cards">
                  <PortfolioCard
                      img={img1}
                      title={"Threads"}
                      category={"Illustration"}
                  />
                  <PortfolioCard
                      img={img2}
                      title={"Explore"}
                      category={"Graphic Design"}
                  />
                  <PortfolioCard
                      img={img3}
                      title={"Finish"}
                      category={"Identity"}
                  />
                  <PortfolioCard
                      img={img4}
                      title={"Lines"}
                      category={"Branding"}
                  />
                  <PortfolioCard
                      img={img5}
                      title={"Southwest"}
                      category={"Website Design"}
                  />
                  <PortfolioCard
                      img={img6}
                      title={"Window"}
                      category={"Photography"}
                  />
              </div>
          </div>
      </section>
  );
}

export default Portfolio