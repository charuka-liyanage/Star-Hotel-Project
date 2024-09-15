import OrderService from "../services";

// insert package
export const insertOrder = async (request, response, next) => {
	await OrderService.insertOrder(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// pending orders
export const getAllPending = async (request, response, next) => {
	try {
		const allUsers = await OrderService.getAllOrders("users");
		const customer = allUsers.filter((user) => user.status === "PENDING");
		request.handleResponse.successRespond(response)(customer);
		next();
	} catch (error) {
		request.handleResponse.errorRespond(response)(error.message);
		next();
	}
};

// complete orders
export const getAllComplete = async (request, response, next) => {
	try {
		const allUsers = await OrderService.getAllOrders("users");
		const customer = allUsers.filter((user) => user.status === "COMPLETED");
		request.handleResponse.successRespond(response)(customer);
		next();
	} catch (error) {
		request.handleResponse.errorRespond(response)(error.message);
		next();
	}
};

// get all orders
export const getAllOrders = async (request, response, next) => {
	await OrderService.getAllOrders("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Change order status
export const changeOrderStatus = async (request, response, next) => {
	await OrderService.changeOrderStatus(request.params.id, request.body.status)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// get order details
export const getOrderDetails = async (req, res, next) => {
	await OrderService.getOrderDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};
