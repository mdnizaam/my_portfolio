import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      image: "./assets/images/message.svg",
      title: "ddinnizamu810@gmail.com",
    },
    {
      id: 2,
      image: "./assets/images/telephone.svg",
      title: "8770872737",
    },
    {
      id: 3,
      image: "./assets/images/skype.svg",
      title: "skype",
    },
    {
      id: 4,
      image: "./assets/images/twitter.svg",
      title: "twitter",
    },
    {
      id: 5,
      image: "./assets/images/instagram.svg",
      title: "instagram",
    },
    {
      id:6,
      image: "./assets/images/linkedin.svg",
      title: "LinkedIn",
    },
  ];
  return (
    <div className="flex justify-center items-center h-screen pt-4 bg-gradient-to-br from-gray-700 via-gray-900 to-black  font-montserrat">
      <div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col justify-center items-center gap-y-3"
        >
          <h1 className="text-yellow-500 uppercase">Contact Us</h1>
          <h1 className="text-primary_white text-xl font-semibold">
            Ways To Contact Me
          </h1>
          <p className="max-w-md text-center text-xs text-primary_white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            autem recusandae enim mollitia. Deserunt reprehenderit unde veniam
            fugit aperiam, quia eum, molestiae nam animi cumque velit magni
            adipisci pariatur natus?
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="max-w-xl mx-auto my-auto py-20 gap-4 flex justify-center items-center flex-wrap mt-4 "
        >
          {contactDetails.map((contact: any) => (
            <Button contact={contact} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
