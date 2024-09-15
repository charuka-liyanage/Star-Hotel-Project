const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	foodType: {
		type: String,
		required: true,
	},

	price: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Payment", PaymentSchema);
