const Vehicle = require("../models/vehicle.model");
const Category = require("../models/category.model");

const getAllVehicles = async (req, res) => {
	try {
		const allVehicles = await Vehicle.find();
		res.status(200).json({ vehicles: allVehicles });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const saveVehicle = async (req, res) => {
	if (req.body) {
		try {
			const newVehicle = new Vehicle(req.body);
			await newVehicle.save();
			await Category.updateMany(
				{ _id: newVehicle.categories },
				{ $push: { vehicles: newVehicle._id } }
			);
			await res.status(201).json({ id: newVehicle.id });
		} catch (error) {
			res.status(406).json({ message: error.message });
		}
	}
};

module.exports = { getAllVehicles, saveVehicle };
