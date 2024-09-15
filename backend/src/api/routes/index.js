import { Router } from "express";
import controller from "../controllers";

const router = Router();

router.get("/", (req, res, next) => {
	res.send("Online Hotel Reservation System API");
	next();
});

// User endpoints
router.post("/user/register", controller.registerUser);
router.post("/user/login", controller.loginUser);

// Admin endpoints
router.get("/user/admin", controller.getAllAdmins);
router.get("/user/admin/:id", controller.getOneAdmin);
router.put("/user/admin/:id", controller.updateAdmin);
router.delete("/user/admin/:id", controller.deleteAdmin);

// Customer Endpoints
router.get("/user/customer", controller.getAllCustomers);
router.get("/user/customer/:id", controller.getOneCustomer);
router.put("/user/customer/:id", controller.updateCustomer);
router.delete("/user/customer/:id", controller.deleteCustomer);

// Staff Endpoints
router.get("/user/staff", controller.getAllStaff);
router.get("/user/staff/:id", controller.getOneStaff);
router.put("/user/staff/:id", controller.updateStaff);
router.delete("/user/staff/:id", controller.deleteStaff);
router.put("/user/staff/order/status/:id", controller.changeOrderStatus);

// Package details
router.post("/user/admin/package", controller.insertPackage);
router.get("/package", controller.getAllPackage);
router.get("/package/:id", controller.getPackageDetails);
router.put("/user/admin/package/:id", controller.editPackageDetails);
router.put("/user/admin/package/status/:id", controller.changePackageStatus);
router.delete("/user/admin/package/:id", controller.deletePackage);

// order details
router.post("/user/customer/order/create", controller.insertOrder);
router.get("/user/admin/order/pending", controller.getAllPending);
router.get("/user/admin/order/complete", controller.getAllComplete);
router.get("/orders", controller.getAllOrders);
router.get("/orders/:id", controller.getOrderDetails);

// payment details
router.post("/user/customer/pay", controller.insertPayment);
router.get("/user/admin/pay", controller.getAllPayment);

export default router;
