const ShoesController = require("../controllers/shoesControllers");
const router = require("express").Router();


router.get("/",ShoesController.getAll);
router.get("/one/:id", ShoesController.getOne);
router.get("/cheap/:findprice", ShoesController.cheapShoes);
router.post("/create", ShoesController.CreateOne);
router.put("/update/:id", ShoesController.updateOne);
router.delete("/delete/:id", ShoesController.deleteOne);

module.exports = router;