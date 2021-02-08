const request = require('supertest');
const app = require('../index');

describe('Order API', () => {
  // it('create a new order', async () => {
  //   const res = await request(app).post('/api/create').send({
  //     amount: 10,
  //     token: 'tok_mastercard',
  //   });
  //   expect(res.statusCode).toEqual(200);
  //   // expect(res.body).toHaveProperty('users');
  //   // expect(res.body.message.includes('Order is '));
  // });

  it('get status for an order', async () => {
    const res = await request(app).get('/api/order/1/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('orderStatus');
  });

  it('cancel an order', async () => {
    const res = await request(app).post('/api/cancel').send({
      orderId: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
    expect(res.body.status).toEqual(true);
  });
});
