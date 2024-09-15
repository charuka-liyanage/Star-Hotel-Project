import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "./api/UserAPI";
import { makeToast } from "../components";

const UserContext = createContext();

export function UserProvider({ children }) {
	const navigate = useNavigate();
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");
	const [contactError, setContactError] = useState("");
	const [admins, setAdmins] = useState([]);
	const [admin, setAdmin] = useState({
		name: "",
		email: "",
		nic: "",
		contact: "",
		address: "",
		password: "",
		permissionLevel: "",
	});

	const [customers, setCustomers] = useState([]);

	const [customer, setCustomer] = useState({
		name: "",
		email: "",
		nic: "",
		contact: "",
		address: "",
		password: "",
		permissionLevel: "",
	});

	const [users, setUsers] = useState([]);

	const [user, setUser] = useState({
		name: "",
		email: "",
		nic: "",
		contact: "",
		address: "",
		password: "",
		permissionLevel: "",
	});

	const register = (values) => {
		UserAPI.register(values)
			.then((response) => {
				setUsers([...users, response.data]);
				makeToast({ type: "success", message: "Registration Successful" });
				navigate("/user/login");
			})
			.catch((err) => {
				if (err.response.data.details == "Email already exists") {
					setMailError(err.response.data.details);
					makeToast({ type: "error", message: "Email already exists" });
				} else if (err.response.data.details == "NIC already exists") {
					setNicError(err.response.data.details);
					makeToast({ type: "error", message: "NIC already exists" });
				} else if (err.response.data.details == "Mobile number already exists") {
					setContactError(err.response.data.details);
					makeToast({ type: "error", message: "Mobile Number already exists" });
				} else {
					makeToast({ type: "error", message: "Registration not success" });
				}
			});
	};

	const login = (values) => {
		UserAPI.login(values).then((response) => {
			if (response.data.permissionLevel === "ADMIN") {
				localStorage.setItem("uId", response.data._id);
				localStorage.setItem("name", response.data.name);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("contact", response.data.contact);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				makeToast({ type: "success", message: "Login Successful" });
				navigate("/user/admin");
				window.location.reload();
			} else if (response.data.permissionLevel === "CUSTOMER") {
				localStorage.setItem("uId", response.data._id);
				localStorage.setItem("name", response.data.name);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("contact", response.data.contact);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				makeToast({ type: "success", message: "Login Successful" });
				navigate("/user/customer");
				window.location.reload();
			} else if (response.data.permissionLevel === "STAFF") {
				localStorage.setItem("uId", response.data._id);
				localStorage.setItem("name", response.data.name);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("contact", response.data.contact);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				makeToast({ type: "success", message: "Login Successful" });
				navigate("/user/staff");
				window.location.reload();
			} else {
				makeToast({ type: "error", message: "Invalid email or password" });
			}
		});
	};

	// get all customers
	useEffect(() => {
		UserAPI.getAllCustomer().then((response) => {
			setCustomers(response.data);
		});
	}, []);

	const [staffs, setStaffs] = useState([]);
	const [staff, setStaff] = useState({
		name: "",
		email: "",
		nic: "",
		contact: "",
		address: "",
		password: "",
		permissionLevel: "",
	});

	// get all staffs
	useEffect(() => {
		UserAPI.getAllStaff().then((response) => {
			setStaffs(response.data);
		});
	});

	const deleteStaff = (id) => {
		UserAPI.deleteStaff(id).then(() => {
			setStaffs(staffs.filter((staffDetails) => staffDetails._id !== id));
		});
	};

	// Delete Customer
	const deleteCustomer = (id) => {
		UserAPI.deleteCustomer(id).then(() => {
			setCustomers(customers.filter((customers) => customers._id !== id));
			makeToast({ type: "success", message: "Customer deleted successful" });
		});
	};

	return (
		<UserContext.Provider
			value={{
				admins,
				setAdmins,
				admin,
				setAdmin,
				login,
				customer,
				setCustomer,
				customers,
				setCustomers,
				staff,
				setStaff,
				staffs,
				setStaffs,
				register,
				user,
				setUser,
				users,
				setUsers,
				mailError,
				setMailError,
				nicError,
				setNicError,
				contactError,
				setContactError,
				deleteStaff,
				deleteCustomer,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;
