const AbstractManager = require("./AbstractManager");

class wishListManager extends AbstractManager {
  constructor() {
    super({ table: "wishList" });
  }

  insert(wishList) {
    return this.database.query(
      `insert into ${this.table} (account_id, product_id) values (?, ?)`,
      [wishList.account_id, wishList.product_id]
    );
  }

  find(wishlist_id) {
    return this.database.query(
      `select * from  ${this.table} where wishlist_id = ?`,
      [wishlist_id]
    );
  }

  update(wishList) {
    return this.database.query(
      `update ${this.table} set product_id = ? where account_id = ?`,
      [wishList.account_id, wishList.product_id]
    );
  }

  findBy(account_id) {
    return this.database.query(
      `select product_id from ${this.table} where account_id = ?`,
      [account_id]
    );
  }

  delete(product_id, account_id) {
    return this.database.query(
      `delete from ${this.table} where account_id = ? AND product_id = ?`,
      [account_id, product_id]
    );
  }
}

module.exports = wishListManager;
