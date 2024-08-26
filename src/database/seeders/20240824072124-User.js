'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:(queryInterface, Sequelize) =>queryInterface.bulkInsert(
    'Users',
    [
      {
        name:'anastase Tuyizere',
        nid:'1199680116272047',
        telephone:'0787499115',
        email:'tuyizereanastase1@gmail.com',
        residence:'Masaka',
        provinceId:1,
        districtId:1,
        sectorId:1,
        cellId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('Users',null,{})
};
