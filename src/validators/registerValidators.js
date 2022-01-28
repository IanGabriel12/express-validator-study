const { body } = require("express-validator");
module.exports = [
  body("username").notEmpty().withMessage("Nome de usuário é obrigatório"),
  body("email").notEmpty().withMessage("Campo email é obrigatório").isEmail().withMessage("Campo email precisa ser um email válido"),
  body("password").isLength(8).withMessage("Senha precisa ter ao menos 8 caracteres")
]