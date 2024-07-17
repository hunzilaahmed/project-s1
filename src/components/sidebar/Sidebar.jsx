import React from "react";
import { CiDollar } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
const LINKS = [
  {
    label: "Dashboard",
    to: "/dashboard",
    Icon: RxDashboard,
  },
  {
    label: "My purchases",
    to: "/mypurchases",
    Icon: CiDollar,
  },
  {
    label: "Service bookings",
    to: "/servicebookings",
    Icon: RiCustomerService2Fill,
  },
];
const routeNames = "/servicebookings";
const Sidebar = () => {
  return (
    <>
      <section className="max-w-60 p-2 py-5 w-full">
        <ul className="space-y-5 ">
          {LINKS.map((item) => {
            return (
              <li
                key={item.label}
                className={`flex items-center px-5 ${
                  item.to === routeNames &&
                  "bg-[#51A6DAFF] py-4 rounded-lg text-white"
                }`}
              >
                <item.Icon size={25} className=" mr-2" />
                <span className="">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
