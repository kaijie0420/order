module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('orders', [{
      amount: 100,
      status: 'confirmed',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      amount: 200,
      status: 'cancelled',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      amount: 300,
      status: 'delivered',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('orders', null, {});
  },
};
