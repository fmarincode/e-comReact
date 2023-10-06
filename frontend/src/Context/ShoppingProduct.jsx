import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ShoppingProduct = createContext(null);

export function ShopProvider({ children }) {
  const [quantityArticle, setQuantityArticle] = useState(0);
  const [articlesCard, setArticlesCard] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState({
    idaccount: "",
    email: "",
    firstname: "",
    lastname: "",
    phoneNumber: "",
  });

  const contextValue = useMemo(
    () => ({
      quantityArticle,
      setQuantityArticle,
      articlesCard,
      setArticlesCard,
      wishList,
      setWishList,
      isLoggedIn,
      setIsLoggedIn,
    }),
    [
      quantityArticle,
      setQuantityArticle,
      articlesCard,
      setArticlesCard,
      wishList,
      setWishList,
      isLoggedIn,
      setIsLoggedIn,
    ]
  );

  return (
    <ShoppingProduct.Provider value={contextValue}>
      {children}
    </ShoppingProduct.Provider>
  );
}

ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShoppingProduct;
