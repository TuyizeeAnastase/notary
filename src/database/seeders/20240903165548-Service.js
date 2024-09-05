module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
    'Services',[
      {
        name:'notary',
       createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]

  ),
  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('Services',null,{})
  
};
