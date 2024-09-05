module.exports = (sequelize, DataTypes) => {
  const HouseRentalAgreement = sequelize.define('HouseRentalAgreement', {
    tenantId: DataTypes.INTEGER,
    landlordId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    name:DataTypes.STRING,
    cost: DataTypes.INTEGER,
    serviceId:DataTypes.INTEGER,
    ibindi: DataTypes.STRING
  }, {});

  HouseRentalAgreement.associate = function(models) {
    HouseRentalAgreement.belongsTo(models.User, {
      foreignKey: 'tenantId',
      as: 'tenant',
      onDelete: 'CASCADE'
    });
    HouseRentalAgreement.belongsTo(models.User, {
      foreignKey: 'landlordId',
      as: 'landlord',
      onDelete: 'CASCADE'
    });
    HouseRentalAgreement.belongsTo(models.Service,{
      foreignKey:'serviceId',
      as:'service',
      onDelete:'CASCADE'
    })
  };

  return HouseRentalAgreement;
};
