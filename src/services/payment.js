const axios = require('axios');

class Payment {
  static async processPayment(orderDetails) {
    try {
      const url = 'http://localhost:8081/api/processPayment';
      const postData = {
        amount: orderDetails.amount,
        token: orderDetails.token,
      };
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        url, postData, options,
      );

      if (!response.data.status || response.status !== 200) {
        throw new Error('Error when processing payment.');
      }

      return response.data.status;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = Payment;
