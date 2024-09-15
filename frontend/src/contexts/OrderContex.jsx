import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderAPI from "./api/OrderAPI";
import { makeToast } from "../components";

const OrderContext = createContext();

export function OrderProvider({ children }) {
	const navigate = useNavigate();

	const [orders, setOrders] = useState([]);
	const [order, setOrder] = useState({
		name: "",
		foodType: "",
		username: "",
		contact: "",
		userId: "",
		reserveDate: "",
		reserveTime: "",
		reserveType: "",
		status: "",
		numberOfPerson: "",
		price: "",
	});

	//get order details
	const getOrder = (id) => {
		useEffect(() => {
			OrderAPI.getOrder(id).then((res) => {
				setOrder(res.data);
			});
		}, []);
	};

	// get all  orders
	useEffect(() => {
		OrderAPI.getAllOrders().then((response) => {
			setOrders(response.data);
		});
	}, []);

	//change status

	// Active Course
	const changeStatus = (values) => {
		const newStatus = {
			status: values.status,
		};
		OrderAPI.changeStatus(values.id, newStatus)
			.then((response) => {
				console.log(" Order updated successfully...");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	// create order
	const addOrder = async (values) => {
		try {
			const response = await OrderAPI.createOrder(values);
			setOrders([...orders, response.data]);
			navigate("/user/customer/order/details");
			makeToast({ type: "success", message: "Order Confirmed" });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<OrderContext.Provider
			value={{
				order,
				setOrder,
				orders,
				setOrders,
				changeStatus,
				addOrder,
				getOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}

export default OrderContext;
