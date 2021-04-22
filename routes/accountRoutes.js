const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

router.get("/testing", accountController.createAccount);

module.exports = router;
