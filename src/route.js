const router = require('express').Router();
const orderController = require('./controllers/order');

router.post('/create', orderController.create);
router.post('/cancel', orderController.cancel);
router.get('/order/:orderId/status', orderController.getStatus);

module.exports = router;
