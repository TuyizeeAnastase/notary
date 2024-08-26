module.exports = (sequelize, DataTypes) => {
  const Sector=sequelize.define(
    'Sector',
    {
    name: DataTypes.STRING,
    districtId:DataTypes.INTEGER
  }, {});
  Sector.associate=function(models){
    Sector.belongsTo(models.District,{
      foreignKey:'districtId',
      as:'district',
      onDelete:'CASCADE'
    }),
    Sector.hasMany(models.Cell,{
      foreignKey:'sectorId',
      as:'cells',
      onDelete:'CASCADE'
    }),
    Sector.hasMany(models.User,{
      foreignKey:'sectorId',
      as:'sector',
      onDelete:'CASCADE'
    })
  }
  return Sector;
};