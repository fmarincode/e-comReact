import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import SignIn from "./SignIn";
import { registerSchema } from "../schemas";
import "./register.css";

function Register() {
  const [signFormDisplay, setSignFormDisplay] = useState(true);

  const handleJoinUs = () => {
    setSignFormDisplay(false);
  };
  const handleSignIn = () => {
    setSignFormDisplay(true);
  };

  const onSubmit = async (values, actions) => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, values);

      actions.resetForm();
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      pwd: "",
      phoneNumber: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="border flex flex-col justify-center items-center mt-32 mx-3">
      <section className="flex flex-row w-full pt-6 pb-2 px-4">
        <button
          type="button"
          className={`${
            signFormDisplay
              ? "border-b-4 pb-4 w-1/2 border-[#1B80BF]"
              : "w-1/2 pb-4 border-b-4 border-white"
          }`}
          onClick={handleSignIn}
        >
          Se connecter
        </button>
        <button
          type="button"
          className={`${
            !signFormDisplay
              ? "border-b-4 pb-4 w-1/2 border-[#1B80BF]"
              : "w-1/2 pb-4 border-b-4 border-white"
          }`}
          onClick={handleJoinUs}
        >
          Rejoignez-nous
        </button>
      </section>
      <hr className="w-[91%] h-1 border-b-2 bg-gray-600" />
      <section className="-mt-24">
        {signFormDisplay ? (
          <SignIn />
        ) : (
          <div className="mt-32">
            <form
              autoComplete="off"
              className="flex flex-col"
              onSubmit={formik.handleSubmit}
            >
              <label htmlFor="firstname" className="pb-2 pl-2">
                Prénom
              </label>
              <input
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="firstname"
                type="firstname"
                placeholder="Votre prénom"
                className={`border-2 rounded-md ${
                  formik.errors.firstname && formik.touched.firstname
                    ? "border-[#bd5c5c]"
                    : ""
                }`}
              />
              {formik.errors.firstname && formik.touched.firstname && (
                <p className="text-[#bd5c5c]">{formik.errors.firstname}</p>
              )}
              <label htmlFor="lastname" className="pb-2 pl-2">
                Nom
              </label>
              <input
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="lastname"
                type="lastname"
                placeholder="Votre nom"
                className={`border-2 rounded-md ${
                  formik.errors.lastname && formik.touched.lastname
                    ? "border-[#bd5c5c]"
                    : ""
                }`}
              />
              {formik.errors.lastname && formik.touched.lastname && (
                <p className="text-[#bd5c5c]">{formik.errors.lastname}</p>
              )}
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
              <label htmlFor="phoneNumber" className="pb-2 pl-2">
                Numéro de téléphone
              </label>
              <input
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="phoneNumber"
                type="text"
                placeholder="Votre numéro de téléphone"
                className={`border-2 rounded-md ${
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? "border-[#bd5c5c]"
                    : ""
                }`}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <p className="text-[#bd5c5c]">{formik.errors.phoneNumber}</p>
              )}

              <button
                id="submitSignInBtn"
                type="submit"
                disabled={formik.isSubmitting}
                className="text-[#F2F2F2] bg-[#0477bf] text-sm font-medium border rounded-md px-24 py-3 mt-3 w-full flex items-center justify-center mb-4"
              >
                Nous rejoindre
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}

export default Register;
