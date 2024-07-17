// src/App.js
import React from "react";
import Card from "./components/card/Card";
import image from "../src/assets/img.png";
import Product from "./components/Product/Product";
import Sidebar from "./components/sidebar/Sidebar";
import Service from "./components/service/Service";
import Contact from "./components/contact us/Contact";

function App() {
  const data = [
    {
      image: image,
      text: "Scan and authenticate your purchase",
      text2: "Scan your purchased product for authenticity and",
    },
    {
      image: image,
      text: "Track Warranty Status",
      text2:
        "Upload your bill, register your warranty  and track the warranty status of your product",
    },
    {
      image: image,
      text: "Book Services as per schedule",
      text2:
        "We inform you when your service is due so you never miss booking your service",
    },
  ];

  return (
    <>
      {/* <div className="flex justify-center">
      <Card data={data} />
    </div> */}
      <div className="flex h-screen overflow-y-auto">
        {/* <Sidebar /> */}
        {/* <Product /> */}
        {/* <Service/> */}
        <Contact/>
      </div>
     
    </>
  );
}

export default App;
