const express = require("express");
//const auth = require ("../auth");
const router = express.Router();
const accountController = require("../controllers/accountController");


router.post("/create_account", accountController.createAccount);
//er.get("/read_account", accountController.readAccount);
router.get("/register_account", accountController.registerAccount);
router.post("/login_account", accountController.loginAccount);


module.exports = router;
