import { useState } from "react"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

function useQuantityChange () {

    const [quantity, setQuantity] = useState(1)
    const [productQuantity, setProductQuantity] = useState()
    const { sum } = useShoppingCartContext()
    const { setSum } = useShoppingCartContext()

    const { shoppingItems } = useShoppingCartContext()
    const { setShoppingItems } = useShoppingCartContext()
    const { checkProduct } = useShoppingCartContext()
    // const { setProductQuantity } = useShoppingCartContext()

    const increaseProductQuantity = ( e ) => {
        setQuantity(quantity + 1)
        // setProductQuantity(quantity + 1)

        return quantity
    }

    const decreaseProductQuantity = ( e ) => {
        if(quantity === 0){
            return 
        }

        setQuantity(quantity - 1)

        return quantity
    }

    const getSum = () => {
        return sum
    }

   return {
    increaseProductQuantity,
    decreaseProductQuantity,
    quantity,
    setQuantity,
    productQuantity, 
    setProductQuantity,
    sum,
    setSum,
    getSum
  }
  
}

export default useQuantityChange