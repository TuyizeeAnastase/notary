module.exports = (sequelize, DataTypes) => {
  const Service=sequelize.define(
    'Service',
    {
    name: DataTypes.STRING
  }, {});
  Service.associate=function(models){
    Service.hasMany(models.HouseRentalAgreement,{
      foreignKey:'serviceId',
      as:'service',
      onDelete:'CASCADE'
    });
    Service.hasMany(models.SalesMarketingAgreement,{
      foreignKey:'serviceId',
      as:'service_marketing',
      onDelete:'CASCADE'
    });
    Service.hasMany(models.LegalAssistanceAgreement,{
      foreignKey:'serviceId',
      as:'service_legal',
      onDelete:'CASCADE'
    });
  }
  return Service;
};