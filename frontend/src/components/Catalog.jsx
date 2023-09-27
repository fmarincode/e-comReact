import React, { useEffect, useState } from "react";
import axios from "axios";

function Catalog() {
  const [productsList, setProductsList] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((response) => {
        const result = response.data;
        setProductsList(result);
      })

      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails de la recette de composition :",

          error
        );
      });
  }, []);

  return (
    <div className="h-[50vh]">
      <div className="flex flex-wrap">
        {productsList.map((item) => (
          <div className="w-48 h-60 p-4">
            <img src={item.product_img} alt="running shoes" />
            <h3>{item.product_name}</h3>
            <h4>{item.product_type}</h4>
            <h4>{item.product_price} €</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
