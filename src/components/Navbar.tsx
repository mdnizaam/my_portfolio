import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-secondary_dark px-10 py-10 sticky top-0">
      <div className="font-montserrat   flex justify-between w-[90%] mx-auto text-primary_white">
        <h1 className="text-3xl font-bold">MD.</h1>
        <nav className="flex gap-x-10 items-center text-[14px] font-semibold ">
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
              />
            </Link>
            <Link to="/page1">
              <img
                src="./assets/images/instagram-icon-v2.png"
                className="w-6 h-6"
              />
            </Link>
            <Link to="/page1">
              <img
                src="./assets/images/youtube-icon-v2.png"
                className="w-6 h-6"
              />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:ddinnizamu810@gmail.com";
                e.preventDefault();
              }}
            >
              <img src="./assets/images/gmail.png" className="w-6 h-6" />
            </Link>
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
