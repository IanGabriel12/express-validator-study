const express = require("express");
const userController = require("./controller/UserController");
const validationMiddleware = require("./middleware/validationMiddleware");
const registerValidators = require("./validators/registerValidators");
const app = express()

app.get("/", (req, res) => {
  res.send("Hello world");
})

app.use(express.json())

app.post(
  "/register",
  registerValidators,
  validationMiddleware,
  userController.createUser
);

app.listen(3001);
