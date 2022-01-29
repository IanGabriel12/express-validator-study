const { param } = require("express-validator");
const database = require("../data");
module.exports = [
  param("id")
  .isNumeric()
  .withMessage("Id inválido")
  .custom(value => {
    return database.getUserById(value).then(user => {
      if(!user) {
        return Promise.reject()
      }

      return Promise.resolve()
    })
  })
  .withMessage("Este usuário não existe"),
]