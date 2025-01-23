import { createContext, useContext, useEffect, useState } from "react"

export const ShoppingCartContext = createContext()

function ShoppingCartContextProvider( { children }) {

    const [shoppingItems, setShoppingItems] = useState([])
    const [shoppingItem, setShoppingItem] = useState({})

    let [totalQuantity, setTotalQuantity] = useState(0)
    let [productQuantity, setProductQuantity] = useState(1) 

    let [newList, setNewList] = useState(shoppingItems)
    let [sum, setSum] = useState(0)

    const addShoppingListItem = ( product, quantity ) => {
        const id= product.product._id
        console.log(id)
        console.log(product)
        console.log(quantity)

        const bla = {product,
            quantity: quantity}
                
        // const item = shoppingItems.find((i) => i._id === id)
        // console.log(item)

        setShoppingItems 
        ([...shoppingItems, bla])
        calculateSum()

        const item = shoppingItems.find((i) => i.product.product._id === id)

        if(item != undefined) {
            checkProduct(id, quantity)
        }


        // let isEmpty = Object.entries(bla).length = 0; //false
        // console.log(isEmpty)

        // if(!isEmpty){
            // const item = bla.find((i) => i.product._id === id)
            // console.log(item)

            // if(item) {
                // setBla2 ({product, quantity: + 1})
                // setBla([...bla, bla2])     

                // let updatedList = bla.map(item => {
                //     if (item.product._id === id) {
                //         return {...item, quantity: 2}
                //     }
                //     return item
                // })

                // setBla(
                //     bla.map((item, i) => {
                //         if(i.quantity === 1){
                //             return {...item, quantity: 42};
                //           }
                //           return item;
                //     }
        //         // ))
        //         // setBla([...bla, bla2]) 
        //         checkProduct(id)
                    
        //         }

        //  } else {
        //         // setBla([...bla, bla2])     
        // }

    } 

        // if(item) {
        //     setTotalQuantity(totalQuantity++)

        //     } else {
        //         setShoppingItems([...shoppingItems, product])     
        // }

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

        
    useEffect(() => {
        console.log(sum);
    }, [sum]);

    const getShoppingList = () => {
        console.log(shoppingItems)
        return shoppingItems
    }

    const calculateSum = () => {
    let newSum = shoppingItems.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.quantity * currentValue.product.product.price;
    }, 0);

    setSum(newSum)
    return sum

    }

        // useEffect(() => {
        //     console.log(bla);
        // }, [bla]);

        // useEffect(() => {
        //     console.log(newList);
        // }, [newList]);

        // useEffect(() => {
        //     console.log(bla2);
        // }, [bla2]);

        useEffect(() => {
            console.log(sum);
        }, [sum]);

    const value = {
            shoppingItem,
            shoppingItems,
            addShoppingListItem,
            productQuantity,
            setProductQuantity,
            // bla,
            // bla2,
            getShoppingList,
            sum,
            setSum,
            calculateSum
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