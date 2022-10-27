const manufacturerControllers = require("../controllers/manufacturerControllers");
const router = require("express").Router();

router.get("/", manufacturerControllers.getAll);

module.exports = router;