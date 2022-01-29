const express = require("express");
const userController = require("./controller/UserController");
const validationMiddleware = require("./middleware/validationMiddleware");
const registerValidators = require("./validators/registerValidators");
const updateValidators = require("./validators/updateValidators");
const deleteValidators = require("./validators/deleteValidators");
const app = express()

app.get("/", (req, res) => {
  res.send("Hello world");
})

app.use(express.json())

app.post(
  "/users",
  registerValidators,
  validationMiddleware,
  userController.createUser
);

app.put(
  "/users/:id",
  updateValidators,
  validationMiddleware,
  userController.updateUser
)

app.delete(
  "/users/:id",
  deleteValidators,
  validationMiddleware,
  userController.deleteUser
)

app.get(
  "/users",
  userController.getUsers
)

app.listen(3001);
