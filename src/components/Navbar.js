import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
const Navbar = () => {
  const [toggler, setToggler] = useState(false);

  const toggle = () => setToggler(!toggler);

  return (
    <>
      <nav className="hidden bg-black w-full px-16 py-4 md:flex md:flex-row flex-col justify-between items-center">
        <div className="nav-left text-white list-none flex  items-center md:flex-row flex-col">
          <a href="/" className=" w-10">
            <img
              className="logo"
              src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
              alt="LOGO"
            />
          </a>
          <ul className="ml-8 flex flex-row space-x-8">
            <li className="flex items-center justify-between">Product <RiArrowDownSLine className="ml-2 font-bold text-3xl" /></li>
            <li className="flex items-center justify-between">Our Story <RiArrowDownSLine className="ml-2 font-bold text-3xl" /></li>
            <li className="flex items-center justify-between">Resourses <RiArrowDownSLine className="ml-2 font-bold text-3xl" /></li>
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <li className="px-6 py-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white list-none">
            Book a Demo
          </li>

       
        </div>
      </nav>

      {/* mobile */}
      <nav className="md:hidden bg-black  flex flex-col justify-center items-center py-4">
        <div className="flex flex-row justify-between w-full px-4">
          <a href="/" className=" w-10">
            <img
              className="logo"
              src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
              alt="LOGO"
            />
          </a>
          <button onClick={toggle}>
            {toggler ? (
              <TfiClose className="text-white text-3xl" />
            ) : (
              <FiMenu className="text-white text-3xl" />
            )}
          </button>
        </div>

        {toggler ? (
          <div onClick={toggle} className="nav-left text-white list-none w-full px-4 py-16 bg-gray-900 mt-4">
            <ul className="flex flex-col space-y-8">
              <li className="flex items-center justify-between">
                Product <RiArrowDownSLine className="ml-2 font-bold text-2xl" />
              </li>
              <li>Our Story</li>

              <li className="flex items-center justify-between">
                Resources{" "}
                <RiArrowDownSLine className="ml-2 font-bold text-2xl" />
              </li>
              <li>Resourses</li>
              <button className="px-6 py-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white list-none w-full ">
                Book a Demo
              </button>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
