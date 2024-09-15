import React from "react";
import OrderDetails from "./OrderDetails";
import { OrderProvider } from "../../contexts/OrderContex";

const index = () => {
	return (
		<>
			<OrderProvider>
				<OrderDetails />
			</OrderProvider>
		</>
	);
};

export default index;
