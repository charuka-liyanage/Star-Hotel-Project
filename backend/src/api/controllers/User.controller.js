import UserService from "../services";
import logger from "../../util/logger";
import UserModel from "../models/User.model";

// user register
export const registerUser = async (request, response, next) => {
	if (await UserModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email Already Exists");
		next();
	} else if (await UserModel.findOne({ nic: request.body.nic })) {
		request.handleResponse.errorRespond(response)("NIC Already Exists");
		next();
	} else if (await UserModel.findOne({ contact: request.body.contact })) {
		request.handleResponse.errorRespond(response)("Mobile Number Already Exists");
		next();
	} else {
		const user = {
			name: request.body.name,
			email: request.body.email,
			nic: request.body.nic,
			contact: request.body.contact,
			address: request.body.address,
			password: request.body.password,
			permissionLevel: request.body.permissionLevel,
		};

		await UserService.insertUser(user)
			.then((data) => {
				logger.info(`New user with ID ${data._id} created`);
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error) => {
				logger.error(error.message);
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	}
};

// user login
export const loginUser = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await UserService.loginUser(email, password)
			.then(async (user) => {
				const authToken = await user.generateAuthToken();
				const data = {
					_id: user._id,
					name: user.name,
					email: user.email,
					nic: user.nic,
					contact: user.contact,
					address: user.address,
					token: authToken,
					permissionLevel: user.permissionLevel,
				};

				request.handleResponse.successRespond(response)(data);
			})
			.catch((error) => {
				const errorResponseData = {
					errorTime: new Date(),
					message: error.message,
				};

				logger.error(JSON.stringify(errorResponseData));
				request.handleResponse.errorRespond(response)(errorResponseData);
				next();
			});
	} else {
		logger.error("Username or Password is missing");
		request.handleResponse.errorRespond(response)("Username or Password is missing");
		next();
	}
};

// Admin Section

// get all admins
export const getAllAdmins = async (request, response, next) => {
	try {
		const allUsers = await UserService.getAllAdmins("users");
		const admins = allUsers.filter((user) => user.permissionLevel === "ADMIN");
		request.handleResponse.successRespond(response)(admins);
		next();
	} catch (error) {
		request.handleResponse.errorRespond(response)(error.message);
		next();
	}
};

// Get one admin
export const getOneAdmin = async (request, response, next) => {
	await UserService.getOneAdmin(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete admin
export const deleteAdmin = async (request, response, next) => {
	await UserService.deleteAdmin(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update admin
export const updateAdmin = async (request, response, next) => {
	await UserService.updateAdmin(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Customer Section

// get all customer
export const getAllCustomers = async (request, response, next) => {
	try {
		const allUsers = await UserService.getAllCustomers("users");
		const customer = allUsers.filter((user) => user.permissionLevel === "CUSTOMER");
		request.handleResponse.successRespond(response)(customer);
		next();
	} catch (error) {
		request.handleResponse.errorRespond(response)(error.message);
		next();
	}
};

// Get one customer
export const getOneCustomer = async (request, response, next) => {
	await UserService.getOneCustomer(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete customer
export const deleteCustomer = async (request, response, next) => {
	await UserService.deleteCustomer(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update customer
export const updateCustomer = async (request, response, next) => {
	await UserService.updateCustomer(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Staff Section

// get all staff
export const getAllStaff = async (request, response, next) => {
	try {
		const allUsers = await UserService.getAllStaff("users");
		const customer = allUsers.filter((user) => user.permissionLevel === "STAFF");
		request.handleResponse.successRespond(response)(customer);
		next();
	} catch (error) {
		request.handleResponse.errorRespond(response)(error.message);
		next();
	}
};

// Get one staff
export const getOneStaff = async (request, response, next) => {
	await UserService.getOneStaff(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete staff
export const deleteStaff = async (request, response, next) => {
	await UserService.deleteStaff(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update staff
export const updateStaff = async (request, response, next) => {
	await UserService.updateStaff(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
