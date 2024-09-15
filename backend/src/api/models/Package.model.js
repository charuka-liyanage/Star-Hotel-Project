const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
		packageType: {
			type: String,
			enum: ["SRILANKAN-FOOD", "INDIAN-FOODS", "HIGH-TEA", "CAKE-DESSERTS"],
			required: true,
		},
		status: {
			type: String,
			enum: ["IN-STOCK", "OUT-OF-STOCK"],
			required: true,
			default: "IN-STOCK",
		},
		image: {
			type: String,
			required: false,
		},
	},

	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Package", PackageSchema);
