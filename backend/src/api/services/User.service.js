import UserModel from "../models/User.model";

export const insertUser = async (user) => {
	return await UserModel.create(user)
		.then(async (user) => {
			await user.generateAuthToken();
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// User Login
export const loginUser = async (email, password) => {
	return await UserModel.findOne({ email })
		.then(async (user) => {
			if (user && (await user.matchPassword(password))) {
				return user;
			} else {
				throw new Error("Invalid Email or Password!");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Admin Section

// get all admin details
export const getAllAdmins = async () => {
	return await UserModel.find({})
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get one admin
export const getOneAdmin = async (userId) => {
	return await UserModel.findById(userId)
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("Admin not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// delete admin details
export const deleteAdmin = async (userId) => {
	return await UserModel.findByIdAndDelete(userId)
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("Admin not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update admin
export const updateAdmin = async (userId, userData) => {
	return await UserModel.findByIdAndUpdate(userId, userData, {
		new: true,
	})
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("Admin Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Customer Section

export const getAllCustomers = async () => {
	return await UserModel.find({})
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one customer
export const getOneCustomer = async (userId) => {
	return await UserModel.findById(userId)
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("Customer not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete customer
export const deleteCustomer = async (userId) => {
	return await UserModel.findByIdAndDelete(userId)
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("Customer not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update customer
export const updateCustomer = async (userId, userData) => {
	return await UserModel.findByIdAndUpdate(userId, userData, {
		new: true,
	})
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("Customer Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Staff Section

// get all staff
export const getAllStaff = async () => {
	return await UserModel.find({})
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one staff
export const getOneStaff = async (userId) => {
	return await UserModel.findById(userId)
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("Staff not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete staff
export const deleteStaff = async (userId) => {
	return await UserModel.findByIdAndDelete(userId)
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("Staff not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update staff
export const updateStaff = async (userId, userData) => {
	return await UserModel.findByIdAndUpdate(userId, userData, {
		new: true,
	})
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("Staff Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
