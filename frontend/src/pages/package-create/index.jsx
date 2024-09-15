import React from "react";
import PackageCreate from "./PackageCreate";
import { PackageProvider } from "../../contexts/PackageContext";

const index = () => {
	return (
		<>
			<PackageProvider>
				<PackageCreate />
			</PackageProvider>
		</>
	);
};

export default index;
