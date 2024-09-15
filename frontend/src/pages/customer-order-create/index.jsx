import React from "react";
import CustomerOrderCreate from "./CustomerOrderCreate";
import { PackageProvider } from "../../contexts/PackageContext";
import { OrderProvider } from "../../contexts/OrderContex";

const index = () => {
	return (
		<>
			<OrderProvider>
				<PackageProvider>
					<CustomerOrderCreate />
				</PackageProvider>
			</OrderProvider>
		</>
	);
};

export default index;
