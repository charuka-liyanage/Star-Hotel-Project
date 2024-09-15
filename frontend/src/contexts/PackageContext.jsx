import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PackageAPI from "./api/PackageAPI";
import { makeToast } from "../components";

const PackageContext = createContext();

export function PackageProvider({ children }) {
	const [packages, setPackages] = useState([]);
	const [Package, setPackage] = useState({
		name: "",
		price: "",
		packageType: "",
		status: "",
		image: "",
	});
	const navigate = useNavigate();

	// Get all packages
	useEffect(() => {
		PackageAPI.getAllPackage().then((response) => {
			setPackages(response.data);
		});
	}, []);

	// Delete package
	const deletePackage = (id) => {
		PackageAPI.deletePackage(id).then(() => {
			setPackages(packages.filter((packages) => packages._id !== id));
			makeToast({ type: "success", message: "Package deleted successful" });
		});
	};

	//get package details
	const getPackage = (id) => {
		useEffect(() => {
			PackageAPI.getPackage(id).then((res) => {
				setPackage(res.data);
			});
		}, []);
	};

	// change package
	const changePackage = (values) => {
		const newStatus = {
			status: values.status,
		};
		PackageAPI.changeStatus(values.id, newStatus)
			.then((response) => {
				console.log(" Status updated successfully...");
			})
			.catch((err) => {

				console.log(err);
			});
	};

	// create package
	const addPackage = async (values) => {
		try {
			const response = await PackageAPI.CreatePackages(values);
			setPackages([...packages, response.data]);
			makeToast({ type: "success", message: "Package Created" });
			navigate("/user/admin/package/details");
		} catch (error) {
			makeToast({ type: "error", message: "Package not created" });
		}
	};
	// Edit To Course
	const editPackage = (values) => {
		const newPackage = {
			name: values.name,
			price: values.price,
			packageType: values.packageType,
			status: values.status,
		};

		PackageAPI.editPackage(values.id, newPackage)
			.then((response) => {
				navigate("/user/admin/package/details");
				makeToast({ type: "success", message: "Package update successful" });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<PackageContext.Provider
			value={{
				packages,
				setPackages,
				Package,
				setPackage,
				deletePackage,
				getPackage,
				changePackage,
				addPackage,
				editPackage,
			}}
		>
			{children}
		</PackageContext.Provider>
	);
}

export default PackageContext;
