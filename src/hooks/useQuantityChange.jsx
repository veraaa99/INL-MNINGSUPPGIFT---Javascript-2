import { useState } from "react"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

function useQuantityChange () {

    const [quantity, setQuantity] = useState(1)
    const { sum } = useShoppingCartContext()

    const increaseProductQuantity = ( e ) => {
        setQuantity(quantity + 1)
        return quantity
    }

    const decreaseProductQuantity = ( e ) => {
        if(quantity === 1){
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
    sum,
    getSum
  }
  
}

export default useQuantityChange