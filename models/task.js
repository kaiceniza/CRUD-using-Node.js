const {DataTypes} = require("sequelize");
const db = require("../connection");

const tasks = db.sequelize.define("tasks", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
      },
      account_uuid:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      task_name:{
        type: DataTypes.STRING,   
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.ENUM('pending', 'completed')
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull:false
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
});

exports.model = tasks;