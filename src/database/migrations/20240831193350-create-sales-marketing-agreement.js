'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesMarketingAgreements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      name:{
        type: Sequelize.STRING
      },
      tin: {
        type: Sequelize.STRING
      },
      company_id: {
        type: Sequelize.INTEGER
      },
      representative_id: {
        type: Sequelize.INTEGER
      },
      serviceId:{
         type: Sequelize.INTEGER
      },
      yearsOfAgreement: {
        type: Sequelize.STRING
      },
      grossSalesRevenues: {
        type: Sequelize.STRING
      },
      witness_one: {
        type: Sequelize.INTEGER
      },
      witness_two: {
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
    await queryInterface.dropTable('SalesMarketingAgreements');
  }
};