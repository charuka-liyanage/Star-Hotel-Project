import {
	deleteAdmin,
	deleteCustomer,
	deleteStaff,
	getAllAdmins,
	getAllCustomers,
	getAllStaff,
	getOneAdmin,
	getOneCustomer,
	getOneStaff,
	insertUser,
	loginUser,
	updateAdmin,
	updateCustomer,
	updateStaff,
} from "./User.service";

import {
	insertPackage,
	getAllPackage,
	getPackageDetails,
	deletePackage,
	changePackageStatus,
	editPackageDetails,
} from "./Package.service";

import { insertOrder, getAllOrders, changeOrderStatus, getOrderDetails } from "./Order.service";

import { insertPayment, getAllPayment } from "./Payment.service";

export default {
	insertUser,
	loginUser,

	// Admin Section
	getAllAdmins,
	getOneAdmin,
	deleteAdmin,
	updateAdmin,

	// Customer Section
	getAllCustomers,
	getOneCustomer,
	deleteCustomer,
	updateCustomer,

	// Staff Section
	getAllStaff,
	getOneStaff,
	deleteStaff,
	updateStaff,

	// package section
	insertPackage,
	getAllPackage,
	getPackageDetails,
	deletePackage,
	changePackageStatus,
	editPackageDetails,

	// Order section
	insertOrder,
	getAllOrders,
	changeOrderStatus,
	getOrderDetails,

	// payment section
	insertPayment,
	getAllPayment,
};
