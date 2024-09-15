import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class UserAPI {
	// all users API
	static login(values) {
		return axios.post(`${BASE_URL}/user/login`, values, requestConfigJson);
	}

	static register(values) {
		return axios.post(`${BASE_URL}/user/register`, values, requestConfigJson);
	}

	// admin API
	static getAllAdmin() {
		return axios.get(`${BASE_URL}/user/admin`, requestConfig);
	}
	static getOneAdmin(id) {
		return axios.get(`${BASE_URL}/user/admin/${id}`, requestConfig);
	}
	static updateAdmin(id, values) {
		return axios.put(`${BASE_URL}/user/admin/${id}`, values, requestConfigJson);
	}
	static deleteAdmin(id) {
		return axios.delete(`${BASE_URL}/user/admin/${id}`, requestConfigJson);
	}

	// customer API
	static getAllCustomer() {
		return axios.get(`${BASE_URL}/user/customer`, requestConfig);
	}
	static getOneCustomer(id) {
		return axios.get(`${BASE_URL}/user/customer/${id}`, requestConfig);
	}
	static updateCustomer(id, values) {
		return axios.put(`${BASE_URL}/user/customer/${id}`, values, requestConfigJson);
	}
	static deleteCustomer(id) {
		return axios.delete(`${BASE_URL}/user/customer/${id}`, requestConfigJson);
	}

	// staff API
	static getAllStaff() {
		return axios.get(`${BASE_URL}/user/staff`, requestConfig);
	}
	static getOneStaff(id) {
		return axios.get(`${BASE_URL}/user/staff/${id}`, requestConfig);
	}
	static updateStaff(id, values) {
		return axios.put(`${BASE_URL}/user/staff/${id}`, values, requestConfigJson);
	}
	static deleteStaff(id) {
		return axios.delete(`${BASE_URL}/user/staff/${id}`, requestConfigJson);
	}
}

export default UserAPI;
