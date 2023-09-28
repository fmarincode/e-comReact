import React from "react";
import { BsCart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="h-20 w-full bg-[#1B80BF] flex justify-around items-center">
      <div className="flex w-[85%] justify-between items-center pl-10">
        <h2 className="text-3xl text-[#F2F2F2] font-thin italic">HOKA</h2>
        <h4 className="text-[#F2F2F2]">HOMME</h4>
        <h4 className="text-[#F2F2F2]">FEMME</h4>
        <h4 className="text-[#F2F2F2]">ENFANT</h4>
        <h4 className="text-[#F2F2F2]">DECOUVRIR</h4>
      </div>
      <div className="flex w-[15%] justify-around items-center">
        <BsCart className="text-2xl" />
        <VscAccount className="text-2xl" />
      </div>
    </div>
  );
}

export default Navbar;
