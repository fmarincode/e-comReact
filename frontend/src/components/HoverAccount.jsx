import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingProduct from "../Context/ShoppingProduct";

function HoverAccount() {
  const { isLoggedIn, setIsLoggedIn } = useContext(ShoppingProduct);

  const logout = () => {
    if (isLoggedIn.email) {
      setIsLoggedIn({
        idaccount: "",
        email: "",
        firstname: "",
        lastname: "",
        phoneNumber: "",
      });
    }
  };

  return (
    <div className="h-60 w-60 absolute top-8 right-32 py-5 pl-4 flex justify-start items-start">
      <div className="h-32 w-60 bg-white border-2 shadow-sm flex flex-col items-start pl-4 py-5">
        <Link to="/signin">Se connecter</Link>
        <Link to="/register">Rejoignez-nous</Link>
        <Link to="/wishes">Liste d'envies</Link>
        <button type="button" onClick={logout}>
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
export default HoverAccount;
