import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingProduct from "../Context/ShoppingProduct";

function PopupAccount() {
  const { isLoggedIn, setIsLoggedIn, setArticlesCard, setQuantityArticle } =
    useContext(ShoppingProduct);

  const navigate = useNavigate();

  const logout = () => {
    if (isLoggedIn.email) {
      setArticlesCard([]);
      setQuantityArticle(0);
      setTimeout(() => {
        navigate("/");
      }, 1000);
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
      <div className="h-20 w-60 bg-white border-2 shadow-sm flex flex-col items-start pl-4 py-5">
        {isLoggedIn.email === "" && <Link to="/register">Rejoignez-nous</Link>}
        <Link to="/wishes">Liste d'envies</Link>
        {isLoggedIn.email !== "" && (
          <button type="button" onClick={logout}>
            Se déconnecter
          </button>
        )}
      </div>
    </div>
  );
}
export default PopupAccount;
