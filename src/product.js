class Product {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      image: this.image
    };
  }
}

module.exports = Product;
