import React from "react";
import Social from "./Social";
import Man from "../assets/img/man_banner.png";
import { RiFileDownloadFill } from "react-icons/ri";

const Hero = () => {
  const downloadFile = () => {
    window.location.href = "https://yoursite.com/src/assets/files/exampleDoc.pdf";
  };
  return (
    <section className="pt-[100px] bg-heroText bg-contain bg-no-repeat bg-center lg:bg-top" id="home">
      <div className="container mx-auto xl:px-[100px]">
        <div className="lg:flex text-center lg:text-left">
          <div className="flex-1 lg:max-w-[558px] mt-32">
            <h3 className="text-[18px] lg:text-xl font-semibold mb-2 lg:mb-[50px]">Hi! I am</h3>
            <h2 className="text-[24px] lg:text-[32px] font-semibold text-[#BF4341] mb-4 lg:mb-5">Paul Balta</h2>
            <h1 className="text-[60px] md:text-[80px] lg:text-[90px] leading-none font-semibold mb-6">
              Frontend <br />{" "}
              <span className="lg:pl-[70px]">
                Developer<span className="w-3 h-3 md:w-5 md:h-5 inline-block bg-accent rounded-full ml-0"></span>
              </span>
            </h1>
            <p className="mb-[35px] text-lg lg:text-xl text-center lg:text-left">Frontend/Multimedia design student who is currently looking for an intership and available for other projects.</p>
            <div className="mx-auto max-w-min lg:m-0 relative z-10 ">
              <Social />
            </div>

            <a href={require("../assets/CV/C.V.pdf")} download="Paul_Balta_CV" target="_blank">
              <button className="btn bg-accent mx-auto lg:mx-0 mb-6 shadow-xl shadow-[#fd59566b] realtive z-10">
                Download my CV
                <span className="text-xl ml-3">
                  <RiFileDownloadFill />
                </span>
              </button>
            </a>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end relative xl:after:content-arrow xl:after:w-96 xl:after:h-96 xl:after:block xl:after:absolute xl:after:top-2/4 xl:after:-left-96">
            <img className="z-20" src={Man} alt="" />
            <div className="w-[350px] h-[450px] sm:w-[603px] sm:h-[753px] bg-blob bg-contain bg-no-repeat mx-auto absolute top-[85px] z-10 "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
