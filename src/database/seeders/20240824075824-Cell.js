module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
    'Cells',
    [
      {
        name:'Cyugamo',
        sectorId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),
  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('Cells',null,{})
};
