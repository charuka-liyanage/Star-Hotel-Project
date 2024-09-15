import React from "react";
import OrderComplete from "./OrderComplete";
import { OrderProvider } from "../../contexts/OrderContex";

const index = () => {
	return (
		<>
			<OrderProvider>
				<OrderComplete />
			</OrderProvider>
		</>
	);
};

export default index;
