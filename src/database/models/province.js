module.exports = (sequelize, DataTypes) => {
  const Province=sequelize.define(
    'Province',
    {
    name: DataTypes.STRING
  }, {});
  Province.associate=function(models){
    Province.hasMany(models.District,{
      foreignKey:'provinceId',
      as:'districts',
      onDelete:'CASCADE'
    })
  }
  return Province;
};