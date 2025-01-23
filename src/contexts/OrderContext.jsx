import { createContext, useContext, useEffect, useState } from "react";

export const OrderContext = createContext()

function OrderContextProvider({ children }) {

    const [order, setOrder] = useState({})
    const [orders, setOrders] = useState([])
    const [shoppingCart, setShoppingCart] = useState([])

    let [totalQuantity, setTotalQuantity] = useState(0)
    let [productQuantity, setProductQuantity] = useState(0)

    const saveOrder = async (values, id) => { 

        const newOrder = {
            products: [
                { 
                productId: id, 
                quantity: 1 
                }
            ]
        }

        console.log(newOrder)
        console.log(values)

        const res = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newOrder)
        }).catch((err) => console.log('error'))

        const data = await res.json()
        console.log(data)

            //  addOrder(data, values)

            //  const item = shoppingCart.find((product) => product.products.productId === newOrder.products.productId)
            //  console.log(item)

            //  if(item) {
            //    item.products.quantity++
            //    console.log('bla')
            //  } else {
            //     setShoppingCart([newOrder])
            //     console.log('bla2')
            //  }
            // //  addOrder(data)

            // //  addOrder(newOrder)
            //   setOrder(data)
            //   setOrders([...orders, data])
            // // console.log(newOrder)
            // // console.log(orders)
               
    }

    // const placeOrder = (product) => {
    //     setOrders(state => {
    //       return[...state, { product }]
    //     })
    // }

    const addOrder = (data, values) => {
        console.log(data)
        console.log(values)
        // const bla = newOrder.products.map(x => x.quantity);

        // console.log(newOrder.products[0].quantity)

        const item = shoppingCart.find((product) => product === values)
        console.log(item)

        if(item) {
        // setQuantity(quantity++)
        // console.log(quantity)
        } else {
        setShoppingCart([...shoppingCart, values])         
        console.log(shoppingCart)
        }

        setOrder(data)
        setOrders([...orders, data])
    }

    useEffect(() => {
        console.log(orders);
    }, [orders]);

    useEffect(() => {
        console.log(order);
    }, [order]);

    useEffect(() => {
        console.log(shoppingCart);
    }, [shoppingCart]);

    // useEffect(() => {
    //     console.log(quantity);
    // }, [quantity]);

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