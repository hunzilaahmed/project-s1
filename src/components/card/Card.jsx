// src/components/Card.js
import React from "react";

const Card = ({ data }) => {
  return (
    <div className=" rounded w-[1200px]  bg-slate-100 min-h-auto  overflow-hidden shadow-lg p-9 ">
      <div>
        <h3 className="text-2xl p-1">Welcome to Label Maker!</h3>
        <p className="pb-12">
          Now track all your purchased products and their warranty status
        </p>
      </div>
      <div className="flex space-x-4">
        {data.map((item, index) => (
          <div key={index} className="w-[400px]">
            <img src={item.image} className="w-full h-auto" />
            <p className="text-center mt-2  font-semibold text-1xl">
              {item.text}
            </p>
            <p className="text-center mt-2   text-sm">{item.text2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
