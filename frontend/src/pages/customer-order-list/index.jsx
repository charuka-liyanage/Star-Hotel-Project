import React from "react";
import { OrderProvider } from "../../contexts/OrderContex";
import CustomerOrderList from "./CustomerOrderList";

const index = () => {
	return (
		<>
			<OrderProvider>
				<CustomerOrderList />
			</OrderProvider>
		</>
	);
};

export default index;
