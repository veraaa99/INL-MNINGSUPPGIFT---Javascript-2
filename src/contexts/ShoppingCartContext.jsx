import { createContext, useContext, useEffect, useState } from "react"

export const ShoppingCartContext = createContext()

function ShoppingCartContextProvider( { children }) {

    const [shoppingItems, setShoppingItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState()
    const [cartIsOpen, setCartIsOpen] = useState(false)
    let [sum, setSum] = useState(0)

    const initialState = {
        productQuantity: 1
    }

    const initialState2 = {
        productQuantity: 1
    }

    const addShoppingListItem = ( product, quantity ) => {
        const id= product.product._id
    
        const newItem = {product,
            quantity: quantity}

        setShoppingItems 
        ([...shoppingItems, newItem])

        const item = shoppingItems.find((i) => i.product.product._id === id)

        if(item != undefined) {
            checkProduct(id, quantity)
        }      
    } 

    const checkProduct = (id, quantity) => {
        setShoppingItems(shoppingItems.map(i => {
            if(i.product.product._id === id) {
                const prevQuantity = i.quantity
                let newQuantity = prevQuantity + quantity

                return {...i, quantity: newQuantity}
            } else {
                return i
            }
        })
    )}

    const getShoppingList = () => {
        return shoppingItems
    }

    const calculateSum = () => {
        let newSum = shoppingItems.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.quantity * currentValue.product.product.price;
        }, 0);

        setSum(newSum)
        return sum
    }

    const calculateQuantity = () => {
        let newQuantity = shoppingItems.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.quantity;
        }, 0);

        setTotalQuantity(newQuantity)
        return totalQuantity
    }

    const removeShoppingListItem = (id) => {
        const newShoppingItems = shoppingItems.filter((product) => product.product.product._id !== id);
        setShoppingItems(newShoppingItems);
    }

    const removeAllItems = () => {     
        const emptyShoppingCart = []
        setShoppingItems(emptyShoppingCart);
        setTotalQuantity(0)
        setSum(0)
        return sum
    }

    const value = {
            shoppingItems,
            addShoppingListItem,
            getShoppingList,
            sum,
            setSum,
            calculateSum,
            removeShoppingListItem,
            removeAllItems,
            initialState,
            initialState2,
            totalQuantity,
            setTotalQuantity,
            calculateQuantity,
            cartIsOpen,
            setCartIsOpen     
        }
    
        return (
            <ShoppingCartContext.Provider value={value}>
                { children }
            </ShoppingCartContext.Provider>
        )

}

export default ShoppingCartContextProvider

export const useShoppingCartContext = () => {
    const context = useContext(ShoppingCartContext)

    if(!context) throw new Error('useShoppingCartContext must be called inside a ShoppingCartContextProvider')

    return context
}