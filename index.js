require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = require('./src/route');

app.use(bodyParser.json());
app.use('/api', router);

app.listen(process.env.APP_PORT, () => {
  console.log(`${process.env.APP_NAME} is up and running on port: ${process.env.APP_PORT}`);
});

module.exports = app;
