const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "account" });
  }

  find(idaccount) {
    return this.database.query(
      `select idaccount, firstname, email from  ${this.table} where idaccount = ?`,
      [idaccount]
    );
  }

  findUserByEmailAndPwd(email) {
    return this.database.query(`select * from  ${this.table} where email = ?`, [
      email,
    ]);
  }

  findAll() {
    return this.database.query(
      `select idaccount, firstname, lastname, email, phoneNumber from  ${this.table}`
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (email, firstname, lastname, hashedPassword, phoneNumber) values (?, ?, ?, ?, ?)`,
      [
        user.email,
        user.firstname,
        user.lastname,
        user.hashedPassword,
        user.phoneNumber,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }

  findUserById(id) {
    return this.database.query(
      `SELECT u.iduser, u.firstname, u.email
    FROM ${this.table} AS u
    WHERE u.iduser = ?;`,
      [id]
    );
  }

  findByEmail(email) {
    return this.database.query(
      `SELECT idaccount, firstname, lastname, phoneNumber FROM ${this.table} WHERE email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
