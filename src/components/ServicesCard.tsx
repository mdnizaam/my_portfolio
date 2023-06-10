import { Skill } from "../types/SkillInteeface";

const ServicesCard = ({ item }: { item: Skill }) => {
  return (
    <div>
      <div className="flex flex-col  gap-y-5 justify-center items-center w-[220px] max-w-md">
        <div className="bg-secondary_dark hover:bg-[#47494f] px-3 py-6 text-center w-full text-primary_white">
          <div className="flex justify-center my-3">
            <img src={item.image} width={50} height={50} />
          </div>
          <h1>{item.skillName}</h1>
          <p>{item.projects} projects</p>
        </div>
        <div className="text-center py-3 text-primary_white">
          <span className="text-secondary_yellow">{item.exp} Years</span> <br />
          Experience
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
