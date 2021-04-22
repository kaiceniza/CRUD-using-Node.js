const{Sequelize0, Sequelize} = require("sequelize");
const sequlize = new Sequelize("tasks", "root", "", {
    host:"localhost",
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        paranoid: true 
    }
})

try{
    sequlize.authenticate();
}catch(err){
    console.log(err);
}

exports.sequlize = sequlize;