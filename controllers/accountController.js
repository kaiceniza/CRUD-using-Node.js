const account = require("../models/account");

exports.createAccount = async (req, res) => {
    //console.log("Create an account");
    //console.log(req.body);
    req.code = generateCode();
    let data = await account.model.create(
        req.body   
    )
    console.log(data);
}

exports.readAccount = async (req, res) => {
    let data = await account.model.findByPk(
        req.body.id,
        {raw: true}
    )
    console.log(data);
}
exports.updateAccount = async (req, res) => {
    let data = await account.model.update({
            password: "P@$$w0rd"
        }, {
        where: {
            id: req.body.id
        }
        }
    )
    res.send(data);
}

exports.deleteAccount = async (req, res) => {
    let data = await account.model.destroy({
        where: {
            id: req.body.id
        }
    })
    res.send({value: data});
}