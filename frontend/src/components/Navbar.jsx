import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import ShoppingProduct from "../Context/ShoppingProduct";
import PopupAccount from "./PopupAccount";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { quantityArticle, isLoggedIn } = useContext(ShoppingProduct);

  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="h-20 w-full bg-[#1B80BF] fixed top-0 pb-0 mb-0 z-50">
      <div className="h-full flex flex-wrap justify-around items-center">
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
        {/* end hamburger btn */}
        <NavLink
          to="/"
          className="text-4xl text-[#F2F2F2] pl-6 font-semibold italic md:pl-16 md:pr-16"
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
        <div
          className="flex items-center space-x-5 pl-10"
          onClick={() => setShowPopup(!showPopup)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Space") {
              setShowPopup(!showPopup);
            }
          }}
          role="button"
          tabIndex={0}
        >
          <div className="h-full w-[3wh] flex justify-center items-center">
            {!isLoggedIn.email ? (
              <VscAccount className="text-2xl text-[#F2F2F2] font-semibold cursor-pointer" />
            ) : (
              <MdLogout className="text-2xl text-[#F2F2F2] font-semibold cursor-pointer" />
            )}
          </div>
          {showPopup && (
            <PopupAccount onMouseEnter={() => setShowPopup(true)} />
          )}
        </div>
        <div
          className="h-full w-[3wh] flex justify-center items-center"
          role="button" // Ajout de l'attribut role pour indiquer que c'est un élément interactif
          onClick={handleToCart}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Space") {
              handleToCart();
            }
          }}
          tabIndex={0} // Rend l'élément focusable
        >
          <BsCart className="text-2xl text-[#F2F2F2] font-semibold" />
        </div>
        <span
          className="bg-[#f2f2f2] border rounded-[50%] px-[5px] -py-[1px] text-sm text-[#1B80BF] relative right-7 bottom-3 md:right-14"
          onClick={handleToCart}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Space") {
              handleToCart();
            }
          }}
          role="button" // Ajout de l'attribut role pour indiquer que c'est un élément interactif
          tabIndex={0} // Rend l'élément focusable
        >
          {quantityArticle}
        </span>
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
