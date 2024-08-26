
module.exports = (sequelize, DataTypes) => {
  const Cell=sequelize.define(
    'Cell',
    {
    name: DataTypes.STRING,
    sectorId:DataTypes.INTEGER,
  }, {});
  Cell.associate=function(models){
    Cell.belongsTo(models.Sector,{
      foreignKey:'sectorId',
      as:'sector',
      onDelete:'CASCADE'
    })
  }
  return Cell;
};