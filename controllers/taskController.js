const task = require("../models/task");

exports.getTask = (req, res) =>{ 
    if(req.session.code){
        task.model.findAll({
            where:{ account_uuid: req.session.code
            }
        }).then(tasks =>{
            req.session.tasks = tasks;
            if(tasks){
                res.render("home",{username: req.session.userName,code: req.session.code, tasks:req.session.tasks,loggedIn:req.session.loggedIn});
            }
        })
    }else{
        res.redirect("/");
    }
}

exports.makeTask = (req, res) =>{
    if(req.session.code){
        res.render("createTask",{username: req.session.userName,code: req.session.code, tasks:req.session.tasks,loggedIn:req.session.loggedIn});
    }else{
        res.redirect("/");
    }
}

exports.createTask = async (req, res) => {

    if(req.session.code){
        let result = await task.model.create({
            account_uuid: req.session.code, 
            task_name: req.query.title,
            description: req.query.content,
            status: "pending"
        })
        if(!result){
            res.render("/createTask",{username: req.session.userName,code: req.session.code, tasks:req.session.tasks,loggedIn:req.session.loggedIn});
        }else{
            res.redirect("/task");
        }
    }else{
        res.redirect("/");
    }
}

exports.updateTask = async (req, res) => {   

    if(req.session.code){
        let result = await task.model.update({status:"completed"} ,
        {
            where:{
                id: req.query.id
            }
        })
        if(!result){

        }else{
            res.redirect("/task");
        }
    }else{
        res.redirect("/");
    }
}

exports.deleteTask = async (req, res) => {
    if(req.session.code){
        await task.model.destroy({
            where: {
                id: req.query.id
            }
        }).then(result => {
            if(result){
                res.redirect("/task");
            }else{
                res.redirect("/task");
            }
        })
    }else{
        res.redirect("/");
    }
}