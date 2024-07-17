import React from "react";
import girlimage from "../../assets/girlimage.png";
import { BiPhoneCall } from "react-icons/bi";
import { RiRoadMapLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white  rounded-lg p-6 w-full">
      <div className="md:w-2/3 md:p-12  order-2 md:order-1">
        <div className="flex justify-start ">
          <div>
            <h2 className="md:text-5xl text-2xl max-sm:font-semibold  font-semibold mb-4">
              Get in touch
            </h2>
            <p className="text-gray-600 md:text-lg text-lg  font-semibold  mb-6">
              Interested in partnering with us or just want to say hi, we are
              all ears
            </p>
            <form className="space-y-4 ">
              <div className="flex flex-col sm:flex-row mb-4">
                <div className="sm:w-1/2 sm:mr-2 mb-4 sm:mb-0">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    placeholder="First Name"
                  />
                </div>
                <div className="sm:w-1/2 sm:ml-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full border border-gray-300 p-2 rounded-md"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#2987C2FF] text-[#ffffffff] py-2 px-6 w-48 rounded-2xl"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-col  max-sm:hidden  items-start mt-20 ml-20 space-y-5">
            <div className="flex items-center mb-2">
              <RiRoadMapLine className="mr-2 text-[#2987C2FF]" />
              <span>(city)</span>
            </div>
            <div className="flex items-center mb-2">
              <BiPhoneCall size={20} className="mr-2 text-[#2987C2FF]" />
              <span>(number)</span>
            </div>
            <div className="flex items-center mb-2   ">
              <HiOutlineMail className="mr-2  text-[#2987C2FF]" />
              <span>(email)</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="sm:hidden flex    items-start mt-20 ml-20 space-y-5">
          <div className="flex items-center mb-2">
            <RiRoadMapLine className="mr-2" />
            <span>(city)</span>
          </div>
          <div className="flex items-center mb-2">
            <BiPhoneCall size={20} className="mr-2" />
            <span>(number)</span>
          </div>
          <div className="flex items-center mb-2">
            <HiOutlineMail className="mr-2" />
            <span>(email)</span>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 md:p-4 flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
        <img
          src={girlimage}
          alt="Contact"
          className="max-w-full md:max-w-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Contact;
