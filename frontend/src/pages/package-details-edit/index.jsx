import React from "react";
import PackageDetailsEdit from "./PackageDetailsEdit";
import { PackageProvider } from "../../contexts/PackageContext";

const index = () => {
	return (
		<>
			<PackageProvider>
				<PackageDetailsEdit />
			</PackageProvider>
		</>
	);
};

export default index;
