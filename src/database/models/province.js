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
    }),
    Province.hasMany(models.User,{
      foreignKey:'provinceId',
      as:'province',
      onDelete:'CASCADE'
    })
  }
  return Province;
};