module.exports = {
  up: (queryInterface, Sequelize) =>queryInterface.bulkInsert(
    'Provinces',
    [
      {
        name:'Kigali',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'North',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) =>queryInterface.bulkDelete('Provinces',null,{}),
};
