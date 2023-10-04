const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/email", userControllers.readByEmail);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

const { hashPassword, verifyPassword, sendToken } = require("./auth");

router.post("/users", hashPassword, userControllers.add);

router.post(
  "/login",
  userControllers.getUserAndNext,
  verifyPassword,
  sendToken
);

const productControllers = require("./controllers/productControllers");

router.get("/products", productControllers.browse);
router.get("/products/genre", productControllers.getbyGenre);
router.get("/products/:id", productControllers.read);
router.put("/products/:id", productControllers.edit);
router.post("/products", productControllers.add);
router.delete("/products/:id", productControllers.destroy);

module.exports = router;
