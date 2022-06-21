"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AspNetUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AspNetUsers.init(
    {
      Id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      UserName: DataTypes.STRING,
      NormalizedUserName: DataTypes.STRING,
      Email: DataTypes.STRING,
      NormalizedEmail: DataTypes.STRING,
      EmailConfirmed: DataTypes.BOOLEAN,
      PasswordHash: DataTypes.STRING,
      SecurityStamp: DataTypes.STRING,
      ConcurrencyStamp: DataTypes.STRING,
      PhoneNumber: DataTypes.STRING,
      PhoneNumberConfirmed: DataTypes.BOOLEAN,
      TwoFactorEnabled: DataTypes.BOOLEAN,
      LockoutEnd: DataTypes.DATE,
      LockoutEnabled: DataTypes.BOOLEAN,
      AccessFailedCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AspNetUsers",
      tableName: "AspNetUsers",
      timestamps: false,
    }
  );
  return AspNetUsers;
};
