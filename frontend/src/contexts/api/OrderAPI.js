import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class OrderAPI {
	static createOrder(values) {
		return axios.post(`${BASE_URL}/user/customer/order/create`, values, requestConfigJson);
	}

	static getAllPending() {
		return axios.get(`${BASE_URL}/user/admin/order/pending`, requestConfig);
	}

	static getAllComplet() {
		return axios.get(`${BASE_URL}/admin/order/complete`, requestConfig);
	}

	static getAllOrders() {
		return axios.get(`${BASE_URL}/orders`, requestConfig);
	}

	static changeStatus(id, values) {
		return axios.put(`${BASE_URL}/user/staff/order/status/${id}`, values, requestConfigJson);
	}
	static getOrder(id) {
		return axios.get(`${BASE_URL}/orders/${id}`, requestConfig);
	}
}

export default OrderAPI;
