import React from "react";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="bg-secondary_dark font-montserrat">
      <div className="flex justify-evenly h-[calc(100vh-116px)] w-[90%] mx-auto">
        <div className="w-[20%]">
          <h1 className="pt-[8rem] text-primary_white font-bold text-3xl uppercase">
            Mohammed <br /> Nizam
            <span className="text-yellow-500 font-bold">.</span>
          </h1>
          <hr className="w-16 mt-6"></hr>
          <div className="text-primary_white text-sm mt-3 font-semibold">
            <h1>Instagram | LinkedIn</h1>
            <h1>Youtube | Twitter</h1>
          </div>
          <div>
            <button className="uppercase outline-none border text-yellow-500 border-yellow-400 px-3 py-2 mt-3">
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex justify-center items-center h-full">
            <img
              src="./assets/images/profile_pic.png"
              alt="Profile_Image"
              className="w-[23rem] h-[29rem] object-cover "
            />
          </div>
        </div>
        <div className="w-[30%]">
          <h1 className="uppercase text-yellow-500 text-sm pt-[8rem] mb-5">
            Introduction
          </h1>
          <div className="mb-3">
            <h1 className="text-primary_white font-bold text-3xl uppercase">
              Front End Developer,
            </h1>
            <h1 className="text-primary_white font-bold text-3xl uppercase">
              React js Developer
            </h1>
            <h1 className="text-primary_white font-bold text-3xl uppercase">
              2+ Years Experience
            </h1>
          </div>
          <p className="text-primary_white text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            distinctio laboriosam hic, dolorem enim accusantium in amet dicta ex
            vitae.
          </p>
          <p className="text-yellow-500 text-xs mt-3">Learn More !</p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Home;
