const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
// const tokenVerify = require("../tokens/tokensVerify");

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.post("/favorite", userControllers.OneUser);
router.post("/up/:id", userControllers.updateOne);
router.delete("/delete/:id", userControllers.deletOne);
router.post("/logout", userControllers.logout);
// router.post("/favorite", tokenVerify.protect, (req, res) =>{
    // res.send(req.userId);
// });


module.exports = router;