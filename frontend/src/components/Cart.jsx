import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import ShoppingProduct from "../Context/ShoppingProduct";

function Cart() {
  const { articlesCard, quantityArticle } = useContext(ShoppingProduct);

  return (
    <div className="mt-32">
      {articlesCard ? (
        <div>
          <div className="flex flex-col items-center px-2">
            <h2>Votre Panier</h2>
            <p>{quantityArticle} Article(s)</p>

            <div className="flex flex-row flex-wrap border-gray-200 border-2 px-2">
              <p className="w-full">
                {articlesCard.productDetail.product_name}
              </p>
              <img
                src={articlesCard.productDetail.product_img}
                className=" w-36 h-36"
                alt="running shoes"
              />
              <div className="flex flex-col px-2">
                <p>{articlesCard.productDetail.product_genre}</p>
                <p>Color Details...</p>
                <p>Size Details...</p>
              </div>
            </div>
            <div className="flex flex-col border-gray-200 border-2 border-t-0 px-2 w-full">
              <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                  <p className="font-medium">Prix unitaire</p>
                  <p>{articlesCard.productDetail.product_price}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">Quantité</p>
                  <p>select</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">Total</p>
                  <p className="font-medium">select Qtité*PU €</p>
                </div>
              </div>
              <div className="flex flex-row justify-around">
                <div className="flex flex-row items-center">
                  <ImBin className="text-sm" />
                  <p className="underline font-medium">Enlever</p>
                </div>
                <div className="flex flex-row items-center">
                  <AiOutlineHeart className="text-sm" />
                  <p className="underline font-medium">
                    Ajouter à ma liste de souhaits
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-20 w-full fixed bottom-0 pb-0 mb-0 px-2">
            <button
              type="button"
              className="text-[#F2F2F2] bg-[#0477bf] text-md font-medium border rounded-md px-24 py-3 w-full flex items-center justify-center"
            >
              <GiPadlock className="text-[#f2f2f2]" /> Paiement
            </button>
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
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
