import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShoppingProduct from "../Context/ShoppingProduct";

function ProductView() {
  const [productDetail, setProductDetail] = useState();

  const { id } = useParams();

  const { articlesCard, setArticlesCard } = useContext(ShoppingProduct);
  const { quantityArticle, setQuantityArticle } = useContext(ShoppingProduct);

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

  const notifyLogged = () =>
    toast.success("Article ajouté !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        background: "#4F4F59",
        color: "#fff",
        maxWidth: "80%",
        left: "50%",
        top: "80px",
      },
    });

  const addProduct = (evt) => {
    evt.preventDefault();
    setQuantityArticle(quantityArticle + 1);
    setArticlesCard({ ...articlesCard, productDetail });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="h-[50vh] pl-2">
        {productDetail ? (
          <>
            <p className="mt-24">
              {productDetail.product_genre.toUpperCase()} &nbsp; | &nbsp;{" "}
              {productDetail.product_type.toUpperCase()}
            </p>
            <h2 className="text-2xl font-semibold text-left">
              {productDetail.product_name}
            </h2>
            <h2 className="text-2xl font-semibold text-left">
              {productDetail.product_price} €
            </h2>
            <p className="">
              Chaussure de running pour {productDetail.product_genre}
            </p>
            <img src={productDetail.product_img} alt="running shoes" />
            <p className="text-sm ">
              Ou paiement en 3 versements sans intérêts de{" "}
              {Math.round(productDetail.product_price / 3)} €
            </p>{" "}
            <p>
              avec &nbsp;
              <span className="bg-pink-300 text-sm font-semibold border rounded-xl p-1">
                Klarna.
              </span>
            </p>
            <a
              href="https://www.klarna.com/fr/"
              target="_blank"
              className="text-sm underline"
              rel="noreferrer"
            >
              En savoir plus
            </a>
            <div className="pt-4 w-full pr-2 flex justify-center items-center">
              <button
                type="button"
                className="bg-[#0477BF] text-[#F2F2F2] text-sm font-medium border rounded-md px-24 py-3"
                onClick={addProduct}
              >
                Ajouter au panier
              </button>
              <button
                type="button"
                className="rounded-md border-2 border-zinc-950 py-3 px-4 ml-2"
                onClick={() => notifyLogged()}
              >
                {" "}
                <AiOutlineHeart className="text-[#0477BF]" />{" "}
              </button>
            </div>
          </>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    </>
  );
}

export default ProductView;
