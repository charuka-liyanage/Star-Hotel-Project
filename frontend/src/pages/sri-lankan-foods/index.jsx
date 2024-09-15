import React from "react";
import SriLankanFoods from "./SriLankanFoods";
import { PackageProvider } from "../../contexts/PackageContext";

const index = () => {
	return (
		<>
			<PackageProvider>
				<SriLankanFoods />
			</PackageProvider>
		</>
	);
};

export default index;
