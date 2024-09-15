import React from "react";
import StaffDashboard from "./StaffDashboard";
import { OrderProvider } from "../../contexts/OrderContex";
import { UserProvider } from "../../contexts/UserContext";

const index = () => {
	return (
		<>
			<OrderProvider>
				<UserProvider>
					<StaffDashboard />
				</UserProvider>
			</OrderProvider>
		</>
	);
};
export default index;
