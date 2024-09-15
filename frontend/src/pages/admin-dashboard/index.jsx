import React from "react";
import AdminDashboard from "./AdminDashboard";
import { UserProvider } from "../../contexts/UserContext";
import { OrderProvider } from "../../contexts/OrderContex";

const index = () => {
	return (
		<>
			<OrderProvider>
				<UserProvider>
					<AdminDashboard />
				</UserProvider>
			</OrderProvider>
		</>
	);
};

export default index;
