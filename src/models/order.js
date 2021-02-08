// const { Sequelize, DataTypes } = require('sequelize');

// const config = {
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   host: process.env.DB_HOST,
//   dialect: 'mysql',
// };

// const sequelize = new Sequelize(config);
// exports.sequelize = sequelize;

// const sequelize = require('./index');

// const Order = sequelize.define('orders', {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   amount: {
//     type: DataTypes.FLOAT(),
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.STRING(20),
//     allowNull: false,
//   },
// }, { underscored: true });

// module.exports = Order;

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {}
  Order.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.FLOAT(),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'orders',
    underscored: true,
  });
  return Order;
};
