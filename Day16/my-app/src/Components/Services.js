import React from 'react'
import "../App.css"
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'
import { FaShoppingCart, FaLaptop, FaLock } from "react-icons/fa";


const Services = () => {
  return (
      <section className="services">
          <div class="container">
              <SectionHeader title={"Services"}/>
              <div className="cards">
                  <ServiceCard icon={<FaShoppingCart />} title="E-Commerce" />
                  <ServiceCard icon={<FaLaptop />} title="Responsive Design" />
                  <ServiceCard icon={<FaLock />} title="Web Security" />
              </div>
          </div>
      </section>
  );
}

export default Services