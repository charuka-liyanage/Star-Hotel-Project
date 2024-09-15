import PaymentService from "../services";

// insert payment
export const insertPayment = async (request, response, next) => {
	await PaymentService.insertPayment(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// get all payment
export const getAllPayment = async (request, response, next) => {
	await PaymentService.getAllPackage("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
