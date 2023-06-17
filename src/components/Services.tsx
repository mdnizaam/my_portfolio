import React from "react";
import ServicesCard from "./ServicesCard";
import { Skill } from "../types/SkillInteeface";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const SkillsData: Skill[] = [
  {
    image: "../assets/images/pen.png",
    skillName: "UI/UX",
    projects: "10+",
    exp: "2+",
  },
  {
    image: "../assets/images/web_development.png",
    skillName: "Web Development",
    projects: "30+",
    exp: "2+",
  },
  {
    image: "../assets/images/full_stack_dev.png",
    skillName: "Full Stack Developer",
    projects: "10+",
    exp: "2+",
  },
];
const Services = () => {
  return (
    <div className="w-[100%] bg-gradient-to-br from-gray-700 via-gray-900 to-black mx-auto font-montserrat min-h-[100vh] flex justify-center items-center">
      <div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col justify-center items-center gap-y-3"
        >
          <h1 className="text-yellow-500 uppercase">Services</h1>
          <h1 className="text-primary_white text-xl font-semibold">
            What I Am Great At
          </h1>
          <p className="max-w-fit sm:max-w-md text-center text-xs text-primary_white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut unde,
            totam laborum nostrum tempore culpa! Porro inventore eum distinctio
            est. Laboriosam officiis dignissimos magni
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-x-2 justify-center mt-4">
          {SkillsData?.map((item: Skill) => (
            <ServicesCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
