const orderService = require('../services/order');
const paymentService = require('../services/payment');

class Order {
  static async create(request, response) {
    try {
      const { amount, token } = request.body;

      if (!amount || !token) {
        return response.status(400).send({ status: false, message: 'Missing parameter.' });
      }
      if (typeof amount !== 'number') {
        return response.status(400).send({ status: false, message: 'Invalid value for amount.' });
      }
      const orderId = await orderService.createOrder(request.body);
      const paymentStatus = await paymentService.processPayment(request.body);
      await orderService.updateStatus(orderId, paymentStatus);

      // Change the order status to delivered after 30 seconds
      setTimeout(async () => {
        const orderStatus = await orderService.getStatus(orderId);
        if (orderStatus === 'confirmed') {
          await orderService.updateStatus(orderId, 'delivered');
        }
      }, 30000);
      return response.status(200).send({ status: true, message: `Order is ${paymentStatus}` });
    } catch (error) {
      return response.status(500).send({ status: false, message: error.message });
    }
  }

  static async cancel(request, response) {
    try {
      await orderService.updateStatus(request.body.orderId, 'cancelled');
      return response.status(200).send({ status: true });
    } catch (error) {
      return response.status(500).send({ status: false, message: error.message });
    }
  }

  static async getStatus(request, response) {
    try {
      const orderStatus = await orderService.getStatus(request.params.orderId);
      return response.status(200).send({ status: true, orderStatus });
    } catch (error) {
      return response.status(500).send({ status: false, message: error.message });
    }
  }
}

module.exports = Order;
