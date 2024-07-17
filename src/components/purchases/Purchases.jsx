import React from "react";
import { CiCalendarDate } from "react-icons/ci";

const Purchases = ({ products }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 flex lg:flex-row flex-col mb-4"
        >
          <div className="w-full max-w-sm   flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-auto max-w-36 h-auto object-contain rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div className=" flex justify-between">
              {/* Date and Price */}
              <div className="flex items-center">
                <CiCalendarDate size={20} />
                <span>{new Date(item.date).toLocaleDateString()}</span>
              </div>
              <span className="text-lg font-semibold">${item.price}</span>
            </div>
            <div >
              {/* Title and Warranty Info */}

              <h4 className="text-base	leading-6	text-[#171A1FFF] font-bold mb-2">
                {item.title}
              </h4>
              <p className="text-xs mb-4 sm:mb-0 sm:mr-4">
                2 year warranty • 3 free services • 10 year compressor warranty
              </p>
            </div>
            <div className="flex justify-between ">
              {/* Brand and Button */}

              <h1 className="text-sm">Tag</h1>
              <button className="bg-[#51A6DAFF] text-white py-2   h-10 px-4 rounded hover:bg-blue-700">
                Book a service
              </button>
            </div>
          </div>

          <div className="hidden grid grid-cols-2 sm:grid-cols-2 justify-between w-full">
            <div className="">
              <div className="flex items-start justify-between border">
                <div className="flex items-start gap-5 ">
                  <CiCalendarDate size={20} />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>

                <div className="mb-2 flex justify-between ">
                  <p className="text-lg font-semibold mb-4">${item.price}</p>
                </div>
              </div>

              {/* <span className="inline-block text-sm bg-gray-200 px-2 py-1 rounded-full text-gray-800">
                  New
                </span> */}

              <h4 className="text-base	leading-6	text-[#171A1FFF] font-bold mb-2">
                {item.title}
              </h4>
            </div>
            <p className="text-xs mb-4 sm:mb-0 sm:mr-4">
              2 year warranty • 3 free services • 10 year compressor warranty
            </p>
            <div className="col-span-2 flex flex-col-4  sm:flex-row items-center justify-between">
              <h1 className="text-sm">dami</h1>
              <button className="bg-[#51A6DAFF] text-white py-2 w-full sm:w-36 h-10 px-4 rounded">
                Book a service
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Purchases;
