import React from "react";
import { portfolio } from "../data";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container mx-auto">
        <h2 className="section-title text-accent mb-16 lg:mb-[20px]">{portfolio.title}</h2>
        <div className="flex flex-col items-center tex-center">
          <h3 className="text-center text-2xl lg:text-3xl before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block mb-8">{portfolio.preTitle}</h3>
          <p className="section-subtitle"> {portfolio.paragraph}</p>
        </div>
        <Projects />
        {/* <div className="flex flex-col lg:flex-row gap-6">
          <div>
            <a href="https://asgaard-fest.netlify.app/">
              <img src={portfolio.image1} alt="" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex">
              <a href="https://tajiaportfolio.netlify.app/">
                <img src={portfolio.image2} alt="" />
              </a>
            </div>
            <div className="flex">
              <a href="https://carbonfreeprojectforuni.netlify.app/">
                <img src={portfolio.image3} alt="" />
              </a>
            </div>
            <div className="flex">
              <a href="https://hogwardsassigment.netlify.app/">
                <img src={portfolio.image4} alt="" />
              </a>
            </div>
            <div className="flex">
              <a href="https://gamewithchickens.netlify.app/">
                <img src={portfolio.image5} alt="" />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
