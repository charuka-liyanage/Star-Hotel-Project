import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeToast } from "../components";
import PaymentAPI from "./api/PaymentAPI";

const PaymentContext = createContext();

export function PaymentProvider({ children }) {

    const navigate = useNavigate();

    const [payments, setPayments] = useState([]);
    const [payment, setPayment] = useState({

        username: "",
        foodType: "",
        price: "",

    });

    const makePayment = async (values) => {
		try {
			const response = await PaymentAPI.makePay(values);
			setPayments([...payments, response.data]);
			navigate("/user/customer/order/details");
			makeToast({ type: "success", message: "Payment Done" });
		} catch (error) {
			console.log(error);
		}
	};


    return (
        <PaymentContext.Provider
            value={{
                payment,
                setPayment,
                payments,
                setPayments,
                makePayment,
            }}
        >
            {children}
        </PaymentContext.Provider>
    )


}

export default PaymentContext;