module.exports = {
  up:(queryInterface, Sequelize) =>queryInterface.bulkInsert(
    'HouseRentalAgreements',
    [
      {
        tenantId: 1,
       landlordId: 2,
       serviceId:1,
       name:'House Rental Agreement',
      date: new Date(),
       cost: 456,
       ibindi: 'ibindi',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),
  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('HouseRentalAgreements',null,{})
};
