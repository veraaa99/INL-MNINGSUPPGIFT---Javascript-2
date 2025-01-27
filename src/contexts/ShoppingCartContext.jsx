//TESTA REDUCE/DISPATCH SOM I VIDEON!


import { createContext, useContext, useEffect, useReducer, useState } from "react"
import useQuantityChange from "../hooks/useQuantityChange"

export const ShoppingCartContext = createContext()

function ShoppingCartContextProvider( { children }) {

    const [shoppingItems, setShoppingItems] = useState([])
    const [shoppingItem, setShoppingItem] = useState({})
    const [state3, setState3] = useState()
    const [state2, setState2] = useState()
    const [totalQuantity, setTotalQuantity] = useState()
    const [cartIsOpen, setCartIsOpen] = useState(false)

    // let [totalQuantity, setTotalQuantity] = useState(0)

    const initialState = {
        productQuantity: 1
    }

    const initialState2 = {
        productQuantity: 1
    }

    // let [productQuantity, setProductQuantity] = useState() 
    // const {productQuantity, setProductQuantity} = useQuantityChange()

    let [newList, setNewList] = useState(shoppingItems)
    let [sum, setSum] = useState(0)

    // const [state, dispatch] = useReducer(reducer, initialState);

    // function reducer(state, action) {

    //   if (action.type === 'incremented_quantity') {

    //     // age = age + 1

    //     // product.quantity++

    //     // console.log(product.quantity)
    //     console.log(shoppingItems)

    //     setState2(initialState)
    //     console.log(state2)

    //     return {
    //         totalQuantity: state.totalQuantity + 1
    //     }
    //   } else if (action.type === 'reduced_quantity') {

    //     // item.quantity--
    //     // age = age - 1

    //     setState2(initialState)
    //     console.log(state2)

    //     return {
    //         totalQuantity: state.totalQuantity - 1
    //     }
    //   }
    //   throw Error('Unknown action.');
    // }

    const addShoppingListItem = ( product, quantity ) => {
        const id= product.product._id
    
        const bla = {product,
            quantity: quantity}
                
        // const item = shoppingItems.find((i) => i._id === id)
        // console.log(item)

        setShoppingItems 
        ([...shoppingItems, bla])

        const item = shoppingItems.find((i) => i.product.product._id === id)

        if(item != undefined) {
            checkProduct(id, quantity)
        }       

    } 

    const checkProduct = (id, quantity) => {
        setShoppingItems(shoppingItems.map(i => {
            if(i.product.product._id === id) {
                console.log(i.product.product._id)
                const prevQuantity = i.quantity
                let newQuantity = prevQuantity + quantity

                return {...i, quantity: newQuantity}
            } else {
                return i
            }
        })
    )}

    useEffect(() => {
            console.log(shoppingItems);
        }, [shoppingItems]);

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
        return newQuantity

    }

    const removeShoppingListItem = (id) => {
        const newShoppingItems = shoppingItems.filter((product) => product.product.product._id !== id);
     
        setShoppingItems(newShoppingItems);
    };

    const removeAllItems = () => {     
        const emptyShoppingCart = []
        setShoppingItems(emptyShoppingCart);
        setSum(0)
        return sum
    };

    // const removeShoppingListItem = (e) => {
    //     this.setState({products: this.state.people.filter(function(product) { 
    //         return product !== e.target.value 
    //     })});
    // }


    useEffect(() => {
        console.log(sum);
    }, [sum]);

    const value = {
            shoppingItem,
            shoppingItems,
            addShoppingListItem,
            // productQuantity,
            // setProductQuantity,
            // bla,
            // bla2,
            getShoppingList,
            sum,
            setSum,
            calculateSum,
            removeShoppingListItem,
            removeAllItems,
            // addToCart,
            state3,
            setState3,
            state2,
            setState2,
            initialState,
            initialState2,
            totalQuantity,
            setTotalQuantity,
            calculateQuantity,
            cartIsOpen,
            setCartIsOpen
            // state,
            // dispatch
            
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