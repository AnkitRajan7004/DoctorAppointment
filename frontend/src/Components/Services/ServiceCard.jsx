import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor, icon } = item;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between h-full hover:-translate-y-1">
      <div>
        <div
          className={`w-14 h-14 rounded-full bg-gradient-to-br text-2xl flex items-center justify-center mb-4 shadow-md ${bgColor}`}
        >
          {icon}
        </div>
        <h2 className="text-xl font-bold text-headingColor mb-2">{name}</h2>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <Link
          to="/doctors"
          className="flex items-center gap-2 text-sm text-primaryColor font-semibold group"
        >
          <span>Learn More</span>
          <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
        <span
          className="w-10 h-10 flex items-center justify-center font-bold text-sm rounded-md"
          style={{
            background: `linear-gradient(to right, ${textColor}, #ffffff30)`,
            color: textColor,
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
