import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShoppingProduct from "../Context/ShoppingProduct";

function Catalog() {
  const [productsList, setProductsList] = useState();
  const { setQuantityArticle, isLoggedIn } = useContext(ShoppingProduct);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((response) => {
        const result = response.data;
        setProductsList(result);
      })

      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails",

          error
        );
      });
  }, []);

  useEffect(() => {
    if (isLoggedIn.email !== "") {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/cart/${isLoggedIn.idaccount}`)
        .then((response) => {
          setQuantityArticle(response.data.length || 0);
        });
    }
  }, []);

  return (
    <div className="h-[50vh] md:mx-28">
      <div className="flex flex-col items-center justify-start mt-20 h-10">
        <h2 className="text-2xl font-semibold text-center w-full h-10">
          Chaussures de Running
        </h2>
      </div>

      <div className="flex flex-wrap pt-4">
        {productsList ? (
          productsList.map((item) => (
            <div key={item.idproduct} className="w-48 h-60 p-4">
              <Link to={`/products/${item.id}`}>
                <img src={item.product_img} alt="running shoes" />
                <h3 className="text-base font-semibold text-[#2a2a38]">
                  {item.product_name}
                </h3>
              </Link>
              <h4 className="text-[0.9rem] font-semibold text-[#2a2a38]">
                {item.product_price} €
              </h4>
              <p className="text-[0.9rem] text-[#2a2a38]">
                {item.product_type}
              </p>
            </div>
          ))
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    </div>
  );
}

export default Catalog;
