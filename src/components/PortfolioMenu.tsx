import { useState } from "react";
import ImageGallery from "./ImageGallery";

const PortfolioMenu = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const imageLink = [
    {
      0: [50, 51, 52, 53, 54, 55, 56],
    },
    {
      1: [57, 58, 59, 60, 61, 61, 63],
    },
    {
      2: [64, 65, 66, 67, 68, 69, 70],
    },
    {
      3: [71, 72, 73, 74, 75, 76, 77],
    },
  ];
  const menus = ["All", "UI/UX", "Web Developer", "Web Search", "Marketing"];
  return (
    <div>
      <nav className="flex justify-center mt-4">
        <ul className="flex gap-x-3 justify-center text-yellow-400 text-sm sm:text-lg">
          {menus.map((menu, i) => (
            <li
              className={`cursor-pointer transition-all ${
                activeMenu === i ? "border-b-2" : " "
              }`}
              onClick={() => setActiveMenu(i)}
            >
              {menu}
            </li>
          ))}
        </ul>
      </nav>
      {imageLink.map(
        (img: any, i) =>
          i === activeMenu && <ImageGallery images={{ img, activeMenu }} />
      )}
    </div>
  );
};

export default PortfolioMenu;
