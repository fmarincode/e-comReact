const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "Product" });
  }

  insert(Product) {
    return this.database.query(
      `insert into ${this.table} (idproduct, product_name, product_type, product_price, product_img, product_genre) values (?, ?, ?, ?, ?, ?)`,
      [
        Product.idproduct,
        Product.product_name,
        Product.product_type,
        Product.product_price,
        Product.product_img,
        Product.product_genre,
      ]
    );
  }

  update(Product) {
    return this.database.query(
      `update ${this.table} set product_name = ? where id = ?`,
      [Product.product_name, Product.id]
    );
  }

  findBy(genre) {
    return this.database.query(
      `select * from  ${this.table} where product_genre = ?`,
      [genre]
    );
  }
}

module.exports = ProductManager;
