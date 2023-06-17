import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
const ImageGallery = ({ images }: any) => {
  const { img, activeMenu } = images;
  console.log("images", img?.[activeMenu]);
  return (
    <div>
      <div className="container mx-auto px-5 lg:px-32 lg:pt-4">
        <div className="-m-1 flex flex-col sm:flex-row flex-wrap md:-m-2">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col sm:flex-row sm:w-1/2 flex-wrap"
          >
            <div className="sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={`https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${img?.[activeMenu][0]}).webp`}
              />
            </div>
            <div className="sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={`https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${img?.[activeMenu][1]}).webp`}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={`https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${img?.[activeMenu][2]}).webp`}
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col sm:flex-row sm:w-1/2 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={`https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${img?.[activeMenu][3]}).webp`}
              />
            </div>
            <div className="sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={`https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${img?.[activeMenu][0]}).webp`}
              />
            </div>
            <div className="sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={`https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${img?.[activeMenu][0]}).webp`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
