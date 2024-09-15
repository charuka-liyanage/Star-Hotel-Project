import React from "react";
import CustomerPayment from "./CustomerPayment";
import { PaymentProvider } from "../../contexts/PaymentContext";
import { OrderProvider } from "../../contexts/OrderContex";


const index = () => {

    return (
        <>
            <OrderProvider>
                <PaymentProvider>
                    <CustomerPayment />
                </PaymentProvider>
            </OrderProvider>


        </>
    )


}

export default index;