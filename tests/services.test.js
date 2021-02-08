const orderServices = require('../src/services/order');

describe('Order Services', () => {
  it('create order', async () => {
    const orderId = await orderServices.createOrder({ amount: 10 });
    expect(orderId).toEqual(4);
  });

  it('update order status', async () => {
    const expected = [1];
    const result = await orderServices.updateStatus(1, 'confirmed');
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('get an order status', async () => {
    const result = await orderServices.getStatus(1);
    expect(result).toEqual('confirmed');
  });
});
