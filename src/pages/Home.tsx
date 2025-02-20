import React, { useState } from "react";
import Services from "../components/Services";
import { Typewriter } from "react-simple-typewriter";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Skills from "./Skills";

const Home = () => {
  const handleDone = () => {};
  const [, setScrollTop] = useState(0);

  const handleScroll = (event: any) => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600  font-montserrat">
      <div
        onScroll={handleScroll}
        className="flex flex-col sm:flex-row justify-evenly min-h-[calc(100vh-68px)] w-[90%] mx-auto"
      >
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="sm:w-[35%]"
        >
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="pt-[3rem] sm:pt-[8rem] font-bold text-[24px] sm:text-[30px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Mohammed Nizam
            <span className="text-yellow-500 font-bold">.</span>
            <br />
            <span>I Am a </span>
            <span style={{ color: "#E7A035", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Full Stack Dev", "YouTuber", "Front-End Dev"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
              />
            </span>
          </motion.h1>
          <hr className="w-24 mt-6"></hr>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-primary_white text-sm my-4 font-semibold"
          >
            <h1>
              {" "}
              <a
                href="https://www.instagram.com/techie_nizam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/mdnizam786/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
            </h1>
            <h1>
              <a
                href="https://www.youtube.com/@techienizam3249"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>{" "}
              | <button>Twitter</button>{" "}
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <a
              href="tel:8770872737"
              className="uppercase outline-none border text-yellow-500 border-yellow-400 px-3 py-2 my-3"
            >
              Call Me
            </a>
          </motion.div>
        </motion.div>
        <div className="w-[35%] hidden sm:block">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-center items-center h-full"
          >
            <img
              src="./assets/images/profile_pic.png"
              alt="Profile_Image"
              className="w-[23rem] h-[29rem] object-cover mix-blend-color-dodge"
            />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="sm:w-[20%]"
        >
          <h1 className="uppercase text-yellow-500 text-sm pt-[3rem] sm:pt-[8rem] mb-5">
            Introduction
          </h1>
          <div className="mb-3">
            <h1 className="text-primary_white font-bold text-3xl uppercase">
              Front-End Developer,
            </h1>
            <h1 className="text-primary_white font-bold text-3xl uppercase">
              Having
            </h1>
            <h1 className="text-primary_white font-bold text-3xl uppercase">
              3+ Years of Experience
            </h1>
          </div>
          <p className="text-primary_white text-xs">
            "Experienced Front-end Developer: Building Modern and Interactive
            Web Applications"
          </p>
          <button className="text-yellow-500 text-xs mt-3">Learn More !</button>
        </motion.div>
      </div>
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
