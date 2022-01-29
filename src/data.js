module.exports = {
  data: {
    counter: 3,
    users: [
      {
        id: 1,
        username: "iangz",
        password: "12345678",
        email: "ianeigor12@gmail.com"
      },
      {
        id: 2,
        username: "ruan",
        password: "87654321",
        email: "ruan@gmail.com"
      }
    ]
  },

  async getUserByEmail(email) {
    const users = this.data.users;
    return users.find((user) => user.email === email);
  },

  async getUserById(id) {
    const users = this.data.users;
    return users.find(user => user.id == id);
  },

  async storeUser(user) {
    this.data.users.push({
      id: this.data.counter,
      ...user
    });

    this.data.counter++;
  },

  async updateUser(id, newUser) {
    const users = this.data.users;
    const index = users.findIndex(user => user.id == id);
    this.data.users[index] = {
      id,
      ...newUser
    };
  },

  async deleteUser(id) {
    const users = this.data.users;
    const index = users.findIndex(user => user.id == id);
    this.data.users.splice(index, 1);
  },

  async listUsers() {
    return this.data.users;
  }
}