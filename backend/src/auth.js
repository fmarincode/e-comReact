const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.pwd, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.pwd;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = async (req, res, next) => {
  try {
    if (await argon2.verify(req.user.hashedPassword, req.body.pwd)) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const sendToken = (req, res) => {
  const token = jwt.sign({ sub: req.user.idaccount }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true });
  res.send(token);
};

module.exports = {
  hashPassword,
  verifyPassword,
  sendToken,
};
