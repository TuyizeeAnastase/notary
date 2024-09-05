module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'SalesMarketingAgreements',
      [
        {
          date: new Date(),
          tin: '6786',
          company_id: 1,
          serviceId:1,
          name:'Sales Marketing Agreement',
          representative_id: 2,
          yearsOfAgreement: 3,
          grossSalesRevenues: 5687,
          witness_one: 1,
          witness_two: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SalesMarketingAgreements', null, {});
  },
};
