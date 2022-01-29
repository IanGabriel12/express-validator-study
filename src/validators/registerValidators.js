const { body } = require("express-validator");
const database = require("../data");
module.exports = [
  body("username").notEmpty().withMessage("Nome de usuário é obrigatório"),
  body("email")
    .notEmpty()
    .withMessage("Campo email é obrigatório")
    .isEmail()
    .withMessage("Campo email precisa ser um email válido")
    .custom(value => {
      return database.getUserByEmail(value).then(user => {
        if(user) {
          return Promise.reject()
        }

        return Promise.resolve();
      })
    })
    .withMessage("Email já cadastrado"),
  body("password").isLength(8).withMessage("Senha precisa ter ao menos 8 caracteres")
]