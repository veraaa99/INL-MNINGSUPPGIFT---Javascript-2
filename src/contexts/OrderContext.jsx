import { createContext, useContext } from "react";

export const OrderContext = createContext()

function OrderContextProvider({ children }) {

    return (
        <OrderContext.Provider value={''}>
            { children }
        </OrderContext.Provider>
    )
}

export default OrderContextProvider

export const useOrderContext = () => {
    const context = useContext(OrderContext)

    if(!context) throw new Error('useOrderContext must be called inside a OrderContextProvider')

    return context
}