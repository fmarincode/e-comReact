import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("L'adresse email n'est pas valide")
    .required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message: "Utilisez un mot de passe plus robuste",
    })
    .required("Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Le mot de passe doit correspondre")
    .required("Le mot de passe doit correspondre"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
