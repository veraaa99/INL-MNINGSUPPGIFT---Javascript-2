import { createContext, useContext, useState } from "react";

export const OrderContext = createContext()

// Order context
function OrderContextProvider({ children }) {

    // States to check and update if an order has been placed
    const [order, setOrder] = useState({})
    const [orders, setOrders] = useState([{}])

   // Create a new order (an array with all product's IDs and quantity values)
    const createOrder = (values) => { 

        const newOrder = values.map((item) => {
            return {productId: item.product.product._id, quantity: item.quantity}
        })

        // Set the orders state to the newOrder-array
        // Place a new order with the newOrder-array
        setOrders(newOrder)
        placeOrder(newOrder)
    }

    // Place an order by posting it to the API
    const placeOrder = async (newOrder) => {

        const order = {
            products: newOrder
        }

        await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(order)
        }).catch((error) => console.log(error.message))

        return true
    }

    // Values to be passed from the Order Context
    const value = {
        orders,
        setOrders,
        order,
        setOrder,
        createOrder
    }

    // Order context provider to share values with children (=components using the Order context)
    return (
        <OrderContext.Provider value={value}>
            { children }
        </OrderContext.Provider>
    )
}

export default OrderContextProvider

// Custom hook with useContext-hook, to let children access the context
// If the hook isn't called inside the Order Context Provider, throw error
export const useOrderContext = () => {
    const context = useContext(OrderContext)

    if(!context) throw new Error('useOrderContext must be called inside a OrderContextProvider')

    return context
}