import React from "react";
import CustomerDashboard from "./CustomerDashboard";
import { UserProvider } from "../../contexts/UserContext";
import { OrderProvider } from "../../contexts/OrderContex";
import { PackageProvider } from "../../contexts/PackageContext";

const index = () => {
	return (
		<>
			<PackageProvider>
				<OrderProvider>
					<UserProvider>
						<CustomerDashboard />
					</UserProvider>
				</OrderProvider>
			</PackageProvider>
		</>
	);
};

export default index;
