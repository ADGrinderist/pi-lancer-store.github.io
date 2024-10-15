const Product = require('./Product');
const Transaction = require('./Transaction');

class Store {
  constructor() {
    this.products = [];
    this.transactions = [];
  }

  addProduct(product) {
    if (!(product instanceof Product)) {
      throw new Error('Invalid product');
    }
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProduct(id) {
    return this.products.find(product => product.id === id);
  }

  createTransaction(productId, walletAddress) {
    const product = this.getProduct(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    const transaction = new Transaction(product, walletAddress);
    this.transactions.push(transaction);
    return transaction;
  }

  getTransaction(referenceNumber) {
    return this.transactions.find(transaction => transaction.referenceNumber === referenceNumber);
  }
}

module.exports = Store;
