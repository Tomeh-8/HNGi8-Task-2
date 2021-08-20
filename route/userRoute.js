const router = require("express").Router();
const userController = require("../controller/userController");


router.get("/", userController.getPage);


router.post("/", userController.getUser);

module.exports = router;