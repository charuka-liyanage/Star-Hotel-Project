const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	foodType: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: false,
	},
	reserveDate: {
		type: Date,
		required: true,
	},

	reserveTime: {
		type: String,
		required: true,
	},
	reserveType: {
		type: String,
		enum: ["DINE-IN", "TAKE-AWAY"],
		required: true,
	},
	status: {
		type: String,
		enum: ["PENDING", "COMPLETED"],
		default: "PENDING",
		required: true,
	},
	numberOfPerson: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Order", OrderSchema);
