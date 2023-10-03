import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

function SignIn() {
  const onSubmit = async (actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="mt-32 px-3">
      <div className="px-5">
        <form
          autoComplete="off"
          className="flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="email">Adresse e-mail</label>
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
          <label htmlFor="password">Mot de passe</label>
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            className={`border-2 rounded-md ${
              formik.errors.password && formik.touched.password
                ? "border-[#bd5c5c]"
                : ""
            }`}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-[#bd5c5c]">{formik.errors.password}</p>
          )}
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
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
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-[#0477bf] text-[#F2F2F2] text-md font-medium border rounded-md px-24 py-2 mt-2 w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
