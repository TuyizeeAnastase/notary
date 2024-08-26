module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
    'Sectors',
    [
      {
        name:'Masaka',
        districtId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('Sectors',null,{})
};
