module.exports = (sequelize, DataTypes) => {
  const District=sequelize.define(
    'District',
    {
    name: DataTypes.STRING,
    provinceId:DataTypes.INTEGER
  }, {});
  District.associate=function(models){
    District.belongsTo(models.Province,{
      foreignKey:'provinceId',
      as:'province',
      onDelete:'CASCADE'
    })
  }
  return District;
};