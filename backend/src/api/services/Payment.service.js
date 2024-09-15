import PaymentModel from "../models/Payment.model";

// Insert payment
export const insertPayment = async (data) => {
	return await PaymentModel.create(data)
		.then(async (order_data) => {
			await order_data.save();
			return order_data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get all orders
export const getAllPayment = async () => {
	return await PaymentModel.find({})
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
