import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import ShoppingProduct from "../Context/ShoppingProduct";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const { quantityArticle, setQuantityArticle, articlesCard, setArticlesCard } =
    useContext(ShoppingProduct);

  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };

  const removeArticle = (itemToRemove) => {
    const updatedArticles = articlesCard.filter(
      (item) => item !== itemToRemove
    );
    setArticlesCard(updatedArticles);
    setQuantityArticle(quantityArticle - 1);
  };

  const navigate = useNavigate();

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

      <div className="mt-32">
        {articlesCard && articlesCard.length > 0 ? (
          <div>
            <div className="flex flex-col items-center px-3">
              <h2>Votre Panier</h2>
              <p>{quantityArticle} Article(s)</p>
              {articlesCard.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row flex-wrap border-gray-200 border-2 px-2 mt-2 w-full"
                >
                  <p className="w-full">{item.product_name}</p>
                  <img
                    src={item.product_img}
                    className=" w-36 h-36"
                    alt="running shoes"
                  />
                  <div className="flex flex-col px-2">
                    <p>{item.product_genre}</p>
                    <p>Color Details...</p>
                    <p>Size Details...</p>
                  </div>
                  <div className="flex flex-col border-gray-200 border-2 border-t-0 px-2 w-full pb-2">
                    <div className="flex flex-row justify-around items-center text-center">
                      <div className="flex flex-col">
                        <p className="font-medium">Prix unitaire</p>
                        <p>{item.product_price} €</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-medium">Quantité</p>
                        <select
                          name="numbers"
                          value={quantity}
                          onChange={handleChange}
                          style={{ display: "block" }}
                        >
                          <option value="" label="Select">
                            Select
                          </option>
                          {Array.from({ length: 10 }, (_, idx) => (
                            <option
                              key={idx + 1}
                              value={idx + 1}
                              label={String(idx + 1)}
                            >
                              {idx + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-medium">Total</p>
                        <p className="font-medium">
                          {quantity * item.product_price} €
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-around">
                      <div className="flex flex-row items-center">
                        <ImBin className="text-sm" />
                        <button
                          type="button"
                          className="underline font-medium"
                          onClick={() => removeArticle(item)}
                        >
                          Enlever
                        </button>
                      </div>
                      <div className="flex flex-row items-center">
                        <AiOutlineHeart
                          className="text-sm"
                          onClick={() => notifyLogged()}
                        />
                        <button
                          type="button"
                          className="underline font-medium"
                          onClick={() => notifyLogged()}
                        >
                          Ajouter à ma liste de souhaits
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-20 w-full fixed bottom-0 pb-0 mb-0 px-2">
                <button
                  type="button"
                  className="text-[#F2F2F2] bg-[#0477bf] text-md font-medium border rounded-md px-24 py-3 w-full flex items-center justify-center"
                >
                  <GiPadlock className="text-[#f2f2f2]" /> Paiement
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center px-2">
            <BsCart className="text-[#4F4F59]" />
            <p>VOTRE PANIER EST VIDE.</p>
            <br />
            <p className="text-[12px]">
              Vous avez un compte ? Connectez-vous pour voir votre panier.
            </p>
            <br />
            <button
              type="button"
              className="bg-[#0477bf] text-[#F2F2F2] text-[12px] font-medium border rounded-md px-24 py-3 w-full"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default Cart;
