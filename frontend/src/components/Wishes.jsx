import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Carousel, IconButton } from "@material-tailwind/react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import ShoppingProduct from "../Context/ShoppingProduct";

function Wishes() {
  const {
    wishList,
    setWishList,
    articlesCard,
    setArticlesCard,
    quantityArticle,
    setQuantityArticle,
    isLoggedIn,
  } = useContext(ShoppingProduct);

  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [matchedProducts, setMatchedProducts] = useState([]);

  const addToCart = (item) => {
    if (isLoggedIn.email !== "") {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/cart`, {
        product_id: item.id,
        account_idaccount: isLoggedIn.idaccount,
        product_quantity: 1,
      });
    }
    setQuantityArticle(quantityArticle + 1);
    setArticlesCard([...articlesCard, item]);
  };

  useEffect(() => {
    if (isLoggedIn.email !== "") {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/wishlist/${isLoggedIn.idaccount}`
        )
        .then((response) => {
          setUserList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching wishlist:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/products/`)
        .then((response) => {
          setProductList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching wishlist:", error);
        });
    }
  }, [userList]);

  useEffect(() => {
    // Using 'some' method to verif if product id is in userList
    const updatedMatchedProducts = productList.filter((product) => {
      return userList.some((userItem) => userItem.product_id === product.id);
    });
    setMatchedProducts(updatedMatchedProducts);
  }, [productList, userList]);

  const deleteProduct = (productId) => {
    if (isLoggedIn.idaccount) {
      axios
        .delete(
          `${import.meta.env.VITE_BACKEND_URL}/wishlist/${
            isLoggedIn.idaccount
          }/${productId}`
        )
        .then(() => {
          // Mettre à jour userList après la suppression réussie
          const updatedUserList = userList.filter(
            (userItem) => userItem.product_id !== productId
          );
          setUserList(updatedUserList);

          // Mettre à jour matchedProducts en conséquence
          const updatedMatchedProducts = matchedProducts.filter(
            (matchedItem) => matchedItem.id !== productId
          );
          setMatchedProducts(updatedMatchedProducts);

          // Si l'utilisateur est connecté, ne rien faire avec la liste de souhaits locale
        })
        .catch((error) => {
          console.error("Error deleting product from the database:", error);
        });
    } else {
      // Si l'utilisateur n'est pas connecté, supprimer l'élément de la liste de souhaits locale
      const updatedWishList = wishList.filter((item) => item.id !== productId);
      setWishList(updatedWishList);

      // Mettre à jour matchedProducts en conséquence
      const updatedMatchedProducts = matchedProducts.filter(
        (matchedItem) => matchedItem.id !== productId
      );
      setMatchedProducts(updatedMatchedProducts);
    }
  };

  function CustomPrevArrow({ handlePrev }) {
    return (
      <IconButton
        variant="text"
        color="blue"
        size="lg"
        onClick={handlePrev}
        className="!absolute top-2/4 left-4 -translate-y-2/4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </IconButton>
    );
  }

  function CustomNextArrow({ handleNext }) {
    return (
      <IconButton
        variant="text"
        color="blue"
        size="lg"
        onClick={handleNext}
        className="!absolute top-2/4 !right-4 -translate-y-2/4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </IconButton>
    );
  }

  CustomPrevArrow.propTypes = {
    handlePrev: PropTypes.func.isRequired,
  };
  CustomNextArrow.propTypes = {
    handleNext: PropTypes.func.isRequired,
  };

  return (
    <div className="mt-32 flex flex-col px-3">
      <p className="text-sm">
        Si vous ne vous connectez pas, vos listes seront uniquement disponibles
        sur cet appareil et expireront à la fin de cette session.
      </p>
      <section className="mt-3 flex flex-col border-2 ">
        <h3 className="h-8 bg-[#F2F2F2] pl-5 text-[#4F4F59]">
          MA LISTE D'ENVIES
        </h3>
        <Carousel
          className="rounded-xl"
          prevArrow={CustomPrevArrow}
          nextArrow={CustomNextArrow}
        >
          {isLoggedIn.idaccount !== "" && matchedProducts.length > 0
            ? matchedProducts.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <FaTimes
                    className="relative top-4 left-40 text-[#1B80BF]"
                    onClick={() => {
                      deleteProduct(item.id);
                    }}
                  />
                  <img src={item.product_img} alt={item.product_name} />
                  <h3>{item.product_name}</h3>
                  <h3 className="font-semibold">
                    {item.product_price} € | 2 couleurs
                  </h3>
                  <button type="button" onClick={() => addToCart(item)}>
                    Ajouter au panier
                  </button>
                </div>
              ))
            : wishList.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <FaTimes
                    className="relative top-4 left-40 text-[#1B80BF]"
                    onClick={() => deleteProduct(item.id)}
                  />
                  <img src={item.product_img} alt={item.product_name} />
                  <h3>{item.product_name}</h3>
                  <h3 className="font-semibold">
                    {item.product_price} € | 2 couleurs
                  </h3>
                  <button type="button" onClick={() => addToCart(item)}>
                    Ajouter au panier
                  </button>
                </div>
              ))}
        </Carousel>
      </section>
    </div>
  );
}

export default Wishes;
