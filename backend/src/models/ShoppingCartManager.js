const AbstractManager = require("./AbstractManager");

class shoppingCartManager extends AbstractManager {
  constructor() {
    super({ table: "shopping_cart" });
  }

  insert(shopping_cart) {
    return this.database.query(
      `INSERT INTO ${this.table} (product_id, account_idaccount, product_quantity, buying_date) values (?, ?, ?, ?)`,
      [
        shopping_cart.product_id,
        shopping_cart.account_idaccount,
        shopping_cart.product_quantity,
        shopping_cart.buying_cart,
      ]
    );
  }

  update(shopping_cart) {
    return this.database.query(
      `update ${this.table} set product_id = ? where account_id = ?`,
      [shopping_cart.account_id, shopping_cart.product_id]
    );
  }

  findBy(account_id) {
    return this.database.query(
      `SELECT sc.product_id, sc.product_quantity, p.*
      FROM shopping_cart sc
      INNER JOIN product p ON sc.product_id = p.id
      WHERE sc.account_idaccount = ?`,
      [account_id]
    );
  }

  delete(account_idaccount, product_id) {
    return this.database.query(
      `delete from ${this.table} where account_idaccount = ? AND product_id = ?`,
      [account_idaccount, product_id]
    );
  }
}

module.exports = shoppingCartManager;
