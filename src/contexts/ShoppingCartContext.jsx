import { createContext, useContext, useEffect, useState } from "react"

export const ShoppingCartContext = createContext()

// Shopping cart context
function ShoppingCartContextProvider( { children }) {

    // States to set and update the items added to the shopping cart,
    // the total quantity of all items, check if the cart is open or not, 
    // and the total sum of all items' prices
    const [shoppingItems, setShoppingItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState()
    const [cartIsOpen, setCartIsOpen] = useState(false)
    let [sum, setSum] = useState(0)

    // Initial states (used for the item quantity buttons in SetQuantityButton and ShoppingCartItem components)
    const initialState = {
        productQuantity: 1
    }
    const initialState2 = {
        productQuantity: 1
    }

    // Add a product and its amount to the shopping cart 
    const addShoppingListItem = ( product, quantity ) => {
        const id= product.product._id
    
        const newItem = {product,
            quantity: quantity}
        
        // Set the new item to the shoppping cart
        setShoppingItems 
        ([...shoppingItems, newItem])

        // Check if the product already exists in the cart
        const item = shoppingItems.find((i) => i.product.product._id === id)

        // If yes, then update the item's quantity
        if(item != undefined) {
            checkProduct(id, quantity)
        }      
    } 

    // Find the item in the shopping cart, and update its total quantity to the sum of the old and new quantity value
    // Set the item and its new quantity to the shoppingItems state
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

    // Calculate the sum of all the item prices in the shopping cart
    // Set the sum to the sum state
    const calculateSum = () => {
        let newSum = shoppingItems.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.quantity * currentValue.product.product.price;
        }, 0);

        setSum(newSum)
        return sum
    }

    // Calculate the total amount of items in the shopping cart
    // Set the quantity to the totalQuantity state
    const calculateQuantity = () => {
        let newQuantity = shoppingItems.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.quantity;
        }, 0);

        setTotalQuantity(newQuantity)
        return totalQuantity
    }

    // Remove an item from the shopping cart
    // Set the new array (containing all items except the removed one) to the shoppingItems state
    const removeShoppingListItem = (id) => {
        const newShoppingItems = shoppingItems.filter((product) => product.product.product._id !== id);
        setShoppingItems(newShoppingItems);
    }

    // Remove all items from the shopping cart
    // Create a new empty array, and set it to the shoppingItems state
    // Set the totalQuantity and sum states to 0
    const removeAllItems = () => {     
        const emptyShoppingCart = []
        setShoppingItems(emptyShoppingCart);
        setTotalQuantity(0)
        setSum(0)
        return sum
    }

    // Values to be passed from the Shopping cart Context
    const value = {
            shoppingItems,
            addShoppingListItem,
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
    
    // Shopping cart context provider to share values with children (=components using the Shopping cart context)
    return (
        <ShoppingCartContext.Provider value={value}>
            { children }
        </ShoppingCartContext.Provider>
    )

}

export default ShoppingCartContextProvider

// Custom hook with useContext-hook, to let children access the context
// If the hook isn't called inside the Shopping Cart Context Provider, throw error
export const useShoppingCartContext = () => {
    const context = useContext(ShoppingCartContext)

    if(!context) throw new Error('useShoppingCartContext must be called inside a ShoppingCartContextProvider')

    return context
}