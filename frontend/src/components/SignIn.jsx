import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { GiPadlock } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import ShoppingProduct from "../Context/ShoppingProduct";
import "react-toastify/dist/ReactToastify.css";
import { signInSchema } from "../schemas";
import "./signin.css";

function SignIn() {
  const { setIsLoggedIn, isLoggedIn } = useContext(ShoppingProduct);
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (values, actions) => {
    try {
      // Effectuer la connexion en utilisant le POST
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, values);

      // Réinitialiser le formulaire et mettre à jour l'email dans le contexte
      setIsLoggedIn((prevLoggedIn) => ({
        ...prevLoggedIn,
        email: values.email,
      }));
      setSuccess(true);
      actions.resetForm();
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  useEffect(() => {
    if (success) {
      // Récupérer les informations de l'utilisateur après la connexion
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          params: {
            email: isLoggedIn.email,
          },
        })
        .then((response) => {
          // Mettre à jour les informations de l'utilisateur dans le contexte
          setIsLoggedIn((prevLoggedIn) => ({
            ...prevLoggedIn,
            idaccount: response.data?.idaccount,
            firstname: response.data?.firstname,
            lastname: response.data?.lastname,
            phoneNumber: response.data?.phoneNumber,
          }));
          setTimeout(() => {
            navigate("/");
          }, 3500);

          if (isLoggedIn.email !== "") {
            toast.success(`Bonjour ${response.data?.firstname} !`, {
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
          }
        })
        .catch((err) => {
          console.error(err);
        });

      // Notifier l'utilisateur connecté
    }
  }, [success]);

  const formik = useFormik({
    initialValues: {
      email: "",
      pwd: "",
      confirmPassword: "",
    },
    validationSchema: signInSchema,
    onSubmit,
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

      <div className="mt-32 px-3">
        <div className="px-5">
          <form
            autoComplete="off"
            className="flex flex-col"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="email" className="pb-2 pl-2">
              Adresse e-mail
            </label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="email"
              type="email"
              placeholder="Entrez votre adresse email"
              className={`border-2 rounded-md ${
                formik.errors.email && formik.touched.email
                  ? "border-[#bd5c5c]"
                  : ""
              }`}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-[#bd5c5c]">{formik.errors.email}</p>
            )}
            <label htmlFor="pwd" className="pb-2 pl-2">
              Mot de passe
            </label>
            <input
              value={formik.values.pwd}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="pwd"
              type="password"
              placeholder="Entrez votre mot de passe"
              className={`border-2 rounded-md ${
                formik.errors.pwd && formik.touched.pwd
                  ? "border-[#bd5c5c]"
                  : ""
              }`}
            />
            {formik.errors.pwd && formik.touched.pwd && (
              <p className="text-[#bd5c5c]">{formik.errors.pwd}</p>
            )}
            <label htmlFor="confirmPassword" className="pb-2 pl-2">
              Confirmer le mot de passe
            </label>
            <input
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="confirmPassword"
              type="password"
              placeholder="Confirmez votre mot de passe"
              className={`border-2 rounded-md ${
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "border-[#bd5c5c]"
                  : ""
              }`}
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p className="text-[#bd5c5c]">
                  {formik.errors.confirmPassword}
                </p>
              )}

            <button
              id="submitSignInBtn"
              type="submit"
              disabled={formik.isSubmitting}
              className="text-[#F2F2F2] bg-[#0477bf] text-sm font-medium border rounded-md px-24 py-3 mt-3 w-full flex items-center justify-center"
            >
              <GiPadlock /> Se connecter
            </button>
          </form>
          {location.pathname === "/signin" && (
            <p className="mt-4 text-center">
              Pas encore membre ?{" "}
              <Link to="/register" className="font-semibold">
                Création de compte
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default SignIn;
