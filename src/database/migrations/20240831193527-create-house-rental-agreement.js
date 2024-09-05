'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HouseRentalAgreements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenantId: {
        type: Sequelize.INTEGER
      },
      serviceId:{
         type: Sequelize.INTEGER
      },
      landlordId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.INTEGER
      },
      name:{
        type: Sequelize.STRING
      },
      ibindi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HouseRentalAgreements');
  }
};