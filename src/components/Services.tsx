import React from "react";
import ServicesCard from "./ServicesCard";
import { Skill } from "../types/SkillInteeface";

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
    <div className="w-[100%] bg-secondary_light mx-auto font-montserrat h-[100vh] flex justify-center items-center">
      <div>
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h1 className="text-yellow-500 uppercase">Services</h1>
          <h1 className="text-primary_white text-xl font-semibold">
            What I Am Great At
          </h1>
          <p className="max-w-md text-center text-xs text-primary_white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut unde,
            totam laborum nostrum tempore culpa! Porro inventore eum distinctio
            est. Laboriosam officiis dignissimos magni
          </p>
        </div>
        <div className="flex gap-x-2 justify-center mt-4">
          {SkillsData?.map((item: Skill) => (
            <ServicesCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
