const database = require("../data");
class UserController {
  async createUser(req, res) {
    await database.storeUser(req.body);
    
    return res.status(201).json({
      message: "Usuário criado com sucesso"
    })
  }

  async updateUser(req, res) {
    await database.updateUser(req.params.id, req.body);

    return res.status(200).json({
      message: "Usuário atualizado com sucesso"
    })
  }

  async deleteUser(req, res) {
    await database.deleteUser(req.params.id);

    return res.status(200).json({
      message: "Usuário deletado com sucesso"
    })
  }

  async getUsers(req, res) {
    const users = await database.listUsers();
    return res.status(200).json(users)
  }
}

module.exports = new UserController()