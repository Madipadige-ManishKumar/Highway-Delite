import React from "react";
import { useNavigate } from "react-router-dom";
import backend_url from "../backend_url";

const ExperienceCard = ({ id,image, title, location, description, price, rating }) => {
    const navigate = useNavigate()
    const handleclick = ()=>{
        navigate(`/place/${id}`)
    }
  return (
    <div className="bg-white rounded-xl  w-100 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-100 h-48 object-cover rounded-t-xl"
        />
        {rating && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs font-semibold px-2 py-1 rounded-md">
            ★ {rating}
          </div>
        )}
        {location && (
          <div className="absolute bottom-2 right-2 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-md shadow">
            {location}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between h-[180px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {/* <p className=" text-gray-500">{id}</p> */}
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-800 font-semibold">
            <span className="text-sm text-gray-500 mr-1">From</span> ₹{price}
          </div>
          <button  onClick={handleclick}  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
