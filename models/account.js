const {DataTypes} = require("sequalize");
const instance =  require("../connection");

const account = instance.sequlize.define("accounts", {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false
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
        tableName: "accounts"
    }
)
exports.model = account;