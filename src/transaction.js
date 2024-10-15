const { v4: uuidv4 } = require('uuid');

class Transaction {
  constructor(product, walletAddress) {
    this.id = uuidv4();
    this.product = product;
    this.walletAddress = walletAddress;
    this.timestamp = new Date();
    this.status = 'pending';
    this.referenceNumber = this.generateReferenceNumber();
  }

  generateReferenceNumber() {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  complete() {
    this.status = 'completed';
  }

  fail() {
    this.status = 'failed';
  }

  toJSON() {
    return {
      id: this.id,
      productId: this.product.id,
      walletAddress: this.walletAddress,
      timestamp: this.timestamp,
      status: this.status,
      referenceNumber: this.referenceNumber
    };
  }
}

module.exports = Transaction;
