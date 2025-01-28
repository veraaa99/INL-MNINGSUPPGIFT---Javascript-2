import { createContext, useContext, useState } from "react";

export const OrderContext = createContext()

function OrderContextProvider({ children }) {

    const [order, setOrder] = useState({})
    const [orders, setOrders] = useState([{}])

    const placeOrder = (values) => { 

        const newData = values.map((item)=>{
            return {
                productId: item.product.product._id,
                quantity: item.quantity
            }
        })
          
        setOrders(newData)

        // https://stackoverflow.com/questions/76192706/how-do-i-create-a-different-array-from-an-existing-array-in-react
        const newOrder = values.map((item) => {
            return {productId: item.product.product._id, quantity: item.quantity}
          })

        sendOrder(newOrder)
    }

    const sendOrder = async (newOrder) => {

        const order = {
            products: newOrder
        }

        const res = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(order)
            }).catch((err) => console.log('error'))

        const data = await res.json()
    }

    const value = {
        orders,
        setOrders,
        order,
        setOrder,
        placeOrder
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