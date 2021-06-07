const router = require("express").Router();
const {
	getAllVehicles,
	saveVehicle,
} = require("../controllers/vehicle.controller");

router.get("/", getAllVehicles);
router.post("/", saveVehicle);

module.exports = router;
