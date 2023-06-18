import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
const SkillCard = ({ skill }: any) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="mb-12"
    >
      <div className="bg-white relative h-[10px] w-full rounded-2xl">
        <div
          style={{ width: skill.percent }}
          className={`bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 absolute top-0 left-0 h-full rounded-2xl`}
        >
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
            <span
              className={`bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 absolute bottom-[-2px] left-${skill.percent} -z-10 h-2 w-2 -translate-x-${skill.percent} rotate-45 rounded-sm`}
            ></span>
            {skill.name}
            &nbsp; {skill.percent}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
