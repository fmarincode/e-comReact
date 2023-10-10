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

  const {
    articlesCard,
    setArticlesCard,
    quantityArticle,
    setQuantityArticle,
    wishList,
    setWishList,
    isLoggedIn,
  } = useContext(ShoppingProduct);

  const notifyLogged = () =>
    toast.success(`Article ajouté !`, {
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

  /* add to wishList the product onclick */
  const addToWishList = () => {
    if (isLoggedIn.email === "") {
      setWishList([...wishList, productDetail]);
    } else if (productDetail && isLoggedIn && isLoggedIn.idaccount) {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/wishlist`, {
        account_id: isLoggedIn.idaccount,
        product_id: productDetail.id,
      });
    }

    notifyLogged();
  };

  /* get the productDetails with the id */
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

  const addProduct = (evt) => {
    evt.preventDefault();
    setQuantityArticle(quantityArticle + 1);
    setArticlesCard([...articlesCard, productDetail]);
    if (isLoggedIn.email !== "") {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/cart`, {
        product_id: productDetail.id,
        account_idaccount: isLoggedIn.idaccount,
        product_quantity: 1,
      });
    }
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
        pauseOnHover={false}
        theme="colored"
      />

      <div className="h-[50vh] pl-2 md:flex md:flex-col md:flex-wrap md:items-center md:mx-48 md:mt-40 md:h-[70vh]">
        {productDetail ? (
          <>
            <p className="mt-24 md:mt-7 md:w-1/2 md:pl-5">
              {productDetail.product_genre.toUpperCase()} &nbsp; | &nbsp;{" "}
              {productDetail.product_type.toUpperCase()}
            </p>
            <h2 className="text-2xl font-semibold text-left md:w-1/2 md:pl-5">
              {productDetail.product_name}
            </h2>
            <h2 className="text-2xl font-semibold text-left md:w-1/2 md:pl-5">
              {productDetail.product_price} €
            </h2>
            <p className="md:w-1/2 md:pl-5 md:mt-10">
              Chaussure de running pour {productDetail.product_genre}
            </p>
            <img
              src={productDetail.product_img}
              alt="running shoes"
              className="md:w-1/2 md:-order-1"
            />
            <p className="text-sm md:w-1/2 md:pl-5">
              Ou paiement en 3 versements sans intérêts de{" "}
              {Math.round(productDetail.product_price / 3)} €
            </p>{" "}
            <p className="md:w-1/2 md:pl-5">
              avec &nbsp;
              <span className="bg-pink-300 text-sm font-semibold border rounded-xl p-1 ">
                Klarna.
              </span>
            </p>
            <a
              href="https://www.klarna.com/fr/"
              target="_blank"
              className="text-sm underline md:w-1/2 md:pl-5"
              rel="noreferrer"
            >
              En savoir plus
            </a>
            <div className="pt-4 w-full pr-2 flex justify-center items-center md:w-1/2 md:justify-start md:pl-5">
              <button
                type="button"
                className="bg-[#0477BF] text-[#F2F2F2] text-sm font-medium border rounded-md px-24 py-3 "
                onClick={addProduct}
              >
                Ajouter au panier
              </button>
              <button
                type="button"
                className="rounded-md border-2 border-black py-3 px-4 ml-2"
                onClick={() => addToWishList()}
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
