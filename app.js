const express = require("express"),
      app = express(),
      session = require("express-session"),
      http = require("http"),
      server = http.createServer(app),
      bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));      

const   accountRoutes = require('./routes/accountRoutes'),
        taskRoutes = require('./routes/taskRoutes.js');

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: "12345678",
    resave: false,
    saveUninitialized: false    
}));

app.get("/", (req,res) => {
    res.render("index");
})

app.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect('/');
})

//routes
app.use("/account", accountRoutes);
app.use("/task", taskRoutes);

app.listen(3000);


