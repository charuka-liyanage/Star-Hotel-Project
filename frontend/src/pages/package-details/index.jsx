import React from "react";
import PackageDetails from "./PackageDetails";
import { PackageProvider } from "../../contexts/PackageContext";

const index = () => {
	return (
		<>
			<PackageProvider>
				<PackageDetails />
			</PackageProvider>
		</>
	);
};

export default index;
