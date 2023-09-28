import React, { useEffect, useState } from "react";
import axios from "axios";

function Homme() {
  const [productsList, setProductsList] = useState();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/products/genre?product_genre=Homme`
      )
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
      <h2 className="text-2xl font-semibold text-center mt-24">
        Chaussures de Running Homme
      </h2>
      <div className="flex flex-wrap pt-4">
        {productsList ? (
          productsList.map((item) => (
            <div key={item.id} className="w-48 h-60 p-4">
              <img src={item.product_img} alt="running shoes" />
              <h3 className="text-lg font-medium text-[#2a2a38]">
                {item.product_name}
              </h3>

              <h4 className="text-[0.9rem] font-medium text-[#2a2a38]">
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

export default Homme;
