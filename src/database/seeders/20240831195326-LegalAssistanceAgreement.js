module.exports = {
  up:(queryInterface, Sequelize) =>queryInterface.bulkInsert(
    'LegalAssistanceAgreements',
    [
      {
        requesterId: 2,
    receiverId: 1,
    ikirego: 'Gatanya',
    serviceId:1,
    name:'Legal Assistance Agreement',
    cost: 567,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),
  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('LegalAssistanceAgreements',null,{})
};
