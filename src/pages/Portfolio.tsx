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
        className="flex flex-col justify-center items-center gap-y-3"
      >
        <h1 className="text-primary_white text-xl font-semibold">
          My Masterpiece Collection
        </h1>
        <p className="max-w-md text-center text-xs text-primary_white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          autem recusandae enim mollitia. Deserunt reprehenderit unde veniam
          fugit aperiam, quia eum
        </p>
      </motion.div>
      <PortfolioMenu />
    </div>
  );
};

export default Portfolio;
