import React, { useEffect, useState } from "react";
import Purchases from "../purchases/Purchases";

const TabComponent = ({ activeItem, itemName, handleToggleTab }) => {
  return (
    <div
      className={`relative cursor-pointer text-center text-black py-2 text-lg ${
        activeItem
          ? "text-[#51A6DAFF] font-bold  border-b-4  border-[#51A6DAFF]"
          : ""
      }`}
      onClick={() => handleToggleTab(itemName)}
    >
      <span className="relative  inline-block">{itemName}</span>
    </div>
  );
};

const Product = () => {
  const [products, setProducts] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleToggleTab = (itemType) => {
    setActiveItem(itemType);
  };

  return (
    <section className="w-full">
      <h1 className="text-4xl ml-7 mt-5 text-[#51A6DAFF] font-semibold">
        My purchases
      </h1>

      .
      <div className="grid grid-cols-2 ml-7 max-w-md mt-12 ">
        <TabComponent
          handleToggleTab={handleToggleTab}
          activeItem={activeItem === "All Purchases"}
          itemName="All Purchases"
        />
        <TabComponent
          handleToggleTab={handleToggleTab}
          activeItem={activeItem === "Warranty Registered"}
          itemName="Warranty Registered"
        />
      </div>

      <Purchases products={products} />
    </section>
  );
};

export default Product;
