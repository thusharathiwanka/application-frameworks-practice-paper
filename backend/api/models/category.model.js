const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	rent: { type: Number, required: true },
	vehicles: [
		{
			type: mongoose.Schema.Types.ObjectId,
			trim: true,
			ref: "vehicles",
		},
	],
});

const Category = mongoose.model("categories", CategorySchema);

module.exports = Category;
