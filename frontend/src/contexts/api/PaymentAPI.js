import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class PaymentAPI {
	static makePay(values) {
		return axios.post(`${BASE_URL}/user/customer/pay`, values, requestConfigJson);
	}

	static getAllPackage() {
		return axios.get(`${BASE_URL}/user/admin/pay`, requestConfig);
	}
}

export default PaymentAPI;
