import React from "react";

const Button = ({ contact }: any) => {
  return (
    <div>
      <div className="cursor-pointer  bg-gradient-to-l  from-gray-400 via-gray-600 to-blue-800 flex justify-center w-fit min-w-[150px] px-3 py-2 gap-x-3">
        <img src={contact.image} alt={contact.id} />
        <h1 className="text-white text-sm">{contact.title}</h1>
      </div>
    </div>
  );
};

export default Button;
