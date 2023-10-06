import React from "react";
import { Link } from "react-router-dom";

function HoverAccount() {
  return (
    <div className="h-60 w-60 absolute top-8 right-32 py-5 pl-4 flex justify-start items-start">
      <div className="h-32 w-60 bg-white border-2 shadow-sm flex flex-col items-start pl-4 py-5">
        <Link to="/signin">Se connecter</Link>
        <Link to="/register">Rejoignez-nous</Link>
        <Link to="/wishes">Liste d'envies</Link>
      </div>
    </div>
  );
}
export default HoverAccount;
