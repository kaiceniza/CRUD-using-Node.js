const account = require("../models/account");
const bcrypt = require('bcrypt');


var generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    for ( var i = 0; i < length; i++ ) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}

exports.registerAccount = (req,res) => {
    res.render("create");
}

exports.createAccount = async (req, res) => {
    //console.log("Create an account");
    //console.log(req.body);
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password,salt);
   await account.model.create({
                code: generateCode(),
                username: req.body.username,
                password: hash
    }).then(result => {
        if(result){
            res.redirect('/');
        }
    }).catch(err => {
        res.render("create",{err:"Cannot create account!"})
    })

}

// exports.readAccount = async (req, res) => {
//     let data = await account.model.findByPk(
//         req.body.id,
//         {raw: true}
//     )
//     console.log(data);
// }
// exports.updateAccount = async (req, res) => {
//     let data = await account.model.update({
//             password: "P@$$w0rd"
//         }, {
//         where: {
//             id: req.body.id
//         }
//         }
//     )
//     res.send(data);
// }

// exports.deleteAccount = async (req, res) => {
//     let data = await account.model.destroy({
//         where: {
//             id: req.body.id
//         }
//     })
//     res.send({value: data});
// }
exports.loginAccount = async (req, res) => {
    let data = await account.model.findOne({where: {username: req.body.username}});

    if (data.username === null) {
        console.log('Not found!');
        res.redirect('/');
    } else {
        bcrypt.compare(req.body.password, data.password, (err, result) => {
            if(err){throw err;}
            if( (data.username == req.body.username) && result){
                req.session.loggedIn = true;
                req.session.username = data.username;
                req.session.code = data.code;
                res.redirect("/task");
            }else{
                res.redirect("/");
            }
        });    
    }
}