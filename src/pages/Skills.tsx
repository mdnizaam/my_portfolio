import React from "react";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
const Skills = () => {
  const skillDetails = [
    {
      id: 0,
      name: "Javacript",
      percent: "90%",
    },
    {
      id: 1,
      name: "TypeScript",
      percent: "70%",
    },
    {
      id: 2,
      name: "React Js",
      percent: "85%",
    },
    {
      id: 3,
      name: "Next Js",
      percent: "80%",
    },
    {
      id: 4,
      name: "CSS",
      percent: "70%",
    },
    {
      id: 5,
      name: "TAILWINDCSS",
      percent: "80%",
    },
    {
      id: 6,
      name: "REDUX/Redux-toolkit",
      percent: "80%",
    },
    {
      id: 7,
      name: "git/github",
      percent: "70%",
    },
    {
      id: 8,
      name: "Node js",
      percent: "60%",
    },
  ];
  return (
    <div className="min-h-screen  flex justify-center flex-col gap-y-4 items-center bg-gradient-to-br from-gray-700 via-gray-900 to-black  font-montserrat">
      <div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col justify-center items-center gap-y-3"
        >
          <h1 className="text-yellow-500 uppercase">My Professional Skills</h1>

          <p className="max-w-md text-center text-xs text-primary_white">
            As an experienced React.js developer, I possess a diverse set of
            professional skills that enable me to build modern and interactive
            web applications. Some of my key skills include:
          </p>
        </motion.div>
      </div>
      <div className="w-full px-4 lg:w-5/12 mt-6">
        {skillDetails.map((skill: any) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
