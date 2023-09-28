import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="h-20 w-full bg-[#1B80BF] fixed top-0 pb-0 mb-0">
      <div className=" h-full flex flex-wrap justify-around items-center">
        {/* hamburger btn */}
        <div className="md:hidden pt-2">
          <button type="button" onClick={handleMenu}>
            <span className="sr-only">Open Main Menu</span>
            {open === true ? (
              <FaTimes className="text-2xl text-[#f2f2f2]" />
            ) : (
              <FaBars className="text-2xl text-[#f2f2f2]" />
            )}
          </button>
        </div>
        <NavLink
          to="/"
          className="text-4xl text-[#F2F2F2] font-semibold italic md:pl-16 md:pr-16"
        >
          HOKA
        </NavLink>
        <div className="hidden md:flex md:w-[70%] md:justify-center md:space-x-24 md:items-center">
          <NavLink to="/homme" className="text-[#F2F2F2]">
            HOMME
          </NavLink>
          <NavLink to="/femme" className="text-[#F2F2F2]">
            FEMME
          </NavLink>
          <NavLink to="/enfant" className="text-[#F2F2F2]">
            ENFANT
          </NavLink>
        </div>
        <div className="flex items-center space-x-5">
          <BsCart className="text-2xl text-[#F2F2F2] font-semibold" />
          <VscAccount className="text-2xl text-[#F2F2F2] font-semibold" />
        </div>
      </div>
      {/* mobile menu */}
      {open ? (
        <div className="md:hidden w-full py-0">
          <div className="flex flex-col items-start w-full bg-[#1B80BF] text-[#F2F2F2] ">
            <NavLink to="/homme" className="text-[#F2F2F2] block px-4 py-2">
              HOMME
            </NavLink>
            <NavLink to="/femme" className="text-[#F2F2F2] block px-4 py-2">
              FEMME
            </NavLink>
            <NavLink to="/enfant" className="text-[#F2F2F2] block px-4 py-2">
              ENFANT
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
