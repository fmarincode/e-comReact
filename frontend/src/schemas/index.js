import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("L'adresse email n'est pas valide")
    .required("Required"),
  pwd: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message: "Utilisez un mot de passe plus robuste",
    })
    .required("Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("pwd"), null], "Le mot de passe doit correspondre")
    .required("Le mot de passe doit correspondre"),
});

export const registerSchema = yup.object().shape({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  email: yup
    .string()
    .email("L'adresse email n'est pas valide")
    .required("Required"),
  pwd: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message: "Utilisez un mot de passe plus robuste",
    })
    .required("Le mot de passe doit contenir au moins 8 caractères"),
  phoneNumber: yup.number().min(10).positive().integer().required("Required"),
});
