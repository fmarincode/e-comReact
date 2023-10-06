const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/users", (req, res) => {
  if (req.query.email) {
    // Si un paramètre email est présent dans la requête, redirigez vers la route /users/email
    return userControllers.readByEmail(req, res);
  }
  // Sinon, continuez avec la route /users normale
  return userControllers.browse(req, res);
});
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

const wishListControllers = require("./controllers/wishListControllers");

router.get("/wishList", wishListControllers.browse);
router.get("/wishList/:id", wishListControllers.read);
router.post("/wishList", wishListControllers.add);
router.delete("/wishList/:account_id/:product_id", wishListControllers.destroy);

module.exports = router;
