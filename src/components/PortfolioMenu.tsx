import { useState } from "react";
import ImageGallery from "./ImageGallery";

const PortfolioMenu = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const imageLink = [
    {
      0: [
        "./assets/images/bbe-1.png",
        "./assets/images/bbe-2.png",
        "./assets/images/bbe-3.png",
        "./assets/images/bbe-4.png",
        "./assets/images/bbe-1.png",
        "./assets/images/bbe-3.png",
        "./assets/images/bbe-2.png",
      ],
    },
    {
      1: [
        "./assets/images/bbe-1.png",
        "./assets/images/bbe-2.png",
        "./assets/images/bbe-3.png",
        "./assets/images/bbe-4.png",
        "./assets/images/bbe-1.png",
        "./assets/images/bbe-3.png",
        "./assets/images/bbe-2.png",
      ],
    },
    {
      2: [
        "./assets/images/bbe-1.png",
        "./assets/images/bbe-2.png",
        "./assets/images/bbe-3.png",
        "./assets/images/bbe-4.png",
        "./assets/images/bbe-1.png",
        "./assets/images/bbe-3.png",
        "./assets/images/bbe-2.png",
      ],
    },
    {
      3: [
        "./assets/images/bbe-1.png",
        "./assets/images/bbe-2.png",
        "./assets/images/bbe-3.png",
        "./assets/images/bbe-4.png",
        "./assets/images/bbe-1.png",
        "./assets/images/bbe-2.png",
        "./assets/images/bbe-3.png",
      ],
    },
  ];
  const menus = ["All", "UI/UX", "Web Developer", "Web Search"];
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
