class UserController {
  createUser(req, res) {
    res.status(201).json({
      message: "Usuário criado com sucesso"
    })
  }
}

module.exports = new UserController()