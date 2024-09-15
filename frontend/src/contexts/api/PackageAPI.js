import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class PackageAPI {
	
	static CreatePackages(values) {
		return axios.post(`${BASE_URL}/user/admin/package`, values, requestConfigJson);
	}

	static getAllPackage() {
		return axios.get(`${BASE_URL}/package/`, requestConfig);
	}

	static getPackage(id) {
		return axios.get(`${BASE_URL}/package/${id}`, requestConfig);
	}

	static deletePackage(id) {
		return axios.delete(`${BASE_URL}/user/admin/package/${id}`, requestConfig);
	}

	static changeStatus(id, values) {
		return axios.put(`${BASE_URL}/user/admin/package/status/${id}`, values, requestConfigJson);
	}

	static editPackage(id, values) {
		return axios.put(`${BASE_URL}/user/admin/package/${id}`, values, requestConfigJson);
	}
}

export default PackageAPI;
