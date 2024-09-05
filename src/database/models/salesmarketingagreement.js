module.exports = (sequelize, DataTypes) => {
  const SalesMarketingAgreement = sequelize.define('SalesMarketingAgreement', {
    date: DataTypes.STRING,
    tin: DataTypes.STRING,
    company_id: DataTypes.INTEGER,
    serviceId:DataTypes.INTEGER,
    representative_id: DataTypes.INTEGER,
    yearsOfAgreement: DataTypes.STRING,
    grossSalesRevenues: DataTypes.STRING,
    witness_one: DataTypes.INTEGER,
    name:DataTypes.STRING,
    witness_two: DataTypes.STRING,
  }, {});

  SalesMarketingAgreement.associate = function(models) {
    SalesMarketingAgreement.belongsTo(models.User, {
      foreignKey: 'company_id',
      as: 'company',
      onDelete: 'CASCADE',
    });
    SalesMarketingAgreement.belongsTo(models.User, {
      foreignKey: 'representative_id',
      as: 'representative',
      onDelete: 'CASCADE',
    });
    SalesMarketingAgreement.belongsTo(models.User, {
      foreignKey: 'witness_one',
      as: 'witnessOne',
      onDelete: 'CASCADE',
    });
    SalesMarketingAgreement.belongsTo(models.User, {
      foreignKey: 'witness_two',
      as: 'witnessTwo',
      onDelete: 'CASCADE',
    });
    SalesMarketingAgreement.belongsTo(models.Service,{
      foreignKey:'serviceId',
      as:'service',
      onDelete:'CASCADE'
    })
  };

  return SalesMarketingAgreement;
};
