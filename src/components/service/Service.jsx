import React from "react";
import { FiClock } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import userImage from "../../assets/users.png"; // make sure to have a valid path to your image

const Service = () => {
  return (
    <div className="bg-white border-2 p-5 max-w-md w-full">
        
      <div className="flex items-center mb-4">
        <img
          src={userImage}
          alt="User"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div className="flex items-center justify-between w-full">
          <h2 className="text-lg font-semibold">Dr. Tiya Mcdaniel</h2>
          <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
            Confirmed
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <FiClock className="mr-2" />
          <span>03:30 PM</span>
        </div>
        <div className="flex items-center">
          <CiCalendarDate className="mr-2" />
          <span>04/06/2022</span>
        </div>
      </div>
      <div className="flex justify-end gap-5">
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">
          Cancel
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default Service;
