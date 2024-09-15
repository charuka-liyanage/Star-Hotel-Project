import React from "react";
import UsersDetails from "./UsersDetails";
import { UserProvider } from "../../contexts/UserContext";

const index = () => {
	return (
		<>
			<UserProvider>
				<UsersDetails />
			</UserProvider>
		</>
	);
};

export default index;
