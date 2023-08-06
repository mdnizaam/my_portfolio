import React from "react";
import PortfolioMenu from "../components/PortfolioMenu";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black  font-montserrat">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col justify-center items-center gap-y-3 py-3"
      >
        <h1 className="text-primary_white text-xl font-semibold">
          My Masterpiece Collection
        </h1>
        <p className="max-w-md text-center text-xs text-primary_white">
          As a React.js developer, my showcase collections demonstrate my
          proficiency and creativity in developing diverse web applications and
          user interfaces. These collections showcase a selection of projects
          that highlight my skills and expertise in delivering high-quality
          solutions. Here are some key aspects of my showcase collections:
        </p>
      </motion.div>
      <div className="py-5">
        <PortfolioMenu />
      </div>
    </div>
  );
};

export default Portfolio;
