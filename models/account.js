const {DataTypes} = require("sequelize");
const db = require("../connection");

const accounts = db.sequelize.define("accounts", {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      code:{
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },{
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        //paranoid: true,
        tableName: "accounts"
    }
)
exports.model = accounts;