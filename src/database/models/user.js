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
    }),
    User.hasMany(models.HouseRentalAgreement,{
      foreignKey:'tenantId',
      as:'tenant',
      onDelete:'CASCADE'
    }),
    User.hasMany(models.HouseRentalAgreement,{
      foreignKey:'landlordId',
      as:'landlord',
      onDelete:'CASCADE'
    }),
    User.hasMany(models.LegalAssistanceAgreement,{
      foreignKey:'requesterId',
      as:'requester',
      onDelete:'CASCADE'
    }),
    User.hasMany(models.LegalAssistanceAgreement,{
      foreignKey:'receiverId',
      as:'reciever',
      onDelete:'CASCADE'
    }),
    User.hasMany(models.SalesMarketingAgreement,{
      foreignKey:'company_id',
      as:'company',
      onDelete:'CASCADE'
    }),
    User.hasMany(models.SalesMarketingAgreement,{
      foreignKey:'representative_id',
      as:'representative',
      onDelete:'CASCADE'
    }),
    User.hasMany(models.SalesMarketingAgreement,{
      foreignKey:'witness_one',
      as:'witness_one',
      onDelete:'CASCADE'
    }),
    User.hasMany(models.SalesMarketingAgreement,{
      foreignKey:'witness_two',
      as:'witness_two',
      onDelete:'CASCADE'
    })
  }
  return User;
};