import { createContext, useContext, useEffect, useState } from "react";

export const OrderContext = createContext()

function OrderContextProvider({ children }) {

    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState({})
    const [quantity, setQuantity] = useState('')

    const saveOrder = async (values) => { 
        const newOrder = {
            products: [
                { 
                productId: values, 
                quantity: 1 
                }
            ]
        }
        const res = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newOrder)
              }).catch((err) => console.log('error'))

             const data = await res.json()

            //  addOrder(data)

            //  addOrder(newOrder)
              setOrder(data)
              setOrders([...orders, data])
            // console.log(newOrder)
            // console.log(orders)
    }

    const addOrder = (product) => {
        setOrders(state => {
          return[...state, { product }]
        })
    }

    useEffect(() => {
        console.log(orders);
    }, [orders]);

    useEffect(() => {
        console.log(order);
    }, [order]);

    const value = {
        orders,
        setOrders,
        order,
        setOrder,
        saveOrder,
        addOrder,
    }

    return (
        <OrderContext.Provider value={value}>
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