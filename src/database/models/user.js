module.exports = (sequelize, DataTypes) => {
  const User=sequelize.define(
    'User',
    {
    name: DataTypes.STRING,
    nid: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    residence: DataTypes.STRING,
    provinceId: DataTypes.INTEGER,
    districtId: DataTypes.INTEGER,
    sectorId: DataTypes.INTEGER,
    cellId: DataTypes.INTEGER,
  }, {});
  User.associate=function(models){
    User.belongsTo(models.Province,{
      foreignKey:'provinceId',
      as:'province',
      onDelete:'CASCADE'
    }),
    User.belongsTo(models.District,{
      foreignKey:'districtId',
      as:'district',
      onDelete:'CASCADE'
    }),
    User.belongsTo(models.Sector,{
      foreignKey:'sectorId',
      as:'sector',
      onDelete:'CASCADE'
    }),
    User.belongsTo(models.Cell,{
      foreignKey:'cellId',
      as:'cell',
      onDelete:'CASCADE'
    })
  }
  return User;
};