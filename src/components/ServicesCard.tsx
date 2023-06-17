import { Skill } from "../types/SkillInteeface";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
const ServicesCard = ({ item }: { item: Skill }) => {
  return (
    <div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col  gap-y-5 justify-center items-center w-[220px] max-w-md"
      >
        <div className="bg-gradient-to-l  from-gray-400 via-gray-600 to-blue-800 hover:bg-[#47494f] px-3 py-6 text-center w-full text-primary_white">
          <div className="flex justify-center my-3">
            <img src={item.image} alt={item.skillName} width={50} height={50} />
          </div>
          <h1>{item.skillName}</h1>
          <p>{item.projects} projects</p>
        </div>
        <div className="text-center py-3 text-primary_white">
          <span className="text-secondary_yellow">{item.exp} Years</span> <br />
          Experience
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesCard;
