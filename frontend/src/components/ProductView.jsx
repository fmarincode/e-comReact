import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductView() {
  const [productDetail, setProductDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
      .then((response) => {
        const result = response.data;
        setProductDetail(result);
      })

      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails",

          error
        );
      });
  }, []);

  return (
    <div className="h-[50vh] pl-2">
      <p>
        {productDetail.product_genre} | {productDetail.product_type}
      </p>
      <h2 className="text-2xl font-semibold text-left mt-24 ">
        {productDetail.product_name}
      </h2>
      <h2 className="text-2xl font-semibold text-left ">
        {productDetail.product_price} €
      </h2>
      <p className="">
        Chaussure de running pour {productDetail.product_genre}
      </p>
      <img src={productDetail.product_img} alt="running shoes" />
      <p className="text-sm ">
        Ou paiment en 3 versements sans intérêts de{" "}
        {productDetail.product_price / 3} € avec
      </p>{" "}
      <span className="bg-pink-300 text-sm font-semibold border rounded-xl p-1">
        {" "}
        Klarna.
      </span>
      <br />
      <a
        href="https://www.klarna.com/fr/"
        target="blank"
        className=" text-sm underline"
      >
        En savoir plus
      </a>
    </div>
  );
}

export default ProductView;
