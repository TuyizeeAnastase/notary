module.exports = (sequelize, DataTypes) => {
  const LegalAssistanceAgreement = sequelize.define('LegalAssistanceAgreement', {
    requesterId: DataTypes.INTEGER,
    receiverId: DataTypes.INTEGER,
    serviceId:DataTypes.INTEGER,
    ikirego: DataTypes.STRING,
    name:DataTypes.STRING,
    cost: DataTypes.INTEGER,
  }, {});

  LegalAssistanceAgreement.associate = function(models) {
    LegalAssistanceAgreement.belongsTo(models.User, {
      foreignKey: 'requesterId',
      as: 'requester',
      onDelete: 'CASCADE',
    });
    LegalAssistanceAgreement.belongsTo(models.User, {
      foreignKey: 'receiverId',
      as: 'receiver',
      onDelete: 'CASCADE',
    });
    LegalAssistanceAgreement.belongsTo(models.Service,{
      foreignKey:'serviceId',
      as:'service',
      onDelete:'CASCADE'
    })
  };

  return LegalAssistanceAgreement;
};
