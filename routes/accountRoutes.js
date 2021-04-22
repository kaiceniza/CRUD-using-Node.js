const express = require("express");
const auth = require ("../auth");
const router = express.Router();
const accountController = require("../controllers/accountController");

router.post("/create_account", accountController.createAccount);
router.get("/read_account", accountController.readAccount);
router.get("/update_account", accountController.updateAccount);
router.get("/delete_account", accountController.deleteAccount);



module.exports = router;
