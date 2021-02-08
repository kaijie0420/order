const db = require('../models/index');

class Order {
  static async createOrder(orderDetails) {
    try {
      const order = await db.orders.create({
        amount: orderDetails.amount,
        status: 'created',
      });
      return order.id;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateStatus(orderId, status) {
    try {
      const result = await db.orders.update(
        { status },
        { where: { id: orderId } },
      );
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getStatus(orderId) {
    try {
      const order = await db.orders.findOne(
        { where: { id: orderId } },
      );
      return order.status;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = Order;
