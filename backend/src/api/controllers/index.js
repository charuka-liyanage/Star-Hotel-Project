import {
	registerUser,
	loginUser,
	getAllAdmins,
	getOneAdmin,
	deleteAdmin,
	updateAdmin,
	getAllCustomers,
	getOneCustomer,
	deleteCustomer,
	updateCustomer,
	getAllStaff,
	getOneStaff,
	deleteStaff,
	updateStaff,
} from "./User.controller";

import {
	insertPackage,
	getAllPackage,
	getPackageDetails,
	deletePackage,
	changePackageStatus,
	editPackageDetails,
} from "./Package.controller";

import {
	insertOrder,
	getAllPending,
	getAllComplete,
	getAllOrders,
	changeOrderStatus,
	getOrderDetails,
} from "./Order.controllers";

import { insertPayment, getAllPayment } from "./Payment.controllers";

export default {
	registerUser,
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

	// order section
	insertOrder,
	getAllPending,
	getAllComplete,
	getAllOrders,
	changeOrderStatus,
	getOrderDetails,

	// payment section
	insertPayment,
	getAllPayment,
};
