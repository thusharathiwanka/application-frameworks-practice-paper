const router = require("express").Router();
const {
	getAllCategories,
	saveCategory,
	getAllVehiclesInCategory,
	calculateTripCharges,
} = require("../controllers/category.controller");

router.get("/", getAllCategories);
router.get("/:id", getAllVehiclesInCategory);
router.post("/calculate", calculateTripCharges);
router.post("/", saveCategory);

module.exports = router;
