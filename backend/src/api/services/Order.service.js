import OrderModel from "../models/Order.model";

// Insert order
export const insertOrder = async (data) => {
	return await OrderModel.create(data)
		.then(async (order_data) => {
			await order_data.save();
			return order_data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get all orders
export const getAllOrders = async () => {
	return await OrderModel.find({})
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// change order status
export const changeOrderStatus = async (userId, status) => {
	return await OrderModel.findByIdAndUpdate(userId, { status: status })
		.then(async (user) => {
			if (user) {
				return {
					message: "Order Status Changed",
					status: status,
				};
			} else {
				throw new Error("Order not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get one order details
export const getOrderDetails = async (orderId) => {
	return await OrderModel.findById(orderId)
		.then((data) => {
			return data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
