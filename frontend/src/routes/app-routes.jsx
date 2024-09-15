import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

import Header from "../components/Header";

import {
	Protfolio,
	Home,
	ContactUs,
	Login,
	Register,
	AdminDashboard,
	OurServices,
	PackageDetails,
	PackageCreate,
	SriLankanFoods,
	IndianFoods,
	HighTea,
	CakeDesserts,
	UsersDetails,
	OrderDetails,
	StaffDashboard,
	StaffDetails,
	StaffCreate,
	OrderComplete,
	CustomerDashboard,
	CustomerOrderCreate,
	CustomerOrderList,
	PackageDetailsEdit,
	CustomerPayment,
} from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />

				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Home />} />
					<Route path="/protfolio" element={<Protfolio />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/user/register" element={<Register />} />
					<Route path="/services" element={<OurServices />} />
					<Route path="/package/details" element={<PackageDetails />} />
					<Route path="/package/details/slfoods" element={<SriLankanFoods />} />
					<Route path="/package/details/indianfoods" element={<IndianFoods />} />
					<Route path="/package/details/hightea" element={<HighTea />} />
					<Route path="/package/details/cakedesserts" element={<CakeDesserts />} />

					{/* Check user login status */}
					<Route exact path="/user/login" element={<CheckLoginStatus />}>
						<Route exact path="/user/login" element={<Login />} />
					</Route>

					{/* Admin Private Routes */}
					<Route exact path="/user/admin" element={<PrivateRoute permissionLevel="ADMIN" />}>
						<Route exact path="/user/admin" element={<AdminDashboard />} />
						<Route path="/user/admin/package/details" element={<PackageDetails />} />
						<Route path="/user/admin/package/create" element={<PackageCreate />} />
						<Route path="/user/admin/user/details" element={<UsersDetails />} />
						<Route path="/user/admin/order/details" element={<OrderDetails />} />
						<Route path="/user/admin/staff/details" element={<StaffDetails />} />
						<Route path="/user/admin/staff/create" element={<StaffCreate />} />
						<Route path="/user/admin/package/edit/:id" element={<PackageDetailsEdit />} />
					</Route>

					{/* Staff Private Routes */}
					<Route exact path="/user/staff" element={<PrivateRoute permissionLevel="STAFF" />}>
						<Route exact path="/user/staff" element={<StaffDashboard />} />
						<Route exact path="/user/staff/order/complete" element={<OrderComplete />} />
					</Route>

					<Route exact path="/user/customer" element={<PrivateRoute permissionLevel="CUSTOMER" />}>
						<Route exact path="/user/customer" element={<CustomerDashboard />} />
						<Route exact path="/user/customer/order/create/:id" element={<CustomerOrderCreate />} />
						<Route exact path="/user/customer/order/details" element={<CustomerOrderList />} />
						<Route exact path="/user/customer/pay/:id" element={<CustomerPayment />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
