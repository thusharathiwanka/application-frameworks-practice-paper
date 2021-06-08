const Category = require("../models/category.model");

const getAllCategories = async (req, res) => {
	try {
		const allCategories = await Category.find();
		res.status(200).json({ categories: allCategories });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const saveCategory = async (req, res) => {
	if (req.body) {
		try {
			const newCategory = new Category(req.body);
			newCategory.save();

			res.status(201).json({ id: newCategory.id });
		} catch (error) {
			res.status(406).json({ message: error.message });
		}
	}
};

const getAllVehiclesInCategory = async (req, res) => {
	if (req.params.id) {
		try {
			const allVehiclesInCategory = await Category.findById(
				req.params.id
			).populate("vehicles", "code model type name");

			res.status(200).json({ vehicles: allVehiclesInCategory.vehicles });
		} catch (error) {
			res.status(401).json({ message: error.message });
		}
	}
};

const calculateTripCharges = async (req, res) => {
	if (req.body.type) {
		try {
			const selectedCategory = await Category.findById(req.body.type);
			const totalTripCharges = selectedCategory.rent * req.body.duration;
			return res.status(200).json({ charges: totalTripCharges });
		} catch (error) {
			return res.status(406).json({ message: error.message });
		}
	}

	return res.status(406).json({ message: "trip type not mentioned" });
};

module.exports = {
	getAllCategories,
	saveCategory,
	getAllVehiclesInCategory,
	calculateTripCharges,
};
