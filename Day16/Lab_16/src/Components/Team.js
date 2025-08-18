import React from 'react'
import "../App.css";
import SectionHeader from './SectionHeader';
import TeamCard from './TeamCard';
import img1 from "./assets/pic1.jpg";
import img2 from "./assets/pic2.jpg";
import img3 from "./assets/pic3.jpg";
const Team = () => {
  return (
      <section className="team">
          <div className="container">
              <SectionHeader title={"our amazing Team"} />
              <div className="members">
                  <TeamCard
                      img={img1}
                      name={"Parveen Anand"}
                      title={"Lead Designer"}
                  />
                  <TeamCard
                      img={img2}
                      name={"Diana Petersen"}
                      title={"Lead Marketer"}
                  />
                  <TeamCard
                      img={img3}
                      name={"Larry Parker"}
                      title={"Lead Developer"}
                  />
              </div>
          </div>
      </section>
  );
}

export default Team