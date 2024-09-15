import React from "react";
import StaffDetails from "./StaffDetails";
import { UserProvider } from "../../contexts/UserContext";

const index = () => {
	return (
		<>
			<UserProvider>
				<StaffDetails />
			</UserProvider>
		</>
	);
};

export default index;
