module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
    'Districts',
    [
      {
        name:'Gasabo',
        provinceId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Kicukiro',
        provinceId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Musanze',
        provinceId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Burera',
        provinceId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('Districts',null,{}),
};
