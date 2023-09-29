import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ShoppingProduct = createContext(null);

export function ShopProvider({ children }) {
  const [quantityArticle, setQuantityArticle] = useState(0);
  const [articlesCard, setArticlesCard] = useState(null);
  const contextValue = useMemo(
    () => ({
      quantityArticle,
      setQuantityArticle,
      articlesCard,
      setArticlesCard,
    }),
    [quantityArticle, setQuantityArticle, articlesCard, setArticlesCard]
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
