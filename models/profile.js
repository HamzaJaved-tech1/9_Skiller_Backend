"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init(
    {
      Id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Email: DataTypes.STRING,
      Password: DataTypes.STRING,
      ConfirmPassword: DataTypes.STRING,
      CompanyName: DataTypes.STRING,
      City: DataTypes.STRING,
      State: DataTypes.STRING,
      Country: DataTypes.STRING,
      CompanyLogo: DataTypes.STRING,
      CompanyAddress: DataTypes.STRING,
      CompanyPhone: DataTypes.STRING,
      CompanyEmail: DataTypes.STRING,
      CompanyRegistration: DataTypes.STRING,
      CompanyDocument: DataTypes.STRING,
      CompanyDescription: DataTypes.STRING,
      CompanyManager: DataTypes.STRING,
      ManagerDesignation: DataTypes.STRING,
      CompanyAccountPhone: DataTypes.STRING,
      ManagerContact: DataTypes.STRING,
      CompanyManagerEmail: DataTypes.STRING,
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      Gender: DataTypes.STRING,
      DOB: DataTypes.DATE,
      Age: DataTypes.INTEGER,
      IsActive: DataTypes.BOOLEAN,
      IsDeleted: DataTypes.BOOLEAN,
      IsFirstLogin: DataTypes.BOOLEAN,
      Username: DataTypes.STRING,
      ImagePath: DataTypes.STRING,
      ProviderDocument: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profile",
      tableName: "tblProfile",
      timestamps: false,
    }
  );
  return Profile;
};
