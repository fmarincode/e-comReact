import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { GiPadlock } from "react-icons/gi";
import { signInSchema } from "../schemas";
import "./signin.css";

function SignIn() {
  const onSubmit = async (values, actions) => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, values);

      actions.resetForm();
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      pwd: "",
      confirmPassword: "",
    },
    validationSchema: signInSchema,
    onSubmit,
  });

  const location = useLocation();

  return (
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
              formik.errors.pwd && formik.touched.pwd ? "border-[#bd5c5c]" : ""
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
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="text-[#bd5c5c]">{formik.errors.confirmPassword}</p>
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
  );
}

export default SignIn;
