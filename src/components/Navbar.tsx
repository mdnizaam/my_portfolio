import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleDownload = () => {
    const fileUrl = "./assets/images/Md nizam (1).pdf"; // Replace with the actual file URL or path

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "MdNizam.pdf"; // Specify the desired file name
    link.click();
  };
  return (
    <div className="bg-gradient-to-l  from-gray-400 via-gray-600 to-blue-800 px-4 py-4 ">
      <div className="font-montserrat   flex justify-between w-[90%] mx-auto text-primary_white">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          MD Nizam
        </h1>
        <nav className="hidden sm:flex gap-x-10 items-center text-[14px] font-semibold text-yellow-400">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/services">Services</Link>
          <span className="flex gap-x-3">
            <Link to="/page1">Contact &nbsp; | </Link>
            <Link to="/page1">
              <img
                src="./assets/images/linkedin-icon-v2.png"
                className="w-6 h-6"
                alt="linkedin"
              />
            </Link>
            <Link to="/page1">
              <img
                src="./assets/images/instagram-icon-v2.png"
                className="w-6 h-6"
                alt="insta"
              />
            </Link>
            <Link to="/page1">
              <img
                src="./assets/images/youtube-icon-v2.png"
                className="w-6 h-6"
                alt="youtube"
              />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:ddinnizamu810@gmail.com";
                e.preventDefault();
              }}
            >
              <img
                src="./assets/images/gmail.png"
                alt="gmail"
                className="w-6 h-6"
              />
            </Link>
          </span>
          <button onClick={handleDownload}>Download CV</button>
        </nav>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="block sm:hidden cursor-pointer"
        >
          {openMenu ? (
            <img src="./assets/images/cross.svg" alt="menu" />
          ) : (
            <img src="./assets/images/menu.svg" alt="menu" />
          )}
        </button>
        <div
          className={`w-full min-h-fit ${
            openMenu ? "block" : "hidden"
          } z-50 absolute right-0 mt-10 bg-gradient-to-l  from-gray-400 via-blue-800  to-gray-600 rounded-md shadow-lg md:static md:mt-0 md:bg-transparent md:shadow-none transition duration-300`}
        >
          <nav className="flex flex-col gap-x-10 items-center text-[14px] font-semibold text-yellow-400">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/services">Services</Link>
            <span className="flex gap-x-3">
              <Link to="/page1">Contact &nbsp; | </Link>
              <Link to="/page1">
                <img
                  src="./assets/images/linkedin-icon-v2.png"
                  className="w-6 h-6"
                  alt="linkedin"
                />
              </Link>
              <Link to="/page1">
                <img
                  src="./assets/images/instagram-icon-v2.png"
                  className="w-6 h-6"
                  alt="insta"
                />
              </Link>
              <Link to="/page1">
                <img
                  src="./assets/images/youtube-icon-v2.png"
                  className="w-6 h-6"
                  alt="youtube"
                />
              </Link>
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:ddinnizamu810@gmail.com";
                  e.preventDefault();
                }}
              >
                <img
                  src="./assets/images/gmail.png"
                  alt="gmail"
                  className="w-6 h-6"
                />
              </Link>
            </span>
            <button onClick={handleDownload}>Download CV</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
